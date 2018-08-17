/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const formatNestedMessages = (
  phrases,
  formattedMessages = {},
  prefix = '',
) => {
  const messages = formattedMessages;

  // eslint-disable-next-line
  Object.keys(phrases).forEach(key => {
    const value = phrases[key];
    if ({}.hasOwnProperty.call(phrases, key)) {
      const keyWithPrefix = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object') {
        formatNestedMessages(value, formattedMessages, keyWithPrefix);
      } else {
        messages[keyWithPrefix] = value;
      }
    }
  });

  return messages;
};
