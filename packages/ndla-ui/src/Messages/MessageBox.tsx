/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { InformationOutline, HumanMaleBoard, Forward, WarningOutline } from '@ndla/icons/common';

// @ts-ignore
import { Remarkable } from 'remarkable';
import { CloseButton } from '@ndla/button';
import { css } from '@emotion/react';

const markdown = new Remarkable({ breaks: true });
markdown.inline.ruler.enable(['sub', 'sup']);
markdown.block.ruler.disable(['list', 'table']);

type MessageBoxType = 'ghost' | 'danger';

interface StyledProps {
  type?: MessageBoxType;
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
      border: 1px solid ${colors.brand.neutral7};
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
  padding-right: 0;
`;

const TextWrapper = styled.div`
  & p {
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: ${spacing.small};

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
  children?: string;
  links?: LinkProps[];
  showCloseButton?: boolean;
  onClose?: () => void;
}

const Icon = ({ type }: StyledProps) => {
  if (type === 'ghost') {
    return <HumanMaleBoard />;
  }
  if (type === 'danger') {
    return <WarningOutline />;
  }
  return <InformationOutline />;
};

export const MessageBox = ({ type, children = '', links, showCloseButton, onClose }: Props) => {
  return (
    <MessageBoxWrapper type={type}>
      <InfoWrapper>
        <IconWrapper>
          <Icon type={type} />
        </IconWrapper>
        <div>
          <TextWrapper dangerouslySetInnerHTML={{ __html: markdown.render(children) }} />
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
