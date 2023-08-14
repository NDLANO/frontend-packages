/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MouseEventHandler, ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing, colors, fonts, misc } from '@ndla/core';
import { CloseButton } from '@ndla/button';
interface NotionHeaderWrapperProps {
  hasChildren?: boolean;
}
const NotionHeaderWrapper = styled.div<NotionHeaderWrapperProps>`
  margin: ${spacing.normal} ${spacing.normal} ${spacing.small};
  padding-bottom: ${spacing.small};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-bottom: 2px solid ${colors.brand.tertiary};
  h1 {
    margin: 0;
    flex-grow: ${(p) => (p.hasChildren ? 0 : 1)};
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('22px', 1.2)};
    color: ${colors.text.primary};
    small {
      padding-left: ${spacing.small};
      margin-left: ${spacing.xsmall};
      border-left: 1px solid ${colors.brand.greyLight};
      ${fonts.sizes('20px', 1.2)};
      font-weight: ${fonts.weight.normal};
    }
  }
  button {
    padding: 0;
    border: none;
    background: none;
    color: ${colors.brand.primary};
    cursor: pointer;
    &:hover {
      box-shadow: ${misc.textLinkBoxShadow};
    }

    &:focus {
      box-shadow: none;
    }
  }
`;

const notionTitle = (title: string, subTitle?: string) => (
  <h1>
    {title} {subTitle ? <small>{subTitle}</small> : null}
  </h1>
);

interface NotionHeaderProps {
  title: string;
  subTitle?: string;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

type NotionHeaderWithoutExitButtonProps = Omit<NotionHeaderProps, 'onClose'>;

export const NotionHeaderWithoutExitButton = ({ title, subTitle }: NotionHeaderWithoutExitButtonProps) => (
  <NotionHeaderWrapper>{notionTitle(title, subTitle)}</NotionHeaderWrapper>
);

const NotionHeader = ({ title, subTitle, onClose, children }: NotionHeaderProps) => {
  return (
    <NotionHeaderWrapper hasChildren={!!children}>
      {notionTitle(title, subTitle)}
      {children}
      {onClose ? <CloseButton onClick={onClose} /> : <CloseButton data-notion-close />}
    </NotionHeaderWrapper>
  );
};

export { NotionHeader as default };
