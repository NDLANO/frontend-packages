/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import IntlProvider from './IntlProvider';

export { default as injectT } from './injectT';
// @ts-ignore
export { default as tType } from './t';
export { default as formatMessage } from './formatMessage';
export { default as Trans } from './Trans';
export { formatNestedMessages } from './formatNestedMessages';
export { useTranslation } from './i18n';
export { withTranslation } from './i18n';
export { i18n } from './i18n';
export { I18nextProvider } from './i18n';
export { IntlProvider };
export default IntlProvider;
