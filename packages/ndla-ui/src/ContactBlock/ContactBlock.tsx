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
import Image from '../Image';
interface Props {
  image?: IImageMetaInformationV2;
  title: string;
  summary: string;
  greenBlob: boolean;
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

  ${mq.range({ from: breakpoints.tablet })} {
    flex-direction: row;
    padding: 0 0 ${spacing.medium} ${spacing.medium};
    width: 773px;
    gap: ${spacing.nsmall};
  }
`;

const StyledHeader = styled.h4`
  ${fonts.sizes('22px', '30px')};
  font-weight: ${fonts.weight.bold};
  margin: ${spacing.medium} 0 ${spacing.xsmall} 0;
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
  min-width: 286px;
  max-width: 286px;
  min-height: 286px;
  max-height: 286px;
  padding: ${spacing.medium} 0 ${spacing.small} 0;
`;

const BlobWrapper = styled.div`
  height: 165px;
  width: 90px;
`;

const ContactBlock = ({ image, title, summary, name, email, greenBlob }: Props) => {
  const { t } = useTranslation();

  const StyledBlob = styled(greenBlob ? BlobRound : BlobPointy)`
    width: 165px;
    height: 180px;
    transform: translate(10%, 0);
  `;

  if (!image) {
    return null;
  }

  return (
    <CardWrapper>
      <div>
        <StyledImage alt={image.alttext.alttext} src={image.imageUrl} />
        {`${t('photo')}: ${getCreditString(image.copyright, { combineCreatorsAndRightsholders: true }, t)}  ${
          image.copyright.license.license
        }`}
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
            <StyledBlob color={greenBlob ? '#CAE4DA' : '#FAB0A4'} />
          </BlobWrapper>
        </ContentWrapper>
        <SummaryBlock>{summary}</SummaryBlock>
      </div>
    </CardWrapper>
  );
};

export default ContactBlock;
