/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { fonts, mq, breakpoints, spacing, colors } from '@ndla/core';
import { IconButtonV2 } from '@ndla/button';
import { Cross } from '@ndla/icons/action';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.medium} 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.medium};
    border: 1px solid ${colors.brand.neutral7};
    border-radius: 4px;
    margin: ${spacing.large} 0;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large};
  }
  & > .c-figure {
    width: 100% !important;
    padding: 0;
    left: initial !important;
    margin-bottom: 0;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${colors.brand.light};
  padding-bottom: ${spacing.small};
`;
const Heading = styled.h2`
  margin: 0;
  ${fonts.sizes('20px', '45px')};
  text-transform: uppercase;
`;

const HeadingCount = styled.span`
  font-weight: 400;
  margin-left: ${spacing.small};
  text-transform: lowercase;
`;

type Props = {
  totalCount: number;
  onRemove: () => void;
  children: ReactNode;
};

const SearchNotionsResult = ({ totalCount, onRemove, children }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading>
          {t(`searchPage.resultType.notionsHeading`)}
          <HeadingCount>{t(`searchPage.resultType.hits`, { count: totalCount })}</HeadingCount>
        </Heading>
        <IconButtonV2 onClick={onRemove} aria-label={t(`searchPage.resultType.notionsRemove`)}>
          <Cross />
        </IconButtonV2>
      </HeadingWrapper>
      {children}
    </Wrapper>
  );
};

export default SearchNotionsResult;
