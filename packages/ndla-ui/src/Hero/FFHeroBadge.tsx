/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import { BlocksDark } from '@ndla/icons/common';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { MessageBox } from '../MessageBox';

type WrapperProps = {
  noMargin?: boolean;
  isSearchPage?: boolean;
};
const Wrapper = styled.div<WrapperProps>`
  width: auto;
  margin: ${props => (props.noMargin ? 0 : spacing.medium)} 0;
  ${(props: WrapperProps) =>
    props.isSearchPage &&
    `
    margin-bottom: -${spacing.small};
    ${mq.range({ until: breakpoints.tablet })} {
        margin-top: ${spacing.normal};
      }
    }
  
  ${mq.range({ from: breakpoints.desktop })} {
        margin-left:263px;
        width: auto;
        margin-bottom: -40px;
      }
      & > * {
    width: 100%;
  }
  `}
`;

type TextProps = {
  smallText?: boolean;
  color?: string;
};
const Text = styled.div<TextProps>`
  font-size: ${props => (props.smallText ? '14px' : '16px')};
  margin-top: ${spacing.xxsmall};
  ${props =>
    props.color &&
    `
    color: ${props.color};
    a {
      color: ${props.color};
      &:hover {
        color: ${props.color};
      }
    }
  `}
`;

const SimpleText = styled.span`
  font-size: 16px;
`;

type Props = {
  noMargin?: boolean;
  isSearchPage?: boolean;
  isNDLAFilm?: boolean;
};

export const FFHeroBadge = ({
  noMargin,
  isSearchPage,
  isNDLAFilm,
  t,
}: Props & tType) => {
  const simple = isSearchPage || isNDLAFilm;
  let backgroundColor, borderColor, color;
  if (isSearchPage) {
    backgroundColor = '#E0C5FA';
    borderColor = '#E0C5FA';
  } else if (isNDLAFilm) {
    backgroundColor = 'transparent';
    borderColor = '#ffffff';
    color = '#ffffff';
  }
  return (
    <Wrapper noMargin={noMargin} isSearchPage={isSearchPage}>
      <MessageBox
        heading={!simple ? t('fagfornyelse.badge.heading') : ''}
        icon={<BlocksDark className={`c-icon--large`} />}
        simple={simple}
        backgroundColor={backgroundColor}
        borderColor={borderColor}>
        <Text smallText={isSearchPage || isNDLAFilm} color={color}>
          {simple && (
            <SimpleText>{t('fagfornyelse.badge.heading')}.&nbsp;</SimpleText>
          )}
          {t('fagfornyelse.badge.text')}
          {simple ? ' ' : <br />}
          <SafeLink to={'https://ndla.no'}>
            {t('fagfornyelse.badge.linkText')}
          </SafeLink>
        </Text>
      </MessageBox>
    </Wrapper>
  );
};

export default injectT(FFHeroBadge);
