import { MetaData } from '.';

export interface ContentLinkEmbedData {
  resource: 'content-link';
  contentId: string;
  linkText?: string;
  openIn?: string;
  contentType?: string;
}

export interface ContentLinkData {
  path: string;
}

export type ContentLinkMetaData = MetaData<ContentLinkEmbedData, ContentLinkData>;
