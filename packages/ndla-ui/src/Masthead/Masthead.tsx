/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { ReactNode } from 'react';
import { MessageBanner } from '../Messages';
import SkipToMainContent from './SkipToMainContent';

interface MastheadItemProps {
  children?: ReactNode;
  right?: boolean;
  left?: boolean;
}

const LeftMastheadItem = styled.div`
  display: flex;
  align-items: center;
  button {
    white-space: nowrap;
  }
  > div:last-child {
    flex-grow: 1;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    flex-grow: 1;
    text-align: left;
  }
`;

const RightMastheadItem = styled.div`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
  justify-content: flex-end;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.small} 0;
    padding: 0;
  }
`;

export const MastheadItem = ({ children, left = false, right = false }: MastheadItemProps) => {
  const Wrapper = left ? LeftMastheadItem : right ? RightMastheadItem : 'div';
  return <Wrapper>{children}</Wrapper>;
};

const MastheadContent = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${spacing.small};
  font-weight: ${fonts.weight.normal};
  display: flex;
  height: 84px;
  justify-content: space-between;
`;

interface StyledMastheadProps {
  fixed: boolean;
  ndlaFilm: boolean;
}

const StyledMasthead = styled.div<StyledMastheadProps>`
  z-index: 99;
  position: relative;
  background: white;
  border-bottom: 1px solid ${colors.brand.greyLighter};
  min-height: 84px;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  ${(p) =>
    p.fixed &&
    css`
      top: 0;
      position: sticky;
      @media print {
        position: relative;
      }
    `};
  ${(p) =>
    p.ndlaFilm &&
    css`
      background: ${colors.ndlaFilm.filmColorLight};
      background-image: linear-gradient(0deg, ${colors.ndlaFilm.filmColorLight}, ${colors.ndlaFilm.filmColor});
      border: 0;
      border-bottom: 1px solid #18334c;
    `};
`;

interface Alert {
  content: string;
  closable?: boolean;
  number: number;
}

interface Props {
  children?: ReactNode;
  fixed?: boolean;
  ndlaFilm?: boolean;
  skipToMainContentId?: string;
  messages?: Alert[];
  onCloseAlert?: (id: number) => void;
}

export const Masthead = ({ children, fixed, ndlaFilm, skipToMainContentId, messages, onCloseAlert }: Props) => {
  return (
    <>
      {skipToMainContentId && <SkipToMainContent skipToMainContentId={skipToMainContentId} />}
      <StyledMasthead fixed={!!fixed} ndlaFilm={!!ndlaFilm} id="masthead">
        {messages?.map((message) => (
          <MessageBanner
            key={message.number}
            showCloseButton={message.closable}
            onClose={() => onCloseAlert?.(message.number)}
          >
            {message.content}
          </MessageBanner>
        ))}
        <MastheadContent className="u-1/1">{children}</MastheadContent>
      </StyledMasthead>
    </>
  );
};

export default Masthead;
