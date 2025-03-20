/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor, ElementType } from "slate";
import type { PluginConfiguration, PluginConfigurationConfigurationType, PluginReturnType } from ".";
import { mergeOptions } from "./mergeOptions";

export const createPlugin = <TType extends ElementType, TOptions extends object | undefined = undefined>(
  params: PluginConfiguration<TType, TOptions>,
): PluginReturnType<TType, TOptions> => {
  const pluginFn = (editor: Editor) => {
    const { normalize, transform, configuration } = params as PluginConfiguration<TType, TOptions> & {
      configuration?: PluginConfigurationConfigurationType<TType, TOptions>;
    };
    const name = configuration?.name ?? params.name;
    const isInlineParam = configuration?.isInline ?? params.isInline;
    const isVoidParam = configuration?.isVoid ?? params.isVoid;
    const type = configuration?.type ?? params.type;
    const logger = editor.logger.getLogger(name);
    // If `pluginOptions` does not exist, the `TOptions` generic will be undefined. This is fine.
    const pluginOptions = mergeOptions(params.options, configuration?.options) as TOptions;

    if (!editor.pluginOptions) {
      editor.pluginOptions = new Map();
    }
    if (editor.pluginOptions.has(name)) {
      logger.log(`Encountered a plugin with the same name (${name}). This may lead to unexpected behavior.`);
    }
    editor.pluginOptions.set(name, pluginOptions);

    const { isInline, isVoid } = editor;
    editor.isInline = (element) => {
      if (element.type === type) {
        return !!isInlineParam;
      }
      return isInline(element);
    };
    editor.isVoid = (element) => {
      if (element.type === type) {
        return !!isVoidParam;
      }
      return isVoid(element);
    };

    if (normalize || configuration?.normalize) {
      const { normalizeNode } = editor;
      editor.normalizeNode = (entry, options) => {
        const [node, path] = entry;
        let res = !configuration?.override?.normalize ? normalize?.(editor, node, path, logger, pluginOptions) : false;

        if (!res && configuration?.normalize) {
          res = configuration.normalize(editor, node, path, logger, pluginOptions);
        }
        if (res) {
          logger.log("consumed normalizeNode event. Further normalization will happen in a new normalization loop.");
          return;
        }
        return normalizeNode(entry, options);
      };
    }

    let shortcutEntries = params.shortcuts ? Object.entries(params.shortcuts) : [];
    if (configuration?.shortcuts) {
      const configurationShortcuts = Object.entries(configuration.shortcuts);
      shortcutEntries = configuration?.override?.shortcuts
        ? configurationShortcuts
        : shortcutEntries.concat(configurationShortcuts);
    }

    if (shortcutEntries.length) {
      const { onKeyDown } = editor;
      editor.onKeyDown = (event) => {
        for (const [key, { handler, keyCondition }] of shortcutEntries) {
          const keyConditions = Array.isArray(keyCondition) ? keyCondition : [keyCondition];
          if (keyConditions.some((condition) => condition(event))) {
            if (handler(editor, event, logger, pluginOptions)) {
              logger.log(`Shortcut "${key}" consumed keyDown event. Ignoring further handlers.`);
              return;
            } else {
              logger.log(`Shortcut "${key}" triggered, but did not consume the keyDown event.`);
            }
          }
        }
        onKeyDown?.(event);
      };
    }

    let ret = editor;
    if (transform && !configuration?.override?.transform) {
      ret = transform(editor, logger, pluginOptions);
    }

    if (configuration?.transform) {
      ret = configuration.transform(ret, logger, pluginOptions);
    }

    return ret;
  };

  // A proxy allows us to expose a `.configure` method on the plugin function without actually attaching it to the returned editor object
  const plugin = new Proxy(pluginFn, {
    get(_, prop) {
      if (prop === "configure") {
        return (configuration: PluginConfigurationConfigurationType<TType, TOptions>) => {
          if (configuration.normalizeInitialValue) {
            if (!configuration.override?.normalizeInitialValue && params.normalizeInitialValue) {
              const { normalizeInitialValue } = params;
              params.normalizeInitialValue = (editor) => {
                normalizeInitialValue(editor);
                configuration.normalizeInitialValue?.(editor);
              };
            } else {
              params.normalizeInitialValue = configuration.normalizeInitialValue;
            }
          }
          return createPlugin({ ...params, configuration } as PluginConfiguration<TType, TOptions>);
        };
      } else if (prop === "normalizeInitialValue") {
        return params.normalizeInitialValue;
      }
      return undefined; // Only expose `.configure`
    },
    apply(target, thisArg, args) {
      // When called as a function, execute the plugin logic
      return Reflect.apply(target, thisArg, args);
    },
  });

  return plugin as PluginReturnType<TType, TOptions>;
};
