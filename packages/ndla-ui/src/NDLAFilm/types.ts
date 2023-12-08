/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export interface MovieType {
  id: number | string;
  metaDescription: string;
  resourceTypes: MovieResourceType[];
  metaImage?: {
    alt: string;
    url: string;
  };
  path: string;
  title: string;
}

export interface MovieResourceType {
  id: string;
  name: string;
}
