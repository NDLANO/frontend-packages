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
import { InformationOutline, HumanMaleBoard, Forward } from '@ndla/icons/common';
import { WithTranslation, withTranslation } from 'react-i18next';

// @ts-ignore
import { Remarkable } from 'remarkable';
import { CloseButton } from '@ndla/button';
import { css } from '@emotion/core';

type StyledProps = {
  type?: MessageBoxType;
};

// const StyleByType = (type: WrapperProps['boxType']) => {
//   const styles: HTMLAttributes<HTMLElement>['style'] = {
//     color: '#444444',
//     backgroundColor: '#f9f4c8',
//     border: 'none',
//     display: 'flex',
//     padding: '10px',
//     width: 'auto',
//     borderRadius: '5px',
//     position: 'relative',
//     transform: 'auto',
//     left: 'auto',
//   }; // Different CSS properties for different types of message-boxes
//   switch (type) {
//     case 'fullpage':
//       styles.margin = '0 auto';
//       styles.display = 'none';
//       styles.width = '100vw';
//       styles.position = 'relative';
//       styles.left = '50%';
//       styles.padding = '0';
//       styles.transform = 'translateX(-50%)';
//       break;
//     case 'medium':
//       styles.margin = '0px';
//       break;
//     case 'ghost':
//       styles.backgroundColor = 'transparent';
//       styles.border = '1px solid #D1D6DB';
//       styles.color = '#444444';
//       break;
//     case 'masthead':
//       styles.margin = '0 auto';
//       styles.display = 'none';
//       styles.padding = '0';
//       styles.borderRadius = '0';
//       break;
//   }
//   return styles;
// };

const MessageBoxWrapper = styled.div<StyledProps>`
  font-size: 18px;
  line-height: 32px;
  font-family: ${fonts.sans};
  display: flex;
  padding: ${spacing.small};
  background: ${colors.support.yellowLight};
  color: ${colors.brand.greyDark};
  border-radius: 5px;

  ${({ type }) =>
    type === 'ghost' &&
    css`
      background: transparent;
      border: 1px solid ${colors.brand.neutral7};
      color: ${colors.brand.greyDark};
    `}
`;

const InfoWrapper = styled.div<StyledProps>`
  display: flex;
  padding: ${spacing.small};
  padding-right: 0;
  flex-direction: row;
  flex: 1;
  ${mq.range({ until: breakpoints.mobileWide })} {
    font-size: 16px;
  }
`;
const TextWrapper = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    line-height: 24px;
    font-size: 16px;
  }
  & p {
    margin: 0;
  }
`;

const IconWrapper = styled.div<StyledProps>`
  display: flex;
  margin-top: ${spacing.xxsmall};
  padding-right: ${spacing.small};
  align-items: flex-start;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  padding-top: ${spacing.nsmall};
  gap: ${spacing.normal};
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.brand.primary};
  font-family: ${fonts.sans};
  font-size: 16px;
  gap: ${spacing.xxsmall};
  font-weight: ${fonts.weight.semibold};
  ${mq.range({ until: breakpoints.mobileWide })} {
    margin: 0px 15px 1px 5px;
    box-shadow: none;
  }
`;

const StyledClosebutton = styled(CloseButton)`
  padding: 0;
  justify-self: flex-end;
  align-self: flex-start;
`;

type LinkProps = {
  href?: string;
  text?: string;
};

type MessageBoxType = 'ghost' | 'danger';

type Props = {
  type?: MessageBoxType;
  children?: string;
  links?: LinkProps[];
  showCloseButton?: boolean;
  onClose?: () => void;
};

const markdown = new Remarkable({ breaks: true });
markdown.inline.ruler.enable(['sub', 'sup']);
markdown.block.ruler.disable(['list', 'table']);

export const MessageBox = ({ type, children = '', links, showCloseButton, onClose }: Props & WithTranslation) => {
  const Icon = type === 'ghost' ? HumanMaleBoard : InformationOutline;
  return (
    <MessageBoxWrapper type={type}>
      <InfoWrapper type={type}>
        <IconWrapper type={type}>
          <Icon />
        </IconWrapper>
        <div>
          <TextWrapper dangerouslySetInnerHTML={{ __html: markdown.render(children) }} />
          {links && (
            <LinkWrapper>
              {links.map((x) => (
                <Link href={x.href}>
                  {x.text}
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

export default withTranslation()(MessageBox);
