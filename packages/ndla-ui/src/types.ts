/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";

const locales = ["nb", "nn", "en", "se", "sma"] as const;
export type Locale = (typeof locales)[number];

export type Link = {
  text: string;
  to: string;
};

export type Messages = {
  closeSearchLabel: string;
};

type ResourceTypes = {
  name: string;
};

export type Resource = {
  id: string;
  name: string;
  contentUri?: string;
  path: string;
  primary?: boolean;
  rank?: number;
  subject?: string;
  resourceTypes?: Array<ResourceTypes>;
  contentType?: string;
  active?: boolean;
  additional?: boolean;
};

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
  processed: boolean;
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
  title: string;
  introduction: ReactNode;
  content: ReactNode;
  footNotes: Array<FootNote>;
  copyright?: Copyright;
  published: string;
}

export type SearchResult = {
  title: string;
  contentType: string;
  resources: Array<Resource>;
};

export interface ContentTypeResultType {
  title?: string;
  contentType?: string;
  resources: Array<Resource>;
}

export type subjectProp = {
  text: string;
  url: string;
  yearInfo?: string;
  beta?: boolean;
};

export type category = {
  name: string;
  subjects: Array<subjectProp>;
};

export type elementRectType = {
  fromX: number;
  fromY: number;
  fromScale: number;
};

interface GrepCode {
  id: string;
  title: string;
}

export interface CompetenceGoalsItemType extends GrepCode {
  goals: {
    id: string;
    text: string;
    url?: string;
  }[];
  selected?: boolean;
  isOembed?: boolean;
}

export interface CoreElementsItemType extends GrepCode {
  text?: string;
  url?: string;
  isOembed?: boolean;
}

export type NotionMedia = {
  type: "video" | "other";
  element: ReactNode;
};
