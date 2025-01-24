/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor } from "slate";
import type { PluginReturnType, SlateCreatePluginProps, SlatePluginFn } from ".";
import type { ElementType } from "../types";
export const createPlugin: SlatePluginFn = <TType extends ElementType, TOptions = undefined>(
  params: SlateCreatePluginProps<TType, TOptions>,
): PluginReturnType<TOptions> => {
  const pluginFn = (editor: Editor) => {
    const {
      isInline: isInlineProp,
      name,
      shortcuts,
      isVoid: isVoidProp,
      type,
      normalize,
      transform,
      configuration,
    } = params;
    const logger = editor.logger.getLogger(name);
    const { isInline, isVoid } = editor;
    editor.isInline = (element) => {
      if (element.type === type) {
        return !!isInlineProp;
      }
      return isInline(element);
    };
    editor.isVoid = (element) => {
      if (element.type === type) {
        return !!isVoidProp;
      }
      return isVoid(element);
    };
    if (normalize) {
      const { normalizeNode } = editor;
      editor.normalizeNode = (entry, options) => {
        const [node, path] = entry;
        // If `configuration.options` do not exist, the generic will be undefined. This is fine.
        const res = normalize?.(editor, node, path, logger, configuration?.options as TOptions);
        if (res) {
          logger.log("consumed normalizeNode event. Further normalization will happen in a new normalization loop.");
          return;
        }
        return normalizeNode(entry, options);
      };
    }

    let shortcutEntries = shortcuts ? Object.entries(shortcuts) : [];
    if (configuration?.shortcuts) {
      shortcutEntries = shortcutEntries.concat(Object.entries(configuration.shortcuts));
    }

    if (shortcutEntries.length) {
      const { onKeyDown } = editor;
      editor.onKeyDown = (event) => {
        for (const [key, { handler, keyCondition }] of shortcutEntries) {
          const keyConditions = Array.isArray(keyCondition) ? keyCondition : [keyCondition];
          if (keyConditions.some((condition) => condition(event))) {
            if (handler(editor, event, logger, configuration?.options as TOptions)) {
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
    if (transform) {
      ret = transform(editor, logger, configuration?.options as TOptions);
    }

    if (configuration?.transform) {
      ret = configuration.transform(ret, logger, configuration?.options as TOptions);
    }

    return ret;
  };

  // A proxy allows us to expose a `.configure` method on the plugin function without actually attaching it to the returned editor object
  const plugin = new Proxy(pluginFn, {
    get(_, prop) {
      if (prop === "configure") {
        // TODO: Should we merge with existing configuration?
        return (configuration: typeof params.configuration) => createPlugin({ ...params, configuration });
      }
      return undefined; // Only expose `.configure`
    },
    apply(target, thisArg, args) {
      // When called as a function, execute the plugin logic
      return Reflect.apply(target, thisArg, args);
    },
  });

  return plugin as PluginReturnType<TOptions>;
};
