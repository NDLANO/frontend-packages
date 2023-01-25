import { MetaData } from '.';

export interface BrightcoveData {
  resource: 'brightcove';
  caption: string;
  cover: string;
  custom_fields: {
    licenseInfo: string[];
    license: string;
    accountId: string;
  };
  description: string;
  download: string;
  iframe: {
    width: string;
    height: string;
    src: string;
  };
  name: string;
  player: string;
  src: string;
  uploadDate: string;
  videoId: string;
}

export type BrightcoveEmbedData = {
  resource: 'brightcove' | 'video';
  videoid: string;
  caption: string;
  url?: string;
  account: string;
  player: string;
  title: string;
  metaData?: any;
};

export type IframeMetaData = MetaData<BrightcoveEmbedData, BrightcoveData | undefined>;
