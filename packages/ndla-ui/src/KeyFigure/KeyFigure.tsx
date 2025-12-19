/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { ark } from "@ark-ui/react";
import { Image } from "@ndla/primitives";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";

const keyfigureRecipe = sva({
  slots: ["root", "image", "title", "subtitle"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "xsmall",
      "&:not(:has(> img))": {
        paddingBlock: "xxlarge",
      },
    },
    image: {
      height: "surface.3xsmall",
      width: "surface.3xsmall",
      borderRadius: "xsmall",
    },
    title: {
      textStyle: "heading.large",
      textAlign: "center",
    },
    subtitle: {
      textStyle: "title.medium",
      textAlign: "center",
    },
  },
});

const { withProvider, withContext } = createStyleContext(keyfigureRecipe);

export const KeyFigureRoot = withProvider(ark.div, "root", { baseComponent: true });

export const KeyFigureImage = withContext(Image, "image");

export const KeyFigureTitle = withContext(ark.div, "title");

export const KeyFigureSubTitle = withContext(ark.div, "subtitle");

export interface Props {
  image?: {
    src?: string;
    alt?: string;
  };
  title: string;
  subtitle: string;
}

export const KeyFigure = ({ image, title, subtitle }: Props) => {
  return (
    <KeyFigureRoot data-embed-type="key-figure">
      {!!image && <KeyFigureImage src={`${image?.src}?width=150`} width={150} height={150} alt={image.alt ?? ""} />}
      <KeyFigureTitle>{parse(title)}</KeyFigureTitle>
      <KeyFigureSubTitle>{parse(subtitle)}</KeyFigureSubTitle>
    </KeyFigureRoot>
  );
};
