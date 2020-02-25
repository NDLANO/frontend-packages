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
import { spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { SpeechBadge } from '../Badge';

type WrapperProps = {
  noMargin?: boolean;
};
const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  margin: ${props => (props.noMargin ? 0 : spacing.medium)} 0;
`;

const Text = styled.div`
  font-size: 16px;
  margin-top: ${spacing.xxsmall};
`;

type Props = {
  noMargin?: boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

export const FFHeroBadge = ({ noMargin, t }: Props) => (
  <Wrapper noMargin={noMargin}>
    <SpeechBadge
      heading={t('fagfornyelse.badge.heading')}
      icon={<BlocksDark className={`c-icon--large`} />}>
      <Text>
        {t('fagfornyelse.badge.text')}
        <br />
        <SafeLink to={'https://ndla.no'}>
          {t('fagfornyelse.badge.linkText')}
        </SafeLink>
      </Text>
    </SpeechBadge>
  </Wrapper>
);

export default injectT(FFHeroBadge);
