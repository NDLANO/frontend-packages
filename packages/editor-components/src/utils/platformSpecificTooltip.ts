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
 * Converts `mod`-instances with platform-specific key name.
 * `mod+s` => `⌘+s` on Mac, `Ctrl+s` on Windows.
 */
export const platformSpecificTooltip = (shortcut: string) => shortcut.replace("mod", IS_MAC ? "⌘" : "Ctrl");
