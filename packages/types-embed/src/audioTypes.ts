/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IAudioMetaInformation } from '@ndla/types-backend/audio-api';
import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import { MetaData } from '.';

export type AudioEmbedData = {
  resource: 'audio';
  resource_id: string;
  type: string;
  url: string;
  pageUrl?: string;
};

export interface AudioMeta extends IAudioMetaInformation {
  imageMeta?: IImageMetaInformationV3;
}

export type AudioMetaData = MetaData<AudioEmbedData, AudioMeta>;
