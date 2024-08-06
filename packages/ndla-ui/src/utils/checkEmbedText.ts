/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const checkAndAddPunctuation = (inputText: string): string => {
  const regex = /[.!?]$/;
  if (!regex.test(inputText)) {
    return inputText + ".";
  }
  return inputText;
};
