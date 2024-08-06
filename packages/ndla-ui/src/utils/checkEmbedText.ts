/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const regex = /[.!?]$/;

export const checkAndAddPunctuation = (inputText: string): string => {
  if (!regex.test(inputText)) {
    return inputText + ".";
  }
  return inputText;
};

export const extractString = (input: any): string => {
  if (typeof input === "string") return input;

  if (input?.props?.children) {
    const children = input.props.children;
    if (Array.isArray(children)) {
      return children.map(extractString).join("");
    }
    return extractString(children);
  }
  return "";
};
