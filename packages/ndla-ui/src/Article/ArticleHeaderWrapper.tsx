/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useEffect } from 'react';
import BEMHelper from 'react-bem-helper';
import { useTranslation } from 'react-i18next';
import { ButtonV2 } from '@ndla/button';
import { isMobile } from 'react-device-detect';

import styled from '@emotion/styled';
import { FooterHeaderIcon } from '@ndla/icons/common';
import { Modal } from '@ndla/modal';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

const CompetenceBadgeText = styled.span`
  padding: 0 5px;
`;

type Props = {
  competenceGoals?: (close: () => void) => ReactNode;
  competenceGoalsLoading?: boolean;
  children: ReactNode;
};

const ArticleHeaderWrapper = ({ children, competenceGoals, competenceGoalsLoading }: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isMobile) {
      const heroContentList: NodeListOf<HTMLElement> = document.querySelectorAll('.c-article__header');
      if (heroContentList.length === 1) {
        heroContentList[0].scrollIntoView(true);
        window.scrollBy(0, heroContentList[0].offsetTop - 120); // Adjust for header
      }
    }
  }, []);

  if (!competenceGoals) {
    return <div {...classes('header')}>{children}</div>;
  }

  return (
    <div {...classes('header')}>
      {children}
      <Modal
        activateButton={
          <ButtonV2
            aria-busy={competenceGoalsLoading}
            size="xsmall"
            colorTheme="light"
            shape="pill"
            disabled={competenceGoalsLoading}
          >
            <FooterHeaderIcon />
            <CompetenceBadgeText>{t('competenceGoals.showCompetenceGoals')}</CompetenceBadgeText>
          </ButtonV2>
        }
      >
        {(close) => competenceGoals(close)}
      </Modal>
    </div>
  );
};

export default ArticleHeaderWrapper;
