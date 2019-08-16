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
  path: string;
  name: string;
  subject?: string;
  resourceTypes?: Array<ResourceTypes>;
};

export type SearchResult = {
  title: string;
  contentType: string;
  resources: Array<Resource>;
};

export interface ContentTypeResultType {
  title: string;
  resources: Array<{
    path: string;
    name: string;
  }>;
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
