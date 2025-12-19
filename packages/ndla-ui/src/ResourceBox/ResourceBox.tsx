/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ark } from "@ark-ui/react";
import { breakpoints } from "@ndla/core";
import { ShareBoxLine } from "@ndla/icons";
import { Heading, Image, Text } from "@ndla/primitives";
import { SafeLinkButton } from "@ndla/safelink";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { ImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";

const resourceBoxRecipe = sva({
  slots: ["root", "content", "image", "text"],
  base: {
    root: {
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
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "xsmall",
      flex: "1",
      tabletDown: {
        padding: "xsmall",
      },
    },
    image: {
      objectFit: "cover",
      borderRadius: "xsmall",
      width: "fit-content",
      aspectRatio: "1/1",
      tabletDown: {
        width: "100%",
        borderRadius: "0",
      },
    },
    text: {
      flex: "1",
    },
  },
});

const { withProvider, withContext } = createStyleContext(resourceBoxRecipe);

const ResourceBoxRoot = withProvider(ark.div, "root", { baseComponent: true });

const ResourceBoxContent = withContext(ark.div, "content", { baseComponent: true });

const ResourceBoxImage = withContext(Image, "image");

const ResourceBoxText = withContext(Text, "text");

interface Props {
  image?: ImageMetaInformationV3DTO;
  title: string;
  imageAlt?: string;
  caption: string;
  url: string;
  buttonText: string;
}

export const ResourceBox = ({ image, title, caption, url, buttonText, imageAlt }: Props) => {
  return (
    <ResourceBoxRoot>
      {image ? (
        <ResourceBoxImage
          src={image.image.imageUrl}
          alt={(imageAlt !== undefined ? imageAlt : image.alttext.alttext) ?? ""}
          variants={image.image.variants}
          width={image.image.dimensions?.width}
          height={image.image.dimensions?.height}
          sizes={`(min-width: ${breakpoints.desktop}) 150px, (max-width: ${breakpoints.tablet} ) 400px, 200px`}
          variant="rounded"
        />
      ) : null}
      <ResourceBoxContent>
        <Heading textStyle="label.large" fontWeight="bold" asChild consumeCss>
          <h3>{title}</h3>
        </Heading>
        <ResourceBoxText textStyle="body.medium">{caption}</ResourceBoxText>
        <SafeLinkButton to={url} target="_blank" variant="secondary">
          {buttonText}
          <ShareBoxLine />
        </SafeLinkButton>
      </ResourceBoxContent>
    </ResourceBoxRoot>
  );
};
