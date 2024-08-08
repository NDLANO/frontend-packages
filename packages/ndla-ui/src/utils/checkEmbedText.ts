/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";

const regex = /[.!?"]$/;

export const checkAndAddPunctuation = (inputText: string): string => {
  if (!regex.test(inputText)) {
    return inputText + ".";
  }
  return inputText;
};

// Function to process input and return React elements
export const processHtml = (input: string | JSX.Element | JSX.Element[]) => {
  if (typeof input === "string") {
    return checkAndAddPunctuation(input);
  }

  //In some cases the input can be a simple array
  if (Array.isArray(input)) {
    const fetchEnding = input.pop();

    if (typeof fetchEnding === "string") {
      const checkedEnding = checkAndAddPunctuation(fetchEnding);
      const newEnding = [...input, checkedEnding];

      return newEnding;
    }
    const array = React.Children.map(input, (child) => {
      const checkedArrayEnding = checkAndAddPunctuation(child.props.children[child.props.children.length - 1]);
      child.props.children.pop();
      const newArrayEnding = [...child.props.children, checkedArrayEnding];

      return newArrayEnding;
    });
    return array;
  }

  // Handle JSX elements or an array of elements
  if (React.isValidElement(input) || Array.isArray(input)) {
    const elements = React.Children.map(input, (child) => {
      if (typeof child === "object" && !Array.isArray(child.props.children)) {
        return checkAndAddPunctuation(child.props.children);
      }

      const checkedElementEnding = checkAndAddPunctuation(child.props.children[child.props.children.length - 1]);
      child.props.children.pop();
      const newElementEnding = [...child.props.children, checkedElementEnding];

      return newElementEnding;
    });
    return elements;
  }
};
