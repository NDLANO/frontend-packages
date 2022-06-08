import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, misc, spacing } from '@ndla/core';

const TreeStructureWrapper = styled.div<{ framed?: boolean }>`
  padding: ${spacing.xsmall};
  ${({ framed }) =>
    framed
      ? css`
          border: 1px solid ${colors.brand.greyLighter};
          border-radius: ${misc.borderRadius};
          max-height: 400px;
          overflow-y: scroll;
          scroll-behavior: smooth;
          padding: ${spacing.small};
        `
      : ''}
  transition: ${misc.transition.default};
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: -${spacing.xsmall};
    li {
      margin: 0;
      padding: 0;
      > ul {
        margin-left: ${spacing.normal};
      }
    }
  }
  &:focus-within {
    border-color: ${colors.brand.primary};
  }
`;

export default TreeStructureWrapper;
