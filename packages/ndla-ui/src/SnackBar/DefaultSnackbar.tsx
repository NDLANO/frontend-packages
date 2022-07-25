/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { IconButton } from '@ndla/button';
import { breakpoints, colors, fonts, misc, mq, shadows, spacing } from '@ndla/core';
import { Cross } from '@ndla/icons/action';
import { Snack, useSnack } from './SnackbarProvider';

const DefaultSnackContainer = styled.div`
  display: flex;
  gap: ${spacing.small};
  padding: ${spacing.small};
  background-color: ${colors.text.primary};
  color: ${colors.white};
  border-radius: ${misc.borderRadius};
  justify-content: center;
  box-shadow: ${shadows.levitate1};
  font-family: ${fonts.sans};
  font-size: 18px;
`;

const StyledCloseButton = styled(IconButton)`
  svg {
    color: ${colors.brand.greyMedium};
  }
  &:hover,
  &:focus {
    background: ${colors.brand.greyDark};
    svg {
      color: ${colors.brand.greyLightest};
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mq.range({ from: breakpoints.tablet })} {
    gap: ${spacing.xxsmall};
  }
`;

const DefaultSnack = (snack: Snack) => {
  const { closable = true, icon } = snack;
  const { t } = useTranslation();
  const { closeSnack } = useSnack();
  return (
    <DefaultSnackContainer>
      {icon}
      {snack.content}
      <ButtonWrapper>
        {closable && (
          <StyledCloseButton size="xsmall" outline onClick={() => closeSnack(snack)} aria-label={t('snackbar.close')}>
            <Cross />
          </StyledCloseButton>
        )}
      </ButtonWrapper>
    </DefaultSnackContainer>
  );
};

export default DefaultSnack;
