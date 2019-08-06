export type Link = {
  text: string;
  to: string;
};

export type Messages = {
  closeSearchLabel: string;
};

export type Resource = {
  path: string;
  boldName: string;
  name: string;
  subName: string;
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

export type FrontPageHeaderProps = {
  searchFieldValue: string;
  links: Array<Link>;
  onSearchFieldChange: VoidFunction;
  searchFieldPlaceholder: string;
  onSearchDeactiveFocusTrap: VoidFunction;
  onSearchInputFocus: VoidFunction;
  onSearch: (event: MouseEvent) => void;
  messages: Messages;
  allResultUrl: Array<any>;
  hideSearch: boolean;
  inputHasFocus: boolean;
  infoText: React.ReactNode;
  searchResult: Array<SearchResult>;
  languageOptions: string;
};

export type elementRectType = {
  fromX: number;
  fromY: number;
  fromScale: number;
};
