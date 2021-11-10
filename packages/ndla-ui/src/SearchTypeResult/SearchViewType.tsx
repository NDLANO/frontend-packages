/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';

// @ts-ignore
import Button from '@ndla/button';
import { Grid } from '@ndla/icons/common';
import { ListCircle } from '@ndla/icons/editor';
import { animations, breakpoints, colors, mq } from '@ndla/core';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
`;
const ButtonElement = styled(Button)`
  border-radius: 50%;
  padding: 2px;
  width: 100%;
  height: 100%;
  transition: all ${animations.durations.fast} ease-in-out;
  &:hover {
    padding: 0;
  }
`;

type ButtonContentProps = {
  selected?: boolean;
};

const ButtonContent = styled.span<ButtonContentProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.brand.primary};
  ${(props) => props.selected && `background: ${colors.brand.greyLighter};`}
  border-radius: 50%;
  transition: all ${animations.durations.fast} ease-in-out;
  ${ButtonElement}:hover & {
    background: ${colors.brand.greyLighter};
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export type SearchViewTypeProps = {
  viewType: 'grid' | 'list';
  onChangeViewType: (viewType: SearchViewTypeProps['viewType']) => void;
};
const SearchViewType = ({ viewType, onChangeViewType }: SearchViewTypeProps) => {
  const { t } = useTranslation();
  const onClickHandler = (viewTypeClicked: SearchViewTypeProps['viewType']) => {
    if (viewTypeClicked !== viewType) {
      onChangeViewType(viewTypeClicked);
    }
  };
  return (
    <Wrapper>
      <ButtonContainer>
        <ButtonElement
          stripped
          type="button"
          size="normal"
          title={t('searchPage.resultType.gridView')}
          onClick={() => onClickHandler('grid')}>
          <ButtonContent selected={viewType === 'grid'}>
            <Grid aria-hidden title="" />
          </ButtonContent>
        </ButtonElement>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonElement
          stripped
          size="normal"
          title={t('searchPage.resultType.listView')}
          onClick={() => onClickHandler('list')}>
          <ButtonContent selected={viewType === 'list'}>
            <ListCircle aria-hidden title="" />
          </ButtonContent>
        </ButtonElement>
      </ButtonContainer>
    </Wrapper>
  );
};

export default SearchViewType;
