/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */
import IntlMessageFormat from 'intl-messageformat';
import memoizeIntlConstructor from 'intl-format-cache';
import { formatMessage } from '../formatMessage';

const getMessageFormat = memoizeIntlConstructor(IntlMessageFormat);
const locale = 'nb';
const messages = {
  helloworld: 'Hello world',
  'test.me': 'Test me {test}',
  'welcome.to.my.unittest': 'Welcome to my unittest',
};

test('@ndla/i18n/formatMessage message with matching ID', () => {
  expect(formatMessage(locale, messages, getMessageFormat, 'helloworld')).toBe('Hello world');
});
test('@ndla/i18n/formatMessage message without matching ID', () => {
  expect(formatMessage(locale, messages, getMessageFormat, 'does.not.exists')).toBe('does.not.exists');
});
test('@ndla/i18n/formatMessage matching message with value', () => {
  expect(
    formatMessage(locale, messages, getMessageFormat, 'test.me', {
      test: '1337',
    }),
  ).toBe('Test me 1337');
});
