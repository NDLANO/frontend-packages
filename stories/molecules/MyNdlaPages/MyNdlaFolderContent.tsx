/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { spacing, fonts, mq, breakpoints } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';
import { Feide, HashTag } from '@ndla/icons/common';
import { ListResource, ListResourceProps, InfoBlock, Image } from '@ndla/ui';
import { HeartOutline } from '@ndla/icons/action';
import { FolderOutlined } from '@ndla/icons/contentType';

const MyPageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  ${fonts.sizes('16')};
  width: 100%;
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
const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.large};
  align-items: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    gap: 0;
  }
`;
const RoundedImage = styled(Image)`
  border-radius: 50%;
  height: 160px;
  max-width: 160px;
`;

const SchoolInfo = styled.div`
  font-weight: 600;
  margin-left: ${spacing.normal};
  li {
    margin: 0;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin: 0;
  }
`;

const Terms = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xsmall};
  font-weight: 600;
  margin: ${spacing.small};
  a {
    text-decoration: underline;
    box-shadow: none;
  }
  p {
    margin-left: 0;
  }
`;

const ButtonsWrapper = styled.div`
  padding: ${spacing.small} 0;
  p {
    margin: ${spacing.normal} 0 ${spacing.small} 0;
  }
`;

const StyledResourceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  padding: ${spacing.small} 0;
`;

const StyledBottomDiv = styled.div`
  padding: ${spacing.small} 0;
  p {
    ${fonts.sizes(16)}
  }
`;

const LogoutButton = styled(ButtonV2)`
  margin-bottom: ${spacing.small};
`;

interface MyPageProps {
  name: { firstName: string; lastName: string };
  title: string;
  school: string;
  courses: string[];
  recentFavorites?: ListResourceProps[];
  headerPic: {
    src: string;
    alt: string;
  };
}

const MyNdlaMyPageContent = ({ name, title, school, courses, recentFavorites, headerPic }: MyPageProps) => {
  const { t } = useTranslation();
  return (
    <MyPageWrapper>
      <StyledH1>Im a folder!</StyledH1>
      <Header>
        <StyledH1>{t('myNdla.myPage.welcome')}</StyledH1>
        <RoundedImage src={headerPic.src} alt={headerPic.alt} />
      </Header>
      <Resources>
        <StyledH2>{t('myNdla.myPage.newFavourite')}</StyledH2>
        <StyledResourceList>
          {recentFavorites?.map(({ id, title, resourceTypes, tags, resourceImage, link }) => (
            <ListResource
              id={id}
              title={title}
              resourceTypes={resourceTypes}
              tags={tags}
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
      <InfoBlock icon={<HeartOutline />} title={t('myNdla.myPage.storageInfo.title')}>
        <p>{t('myNdla.myPage.storageInfo.text')}</p>
      </InfoBlock>
      <InfoBlock icon={<FolderOutlined />} title={t('myNdla.myPage.folderInfo.title')}>
        <p>{t('myNdla.myPage.folderInfo.text')}</p>
      </InfoBlock>
      <InfoBlock icon={<HashTag />} title={t('myNdla.myPage.tagInfo.title')}>
        <p>{t('myNdla.myPage.tagInfo.text')}</p>
      </InfoBlock>

      <InfoBlock icon={<Feide />} title={t('myNdla.myPage.feide')}>
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
        <p>{t('myNdla.myPage.feideWrongInfo')}</p>
      </InfoBlock>
      <StyledBottomDiv>
        <Terms>
          {t('myNdla.myPage.read.our')} <SafeLink to=""> {t('myNdla.myPage.terms.terms')}</SafeLink>
        </Terms>
        <Terms>
          {t('myNdla.myPage.read.ours')} <SafeLink to=""> {t('myNdla.myPage.privacy')}</SafeLink>
        </Terms>
        <Terms>
          {t('myNdla.myPage.questions.question')} <SafeLink to=""> {t('myNdla.myPage.questions.ask')}</SafeLink>
        </Terms>

        <ButtonsWrapper>
          <LogoutButton variant="outline">{t('user.buttonLogOut')}</LogoutButton>

          <p>{t('myNdla.myPage.wishToDelete')}</p>
          <ButtonV2 colorTheme="danger">{t('myNdla.myPage.deleteAccount')}</ButtonV2>
        </ButtonsWrapper>
      </StyledBottomDiv>
    </MyPageWrapper>
  );
};

export default MyNdlaMyPageContent;
