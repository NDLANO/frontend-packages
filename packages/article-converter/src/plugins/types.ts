/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, HTMLReactParserOptions } from 'html-react-parser';

export interface TransformOptions {
  isOembed?: boolean;
  subject?: string;
  path?: string;
  previewAlt?: boolean;
  frontendDomain?: string;
}

export type PluginType = (
  element: Element,
  options: HTMLReactParserOptions,
  metaData: TransformOptions,
) => JSX.Element | undefined | null;
