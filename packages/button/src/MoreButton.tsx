/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import { colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { HorizontalMenu } from '@ndla/icons/contentType';
import Button from './';

const MoreIcon = styled(Button)`
  display: flex;
  justify-content: center;
  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.brand.light};
    border: none;
    box-shadow: none;
  }
  svg {
    fill: ${colors.brand.secondary};
    margin: 0;
  }
`;

export const MoreButton = () => {
  const { t } = useTranslation();
  return (
    <MoreIcon ghostPill aria-label={t('myNdla.more')} size="xsmall">
      <HorizontalMenu />
    </MoreIcon>
  );
};

export default MoreButton;
