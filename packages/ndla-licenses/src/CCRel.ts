/*
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type ResourceTypes = 'video' | 'image' | 'audio' | 'text' | 'h5p' | 'podcast';

export const resourceTypes = {
  video: 'video',
  image: 'image',
  audio: 'audio',
  text: 'text',
  h5p: 'h5p',
  podcast: 'podcast',
};

export const getResourceTypeNamespace = (type: ResourceTypes | undefined | null) => {
  switch (type) {
    case resourceTypes.video:
      return 'http://purl.org/dc/dcmitype/MovingImage';
    case resourceTypes.image:
      return 'http://purl.org/dc/dcmitype/Image';
    case resourceTypes.audio:
    case resourceTypes.podcast:
      return 'http://purl.org/dc/dcmitype/Sound';
    case resourceTypes.text:
      return 'http://purl.org/dc/dcmitype/Text';
    case resourceTypes.h5p:
      return 'http://purl.org/dc/dcmitype/InteractiveResource';
    default:
      return null;
  }
};

export enum metaTypes {
  author = 'author',
  copyrightHolder = 'copyrightHolder',
  contributor = 'contributor',
  title = 'title',
  other = 'other',
  otherWithoutDescription = 'otherWithoutDescription',
}
