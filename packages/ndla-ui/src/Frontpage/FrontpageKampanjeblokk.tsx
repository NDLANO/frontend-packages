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
  isTwoImages: boolean;
  marginTopp?: any;
  marginBottom?: any;
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
  padding: 0 ${spacing.normal};
  max-width: 390px;
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: 0 ${spacing.mediumlarge};
    max-width: 1100px;
  }
`;

const DeskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing.normal};
`;

const StyledContentWrapper = styled.div<IsTwoImagesProps>`
  display: flex;
  flex-direction: row;
  gap: ${spacing.xsmall};
  ${mq.range({ from: breakpoints.tabletWide })} {
    [class*='StyledImageWrapper'] {
      display: flex;
      align-items: center;
      ${(props) =>
        !props.isTwoImages &&
        css`
          align-items: center;
        `}
      & ~ [class*='StyledImageWrapper'] {
        align-items: center;
      }
    }
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    [class*='StyledImageWrapper'] {
      display: flex;
      justify-content: center;
      ${(props) =>
        props.isTwoImages &&
        css`
          justify-content: flex-start;
        `}
      & ~ [class*='StyledImageWrapper'] {
        justify-content: center;
      }
    }
  }
`;

const StyledDescription = styled.div`
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes('18px', '29px')};
  padding: ${spacing.normal} 0;
`;

const StyledFirstImage = styled(Image)<ImageProps>`
  min-width: 160px;
  max-width: 160px;
  margin-top: ${(props) => props.marginTopp};
`;

const StyledImage = styled(Image)<ImageProps>`
  min-width: 288px;
  max-width: 288px;
  margin-top: ${(props) => props.marginTopp};
  margin-bottom: ${(props) => props.marginBottom};
  display: flex;
  justify-content: center;
  ${(props) =>
    props.isTwoImages &&
    css`
      min-width: 200px;
      max-width: 200px;
    `}
`;

const StyledHeader = styled.h2<IsTwoImagesProps>`
  font-weight: ${fonts.weight.bold};
  ${fonts.sizes('30px', '38px')};
  margin-top: ${spacing.medium};
  margin-bottom: 0;
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-top: ${spacing.mediumlarge};
  }
`;

interface IsTwoImagesProps {
  isTwoImages: boolean;
}

const StyledSafeLink = styled(SafeLink)`
  text-decoration: underline;
  box-shadow: none;
`;

const SafeLinkContainer = (url: string, urlText: string) => (
  <StyledSafeLink className="o-text-link" to={url}>
    {urlText}
    <Forward />
  </StyledSafeLink>
);

const FrontpageKampanjeblokk = ({ url, firstImage, secondImage, title, urlText, description }: Props) => {
  const isTwoImages = !!firstImage;
  const safeLink = SafeLinkContainer(url, urlText);
  return (
    <Wrapper>
      {!isMobile ? (
        <>
          <StyledHeader isTwoImages={isTwoImages}>{title}</StyledHeader>
          <StyledContentWrapper isTwoImages={isTwoImages}>
            {firstImage && (
              <StyledFirstImage
                alt={firstImage.alttext.alttext}
                marginTopp={`${spacing.normal}`}
                isTwoImages={isTwoImages}
                src={firstImage.image.imageUrl}
              />
            )}
            <StyledDescription>{description}</StyledDescription>
            <StyledImage
              alt={secondImage.alttext.alttext}
              isTwoImages={isTwoImages}
              marginBottom={`${spacing.normal}`}
              src={secondImage.image.imageUrl}
            />
            {safeLink}
          </StyledContentWrapper>
        </>
      ) : (
        <StyledContentWrapper isTwoImages={isTwoImages}>
          {firstImage && (
            <StyledFirstImage
              alt={firstImage.alttext.alttext}
              isTwoImages={isTwoImages}
              marginTopp={`${spacing.normal}`}
              src={firstImage.image.imageUrl}
            />
          )}
          <DeskWrapper>
            <StyledHeader isTwoImages={isTwoImages}>{title}</StyledHeader>
            <StyledDescription>{description}</StyledDescription>
            {safeLink}
          </DeskWrapper>
          <StyledImage
            alt={secondImage.alttext.alttext}
            isTwoImages={isTwoImages}
            marginTopp={isTwoImages ? `${spacing.normal}` : `${spacing.medium}`}
            src={secondImage.image.imageUrl}
          />
        </StyledContentWrapper>
      )}
    </Wrapper>
  );
};

export default FrontpageKampanjeblokk;
