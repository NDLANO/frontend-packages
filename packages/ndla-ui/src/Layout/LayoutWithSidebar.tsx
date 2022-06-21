import styled from '@emotion/styled';
import { spacing, colors } from '@ndla/core';

export const LayoutWithSidebarWrapper = styled.div`
  display: grid;
  gap: ${spacing.medium};
  grid-template-columns: 320px auto;
  grid-template-areas: 'sidebar content';
`;

export const LayoutWithSidebarAside = styled.aside`
  grid-area: sidebar;
  border-right: 1px solid ${colors.brand.greyLight};
  padding-right: ${spacing.medium};
`;

export const LayoutWithSidebarMain = styled.main`
  grid-area: content;
  display: grid;
  align-items: start;
`;
