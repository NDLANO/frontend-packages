/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, ComponentType, ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import { withTranslation, WithTranslation } from 'react-i18next';
import Button from '@ndla/button';
import { isMobile } from 'react-device-detect';
import { fonts, colors } from '@ndla/core';

import styled from '@emotion/styled';
import { FooterHeaderIcon } from '@ndla/icons/common';
// @ts-ignore
import CompetenceGoalsDialog from '../CompetenceGoals/CompetenceGoalsDialog';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

type OpenButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const OpenButton = ({ children, onClick }: OpenButtonProps) => (
  <Button size="xsmall" lighter borderShape="rounded" onClick={onClick}>
    {children}
  </Button>
);

const CompetenceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CompetenceBadge = styled.span`
  display: inline-block;
  background: ${colors.brand.greyLighter};
  border-radius: 36px;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('12px', '15px')};
  display: inline-flex;
  align-items: center;
  color: ${colors.text.primary};
  font-family: ${fonts.sans};
  padding: 0 6px;
  height: 25px;
  margin-right: 7px;
`;

const CompetenceBadgeText = styled.span`
  padding: 0 5px;
`;

type CompetenceButtonWrapperProps = {
  addSpace: boolean | undefined;
};

const CompetenceButtonWrapper = styled.div<CompetenceButtonWrapperProps>`
  display: flex;
  align-items: center;
  ${(props) => props.addSpace && `padding-left: 12px;`}
`;

type Props = {
  competenceGoals?:
    | ((inp: { Dialog: ComponentType; dialogProps: { isOpen: boolean; onClose: () => void } }) => ReactNode)
    | null;
  competenceGoalTypes?: string[];
  children: ReactNode;
};

interface State {
  isOpen: boolean;
}

class ArticleHeaderWrapper extends Component<Props & WithTranslation, State> {
  constructor(props: Props & WithTranslation) {
    super(props);
    this.state = { isOpen: false };
    this.closeDialog = this.closeDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);
  }

  componentDidMount() {
    if (isMobile) {
      const heroContentList: NodeListOf<HTMLElement> = document.querySelectorAll('.c-article__header');
      if (heroContentList.length === 1) {
        heroContentList[0].scrollIntoView(true);
        window.scrollBy(0, heroContentList[0].offsetTop - 120); // Adjust for header
      }
    }
  }

  openDialog() {
    this.setState({ isOpen: true });
  }

  closeDialog() {
    this.setState({ isOpen: false });
  }

  render() {
    const { children, competenceGoals, competenceGoalTypes, t } = this.props;
    if (!competenceGoals) {
      return <div {...classes('header')}>{children}</div>;
    }

    const dialog =
      typeof competenceGoals === 'function' ? (
        competenceGoals({
          Dialog: CompetenceGoalsDialog,
          dialogProps: {
            isOpen: this.state.isOpen,
            onClose: this.closeDialog,
          },
        })
      ) : (
        <CompetenceGoalsDialog onClose={this.closeDialog} isOpen={this.state.isOpen}>
          {competenceGoals}
        </CompetenceGoalsDialog>
      );
    return (
      <div {...classes('header')}>
        {children}
        <CompetenceWrapper>
          {competenceGoalTypes &&
            competenceGoalTypes.map((type) => (
              <CompetenceBadge key={type}>
                <FooterHeaderIcon />
                <CompetenceBadgeText>{type}</CompetenceBadgeText>
              </CompetenceBadge>
            ))}
          <CompetenceButtonWrapper addSpace={competenceGoalTypes && competenceGoalTypes.length > 0}>
            <OpenButton onClick={this.openDialog}>
              <FooterHeaderIcon />
              <CompetenceBadgeText>{t('competenceGoals.showCompetenceGoals')}</CompetenceBadgeText>
            </OpenButton>
          </CompetenceButtonWrapper>
        </CompetenceWrapper>
        {dialog}
      </div>
    );
  }
}

export default withTranslation()(ArticleHeaderWrapper);
