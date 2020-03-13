/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { BlocksDark } from '@ndla/icons/common';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { SpeechBadge } from '../Badge';

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
  isSearchPage?: boolean;
};
const Text = styled.div<TextProps>`
  font-size: ${props => (props.isSearchPage ? '14px' : '16px')};
  margin-top: ${spacing.xxsmall};
`;

const SimpleText = styled.span`
  font-size: 16px;
`;

type Props = {
  noMargin?: boolean;
  simple?: boolean;
  isSearchPage?: boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

export const FFHeroBadge = ({ noMargin, simple, isSearchPage, t }: Props) => (
  <Wrapper noMargin={noMargin} isSearchPage={isSearchPage}>
    <SpeechBadge
      heading={!simple ? t('fagfornyelse.badge.heading') : ''}
      icon={<BlocksDark className={`c-icon--large`} />}
      hideArrow={simple}
      backgroundColor={isSearchPage ? '#E0C5FA' : undefined}
      borderColor={isSearchPage ? '#E0C5FA' : undefined}>
      <Text isSearchPage={isSearchPage}>
        {simple && (
          <SimpleText>{t('fagfornyelse.badge.heading')}.&nbsp;</SimpleText>
        )}
        {t('fagfornyelse.badge.text')}
        {simple ? ' ' : <br />}
        <SafeLink to={'https://ndla.no'}>
          {t('fagfornyelse.badge.linkText')}
        </SafeLink>
      </Text>
    </SpeechBadge>
  </Wrapper>
);

export default injectT(FFHeroBadge);
