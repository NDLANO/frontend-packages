/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode } from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface Contributor {
  type: string;
  name: string;
}

export interface License {
  license: string;
}

export interface Copyright {
  license?: License;
  creators: Array<Contributor>;
  rightsholders: Array<Contributor>;
  processors: Array<Contributor>;
  origin?: string;
  processed?: boolean;
}

export interface FootNote {
  ref: number;
  title: string;
  year: string;
  authors: Array<string>;
  edition?: string;
  publisher?: string;
  url?: string;
}

export interface Article {
  title: ReactNode;
  introduction: ReactNode;
  content: ReactNode;
  footNotes: Array<FootNote>;
  copyright?: Copyright;
  published: string;
  disclaimer?: ReactNode;
}
