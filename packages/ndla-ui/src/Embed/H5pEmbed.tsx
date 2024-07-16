/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { H5pMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";

interface Props {
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

const H5pEmbed = ({ embed }: Props) => {
  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type="h5p" />;
  }

  if (embed.data.oembed) {
    return <FigureOembed dangerouslySetInnerHTML={{ __html: embed.data.oembed.html ?? "" }} />;
  }

  return (
    <StyledFigure>
      <iframe title={embed.embedData.url} aria-label={embed.embedData.url} src={embed.embedData.url} />
    </StyledFigure>
  );
};

export default H5pEmbed;
