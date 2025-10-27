/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { breakpoints } from "@ndla/core";
import { ShareBoxLine } from "@ndla/icons";
import { Heading, Image, Text } from "@ndla/primitives";
import { SafeLinkButton } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";

const Container = styled("div", {
  base: {
    display: "flex",
    padding: "medium",
    borderRadius: "xsmall",
    border: "1px solid",
    borderColor: "stroke.default",
    boxShadow: "full",
    marginBlockEnd: "medium",
    gap: "medium",
    tabletWideDown: {
      padding: "xsmall",
    },
    tabletDown: {
      flexDirection: "column",
      gap: "0",
      padding: "0",
    },
  },
});

const ContentWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "xsmall",
    flex: "1",
    tabletDown: {
      padding: "xsmall",
    },
  },
});

const StyledImage = styled(Image, {
  base: {
    objectFit: "cover",
    borderRadius: "xsmall",
    width: "fit-content",
    aspectRatio: "1/1",
    tabletDown: {
      width: "100%",
      borderRadius: "0",
    },
  },
});

const StyledText = styled(Text, {
  base: {
    flex: "1",
  },
});

interface ImageMeta {
  src: string | undefined;
  alt: string;
}

interface Props {
  image?: ImageMeta;
  title: string;
  caption: string;
  url: string;
  buttonText: string;
}

export const ResourceBox = ({ image, title, caption, url, buttonText }: Props) => {
  return (
    <Container>
      {image ? (
        <StyledImage
          src={image.src}
          alt={image.alt}
          sizes={`(min-width: ${breakpoints.desktop}) 150px, (max-width: ${breakpoints.tablet} ) 400px, 200px`}
          variant="rounded"
        />
      ) : null}
      <ContentWrapper>
        <Heading textStyle="label.large" fontWeight="bold" asChild consumeCss>
          <h3>{title}</h3>
        </Heading>
        <StyledText textStyle="body.medium">{caption}</StyledText>
        <SafeLinkButton to={url} target="_blank" variant="secondary">
          {buttonText}
          <ShareBoxLine />
        </SafeLinkButton>
      </ContentWrapper>
    </Container>
  );
};
