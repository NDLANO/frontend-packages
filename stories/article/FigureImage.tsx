/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IImageMetaInformationV3 } from "@ndla/types-backend/image-api";
import { ImageEmbedData, ImageMetaData } from "@ndla/types-embed";

import { ImageEmbed } from "@ndla/ui";

interface Props {
  embedData?: Partial<Omit<ImageEmbedData, "resource" | "resourceId">>;
  error?: boolean;
  type?: "default" | "math";
}

const metaData: IImageMetaInformationV3 = {
  id: "4025",
  metaUrl: "https://api.test.ndla.no/image-api/v3/images/4025",
  title: { title: "Markedsundersøkelse", language: "und" },
  alttext: {
    alttext: "Stor hånd med forstørrelsesglass over liten mann med snakkeboble. Illustrasjon.",
    language: "und",
  },
  copyright: {
    license: {
      license: "CC-BY-NC-SA-4.0",
      description: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },
    origin: "http://www.scanpix.no",
    creators: [{ type: "Originator", name: "Gary Waters" }],
    processors: [],
    rightsholders: [
      { type: "Supplier", name: "Corbis" },
      { type: "Supplier", name: "NTB scanpix" },
    ],
    processed: false,
  },
  tags: { tags: [], language: "nb" },
  caption: { caption: "", language: "nb" },
  supportedLanguages: ["und"],
  created: "2019-06-17T13:15:40.000Z",
  createdBy: "r0gHb9Xg3li4yyXv0QSGQczV3bviakrT",
  modelRelease: "not-set",
  editorNotes: [],
  image: {
    fileName: "/42-45210905.jpg",
    size: 119513,
    contentType: "image/jpeg",
    imageUrl: "https://api.test.ndla.no/image-api/raw/42-45210905.jpg",
    dimensions: { width: 1000, height: 883 },
    language: "und",
  },
};

const mathMetaData: IImageMetaInformationV3 = {
  id: "42078",
  metaUrl: "https://api.test.ndla.no/image-api/v3/images/42078",
  title: { title: "Løsning  oppg 2.2 a", language: "und" },
  alttext: { alttext: "", language: "nb" },
  copyright: {
    license: {
      license: "CC-BY-NC-SA-4.0",
      description: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },
    origin: "https://www.geogebra.org/",
    creators: [{ type: "Originator", name: "Bjarne Skurdal" }],
    processors: [],
    rightsholders: [],
    processed: false,
  },
  tags: { tags: ["geogebra", "functions", "graph"], language: "und" },
  caption: { caption: "", language: "nb" },
  supportedLanguages: ["und"],
  created: "2018-12-19T13:08:37.000Z",
  createdBy: "r0gHb9Xg3li4yyXv0QSGQczV3bviakrT",
  modelRelease: "not-set",
  editorNotes: [],
  image: {
    fileName: "/oppg_2_2_a_vekstfart_spraknoytral.png",
    size: 356053,
    contentType: "image/png",
    imageUrl: "https://api.test.ndla.no/image-api/raw/oppg_2_2_a_vekstfart_spraknoytral.png",
    dimensions: { width: 3000, height: 1656 },
    language: "und",
  },
};

const defaultImageEmbedData: ImageEmbedData = {
  resource: "image",
  resourceId: "61181",
  size: "full",
  align: "",
  alt: "Stor hånd med forstørrelsesglass over liten mann med snakkeboble. Illustrasjon.",
  caption: "",
  url: "https://api.test.ndla.no/image-api/v2/images/4025",
};

const mathImageEmbedData: ImageEmbedData = {
  resource: "image",
  resourceId: "61181",
  size: "full",
  align: "",
  alt: "Tenåringsjente med lyse fletter slenger på håret. Foto. ",
  caption: "Modellklarert.",
  url: "https://api.test.ndla.no/image-api/v2/images/61181",
};

const FigureImage = ({ embedData, type = "default", error }: Props) => {
  const embed: ImageMetaData = error
    ? {
        resource: "image",
        status: "error",
        message: "Failed to fetch image",
        embedData: {
          ...(type === "default" ? defaultImageEmbedData : mathImageEmbedData),
          ...embedData,
        },
      }
    : {
        resource: "image",
        embedData: {
          ...(type === "default" ? defaultImageEmbedData : mathImageEmbedData),
          ...embedData,
        },
        data: type === "default" ? metaData : mathMetaData,
        status: "success",
      };

  return <ImageEmbed embed={embed} />;
};

export default FigureImage;
