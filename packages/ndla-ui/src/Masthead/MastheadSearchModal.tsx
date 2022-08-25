import React, { ReactChild, ReactChildren, ReactNode } from 'react';
import Modal from '@ndla/modal';
import Button, { IconButton } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { isFunction } from '@ndla/util';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, mq, breakpoints, colors, shadows } from '@ndla/core';
import { WithTranslation, withTranslation } from 'react-i18next';
import ToggleSearchButton from '../Search/ToggleSearchButton';

interface Props {
  onClose: VoidFunction;
  children: (arg: Function) => ReactChild | ReactChildren | ReactNode;
  hideOnNarrowScreen?: boolean;
  ndlaFilm?: boolean;
}

const StyledHeader = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    width: 1024px;
    max-width: calc(100vw - 100px);
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 1024px;
    max-width: calc(100vw - 156px);
  }
  padding: 0;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  padding-top: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding-top: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding-top: calc(${spacing.normal} + ${spacing.small});
  }
  > input {
    width: 100%;
    margin-right: -${spacing.large};
    ${mq.range({ until: breakpoints.tablet })} {
      .c-search-field__button--close {
        right: ${spacing.large} + ${spacing.normal};
        top: 16px;
      }
      .c-search-field__button--searchIcon {
        right: ${spacing.large};
        top: ${spacing.small};
      }
    }
  }
`;

const modalStyles = css`
  & > [data-reach-dialog-content] {
    position: fixed;
    background: none;
    top: 0;
    right: 0;
    left: 0;
    height: 74px;
    ${mq.range({ from: breakpoints.tablet })} {
      height: 110px;
    }
    ${mq.range({ from: breakpoints.desktop })} {
      height: 136px;
    }
    overflow-y: visible;
    box-shadow: none;
  }
`;

const extraBackdrop = css`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  height: 74px;
  background: ${colors.brand.greyLighter};
  ${mq.range({ from: breakpoints.tablet })} {
    height: 110px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    height: 136px;
  }
  box-shadow: ${shadows.searchHeader};
`;

const MastheadSearchModal = ({
  onClose: onSearchClose,
  children,
  hideOnNarrowScreen,
  ndlaFilm,
  t,
}: Props & WithTranslation) => (
  <Modal
    label={t('searchPage.searchFieldPlaceholder')}
    backgroundColor="grey"
    animation="slide-down"
    animationDuration={200}
    size="full-width"
    onClose={onSearchClose}
    css={modalStyles}
    activateButton={
      <ToggleSearchButton hideOnNarrowScreen={hideOnNarrowScreen} ndlaFilm={ndlaFilm}>
        {t('masthead.menu.search')}
      </ToggleSearchButton>
    }>
    {(closeModal: VoidFunction) => (
      <>
        <div css={extraBackdrop} />
        <StyledHeader>
          {isFunction(children) ? children(closeModal) : children}
          <IconButton size="small" variant="ghost" colorTheme="light" onClick={closeModal}>
            <Cross />
          </IconButton>
        </StyledHeader>
      </>
    )}
  </Modal>
);

export default withTranslation()(MastheadSearchModal);
