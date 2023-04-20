import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SafeLink from '@ndla/safelink';
import { Forward } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import { spacing, spacingUnit, colors, breakpoints, fonts, mq } from '@ndla/core';
import Image from '../Image';
import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import { isMobile } from 'react-device-detect';

interface ImageProps {
  width: number;
  marginTopp?: number;
}

interface Props {
  title: string;
  description: string;
  url: string;
  urlText: string;
  firstImage?: IImageMetaInformationV3;
  secondImage: IImageMetaInformationV3;
}

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.xsmall};
`;

const StyledDescription = styled.div`
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes('18px', '29px')};
  padding: ${spacing.normal} 0;
`;

const StyledImage = styled(Image)<ImageProps>`
  max-width: ${(props) => props.width}px;
  margin-top: ${(props) => props.marginTopp}px;
`;

const StyledHeader = styled.h2<IsTwoImagesProps>`
  font-weight: ${fonts.weight.bold};
  ${fonts.sizes('30px', '38px')};
  margin-top: ${spacing.medium};
  ${(props) =>
    props.isTwoImages &&
    css`
      padding-left: 165px;
    `}
`;

const Wrapper = styled.div`
  padding: ${spacing.large} 0;
  max-width: 390px;
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: ${spacing.medium} 0;
    max-width: 1100px;
  }
`;

interface IsTwoImagesProps {
  isTwoImages: boolean;
}

const SafeLinkContainer = (url: string, urlText: string) => (
  <SafeLink className="o-text-link" to={url}>
    {urlText}
    <Forward />
  </SafeLink>
);

const FrontpageKampanjeblokk = ({ url, firstImage, secondImage, title, urlText, description }: Props) => {
  const isTwoImages = !!firstImage;
  const safeLink = SafeLinkContainer(url, urlText);
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <StyledHeader isTwoImages={isTwoImages}>{title}</StyledHeader>
          <StyledContentWrapper>
            {firstImage && <StyledImage alt={firstImage.alttext.alttext} width={160} src={firstImage.image.imageUrl} />}
            <StyledDescription>{description}</StyledDescription>
          </StyledContentWrapper>
          <StyledImage alt={secondImage.alttext.alttext} width={288} src={secondImage.image.imageUrl} />
          {safeLink}
        </>
      ) : (
        <StyledContentWrapper>
          {firstImage && <StyledImage alt={firstImage.alttext.alttext} width={160} src={firstImage.image.imageUrl} />}
          <div>
            <StyledHeader isTwoImages={isTwoImages}>{title}</StyledHeader>
            <StyledDescription>{description}</StyledDescription>
            {safeLink}
          </div>
          <StyledImage
            alt={secondImage.alttext.alttext}
            width={200}
            marginTopp={32.5}
            src={secondImage.image.imageUrl}
          />
        </StyledContentWrapper>
      )}
    </Wrapper>
  );
};

export default FrontpageKampanjeblokk;
