import styled from '@emotion/styled';
import { colors, misc, spacing } from '@ndla/core';

const TreeStructureWrapper = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  border: 1px solid ${colors.brand.greyLighter};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.small};
  transition: ${misc.transition.default};
  ul {
    list-style: none;
    margin: 0;
    padding: 0 0 0 ${spacing.xsmall};
    li {
      margin: 0;
      padding: 0;
    }
  }
  &:focus-within {
    border-color: ${colors.brand.primary};
  }
`;

export default TreeStructureWrapper;
