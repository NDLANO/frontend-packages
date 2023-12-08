/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { Cross as CrossIcon, Plus as PlusIcon } from '@ndla/icons/action';
import { ModalHeader, ModalBody, ModalCloseButton, Modal, ModalTrigger, ModalContent } from '@ndla/modal';
import FilterCarousel from './FilterCarousel';
import ToggleItem from './ToggleItem';

const StyledHeading = styled.h3`
  ${fonts.sizes('16px', '32px')};
  margin: 0 0 ${spacing.small};
  color: ${colors.text.light};
  font-weight: ${fonts.weight.semibold};
`;

const StyledButtonsWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

const StyledButtonElementWrapper = styled.div`
  margin: 0 ${spacing.xsmall} ${spacing.xsmall} 0;
  break-inside: avoid;
  flex-shrink: 0;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${mq.range({ from: breakpoints.tablet })} {
    column-count: 2;
    column-gap: 20px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    column-count: 3;
    column-gap: 20px;
  }
`;
const StyledListItem = styled.li`
  margin-bottom: 0;
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
  margin-left: 10px;
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
export type FilterButtonsProps = {
  heading?: string;
  items: ItemProps[];
  onFilterToggle: (value: string) => void;
  onRemoveAllFilters: () => void;
  labels: {
    openFilter: string;
  };
};

export const FilterButtons = ({ heading, items, onFilterToggle, onRemoveAllFilters, labels }: FilterButtonsProps) => {
  const { t } = useTranslation();
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

  const hasSelectedFilters = items.some((item) => {
    return item.selected;
  });

  const activeItems = items.filter((item) => item.selected);

  return (
    <>
      {isNarrowScreen && (
        <StyledButtonsWrapper>
          {activeItems.map((item: ItemProps) => (
            <StyledButtonElementWrapper key={item.value}>
              <ButtonV2
                size="normal"
                shape="pill"
                onClick={() => {
                  onFilterToggle(item.value);
                }}
              >
                <StyledButtonContent>{item.label}</StyledButtonContent>
                <StyledButtonContentSelected>
                  <CrossIcon />
                </StyledButtonContentSelected>
              </ButtonV2>
            </StyledButtonElementWrapper>
          ))}
          <Modal aria-label={t('searchPage.searchFilterMessages.resourceTypeFilter.button')}>
            <StyledButtonElementWrapper>
              <ModalTrigger>
                <ButtonV2 colorTheme="light" size="normal" shape="pill">
                  <StyledButtonContent>{labels.openFilter}</StyledButtonContent>
                  <StyledButtonContentSelected>
                    <PlusIcon />
                  </StyledButtonContentSelected>
                </ButtonV2>
              </ModalTrigger>
            </StyledButtonElementWrapper>
            <ModalContent size="full" animation="subtle">
              <ModalHeader>
                <h1>{heading}</h1>
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody modifier="slide-in-left">
                <StyledList>
                  {items.map((item: ItemProps) => (
                    <StyledListItem key={item.value}>
                      <ToggleItem
                        id={item.value}
                        value={item.value}
                        checked={item.selected}
                        label={item.label}
                        component="div"
                        onChange={() => onFilterToggle(item.value)}
                      />
                    </StyledListItem>
                  ))}
                </StyledList>
              </ModalBody>
            </ModalContent>
          </Modal>
        </StyledButtonsWrapper>
      )}
      {!isNarrowScreen && (
        <>
          {heading && <StyledHeading>{heading}</StyledHeading>}
          <FilterCarousel>
            {items.map((item: ItemProps) => (
              <StyledButtonElementWrapper key={item.value}>
                <ButtonV2
                  size="normal"
                  colorTheme={!item.selected ? 'greyLighter' : undefined}
                  shape="pill"
                  onClick={() => onFilterToggle(item.value)}
                >
                  <StyledButtonContent>{item.label}</StyledButtonContent>
                  {item.selected && (
                    <StyledButtonContentSelected>
                      <CrossIcon />
                    </StyledButtonContentSelected>
                  )}
                </ButtonV2>
              </StyledButtonElementWrapper>
            ))}
          </FilterCarousel>
          <StyledRemoveWrapper>
            {hasSelectedFilters && (
              <ButtonV2 variant="link" onClick={onRemoveAllFilters}>
                <ButtonRemoveText>{t(`filterButtons.removeAllFilters`)}</ButtonRemoveText>
              </ButtonV2>
            )}
          </StyledRemoveWrapper>
        </>
      )}
    </>
  );
};

export default FilterButtons;
