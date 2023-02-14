/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IAudioMetaInformation } from '@ndla/types-audio-api';
import { IImageMetaInformationV2 } from '@ndla/types-image-api';
import { MetaData } from '.';

export type AudioEmbedData = {
  resource: 'audio';
  resourceId: string;
  type: string;
  url: string;
};

export interface AudioMeta extends IAudioMetaInformation {
  imageMeta?: IImageMetaInformationV2;
}

export type AudioMetaData = MetaData<AudioEmbedData, AudioMeta>;
