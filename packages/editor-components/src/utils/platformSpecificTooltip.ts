/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Fetched from https://github.com/ianstormtaylor/is-hotkey/blob/master/src/index.js
export const IS_MAC = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

/**
 * Converts `mod` and `alt`-instances with platform-specific key names.
 * `mod+s` => `⌘+s` on Mac, `Ctrl+s` on Windows.
 * `alt+f` => `⌥+f` on Mac, `Alt+f` on Windows.
 */
export const platformSpecificTooltip = (shortcut: string) => {
  let result = shortcut;
  if (result.includes("mod")) {
    result = result.replace("mod", IS_MAC ? "⌘" : "Ctrl");
  }
  if (result.includes("alt")) {
    result = result.replace("alt", IS_MAC ? "⌥" : "Alt");
  }
  return result;
};
