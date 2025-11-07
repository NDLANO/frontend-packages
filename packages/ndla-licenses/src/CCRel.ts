/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const resourceTypeToNamespaceMap = {
  video: "MovingImage",
  image: "Image",
  audio: "Sound",
  podcast: "Sound",
  text: "Text",
  h5p: "InteractiveResource",
} as const;

export type ResourceTypes = keyof typeof resourceTypeToNamespaceMap;

export const getResourceTypeNamespace = (type: ResourceTypes | undefined | null) => {
  const namespace = type ? resourceTypeToNamespaceMap[type] : null;
  return namespace ? `http://purl.org/dc/dcmitype/${namespace}` : null;
};

export const metaTypes = {
  author: "author",
  copyrightHolder: "copyrightHolder",
  contributor: "contributor",
  title: "title",
  other: "other",
  otherWithoutDescription: "otherWithoutDescription",
} as const;

export type MetaType = keyof typeof metaTypes;
