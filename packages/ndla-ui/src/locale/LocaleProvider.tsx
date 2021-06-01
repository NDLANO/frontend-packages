/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import IntlProvider, { formatNestedMessages } from '@ndla/i18n';
import { Locale } from '../types';

import messagesNB from './messages-nb';
import messagesNN from './messages-nn';
import messagesEN from './messages-en';

const messages = {
  nb: formatNestedMessages(messagesNB),
  nn: formatNestedMessages(messagesNN),
  en: formatNestedMessages(messagesEN),
};

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

const LocaleProvider = ({ locale, children }: Props) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
);

export default LocaleProvider;
