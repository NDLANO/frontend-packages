/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactElement, useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Button, { IconButton } from '@ndla/button';
import { spacing, spacingUnit, shadows, misc, fonts, colors, mq, breakpoints } from '@ndla/core';
import { Cross } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';

const StyledActionButton = styled(Button)`
  color: ${colors.white};
  padding: ${spacing.xsmall} ${spacing.small};
  box-shadow: none;
  &:focus,
  &:hover {
    color: ${colors.brand.greyLightest};
    background: ${colors.brand.greyDark};
    &:after {
      opacity: 0;
    }
  }
  &:after {
    content: '';
    display: flex;
    height: 1px;
    width: 100%;
    background: ${colors.white};
    transform: translateY(-2px);
  }
`;

const StyledIconButton = styled(IconButton)`
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

const WrapperForButtons = styled.div`
  display: flex;
  ${mq.range({ from: breakpoints.tablet })} {
    gap: ${spacing.xxsmall};
  }
`;

interface StyledProps {
  expired?: boolean;
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
  bottom: ${spacing.small};
  left: ${spacing.small};
  right: ${spacing.small};
  display: flex;
  justify-content: center;
`;

const StyledNotification = styled.div<StyledProps>`
  max-width: 960px;
  ${fonts.sizes(18, 1.25)};
  background: ${colors.text.primary};
  color: ${colors.white};
  box-shadow: ${shadows.levitate1};
  padding: ${spacing.small};
  padding-right: ${spacing.xsmall};
  gap: ${spacing.medium};
  ${mq.range({ from: breakpoints.tablet })} {
    gap: ${spacing.large};
    padding: ${spacing.small} ${spacing.normal} ${spacing.small} ${spacing.medium};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    gap: ${spacingUnit * 3};
  }
  display: flex;
  align-items: center;
  > div:first-of-type {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:empty {
    display: none;
  }
  border-radius: ${misc.borderRadius};
  @keyframes snackbar-animations-in {
    0% {
      opacity: 0;
      transform: translateY(${spacing.medium});
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes snackbar-animations-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(${spacing.medium});
    }
  }
  animation: ${(props) => (props.expired ? 'snackbar-animations-out' : 'snackbar-animations-in')} 200ms ease-in-out;
  animation-fill-mode: forwards;
  ${fonts.sizes('18px')};
  font-family: ${fonts.sans};
`;

export interface SnackBarItem {
  children?: ReactElement;
  snackbarItemId?: string;
}

interface SnackBarProps extends SnackBarItem {
  id: string;
  onKill?: (id: string | undefined) => void;
  actionButtons?: {
    text: string;
    onClick: () => void;
    ariaLabel: string;
  }[];
}

const SnackBar = ({ onKill, children, snackbarItemId, id, actionButtons }: SnackBarProps) => {
  const { t } = useTranslation();
  const [expired, setExpired] = useState(false);
  const timeoutId = useRef<null | ReturnType<typeof setTimeout>>();
  useEffect(() => {
    if (timeoutId.current) {
      timeoutId && clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setExpired(true);
    }, 8000);

    return () => {
      timeoutId.current && clearTimeout(timeoutId.current);
    };
  }, [snackbarItemId, timeoutId]);
  return (
    <Wrapper>
      <StyledNotification
        id={id}
        aria-live="polite"
        expired={expired || !children}
        onAnimationEnd={() => expired && onKill && onKill(snackbarItemId)}>
        {children && (
          <>
            <div>{children}</div>
            <WrapperForButtons>
              {actionButtons &&
                actionButtons.map(({ onClick, text, ariaLabel }) => (
                  <StyledActionButton key={text} link aria-label={ariaLabel} onClick={onClick}>
                    {text}
                  </StyledActionButton>
                ))}
              <StyledIconButton aria-label={t('snackbar.close')} size="xsmall" outline onClick={() => setExpired(true)}>
                <Cross />
              </StyledIconButton>
            </WrapperForButtons>
          </>
        )}
      </StyledNotification>
    </Wrapper>
  );
};

export default SnackBar;
