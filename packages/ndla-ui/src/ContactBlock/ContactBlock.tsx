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
import { spacing, fonts, colors, mq, breakpoints, misc } from '@ndla/core';
import { BlobPointy, BlobRound } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import concat from 'lodash/concat';
import { errorSvgSrc } from '../Embed/ImageEmbed';

const BLOB_WIDTH = 90;

interface Props {
  image?: IImageMetaInformationV3;
  jobTitle: string;
  description: string;
  blobColor?: 'pink' | 'green';
  blob?: 'pointy' | 'round';
  imageWidth?: number;
  name: string;
  email: string;
}
const BlockWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0 0 ${spacing.medium} ${spacing.medium};
  font-family: ${fonts.sans};
  border-radius: ${misc.borderRadius};
  border: 1px solid ${colors.brand.lighter};
  background-color: ${colors.white};
  max-width: 348px;
  & ~ & {
    margin-top: ${spacing.medium};
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    max-width: 773px;
    flex-direction: row;
    padding: 0 0 ${spacing.medium} ${spacing.medium};
    gap: ${spacing.nsmall};
  }
`;

const StyledHeader = styled.div`
  ${fonts.sizes('22px', '30px')};
  font-weight: ${fonts.weight.bold};
  margin: 0 0 ${spacing.xsmall} 0;
  padding-top: ${spacing.medium};
`;

const StyledText = styled.div`
  display: flex;
  ${fonts.sizes('16px', '26px')};
  overflow-wrap: anywhere;
  color: ${colors.text.light};
  gap: ${spacing.xxsmall};
`;

const EmailLink = styled.a`
  color: ${colors.text.light};
  text-decoration-color: ${colors.text.light};
  text-decoration-style: solid;
  text-decoration: underline;
  box-shadow: unset;
`;

const SummaryBlock = styled.p`
  font-family: ${fonts.sans};
  padding: 0;
  max-width: calc(100% - (${BLOB_WIDTH}px / 2));
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding-top: 0;
  }
`;

const InfoWrapper = styled.div`
  max-width: calc(100% - ${BLOB_WIDTH}px);
`;

const TextWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
`;

const BlobWrapper = styled.div`
  height: 180px;
  width: ${BLOB_WIDTH}px;
  position: absolute;
  overflow: hidden;
  right: 0px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  ${fonts.sizes('16px', '26px')};
  padding: ${spacing.medium} ${spacing.medium} 0 0;
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding-right: 0;
  }
`;

const blobStyling = css`
  width: 165px;
  height: 180px;
  transform: translate(10%, 0);
`;
const Email = styled.div`
  white-space: nowrap;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const StyledImage = styled.img`
  object-fit: cover;
`;

const ContactBlock = ({ image, jobTitle, description, name, email, blobColor = 'green', blob = 'pointy' }: Props) => {
  const { t } = useTranslation();
  const isGreenBlob = blobColor === 'green';
  const Blob = blob === 'pointy' ? BlobPointy : BlobRound;
  const authors = concat(image?.copyright.processors, image?.copyright.creators, image?.copyright.rightsholders);

  return (
    <BlockWrapper>
      <ImageWrapper>
        {image ? (
          <>
            <StyledImage alt={image.alttext.alttext} src={`${image.image.imageUrl}?width=286`} />
            {`${t('photo')}: ${authors.reduce((acc, name) => (acc = `${acc} ${name?.name}`), '')}  ${
              image.copyright.license.license
            }`}
          </>
        ) : (
          <img alt={t('image.error.url')} src={errorSvgSrc} />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <TextWrapper>
          <InfoWrapper>
            <StyledHeader>{name}</StyledHeader>
            <StyledText>{jobTitle}</StyledText>
            <StyledText>
              <Email>{`${t('email')}:`}</Email>
              <EmailLink href={`mailto:${email}?subject=Contact us`}>{email}</EmailLink>
            </StyledText>
          </InfoWrapper>
          <BlobWrapper>
            <Blob css={blobStyling} color={isGreenBlob ? colors.support.greenLight : colors.support.redLight} />
          </BlobWrapper>
        </TextWrapper>
        <SummaryBlock>{description}</SummaryBlock>
      </ContentWrapper>
    </BlockWrapper>
  );
};

export default ContactBlock;
