/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

interface Phrases {
  [key: string]: string | Phrases;
}

interface FormattedMessages {
  [key: string]: string;
}

export const formatNestedMessages = (
  phrases: Phrases,
  formattedMessages: FormattedMessages = {},
  prefix: string = "",
) => {
  const messages = formattedMessages;

  Object.keys(phrases).forEach((key) => {
    const value = phrases[key];
    if ({}.hasOwnProperty.call(phrases, key)) {
      const keyWithPrefix = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "object") {
        formatNestedMessages(value, formattedMessages, keyWithPrefix);
      } else {
        messages[keyWithPrefix] = value;
      }
    }
  });

  return messages;
};
