/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { ComponentPropsWithRef, forwardRef } from "react";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { H5pMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder, { ErrorPlaceholder } from "./EmbedErrorPlaceholder";

interface Props extends ComponentPropsWithRef<"figure"> {
  embed: H5pMetaData;
}

const StyledFigure = styled(Figure, {
  base: {
    "& iframe": {
      height: "auto",
      width: "100%",
    },
  },
});

const FigureOembed = styled(Figure, {
  base: {
    width: "100%",
    "& iframe": {
      width: "100%",
    },
  },
});

const H5pEmbed = forwardRef<HTMLElement, Props>(({ embed, children, ...rest }, ref) => {
  if (embed.status === "error") {
    return (
      <EmbedErrorPlaceholder type="h5p" {...rest} ref={ref}>
        <ErrorPlaceholder type="h5p" />
        {children}
      </EmbedErrorPlaceholder>
    );
  }

  if (embed.data.oembed) {
    return (
      <FigureOembed {...rest} data-embed-type="h5p" ref={ref}>
        {!!embed.data.oembed.html && parse(embed.data.oembed.html)}
        {children}
      </FigureOembed>
    );
  }

  return (
    <StyledFigure data-embed-type="h5p" {...rest} ref={ref}>
      {children}
      <iframe title={embed.embedData.url} aria-label={embed.embedData.url} src={embed.embedData.url} />
    </StyledFigure>
  );
});

export default H5pEmbed;
