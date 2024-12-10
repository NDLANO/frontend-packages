/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { IAudioMetaInformationDTO } from "@ndla/types-backend/audio-api";
import type { IImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import type { MetaData } from ".";

export type AudioEmbedData = {
  resource: "audio";
  resourceId: string;
  type: string;
  url: string;
  pageUrl?: string;
};

export interface AudioMeta extends IAudioMetaInformationDTO {
  imageMeta?: IImageMetaInformationV3DTO;
}

export type AudioMetaData = MetaData<AudioEmbedData, AudioMeta>;
