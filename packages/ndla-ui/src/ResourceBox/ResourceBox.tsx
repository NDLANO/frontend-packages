/**
 *
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
import { SafeLinkButton } from '@ndla/safelink';
import styled from '@emotion/styled';
import Image from '../Image';

const BoxWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  border: 1px solid ${colors.brand.light};
  position: relative;
  left: -16.6666666667%;
  width: 133.3333333333%;
  align-items: stretch;
  margin-bottom: 24px;
  font-family: ${fonts.sans};
  box-shadow: 0px 20px 35px -15px rgba(32, 88, 143, 0.15);
  ${mq.range({ until: breakpoints.desktop })} {
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
    left: 0;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 0;
    margin-bottom: 24px;
    min-height: 500px;
    height: auto;
  }
`;

const Boxtitle = styled.h3`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes(18)};
  margin-top: 0;
  ${mq.range({ until: breakpoints.desktop })} {
    display: inline-block;
  }
`;

const Boxcaption = styled.p`
  font-size: ${fonts.sizes(14)};
  ${mq.range({ until: breakpoints.desktop })} {
    line-height: 22px;
  }
`;

const StyledButtonDiv = styled.div`
  align-items: flex-start;

  width: 80%;
  ${mq.range({ until: breakpoints.desktop })} {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const ResourceBoxStyledButton = styled(SafeLinkButton)`
  border: 1px solid ${colors.brand.tertiary};
  :hover {
    background-color: ${colors.brand.primary};
    color: white;
  }
  ${mq.range({ until: breakpoints.desktop })} {
    width: 210px;
  }
`;
const ResourceBoxLaunchIcon = styled(Launch)`
  margin-left: 8px;
  height: 15px;
  width: 15px;
`;

const BoxImage = styled(Image)`
  object-fit: cover;
  width: 134px;
  height: 134px;
  border-radius: 5px;

  ${mq.range({ until: breakpoints.desktop })} {
    width: 250px;
    height: 250px;
  }
`;
const ImageSectionWrapper = styled.div`
  width: 20%;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  ${mq.range({ until: breakpoints.desktop })} {
    height: auto;
    max-height: 48%;
    width: 100%;
  }
`;

const CaptionSectionWrapper = styled.div`
  ${mq.range({ until: breakpoints.desktop })} {
    height: 50%;
    width: 100%;
  }
`;

const CenterItems = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1px;
  flex-flow: column;
  ${mq.range({ until: breakpoints.desktop })} {
    width: 100%;
    text-align: center;
  }
`;

const TitleAndLicence = styled.div`
  display: flex;
  justify-content: space-between;
  ${mq.range({ until: breakpoints.desktop })} {
    display: inline-block;

    margin-top: 10px;
  }
`;

const LincenseWrapper = styled.div`
  ul {
    margin-right: 0;
  }

  ${mq.range({ until: breakpoints.desktop })} {
    top: 1px;
    position: absolute;
    right: 1px;
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
      <CenterItems>
        <CaptionSectionWrapper>
          <TitleAndLicence>
            <Boxtitle>{title}</Boxtitle>
            <LincenseWrapper>
              <LicenseByline licenseRights={licenseRights} locale={locale} marginRight color={colors.brand.tertiary}>
                <div className="c-figure__byline-author-buttons">
                  <span className="c-figure__byline-authors">{authors?.map((author) => author.name).join(' ')}</span>
                </div>
              </LicenseByline>
            </LincenseWrapper>
          </TitleAndLicence>
          <Boxcaption>{caption}</Boxcaption>
        </CaptionSectionWrapper>

        <StyledButtonDiv>
          <ResourceBoxStyledButton to={url} target="_blank" outline borderShape="rounded">
            {t('license.other.itemImage.ariaLabel')}
            <ResourceBoxLaunchIcon aria-hidden />
          </ResourceBoxStyledButton>
        </StyledButtonDiv>
      </CenterItems>
    </BoxWrapper>
  );
};

export default ResourceBox;
