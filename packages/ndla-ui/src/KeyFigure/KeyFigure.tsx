/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { styled } from "@ndla/styled-system/jsx";

const ContentWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const StyledImage = styled("img", {
  base: {
    height: "surface.3xsmall",
    width: "surface.3xsmall",
  },
});

const TitleWrapper = styled("div", {
  base: {
    textStyle: "heading.large",
    textAlign: "center",
  },
});

const SubTitleWrapper = styled("div", {
  base: {
    textStyle: "title.medium",
    textAlign: "center",
  },
});

interface Props {
  image?: {
    src?: string;
    alt?: string;
  };
  title: string;
  subtitle: string;
}

const KeyFigure = ({ image, title, subtitle }: Props) => {
  return (
    <ContentWrapper data-embed-type="key-figure">
      {image && <StyledImage src={`${image?.src}?width=150`} width={150} height={150} alt={image?.alt} />}
      <TitleWrapper>{parse(title)}</TitleWrapper>
      <SubTitleWrapper>{parse(subtitle)}</SubTitleWrapper>
    </ContentWrapper>
  );
};

export default KeyFigure;
