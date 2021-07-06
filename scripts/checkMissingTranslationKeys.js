/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Sjekker oversettelsesfiler etter nøkler som mangler i noen av filene.
 */

const { TranslationChecker, TranslationFile } = require('translation-file-validator');
const { messagesNB, messagesEN, messagesNN } = require('@ndla/ui');
//const messagesNB = require.main.require('../packages/ndla-ui/src/locale/messages-nb.ts');
//const messagesNN = require.main.require('../packages/ndla-ui/src/locale/messages-nn.ts');
//const messagesEN = require.main.require('../packages/ndla-ui/src/locale/messages-en.ts');

const languages = [
  new TranslationFile('Norsk bokmål', messagesNB),
  new TranslationFile('Norsk nynorsk', messagesNN),
  new TranslationFile('English', messagesEN),
];

function checkMissingTranslation() {
  const checker = new TranslationChecker(languages);

  checker.check();
}

checkMissingTranslation();
