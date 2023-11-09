/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ElementType } from 'react';
import { EmbedMetaData } from '@ndla/types-embed';

export type HeartButtonType = ElementType<{ embed: Extract<EmbedMetaData, { status: 'success' }> }>;

export type RenderContext = 'article' | 'embed' | 'editor';
