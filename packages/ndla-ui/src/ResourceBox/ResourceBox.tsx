/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { breakpoints, fonts, mq, colors, spacing } from "@ndla/core";
import { Launch } from "@ndla/icons/common";
import { Image } from "@ndla/primitives";
import { SafeLinkButton } from "@ndla/safelink";

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
  ${fonts.sizes(18)};
  margin-top: 0;
`;

const Caption = styled.p`
  ${fonts.sizes(14)};
`;

const ContentWrapper = styled.div`
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

interface ImageMeta {
  src: string;
  alt: string;
}

interface Props {
  image: ImageMeta;
  title: string;
  caption: string;
  url: string;
  buttonText: string;
}

export const ResourceBox = ({ image, title, caption, url, buttonText }: Props) => {
  return (
    <ResourceBoxContainer>
      <StyledImage src={image.src} alt={image.alt} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
        <SafeLinkButton to={url} target="_blank" variant="secondary">
          {buttonText}
          <Launch aria-hidden />
        </SafeLinkButton>
      </ContentWrapper>
    </ResourceBoxContainer>
  );
};

export default ResourceBox;
