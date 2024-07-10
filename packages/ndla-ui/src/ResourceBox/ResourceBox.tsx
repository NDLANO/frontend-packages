/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Launch } from "@ndla/icons/common";
import { Heading, Image, Text } from "@ndla/primitives";
import { SafeLinkButton } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { token } from "@ndla/styled-system/tokens";

const Container = styled("div", {
  base: {
    display: "flex",
    padding: "medium",
    borderRadius: "xsmall",
    border: "1px solid",
    borderColor: "stroke.default",
    boxShadow: "full",
    gap: "medium",
    // TODO: Consider mobile styling
    //   ${mq.range({ until: breakpoints.desktop })} {
    //     gap: 0;
    //     flex-direction: column;
    //     padding-top: ${spacing.medium};
    //     text-align: center;
    //   }
  },
});

const ContentWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
    flex: "1",
  },
});

// const ResourceBoxContainer = styled.div`
//   display: flex;
//   position: relative;
//   padding: ${spacing.nsmall};
//   border-radius: 5px;
//   border: 1px solid ${colors.brand.light};
//   font-family: ${fonts.sans};
//   box-shadow: 0px 20px 35px -15px rgba(32, 88, 143, 0.15);
//   gap: ${spacing.medium};
//
// `;
//
// const Title = styled.h3`
//   font-weight: ${fonts.weight.bold};
//   ${fonts.sizes(18)};
//   margin-top: 0;
// `;
//
// const Caption = styled.p`
//   ${fonts.sizes(14)};
// `;
//
// const ContentWrapper = styled.div`
//   flex-basis: 0;
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   ${mq.range({ until: breakpoints.desktop })} {
//     align-items: center;
//     padding-top: ${spacing.small};
//   }
// `;
//
// const StyledImage = styled(Image)`
//   && {
//     object-fit: cover;
//     width: 134px;
//     height: 134px;
//     border-radius: 5px;
//
//     ${mq.range({ until: breakpoints.desktop })} {
//       width: 200px;
//       height: 200px;
//     }
//   }
// `;

const StyledImage = styled(Image, {
  base: {
    objectFit: "cover",
    borderRadius: "xsmall",
    height: "100%",
    width: "min-content",
    aspectRatio: "1/1",
  },
});

const StyledText = styled(Text, {
  base: {
    flex: "1",
  },
});

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
    <Container>
      <StyledImage
        src={image.src}
        alt={image.alt}
        height="150"
        width="150"
        fallbackWidth={150}
        sizes={`(min-width: ${token("breakpoints.desktop")}) 150px, 200px`}
      />
      <ContentWrapper>
        <Heading textStyle="label.large" fontWeight="bold" asChild consumeCss>
          <h3>{title}</h3>
        </Heading>
        <StyledText textStyle="body.medium">{caption}</StyledText>
        <SafeLinkButton to={url} target="_blank" variant="secondary">
          {buttonText}
          <Launch />
        </SafeLinkButton>
      </ContentWrapper>
    </Container>
  );
  // return (
  //   <ResourceBoxContainer>
  //     <StyledImage src={image.src} alt={image.alt} />
  //     <ContentWrapper>
  //       <Title>{title}</Title>
  //       <Caption>{caption}</Caption>
  //       <SafeLinkButton to={url} target="_blank" variant="secondary">
  //         {buttonText}
  //         <Launch />
  //       </SafeLinkButton>
  //     </ContentWrapper>
  //   </ResourceBoxContainer>
  // );
};

export default ResourceBox;
