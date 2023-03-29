/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { IImageMetaInformationV2 } from '@ndla/types-image-api';
import { spacing, fonts, colors, mq, breakpoints } from '@ndla/core';
import { BlobPointy, BlobRound } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import { getCreditString } from '@ndla/licenses/lib/getCopyString';
import { css } from '@emotion/react';
import Image from '../Image';
import { errorSvgSrc } from '../Embed/ImageEmbed';
interface Props {
  image?: IImageMetaInformationV2;
  title: string;
  summary: string;
  color?: 'pink' | 'green';
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
`;
const EmailLink = styled.a`
  color: ${colors.text.light};
`;

const SummaryBlock = styled.div`
  font-family: ${fonts.serif};
  padding: ${spacing.nsmall} ${spacing.medium} 0 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  gap: ${spacing.small};
`;

const StyledImage = styled(Image)`
  padding: ${spacing.medium} 0 ${spacing.small} 0;
  min-height: 286px;
  min-width: 286px;
`;

const BlobWrapper = styled.div`
  height: 165px;
  width: 90px;
`;
const BlobStyle = css`
  width: 165px;
  height: 180px;
  transform: translate(10%, 0);
`;

const ContactBlock = ({ image, title, summary, name, email, color = 'green' }: Props) => {
  const { t } = useTranslation();
  const isGreen = color === 'green';
  const Blob = isGreen ? BlobRound : BlobPointy;
  return (
    <CardWrapper>
      <div>
        {image ? (
          <>
            <StyledImage alt={image.alttext.alttext} src={image.imageUrl} />
            {`${t('photo')}: ${getCreditString(image.copyright, { combineCreatorsAndRightsholders: true }, t)}  ${
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
            <StyledDescriptionInformation>{title}</StyledDescriptionInformation>
            <StyledDescriptionInformation>
              {`${t('email')}:   `}
              <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </StyledDescriptionInformation>
          </div>
          <BlobWrapper>
            <Blob css={BlobStyle} color={isGreen ? '#CAE4DA' : '#FAB0A4'} />
          </BlobWrapper>
        </ContentWrapper>
        <SummaryBlock>{summary}</SummaryBlock>
      </div>
    </CardWrapper>
  );
};

export default ContactBlock;
