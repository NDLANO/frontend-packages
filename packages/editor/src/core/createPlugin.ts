/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { SlatePluginFn } from ".";

export const createPlugin: SlatePluginFn =
  ({ isInline: isInlineProp, name, shortcuts, isVoid: isVoidProp, type, normalize, transform }) =>
  (editor) => {
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
        const res = normalize?.(editor, node, path, logger);
        if (res) {
          return;
        }
        return normalizeNode(entry, options);
      };
    }

    const shortcutEntries = shortcuts ? Object.entries(shortcuts) : [];

    if (shortcutEntries.length) {
      const { onKeyDown } = editor;
      editor.onKeyDown = (event) => {
        for (const [key, { handler, keyCondition }] of shortcutEntries) {
          const keyConditions = Array.isArray(keyCondition) ? keyCondition : [keyCondition];
          if (keyConditions.some((condition) => condition(event))) {
            logger.log(`Shortcut "${key}" triggered.`);
            if (handler(editor, event, logger)) {
              logger.log(`Shortcut "${key}" consumed keyDown event. Ignoring further handlers.`);
              return;
            }
          }
        }
        onKeyDown?.(event);
      };
    }

    return transform?.(editor) ?? editor;
  };
