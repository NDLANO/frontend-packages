/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { breakpoints, fonts, mq, colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { Launch } from '@ndla/icons/common';
import { LicenseByline } from '@ndla/licenses';
import styled from '@emotion/styled';
import Image from '../Image';

const BoxWrapper = styled.div`
  height: 192px;
  border-radius: 5px;
  border: 1px solid #deebf6;
  position: relative;
  right: auto;
  left: -16.6666666667%;
  width: 133.3333333333%;

  margin-bottom: 24px;
  font-family: ${fonts.sans};
  box-shadow: 0px 20px 35px -15px rgba(32, 88, 143, 0.15);
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin: 0 auto;
    width: 80%;
    left: 0;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 24px;
    height: 500px;
  }
`;

const Boxtitle = styled.h3`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes(18)};
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-top: 35px;
  }
`;

const Boxcaption = styled.p`
  font-size: ${fonts.sizes(14)};
  ${mq.range({ until: breakpoints.tabletWide })} {
    line-height: 22px;
  }
`;

const StyledButtonDiv = styled.div`
  position: absolute;
  bottom: 18%;
  left: 25%;
  text-align: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    bottom: 5%;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const NewStyledButton = styled.a`
  display: inline-block;
  cursor: pointer;
  font-size: 0.8888888888888888rem;
  font-family: ${fonts.sans};
  -webkit-transition: all 0.2s cubic-bezier(0.17, 0.04, 0.03, 0.94);
  transition: all 0.2s cubic-bezier(0.17, 0.04, 0.03, 0.94);
  color: ${colors.brand.primary};
  background-color: transparent;
  box-shadow: none;
  border-radius: 32px;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: -10px;
  position: aboslute;
  border: 1px solid #184673;
  :hover {
    background-color: #20588f;
    color: white;
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    width: 210px;
  }
`;
const NewLaunchIcon = styled(Launch)`
  margin-left: 8px;
  height: 15px;
  width: 15px;
`;

const BoxImage = styled(Image)`
  object-fit: cover;
  width: 130px;
  border-radius: 5px;
  height: 130px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 250px;
    height: 250px;
    margin-top: 20%;
  }
`;

const CaptionSectionWrapper = styled.div`
  height: 80%;
  float: left;
  width: 70%;
  ${mq.range({ until: breakpoints.tabletWide })} {
    height: 50%;
    width: 100%;
    display: block;
  }
`;

const ImageSectionWrapper = styled.div`
  height: 100%;
  width: 25%;
  margin: 0 auto;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    height: 50%;
    width: 100%;
  }
`;

const LincenseWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  svg {
    fill: 'blue';
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    top: 1px;
  }
`;

type Props = {
  image: string;
  title: string;
  caption: string;
  licenseRights: string[];
  authors?: { name: string }[];
  locale?: string;
  url: string;
};
export const ResourceBox = ({ image, title, caption, licenseRights, locale, authors, url }: Props) => {
  const { t } = useTranslation();
  return (
    <BoxWrapper>
      <ImageSectionWrapper>
        <BoxImage alt={title} src={image} sizes="25, 25" />
      </ImageSectionWrapper>
      <CaptionSectionWrapper>
        <Boxtitle>{title}</Boxtitle>
        <Boxcaption>{caption}</Boxcaption>
      </CaptionSectionWrapper>
      <StyledButtonDiv>
        <NewStyledButton href={url} target="_blank">
          {t('license.other.itemImage.ariaLabel')}
          <NewLaunchIcon aria-hidden />
        </NewStyledButton>
      </StyledButtonDiv>
      <LincenseWrapper>
        <LicenseByline licenseRights={licenseRights} locale={locale} marginRight fill="#184673">
          <div className="c-figure-byline-author-buttons">
            <span className="c-figure-byline-authors">{authors?.map((author) => author.name).join(' ')}</span>
          </div>
        </LicenseByline>
      </LincenseWrapper>
    </BoxWrapper>
  );
};

export default ResourceBox;
