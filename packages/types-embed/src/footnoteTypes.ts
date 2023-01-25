import { MetaData } from '.';

export interface FootnoteEmbedData {
  resource: 'footnote';
  title: string;
  type: string;
  year: string;
  edition: string;
  publisher: string;
  authors: string;
}

export interface FootnoteData {
  entryNum: number;
  authors: string[];
  year: string;
}

export type FootnoteMetaData = MetaData<FootnoteEmbedData, FootnoteData>;
