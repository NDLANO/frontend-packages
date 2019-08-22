import React from 'react';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import Modal from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { ToggleSearchButton } from '@ndla/ui';
// @ts-ignore
import { Cross } from '@ndla/icons/action';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';

interface Props {
  onClose: VoidFunction;
  children: React.ReactNode;
  hideOnNarrowScreen?: boolean;
  ndlaFilm?: boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
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
  > button {
    width: ${spacing.large};
    height: 48px;
    ${mq.range({ from: breakpoints.tablet })} {
      transform: translate(${spacing.large}, 0);
      width: ${spacing.large};
      height: 56px;
      &:hover,
      &:focus {
        transform: translate(calc(${spacing.large} + 1px), 1px);
      }
    }
    ${mq.range({ from: breakpoints.wide })} {
      transform: translate(${spacing.large}, 0);
      &:hover,
      &:focus {
        transform: translate(calc(${spacing.large} + 1px), 1px);
      }
    }
  }
`;

const MastheadSearchModal: React.FC<Props> = ({
  onClose: onSearchClose,
  children,
  hideOnNarrowScreen,
  ndlaFilm,
  t,
}) => {
  return (
    <Modal
      backgroundColor="grey"
      animation="slide-down"
      animationDuration={200}
      size="full-width"
      onClose={onSearchClose}
      className="c-search-field__overlay-content"
      activateButton={
        <ToggleSearchButton
          hideOnNarrowScreen={hideOnNarrowScreen}
          ndlaFilm={ndlaFilm}>
          {t('masthead.menu.search')}
        </ToggleSearchButton>
      }>
      {(onClose: VoidFunction) => {
        return (
          <>
            <div className="c-search-field__overlay-top" />
            <StyledHeader>
              {children}
              <Button stripped onClick={onClose}>
                <Cross className="c-icon--medium" />
              </Button>
            </StyledHeader>
          </>
        );
      }}
    </Modal>
  );
};

export default injectT(MastheadSearchModal);
