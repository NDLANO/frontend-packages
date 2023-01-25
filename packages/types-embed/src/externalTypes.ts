import { IImageMetaInformationV2 } from '@ndla/types-image-api';
import { MetaData, OembedProxyResponse } from '.';

export interface OembedEmbedData {
  resource: 'external';
  url: string;
  type?: string;
  metaData?: any;
  caption?: string;
  title?: string;
  height?: string;
  imageid?: string;
}

export interface OembedData {
  oembed: OembedProxyResponse;
  iframeImage?: IImageMetaInformationV2;
}

export type OembedMetaData = MetaData<OembedEmbedData, OembedData>;
