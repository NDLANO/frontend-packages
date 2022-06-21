import styled from '@emotion/styled';
import { spacing } from '@ndla/core';

export const Grid = styled.div`
  display: grid;
  gap: ${spacing.medium};
  grid-template-columns: 320px auto;
  grid-template-areas: 'sidebar content';
`;

export const Aside = styled.aside`
  grid-area: sidebar;
  border-right: 1px solid #dfdfdf;
  padding-right: ${spacing.medium};
`;

export const Main = styled.main`
  grid-area: content;
  display: grid;
  align-items: start;
`;
