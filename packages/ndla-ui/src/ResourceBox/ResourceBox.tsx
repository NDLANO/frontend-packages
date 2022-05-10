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

const ResourceBoxContainer = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${colors.brand.light};
  position: relative;
  font-family: ${fonts.sans};
  box-shadow: 0px 20px 35px -15px rgba(32, 88, 143, 0.15);
  gap: 40px;

  ${mq.range({ until: breakpoints.desktop })} {
    gap: 0;
    flex-direction: column;
    padding-top: 30px;
    text-align: center;
  }
`;

const Title = styled.h3`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes(18)};
  margin-top: 0;
`;

const Caption = styled.p`
  font-size: ${fonts.sizes(14)};
  max-width: 600px;

  ${mq.range({ until: breakpoints.desktop })} {
    line-height: 22px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq.range({ until: breakpoints.desktop })} {
    align-items: center;
    padding-top: 10px;
  }
`;

const StyledButton = styled(SafeLinkButton)`
  border: 1px solid ${colors.brand.tertiary};
  :hover {
    background-color: ${colors.brand.primary};
    border: 1px solid ${colors.brand.primary};
    color: white;
  }
`;

const StyledLaunchIcon = styled(Launch)`
  margin-left: 8px;
  height: 15px;
  width: 15px;
`;

const ImageWrapper = styled.div`
  img {
    object-fit: cover;
    width: 134px;
    height: 134px;
    border-radius: 5px;

    ${mq.range({ until: breakpoints.desktop })} {
      width: 200px;
      height: 200px;
    }
  }
`;

const LincenseWrapper = styled.div`
  top: 9px;
  position: absolute;
  right: 1px;
  ul {
    margin-right: 0;
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
    <ResourceBoxContainer>
      <LincenseWrapper>
        <LicenseByline licenseRights={licenseRights} locale={locale} marginRight color={colors.brand.tertiary}>
          <div className="c-figure__byline-author-buttons">
            <span className="c-figure__byline-authors">{authors?.map((author) => author.name).join(' ')}</span>
          </div>
        </LicenseByline>
      </LincenseWrapper>
      <ImageWrapper>
        <Image alt={title} src={image} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>

        <StyledButton to={url} target="_blank" outline borderShape="rounded">
          {t('license.other.itemImage.ariaLabel')}
          <StyledLaunchIcon aria-hidden />
        </StyledButton>
      </TextWrapper>
    </ResourceBoxContainer>
  );
};

export default ResourceBox;
