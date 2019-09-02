/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { Additional } from '@ndla/icons/common';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { spacing, colors, fonts } from '@ndla/core';

const StyledByline = styled('div')`
  display: flex;
  justify-content: space-between;
  ${fonts.sizes('14px', '20px')};
  font-family: ${fonts.sans};
  border-top: 1px solid ${colors.brand.greyLighter};
  padding: ${spacing.small} 0;
`;

const StyledAdditionalLabel = styled('span')`
  line-height: 20px;
`;

const StyledAdditionalWrapper = styled('div')`
  display: flex;
`;

const StyledAdditionalIcon = styled(Additional)`
  margin-right: 7px;
  height: 20px;
  width: 20px;
`;

type ArticleBylineProps = {
  published: string;
  additional: boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const ArticleByline = ({ published, additional, t }: ArticleBylineProps) => {
  return (
    <StyledByline>
      <span>{`${t('article.lastUpdated')} ${published}`}</span>
      {additional && (
        <StyledAdditionalWrapper>
          <StyledAdditionalIcon />
          <StyledAdditionalLabel>
            {t('article.additionalLabel')}
          </StyledAdditionalLabel>
        </StyledAdditionalWrapper>
      )}
    </StyledByline>
  );
};

export default injectT(ArticleByline);
