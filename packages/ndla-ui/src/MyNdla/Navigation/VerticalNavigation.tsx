/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import SafeLinkButton from '@ndla/safelink';

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  max-width: 362px;
  border-right: 1px solid ${colors.brand.greyLighter};
  height: 100%;
`;

const Navigation = styled.div`
  padding: ${spacing.large};
`;

const NavigationElementText = styled.p`
  color: ${colors.text.primary};
  margin: 0;
`;

const NavigationElement = styled(SafeLinkButton)`
  display: flex;
  align-items: center;
  gap: 11.33px;
  height: 30px;
  box-shadow: none;
  &:hover {
    background-color: ${colors.brand.lighter};
    border-radius: 5%;
    svg {
      fill: ${colors.brand.primary};
    }
    ${NavigationElementText} {
      color: ${colors.brand.primary};
    }
  }
  &:focus {
    svg {
      fill: ${colors.brand.primary};
    }
    ${NavigationElementText} {
      color: ${colors.brand.primary};
    }
  }
`;

const IconWrapper = styled.div`
  svg {
    fill: ${colors.text.primary};
    height: 20px;
    width: 20px;
  }
`;

interface NavProps {
  navElements?: {
    icon: ReactNode;
    url: string;
    name: string;
  }[];
}
export const VerticalNavigation = ({ navElements }: NavProps) => {
  return (
    <NavigationWrapper>
      <Navigation>
        {navElements?.map((element) => {
          return (
            <NavigationElement to={element.url}>
              <IconWrapper>{element.icon}</IconWrapper>
              <NavigationElementText>{element.name}</NavigationElementText>
            </NavigationElement>
          );
        })}
      </Navigation>
    </NavigationWrapper>
  );
};

export default VerticalNavigation;
