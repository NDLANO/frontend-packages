/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { Tag, Person } from '@ndla/icons/common';
import { FolderOutlined } from '@ndla/icons/contentType';
import SafeLinkButton from '@ndla/safelink';

const NavigationWrapper = styled.div`
  position: absolute;
  left: 0;
  width: auto;
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

const NavigationElementIcon = styled.div`
  svg {
    fill: ${colors.text.primary};
    height: 20px;
    width: 20px;
    vertical-align: text-top !important;
  }
`;

type NavProps = {
  myPageLink: string;
  myFoldersLink: string;
  myTagsLink: string;
};
export const VerticalNavigation = ({ myPageLink, myFoldersLink, myTagsLink }: NavProps) => {
  const { t } = useTranslation();
  return (
    <NavigationWrapper>
      <Navigation>
        <NavigationElement to={myPageLink}>
          <NavigationElementIcon>
            <Person />
          </NavigationElementIcon>
          <NavigationElementText>{t('myNdla.myPage')}</NavigationElementText>
        </NavigationElement>
        <NavigationElement to={myFoldersLink}>
          <NavigationElementIcon>
            <FolderOutlined />
          </NavigationElementIcon>
          <NavigationElementText>{t('myNdla.myFolders')}</NavigationElementText>
        </NavigationElement>
        <NavigationElement to={myTagsLink}>
          <NavigationElementIcon>
            <Tag />
          </NavigationElementIcon>
          <NavigationElementText>{t('myNdla.myTags')}</NavigationElementText>
        </NavigationElement>
      </Navigation>
    </NavigationWrapper>
  );
};

export default VerticalNavigation;
