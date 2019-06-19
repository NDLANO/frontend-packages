import { string } from "prop-types";

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

export type subjectProp = {
  text: string;
  url: string;
}

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
  hideSearch: Boolean;
  inputHasFocus: Boolean;
  infoText: React.ReactNode;
  searchResult: Array<SearchResult>;
  languageOptions: string;
};

export type categorySubjects = {
  name: string;
}

export type category = {
  name: string;
  subjects: Array<categorySubjects>;
}