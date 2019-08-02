
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';

const GridBlock = styled.div`
  background: ${colors.brand.light};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${spacing.normal};
  &:hover {
    background: ${colors.brand.tertiary};
  }
`;

export default GridBlock;