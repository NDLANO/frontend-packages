/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { Folder } from '@ndla/icons/editor';
import SafeLink from '@ndla/safelink';

const NavigationWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 363px;
  border-right: 1px solid ${colors.brand.greyLighter};
  height: 100%;
`;

const Navigation = styled.div`
  padding: ${spacing.large};
`;

const NavigationElement = styled.div`
  display: flex;
  gap: 11.33px;
  height: 30px;
  &:hover {
    background-color: ${colors.brand.lighter};
    border-radius: 5%;
  }
`;

const NavigationElementIcon = styled.div``;

const NavigationElementText = styled(SafeLink)`
  color: ${colors.text.primary};
  box-shadow: none;
`;

export const VerticalNavigation = () => {
  const { t } = useTranslation();
  return (
    <NavigationWrapper>
      <Navigation>
        <NavigationElement>
          <NavigationElementIcon>
            <Folder />
          </NavigationElementIcon>
          <NavigationElementText to="">{t('myNdla.myFolders')}</NavigationElementText>
        </NavigationElement>
        <NavigationElement>
          <NavigationElementIcon>
            <Folder />
          </NavigationElementIcon>
          <NavigationElementText to="">{t('myNdla.myTags')}</NavigationElementText>
        </NavigationElement>
        <NavigationElement>
          <NavigationElementIcon>
            <Folder />
          </NavigationElementIcon>
          <NavigationElementText to="">{t('myNdla.myPage')}</NavigationElementText>
        </NavigationElement>
      </Navigation>
    </NavigationWrapper>
  );
};

export default VerticalNavigation;
