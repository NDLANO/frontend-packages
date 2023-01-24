/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PluginType } from '../types';
import { AudioEmbedPlugin } from './AudioEmbedPlugin';
import { ImageEmbedPlugin } from './ImageEmbedPlugin';

export const embedPlugins: Record<string, PluginType> = {
  image: ImageEmbedPlugin,
  audio: AudioEmbedPlugin,
};
