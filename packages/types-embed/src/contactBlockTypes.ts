import { IImageMetaInformationV2 } from '@ndla/types-image-api';
import { MetaData } from '.';
export interface ContactBlockEmbedData {
  resource: 'contact-block';
  title: string;
  name: string;
  email: string;
  imageId: string;
  summary: string;
  color: 'pink' | 'green';
}
export interface ContactBlockData {
  image: IImageMetaInformationV2;
}

export type ContactBlockMetaData = MetaData<ContactBlockEmbedData, ContactBlockData>;
