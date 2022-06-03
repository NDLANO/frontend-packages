/**
 *
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { breakpoints, fonts, mq, colors, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { Launch } from '@ndla/icons/common';
import { LicenseByline } from '@ndla/licenses';
import { SafeLinkButton } from '@ndla/safelink';
import styled from '@emotion/styled';
import Image from '../Image';

const ResourceBoxContainer = styled.div`
  display: flex;
  position: relative;
  padding: ${spacing.nsmall};
  border-radius: 5px;
  border: 1px solid ${colors.brand.light};
  font-family: ${fonts.sans};
  box-shadow: 0px 20px 35px -15px rgba(32, 88, 143, 0.15);
  gap: ${spacing.medium};

  ${mq.range({ until: breakpoints.desktop })} {
    gap: 0;
    flex-direction: column;
    padding-top: ${spacing.medium};
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
`;

const TextWrapper = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq.range({ until: breakpoints.desktop })} {
    align-items: center;
    padding-top: ${spacing.small};
  }
`;

const StyledButton = styled(SafeLinkButton)`
  display: flex;
  gap: ${spacing.xxsmall};
  align-items: center;
  border: 1px solid ${colors.brand.tertiary};
  :hover {
    background-color: ${colors.brand.primary};
    border: 1px solid ${colors.brand.primary};
    color: ${colors.white};
  }
`;

const StyledImage = styled(Image)`
  && {
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
  position: absolute;
  top: 9px;
  right: 0;
`;

interface ImageMeta {
  src: string;
  alt: string;
}

interface Props {
  image: ImageMeta;
  title: string;
  caption: string;
  licenseRights: string[];
  authors?: string[];
  locale?: string;
  url: string;
}

export const ResourceBox = ({ image, title, caption, licenseRights, locale, authors, url }: Props) => {
  const { t } = useTranslation();
  return (
    <ResourceBoxContainer>
      <LincenseWrapper>
        <LicenseByline licenseRights={licenseRights} locale={locale} marginRight color={colors.brand.tertiary}>
          {authors && authors.length > 0 && (
            <div className="c-figure__byline-author-buttons">
              <span className="c-figure__byline-authors">{authors.join(' ')}</span>
            </div>
          )}
        </LicenseByline>
      </LincenseWrapper>
      <StyledImage src={image.src} alt={image.alt} />
      <TextWrapper>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>

        <StyledButton to={url} target="_blank" outline borderShape="rounded">
          {t('license.other.itemImage.ariaLabel')}
          <Launch aria-hidden />
        </StyledButton>
      </TextWrapper>
    </ResourceBoxContainer>
  );
};

export default ResourceBox;
