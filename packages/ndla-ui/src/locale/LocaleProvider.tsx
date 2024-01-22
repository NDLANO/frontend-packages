/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18nInstance } from "../i18n";
import { Locale } from "../types";

type Props = {
  locale: Locale;
  children: ReactNode;
};

const InitI18nWrapper = ({ locale, children }: Props) => {
  const { i18n } = useTranslation();
  i18n.language = locale;
  return <>{children}</>;
};

const LocaleProvider = ({ locale, children }: Props) => (
  <I18nextProvider i18n={i18nInstance}>
    <InitI18nWrapper locale={locale}>{children}</InitI18nWrapper>
  </I18nextProvider>
);

export default LocaleProvider;
