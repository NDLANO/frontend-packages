/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Heading, Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";

interface Props {
  title: string;
  url: string;
}

const StyledIframe = styled("iframe", {
  base: {
    width: "100%",
  },
});

const StyledListElement = styled("li", {
  base: {
    listStyle: "none",
  },
});

const StyledFigure = styled(Figure, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
  },
});

export const PdfFile = ({ title, url }: Props) => {
  return (
    <StyledListElement>
      <StyledFigure>
        <Heading asChild consumeCss textStyle="title.medium">
          <h4>{title}</h4>
        </Heading>
        <StyledIframe title={title} height="1050" src={url} />
      </StyledFigure>
    </StyledListElement>
  );
};
