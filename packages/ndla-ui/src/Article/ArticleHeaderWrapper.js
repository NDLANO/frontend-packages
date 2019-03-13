/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { css } from '@emotion/core';
import { Trans } from '@ndla/i18n';
import Button from '@ndla/button';
import { isMobile } from 'react-device-detect';
import { mq, breakpoints } from '@ndla/core';

import CompetenceGoalsDialog from '../CompetenceGoals/CompetenceGoalsDialog';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

export const OpenButton = ({ children, modifier, onClick }) => (
  <Button
    lighter
    onClick={onClick}
    css={
      modifier === 'wide'
        ? css`
            position: absolute;
            z-index: 9;
            right: 0;
            top: 0;
            display: none;
            ${mq.range({ from: breakpoints.desktop })} {
              display: block;
            }
          `
        : css`
            ${mq.range({ from: breakpoints.desktop })} {
              display: none;
            }
          `
    }>
    {children}
  </Button>
);

OpenButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  modifier: PropTypes.string,
};

class ArticleHeaderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.closeDialog = this.closeDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);
  }

  componentDidMount() {
    if (isMobile) {
      const heroContentList = document.querySelectorAll('.c-article__header');
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
    const { children, competenceGoals } = this.props;
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
        <CompetenceGoalsDialog
          onClose={this.closeDialog}
          isOpen={this.state.isOpen}>
          {competenceGoals}
        </CompetenceGoalsDialog>
      );
    return (
      <Trans>
        {({ t }) => (
          <div {...classes('header')}>
            <OpenButton onClick={this.openDialog} modifier="wide">
              {t('competenceGoals.showCompetenceGoals')}
            </OpenButton>
            {children}
            <OpenButton onClick={this.openDialog} modifier="narrow">
              {t('competenceGoals.showCompetenceGoals')}
            </OpenButton>
            {dialog}
          </div>
        )}
      </Trans>
    );
  }
}

ArticleHeaderWrapper.propTypes = {
  competenceGoals: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.node.isRequired,
};

export default ArticleHeaderWrapper;
