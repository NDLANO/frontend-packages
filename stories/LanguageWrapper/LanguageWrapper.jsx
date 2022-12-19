/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18nInstance } from '@ndla/ui';

const LanguageWrapper = (storyFn) => <I18nextProvider i18n={i18nInstance}>{storyFn()}</I18nextProvider>;

export default LanguageWrapper;
