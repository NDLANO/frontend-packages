import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SafeLink from '@ndla/safelink';
import { Forward } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import { spacing, spacingUnit, colors, breakpoints, fonts, mq } from '@ndla/core';
import Image from '../Image';
import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import { MobileView, TabletView, isMobile } from 'react-device-detect';

interface ImageProps {
  isTwoImages: boolean;
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

const Wrapper = styled.div`
  padding: ${spacing.large} 0;
  max-width: 390px;
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: ${spacing.medium} 0;
    max-width: 1100px;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.xsmall};
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
  }
  [class*='StyledImageWrapper'] {
    display: flex;
    justify-content: center;
  }
`;

const StyledDescription = styled.div`
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes('18px', '29px')};
  padding: ${spacing.normal} 0;
`;

const StyledFirstImage = styled(Image)<ImageProps>`
  max-width: 160px;
  margin-top: ${(props) => props.marginTopp}px;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)<ImageProps>`
  max-width: 288px;
  margin-top: ${(props) => props.marginTopp}px;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.isTwoImages &&
    css`
      max-width: 200px;
      border: 2px solid red;
    `}
`;

const StyledHeader = styled.h2<IsTwoImagesProps>`
  font-weight: ${fonts.weight.bold};
  ${fonts.sizes('30px', '38px')};
  margin-top: ${spacing.medium};
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
      {MobileView ? (
        <>
          <StyledHeader isTwoImages={isTwoImages}>{title}</StyledHeader>
          <StyledContentWrapper>
            {firstImage && (
              <StyledFirstImage
                alt={firstImage.alttext.alttext}
                isTwoImages={isTwoImages}
                src={firstImage.image.imageUrl}
              />
            )}
            <StyledDescription>{description}</StyledDescription>
            <StyledImage alt={secondImage.alttext.alttext} isTwoImages={isTwoImages} src={secondImage.image.imageUrl} />
            {safeLink}
          </StyledContentWrapper>
        </>
      ) : (
        <StyledContentWrapper>
          {firstImage && (
            <StyledFirstImage
              alt={firstImage.alttext.alttext}
              isTwoImages={isTwoImages}
              src={firstImage.image.imageUrl}
            />
          )}
          <div>
            <StyledHeader isTwoImages={isTwoImages}>{title}</StyledHeader>
            <StyledDescription>{description}</StyledDescription>
            {safeLink}
          </div>
          <StyledImage
            alt={secondImage.alttext.alttext}
            isTwoImages={isTwoImages}
            marginTopp={32.5}
            src={secondImage.image.imageUrl}
          />
        </StyledContentWrapper>
      )}
    </Wrapper>
  );
};

export default FrontpageKampanjeblokk;
