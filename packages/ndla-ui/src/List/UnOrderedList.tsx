import styled from '@emotion/styled';
import { colors, fonts } from '@ndla/core';
import { HTMLAttributes } from 'react';
import { generateListResets } from './OrderedList';

const StyledUl = styled.ul`
  > li {
    ::marker {
      color: ${colors.brand.secondary};
    }
  }
  ul {
    padding-left: 44px;
  }
  margin-top: 0;
  margin-left: 0;
  ${fonts.sizes('18px', '29px')};

  // Child unordered lists
  ul {
    padding-left: 20px;
  }
  // List reset classes
  ${generateListResets()}
`;

interface Props extends HTMLAttributes<HTMLUListElement> {}

const UnOrderedList = ({ children, ...rest }: Props) => {
  return <StyledUl {...rest}>{children}</StyledUl>;
};

export default UnOrderedList;
