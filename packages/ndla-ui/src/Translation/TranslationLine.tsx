/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'translation',
  prefix: 'c-',
});

interface Props {
  isTerm?: boolean;
  children: ReactNode;
  lang?: string;
  langName?: string;
}

const TranslationLine = ({ children, lang, langName, isTerm = false }: Props) => {
  const hasLang = langName && lang;
  const content = (
    <>
      <div {...classes('line-body')} lang={lang}>
        {children}
      </div>
      {hasLang && <div {...classes('line-lang')}>{langName}</div>}
    </>
  );

  if (isTerm) {
    return <dt {...classes('line', hasLang ? 'lang' : '')}>{content}</dt>;
  }

  return <dd {...classes('line', hasLang ? 'lang' : '')}>{content}</dd>;
};

export default TranslationLine;
