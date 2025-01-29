/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor } from "slate";
import type { PluginConfiguration, PluginConfigurationWithConfiguration, PluginReturnType } from ".";
import type { ElementType } from "../types";
import { mergeOptions } from "./mergeOptions";

export const createPlugin = <TType extends ElementType, TOptions extends object | undefined = undefined>(
  params: PluginConfiguration<TType, TOptions>,
): PluginReturnType<TType, TOptions> => {
  const pluginFn = (editor: Editor) => {
    const { normalize, transform, configuration, override } = params as PluginConfigurationWithConfiguration<
      TType,
      TOptions
    >;
    const name = configuration?.name ?? params.name;
    const isInlineParam = configuration?.isInline ?? params.isInline;
    const isVoidParam = configuration?.isVoid ?? params.isVoid;
    const type = configuration?.type ?? params.type;
    const logger = editor.logger.getLogger(name);
    // If `pluginOptions` do not exist, the `TOPtions` generic will be undefined. This is fine.
    const pluginOptions = mergeOptions(params.options, configuration?.options) as TOptions;
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
        let res = !override?.normalize ? normalize?.(editor, node, path, logger, pluginOptions) : false;

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
      shortcutEntries = override?.shortcuts ? configurationShortcuts : shortcutEntries.concat(configurationShortcuts);
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
    if (transform && !override?.transform) {
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
        // TODO: Should we merge with existing configuration?
        return (configuration: PluginConfigurationWithConfiguration<TType, TOptions>) =>
          createPlugin({ ...params, configuration } as PluginConfiguration<TType, TOptions>);
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
