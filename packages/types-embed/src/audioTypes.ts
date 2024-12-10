/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { IAudioMetaInformation } from "@ndla/types-backend/audio-api";
import type { IImageMetaInformationV3 } from "@ndla/types-backend/image-api";
import type { MetaData } from ".";

export type AudioEmbedData = {
  resource: "audio";
  resourceId: string;
  type: string;
  url: string;
  pageUrl?: string;
};

export interface AudioMeta extends IAudioMetaInformation {
  imageMeta?: IImageMetaInformationV3;
}

export type AudioMetaData = MetaData<AudioEmbedData, AudioMeta>;
