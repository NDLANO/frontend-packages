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
  showVisualElement?: boolean;
  subject?: string;
  path?: string;
  shortPath?: string;
  draftConcept?: boolean;
  previewH5p?: boolean;
  previewAlt?: boolean;
  absoluteUrl?: boolean;
  frontendDomain: string;
}

export type PluginType = (
  element: Element,
  options: HTMLReactParserOptions,
  metaData: TransformOptions,
) => JSX.Element | undefined | null;
