/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ElementType } from "react";
import { IImageMetaInformationV3 } from "@ndla/types-backend/image-api";
import { EmbedMetaData } from "@ndla/types-embed";

export type HeartButtonType = ElementType<{
  embed: Extract<EmbedMetaData, { status: "success" }>;
}>;

export type EmbedParameter<T extends EmbedMetaData["resource"]> = Partial<
  Extract<EmbedMetaData, { status: "success"; resource: T }>
>;

export type CanonicalUrlFuncs = {
  image?: (image: IImageMetaInformationV3) => string;
};

export type RenderContext = "article" | "embed";
