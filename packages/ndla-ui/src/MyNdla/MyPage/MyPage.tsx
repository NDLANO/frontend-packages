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
const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${fonts.sizes('16')};
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
type MyPageProps = {
  name: { firstName: string; lastName: string };
  title: string;
  school: string;
  courses: string[];
};

export const MyPage = ({ name, title, school, courses }: MyPageProps) => {
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
      <Terms></Terms>
      <Terms>
        <p>{t('myNdla.read')} </p> <SafeLink to=""> {t('myNdla.terms')}</SafeLink>
      </Terms>
      <ButtonsWrapper>
        <Button outline>{t('user.buttonLogOut')}</Button>
        <DeleteButton>{t('myNdla.deleteAccount')}</DeleteButton>
      </ButtonsWrapper>
    </MyPageWrapper>
  );
};

export default MyPage;
