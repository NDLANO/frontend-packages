/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import { spacing, fonts, colors, mq, breakpoints } from '@ndla/core';
import { BlobPointy, BlobRound } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import concat from 'lodash/concat';
import { errorSvgSrc } from '../Embed/ImageEmbed';

interface Props {
  image?: IImageMetaInformationV3;
  jobTitle: string;
  description: string;
  blobColor?: 'pink' | 'green';
  blob?: 'pointy' | 'round';
  name: string;
  email: string;
}
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 0 ${spacing.medium} ${spacing.medium} ${spacing.medium};
  font-family: ${fonts.sans};
  justify-content: center;

  border-radius: 4px;
  border: 1px solid ${colors.brand.lighter};
  ${mq.range({ from: breakpoints.tabletWide })} {
    flex-direction: row;
    padding: 0 0 ${spacing.medium} ${spacing.medium};
    width: 773px;
    gap: ${spacing.nsmall};
  }
`;

const StyledHeader = styled.div`
  ${fonts.sizes('22px', '30px')};
  font-weight: ${fonts.weight.bold};
  margin: ${spacing.mediumlarge} 0 ${spacing.xsmall} 0;
`;

const StyledDescriptionInformation = styled.div`
  display: flex;
  color: ${colors.text.light};
  gap: ${spacing.xxsmall};

  ${mq.range({ from: breakpoints.tabletWide })} {
    width: 335px;
  }
`;
const EmailLink = styled.a`
  color: ${colors.text.light};
  text-decoration-color: ${colors.text.light};
`;

const SummaryBlock = styled.div`
  font-family: ${fonts.serif};
  padding: ${spacing.nsmall} ${spacing.medium} 0 0;

  ${mq.range({ from: breakpoints.tabletWide })} {
    padding-top: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  gap: ${spacing.small};
`;

const StyledImage = styled.img`
  padding: ${spacing.medium} 0 ${spacing.small} 0;
  min-height: 286px;
  max-width: 286px;
  min-width: 286px;
  max-height: 286px;
`;

const BlobWrapper = styled.div`
  height: 180px;
  width: 90px;
`;
const BlobStyle = css`
  width: 165px;
  height: 180px;
  transform: translate(10%, 0);
`;

const ContactBlock = ({ image, jobTitle, description, name, email, blobColor = 'green', blob = 'pointy' }: Props) => {
  const { t } = useTranslation();
  const isGreenBlob = blobColor === 'green';
  const Blob = blob === 'pointy' ? BlobRound : BlobPointy;
  const authors = concat(image?.copyright.processors, image?.copyright.creators, image?.copyright.rightsholders);

  return (
    <CardWrapper>
      <div>
        {image ? (
          <>
            <StyledImage alt={image.alttext.alttext} src={image.image.imageUrl} />
            {`${t('photo')}: ${authors.reduce((acc, name) => (acc = `${acc} ${name?.name}`), '')}  ${
              image.copyright.license.license
            }`}
          </>
        ) : (
          <StyledImage alt={t('image.error.url')} src={errorSvgSrc} />
        )}
      </div>
      <div>
        <ContentWrapper>
          <div>
            <StyledHeader>{name}</StyledHeader>
            <StyledDescriptionInformation>{jobTitle}</StyledDescriptionInformation>
            <StyledDescriptionInformation>
              {`${t('email')}:   `}
              <EmailLink href={`mailto:${email}?subject=Contact us`}>{email}</EmailLink>
            </StyledDescriptionInformation>
          </div>
          <BlobWrapper>
            <Blob css={BlobStyle} color={isGreenBlob ? '#CAE4DA' : '#FAB0A4'} />
          </BlobWrapper>
        </ContentWrapper>
        <SummaryBlock>{description}</SummaryBlock>
      </div>
    </CardWrapper>
  );
};

export default ContactBlock;
