/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, mq, breakpoints } from '@ndla/core';
import Button, { DeleteButton } from '@ndla/button';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';
import { FeideText } from '@ndla/icons/common';
import {
  ListResource,
  ListResourceProps,
  LayoutWithSidebarAside,
  LayoutWithSidebarMain,
  LayoutWithSidebarWrapper,
} from '@ndla/ui';
import { TreeStructureExampleComponent, STRUCTURE_EXAMPLE_WRAPPED } from './TreeStructureExample';

const MyPageWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${fonts.sizes('16')};

  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
  }
`;

const Resources = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.medium} 0;
`;

const StyledH2 = styled.h2`
  ${fonts.sizes('18')}
  font-weight: 700;
  margin: 0;
`;
const StyledH1 = styled.h1`
  font-weight: 700;
  ${fonts.sizes('20')};
`;
const Header = styled.div``;

const SchoolInfo = styled.div`
  font-weight: 600;
  margin-left: ${spacing.normal};
  li {
    margin: 0;
  }
`;

const Terms = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  a {
    text-decoration: underline;
    box-shadow: none;
  }
  p {
    margin: 0;
  }
`;
const StyledFeide = styled(FeideText)`
  height: 21px;
  width: 60px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

interface MyPageProps {
  name: { firstName: string; lastName: string };
  title: string;
  school: string;
  courses: string[];
  recentFavorites?: ListResourceProps[];
}

const StyledResourceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
`;

export const MyPage = ({ name, title, school, courses, recentFavorites }: MyPageProps) => {
  const { t } = useTranslation();

  return (
    <LayoutWithSidebarWrapper>
      <LayoutWithSidebarAside>
        <TreeStructureExampleComponent
          editable={false}
          framed={false}
          openOnFolderClick
          structure={STRUCTURE_EXAMPLE_WRAPPED()}
        />
      </LayoutWithSidebarAside>
      <LayoutWithSidebarMain>
        <MyPageWrapper>
          <Header>
            <StyledH1> {t('myNdla.myPage')}</StyledH1>
            <p>{t('myNdla.welcome', { name: name.firstName })}</p>
          </Header>
          <StyledFeide />
          <SchoolInfo>
            <ul>
              <li>
                {name.firstName} {name.lastName}
              </li>
              <li>{title}</li>
              <li>{school}</li>
              <li>{courses.join(', ')}</li>
            </ul>
          </SchoolInfo>
          <Terms>
            {t('myNdla.read')} <SafeLink to=""> {t('myNdla.terms')}</SafeLink>
          </Terms>
          <Resources>
            <StyledH2>{t('myNdla.newFavourite')}</StyledH2>
            <StyledResourceList>
              {recentFavorites?.map(({ title, topics, tags, description, resourceImage, link }) => (
                <ListResource
                  title={title}
                  topics={topics}
                  tags={tags}
                  description={description}
                  resourceImage={{
                    alt: resourceImage.alt,
                    src: resourceImage.src,
                  }}
                  link={link}
                  key={link}
                />
              ))}
            </StyledResourceList>
          </Resources>

          <ButtonsWrapper>
            <Button outline>{t('user.buttonLogOut')}</Button>
            <DeleteButton>{t('myNdla.deleteAccount')}</DeleteButton>
          </ButtonsWrapper>
        </MyPageWrapper>
      </LayoutWithSidebarMain>
    </LayoutWithSidebarWrapper>
  );
};

export default MyPage;
