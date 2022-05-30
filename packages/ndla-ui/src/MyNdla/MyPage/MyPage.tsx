/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, fonts } from '@ndla/core';
import Button from '@ndla/button';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';
import { FeideText } from '@ndla/icons/common';

import { ResourceElement } from '../ResourceDash';

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${fonts.sizes('16')};
`;

const Resources = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
  h2 {
    ${fonts.sizes('18')}
    font-weight: 700;
    margin: 0;
  }
`;

const Header = styled.div`
  h1 {
    font-weight: 700;
    ${fonts.sizes('20')};
  }
`;
const SchoolInfo = styled.div`
  font-weight: 600;
  margin-left: ${spacing.normal};
  li {
    margin: 0;
  }
`;

const Terms = styled.div`
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
const Styledfeide = styled(FeideText)`
  height: 21px;
  width: 60px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const DeleteButton = styled(Button)`
  color: ${colors.support.red};
  border: 1px solid ${colors.support.red};
  background-color: transparent;
  &:hover,
  :focus {
    background-color: ${colors.support.red};
    color: white;
    border: 1px solid white;
  }
`;
type ResourceProps = {
  title: string;
  topics: string[];
  tags?: string[];
  resourceImage: { alt: string; src: string };
  link: string;
  description?: string;
};

type MyPageProps = {
  name: { firstName: string; lastName: string };
  title: string;
  school: string;
  courses: string[];
  recentFavorites?: ResourceProps[];
};

export const MyPage = ({ name, title, school, courses, recentFavorites }: MyPageProps) => {
  const { t } = useTranslation();
  return (
    <MyPageWrapper>
      <Header>
        <h1> {t('myNdla.myPage')}</h1>
        <p>
          {' '}
          {t('myNdla.hello')}, {name.firstName}! {t('myNdla.welcome')}
        </p>
      </Header>
      <Styledfeide />
      <SchoolInfo>
        <ul>
          <li>
            {name.firstName} {name.lastName}
          </li>
          <li>{title}</li>
          <li> {school}</li>
          <li>
            {courses.map((course, i, { length }) => {
              if (length - 1 === i) {
                return <>{course}</>;
              } else {
                return <>{course}, </>;
              }
            })}
          </li>
        </ul>
      </SchoolInfo>
      <Terms>
        <p>{t('myNdla.read')} </p> <SafeLink to=""> {t('myNdla.terms')}</SafeLink>
      </Terms>
      <Resources>
        <h2>{t('myNdla.newFavourite')}</h2>
        {recentFavorites?.map(({ title, topics, tags, description, resourceImage, link }) => (
          <ResourceElement
            layout="list"
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
      </Resources>

      <ButtonsWrapper>
        <Button outline>{t('user.buttonLogOut')}</Button>
        <DeleteButton>{t('myNdla.deleteAccount')}</DeleteButton>
      </ButtonsWrapper>
    </MyPageWrapper>
  );
};

export default MyPage;
