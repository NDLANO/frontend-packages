/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HeartButtonType, CanonicalUrlFunc, RenderContext } from '@ndla/ui';
import { Element, HTMLReactParserOptions } from 'html-react-parser';

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
  articleLanguage?: string;
  canonicalUrls?: {
    image?: CanonicalUrlFunc<'image'>;
  };
  renderContext?: RenderContext;
}

export type PluginType = (
  element: Element,
  options: HTMLReactParserOptions,
  metaData: TransformOptions,
) => JSX.Element | undefined | null;
