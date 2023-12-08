/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownIndicatorProps, components } from 'react-select';
import styled from '@emotion/styled';
import { iconButtonStyle } from '@ndla/button';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import { TagType } from './types';

const StyledIconWrapper = styled.span`
  svg {
    pointer-events: none;
  }
`;

const DropdownIndicator = ({ selectProps, children, ...props }: DropdownIndicatorProps<TagType, true>) => {
  const { t } = useTranslation();

  const { menuIsOpen } = selectProps;
  const Icon = menuIsOpen ? ChevronUp : ChevronDown;

  const css = useMemo(
    () => iconButtonStyle({ colorTheme: 'greyLighter', variant: 'ghost', shape: 'pill', size: 'small' }),
    [],
  );

  return (
    <components.DropdownIndicator
      css={css}
      {...props}
      selectProps={selectProps}
      aria-label={menuIsOpen ? t('tagSelector.hideTags') : t('tagSelector.showTags')}
    >
      <StyledIconWrapper aria-hidden>
        <Icon />
      </StyledIconWrapper>
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
