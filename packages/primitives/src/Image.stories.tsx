/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { Image, type ImageCrop, type ImageFocalPoint, Img, Picture } from "./Image";

export default {
  title: "Primitives/Image",
  component: Image,
  tags: ["autodocs"],
  args: {
    alt: "Mann med maske",
    src: "https://api.test.ndla.no/image-api/raw/id/604",
  },
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof Image>;

const crop: ImageCrop = {
  startX: 14.59,
  endX: 79.63,
  startY: 20,
  endY: 100,
};

const focalPoint: ImageFocalPoint = {
  x: 65.08,
  y: 45.28,
};

export const Default: StoryObj<typeof Image> = {};

export const Rounded: StoryObj<typeof Image> = {
  args: {
    variant: "rounded",
  },
};

export const Crop: StoryObj<typeof Image> = {
  args: {
    crop,
  },
};

export const FocalPoint: StoryObj<typeof Image> = {
  args: {
    focalPoint,
    sizes: "(min-width: 320px) 320px",
  },
};

export const LazyLoad: StoryObj<typeof Image> = {
  args: {
    alt: "Lyspære",
    src: "https://api.staging.ndla.no/image-api/raw/Ide.jpg",
    loading: "lazy",
  },
};

export const Gif: StoryObj<typeof Image> = {
  args: {
    alt: "Person scroller gjennom facebook-feed på en smarttelefon. Repeterende GIF-animasjon. ",
    src: "https://api.test.ndla.no/image-api/raw/uJkz3cBr.gif",
  },
};

export const Svg: StoryObj<typeof Image> = {
  args: {
    alt: "Osmose",
    src: "https://api.ndla.no/image-api/raw/ESJ2EgIi.svg",
  },
};

/**
 * This isn't really needed. But if you really need to style the picture element, or if you need to add additional sources, this option is available.
 */
export const Standalone = () => (
  <Picture
    src="https://api.test.ndla.no/image-api/raw/id/604"
    contentType="image/png"
    crop={crop}
    focalPoint={focalPoint}
  >
    <Img
      src="https://api.test.ndla.no/image-api/raw/id/604"
      alt="Mann med maske"
      contentType="image/png"
      crop={crop}
      focalPoint={focalPoint}
    />
  </Picture>
);
