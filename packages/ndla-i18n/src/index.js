/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import IntlProvider from './IntlProvider';
import injectT from './injectT';
import formatMessage from './formatMessage';
import phrasesEn from './phrases/phrases-en';
import phrasesNb from './phrases/phrases-nb';
import phrasesNn from './phrases/phrases-nn';

const phrases = {
  en: phrasesEn,
  nb: phrasesNb,
  nn: phrasesNn,
};

export {
  IntlProvider,
  injectT,
  formatMessage,
  phrases,
  phrasesEn,
  phrasesNb,
  phrasesNn,
};

export default IntlProvider;
