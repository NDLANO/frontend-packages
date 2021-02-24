/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';
import { colors, fonts, spacing } from '@ndla/core';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import { Cross as CrossIcon, Plus as PlusIcon } from '@ndla/icons/action';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';

const StyledHeading = styled.h3`
  ${fonts.sizes('16px', '32px')};
  margin: 0 0 ${spacing.small};
  color: ${colors.text.light};
  font-weight: ${fonts.weight.semibold};
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledModalButtonWrapper = styled.div`
  margin-bottom: ${spacing.xsmall};
`;
const StyledButtonElementWrapper = styled.div`
  margin: 0 ${spacing.xsmall} ${spacing.xsmall} 0;
  break-inside: avoid;
`;

const StyledButtonContent = styled.span``;

const StyledButtonContentSelected = styled.span`
  margin-left: ${spacing.small};
  display: inline-flex;
  align-items: center;
`;

const StyledRemoveWrapper = styled.div`
  margin-top: ${spacing.xsmall};
`;

const ButtonRemoveText = styled.span`
  ${fonts.sizes('16px', '32px')};
  font-weight: ${fonts.weight.semibold};
`;

export type ItemProps = {
  label: string;
  value: string;
  selected?: boolean;
};
type Props = {
  heading: string;
  items: ItemProps[];
  onFilterToggle: (value: string) => void;
  onRemoveAllFilters: () => void;
  labels: {
    openFilter: string;
  };
};

export const FilterButtons = ({
  heading,
  items,
  onFilterToggle,
  onRemoveAllFilters,
  labels,
  t,
}: Props & tType) => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const isNarrowScreenMatch = window.matchMedia('(max-width: 767px)');
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsNarrowScreen(e.matches);
    };
    isNarrowScreenMatch.addEventListener('change', handleChange);
    handleChange(isNarrowScreenMatch);
    return () => {
      isNarrowScreenMatch.removeEventListener('change', handleChange);
    };
  }, []);

  const hasSelectedFilters = items.some(item => {
    return item.selected;
  });

  const activeItems = items.filter(item => item.selected);

  return (
    <>
      {isNarrowScreen && (
        <>
          {activeItems.length > 0 && (
            <StyledButtonsWrapper>
              {activeItems.map((item: ItemProps) => (
                <StyledButtonElementWrapper key={item.value}>
                  <Button
                    type="button"
                    size="normal"
                    borderShape="rounded"
                    onClick={() => {
                      onFilterToggle(item.value);
                    }}>
                    <StyledButtonContent>{item.label}</StyledButtonContent>
                    <StyledButtonContentSelected>
                      <CrossIcon />
                    </StyledButtonContentSelected>
                  </Button>
                </StyledButtonElementWrapper>
              ))}
            </StyledButtonsWrapper>
          )}
          <Modal
            size="fullscreen"
            animation="slide-up"
            backgroundColor="white"
            activateButton={
              <Button
                type="button"
                size="normal"
                lighterGrey
                borderShape="rounded">
                <StyledButtonContent>{labels.openFilter}</StyledButtonContent>
                <StyledButtonContentSelected>
                  <PlusIcon />
                </StyledButtonContentSelected>
              </Button>
            }>
            {(onClose: void) => (
              <>
                <ModalHeader modifier={['left-align']}>
                  <h1>{heading}</h1>
                  <ModalCloseButton
                    title={t('modal.closeModal')}
                    onClick={onClose}
                  />
                </ModalHeader>
                <ModalBody>
                  {items.map((item: ItemProps) => (
                    <StyledModalButtonWrapper key={item.value}>
                      <Button
                        type="button"
                        size="normal"
                        lighterGrey={!item.selected}
                        borderShape="rounded"
                        width="full"
                        onClick={() => {
                          onFilterToggle(item.value);
                        }}>
                        <StyledButtonContent>{item.label}</StyledButtonContent>
                        {item.selected && (
                          <StyledButtonContentSelected>
                            <CrossIcon />
                          </StyledButtonContentSelected>
                        )}
                      </Button>
                    </StyledModalButtonWrapper>
                  ))}
                </ModalBody>
              </>
            )}
          </Modal>
        </>
      )}
      {!isNarrowScreen && (
        <>
          <StyledHeading>{heading}</StyledHeading>
          <StyledButtonsWrapper>
            {items.map((item: ItemProps) => (
              <StyledButtonElementWrapper key={item.value}>
                <Button
                  type="button"
                  size="normal"
                  lighterGrey={!item.selected}
                  borderShape="rounded"
                  onClick={() => {
                    onFilterToggle(item.value);
                  }}>
                  <StyledButtonContent>{item.label}</StyledButtonContent>
                  {item.selected && (
                    <StyledButtonContentSelected>
                      <CrossIcon />
                    </StyledButtonContentSelected>
                  )}
                </Button>
              </StyledButtonElementWrapper>
            ))}
          </StyledButtonsWrapper>
          <StyledRemoveWrapper>
            {hasSelectedFilters && (
              <Button onClick={onRemoveAllFilters} link>
                <ButtonRemoveText>
                  {t(`filterButtons.removeAllFilters`)}
                </ButtonRemoveText>
              </Button>
            )}
          </StyledRemoveWrapper>
        </>
      )}
    </>
  );
};

export default injectT(FilterButtons);
