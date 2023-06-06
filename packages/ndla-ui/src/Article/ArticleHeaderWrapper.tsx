/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ComponentType, ReactNode, useEffect, useState } from 'react';
import BEMHelper from 'react-bem-helper';
import { useTranslation } from 'react-i18next';
import { ButtonV2 } from '@ndla/button';
import { isMobile } from 'react-device-detect';

import styled from '@emotion/styled';
import { FooterHeaderIcon } from '@ndla/icons/common';
import CompetenceGoalsDialog from '../CompetenceGoals/CompetenceGoalsDialog';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

const CompetenceBadgeText = styled.span`
  padding: 0 5px;
`;

type Props = {
  competenceGoals?: (inp: {
    Dialog: ComponentType;
    dialogProps: { isOpen: boolean; onClose: () => void; controlled: true };
  }) => ReactNode;
  competenceGoalsLoading?: boolean;
  children: ReactNode;
};

const ArticleHeaderWrapper = ({ children, competenceGoals, competenceGoalsLoading }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  if (!competenceGoals) {
    return <div {...classes('header')}>{children}</div>;
  }

  const dialog = competenceGoals({
    Dialog: CompetenceGoalsDialog,
    dialogProps: {
      isOpen: isOpen,
      onClose: closeDialog,
      controlled: true,
    },
  });
  return (
    <div {...classes('header')}>
      {children}
      <ButtonV2
        aria-busy={competenceGoalsLoading}
        size="xsmall"
        colorTheme="light"
        shape="pill"
        onClick={openDialog}
        disabled={competenceGoalsLoading}
      >
        <FooterHeaderIcon />
        <CompetenceBadgeText>{t('competenceGoals.showCompetenceGoals')}</CompetenceBadgeText>
      </ButtonV2>
      {dialog}
    </div>
  );
};

export default ArticleHeaderWrapper;
