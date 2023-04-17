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
}

interface Props {
  title: string;
  description: string;
  url: string;
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
`;

const StyledHeader = styled.h2<IsTwoImagesProps>`
  font-weight: ${fonts.weight.bold};
  ${fonts.sizes('30px', '38px')};
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

const StyledLinkContainer = styled.div<IsTwoImagesProps>`
  display: flex;
  flex-direction: ${(props) => (props.isTwoImages ? 'column' : 'row')};
`;

interface SafeLinkContainerProps {
  url: string;
  urlText: string;
}

const SafeLinkContainer = ({ url, urlText }: SafeLinkContainerProps) => (
  <SafeLink className="o-text-link" to={url}>
    {urlText}
    <Forward />
  </SafeLink>
);

const FrontpageKampanjeblokk = ({ url, firstImage, secondImage, title, description }: Props) => {
  const isTwoImages = !!firstImage;
  const UrlText = 'NDLA film her';
  return (
    <Wrapper>
      <StyledHeader isTwoImages={isTwoImages}>{title}</StyledHeader>
      {isMobile ? (
        <>
          <StyledContentWrapper>
            {firstImage && <StyledImage alt={firstImage.alttext.alttext} width={160} src={firstImage.image.imageUrl} />}
            <StyledDescription>{description}</StyledDescription>
          </StyledContentWrapper>
          <StyledLinkContainer isTwoImages={isTwoImages}>
            {isTwoImages && <SafeLinkContainer url={url} urlText={UrlText} />}
            <StyledImage alt={secondImage.alttext.alttext} width={288} src={secondImage.image.imageUrl} />
            {!isTwoImages && <SafeLinkContainer url={url} urlText={UrlText} />}
          </StyledLinkContainer>
        </>
      ) : (
        <StyledContentWrapper>
          {firstImage && <StyledImage alt={firstImage.alttext.alttext} width={160} src={firstImage.image.imageUrl} />}
          <div>
            <StyledDescription>{description}</StyledDescription>
            <SafeLinkContainer url={url} urlText={UrlText} />
          </div>
          <StyledImage alt={secondImage.alttext.alttext} width={200} src={secondImage.image.imageUrl} />
        </StyledContentWrapper>
      )}
    </Wrapper>
  );
};

export default FrontpageKampanjeblokk;
