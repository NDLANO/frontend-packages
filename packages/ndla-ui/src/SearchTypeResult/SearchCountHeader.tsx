import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #303030;
`;

type Props = {
  count: number;
};
const SearchCountHeader = ({ count, t }: Props & tType) => (
  <Heading>
    {count} {t('searchPage.resultType.hits')}
  </Heading>
);

export default injectT(SearchCountHeader);
