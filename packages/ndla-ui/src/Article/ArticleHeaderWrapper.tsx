/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useEffect } from 'react';
import BEMHelper from 'react-bem-helper';
import { isMobile } from 'react-device-detect';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

type Props = {
  competenceGoals?: ReactNode;
  children: ReactNode;
};

const ArticleHeaderWrapper = ({ children, competenceGoals }: Props) => {
  useEffect(() => {
    if (isMobile) {
      const heroContentList: NodeListOf<HTMLElement> = document.querySelectorAll('.c-article__header');
      if (heroContentList.length === 1) {
        heroContentList[0].scrollIntoView(true);
        window.scrollBy(0, heroContentList[0].offsetTop - 120); // Adjust for header
      }
    }
  }, []);

  return (
    <div {...classes('header')}>
      {children}
      {competenceGoals}
    </div>
  );
};

export default ArticleHeaderWrapper;
