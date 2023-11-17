/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { Arrow, Close, Content, Root, Trigger, Portal } from '@radix-ui/react-popover';
import { Cross } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';

const StyledContent = styled(Content)`
  color: ${colors.white};
  z-index: 99999;
  border: 0;
  background: ${colors.brand.greyDark};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.xsmall} ${spacing.small};
  font-family: ${fonts.sans};
  ${fonts.sizes('16px', '18px')};
  line-height: 1.2;
  font-weight: ${fonts.weight.normal};
  text-align: center;
  white-space: normal;
  max-width: calc(100vw - ${spacing.normal});
`;

const StyledClose = styled(Close)`
  cursor: pointer;
  background: none;
  color: white;
  border: none;
  margin-left: ${spacing.xsmall};
  margin-right: -${spacing.xsmall};
`;

const StyledArrow = styled(Arrow)`
  fill: ${colors.brand.greyDark};
`;

interface Props {
  children?: ReactNode;
  popover: ReactNode;
  className?: string;
}

const LicensePopover = ({ children, popover, className }: Props) => {
  const { t } = useTranslation();

  return (
    <Root>
      <Trigger data-trigger asChild>
        {children}
      </Trigger>
      <Portal>
        <StyledContent arrowPadding={6} className={className} side={'bottom'} align={'center'} sideOffset={5}>
          {popover}
          <StyledClose aria-label={t('close')}>
            <Cross />
          </StyledClose>
          <StyledArrow />
        </StyledContent>
      </Portal>
    </Root>
  );
};

export default LicensePopover;
