import styled from '@emotion/styled';
import { colors, misc, spacing } from '@ndla/core';

const TreeStructureWrapper = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  border: 1px solid ${colors.brand.greyLighter};
  border-radius: ${misc.borderRadius};
  transition: ${misc.transition.default};
  padding: ${spacing.small};
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
