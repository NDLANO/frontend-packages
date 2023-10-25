/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { Forward } from '@ndla/icons/common';

import { CloseButton } from '@ndla/button';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

type MessageBoxType = 'ghost' | 'danger';

interface StyledProps {
  type?: MessageBoxType;
  icon?: ReactNode;
  noIcon?: boolean;
}

const MessageBoxWrapper = styled.div<StyledProps>`
  display: flex;
  padding: ${spacing.small};
  font-family: ${fonts.sans};
  border-radius: 5px;
  background: ${colors.support.yellowLight};
  color: ${colors.brand.greyDark};

  ${fonts.sizes('18px')};
  ${mq.range({ until: breakpoints.tabletWide })} {
    ${fonts.sizes('16px')};
  }

  ${({ type }) =>
    type === 'ghost' &&
    css`
      background: transparent;
      color: ${colors.brand.greyDark};
    `}

  ${({ type }) =>
    type === 'danger' &&
    css`
      background: ${colors.support.redLightest};
      color: ${colors.text.primary};
    `}
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: ${spacing.small};
`;

const TextWrapper = styled.div`
  & p {
    margin: 0;
  }
`;

const IconWrapper = styled.div<StyledProps>`
  display: flex;
  align-items: flex-start;
  ${({ noIcon }) =>
    !noIcon &&
    css`
      padding-right: ${spacing.small};
    `}
  svg {
    width: 24px;
    height: 24px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.normal};
  padding-top: ${spacing.nsmall};

  svg {
    flex-shrink: 0;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.brand.primary};
  gap: ${spacing.xxsmall};
  font-weight: ${fonts.weight.semibold};
`;

const StyledClosebutton = styled(CloseButton)`
  padding: 0;
`;

interface LinkProps {
  href?: string;
  text?: string;
}

interface Props {
  type?: MessageBoxType;
  children?: ReactNode;
  links?: LinkProps[];
  showCloseButton?: boolean;
  onClose?: () => void;
  icon?: ReactNode;
  noIcon?: boolean;
}

const Icon = ({ type, icon, noIcon }: StyledProps) => {
  if (icon) {
    return icon;
  }
  if (noIcon || (type && noIcon)) {
    return;
  }
};

export const MessageBox = ({ type, children = '', links, showCloseButton, onClose, icon, noIcon }: Props) => {
  return (
    <MessageBoxWrapper type={type}>
      <InfoWrapper>
        <IconWrapper noIcon={noIcon}>
          <Icon type={type} icon={icon} noIcon={noIcon} />
        </IconWrapper>
        <div>
          <TextWrapper>{children}</TextWrapper>
          {links && (
            <LinkWrapper>
              {links.map((x) => (
                <Link href={x.href} key={x.href}>
                  <span>{x.text}</span>
                  <Forward />
                </Link>
              ))}
            </LinkWrapper>
          )}
        </div>
      </InfoWrapper>
      {showCloseButton && <StyledClosebutton onClick={onClose} />}
    </MessageBoxWrapper>
  );
};

export default MessageBox;
