/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, HTMLReactParserOptions } from 'html-react-parser';
import { HeartButtonType } from '@ndla/ui';

export interface DynamicComponents {
  heartButton?: HeartButtonType;
}

export interface TransformOptions {
  isOembed?: boolean;
  subject?: string;
  path?: string;
  previewAlt?: boolean;
  frontendDomain?: string;
  components?: DynamicComponents;
}

export type PluginType = (
  element: Element,
  options: HTMLReactParserOptions,
  metaData: TransformOptions,
) => JSX.Element | undefined | null;
