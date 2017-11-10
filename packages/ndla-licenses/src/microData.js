export const resourceTypes = {
  video: 'video',
  audio: 'audio',
  text: 'text',
  h5p: 'h5p',
};

export const getResourceTypeNamespace = (type) => {
  switch (type) {
    case resourceTypes.video:
      return 'http://purl.org/dc/dcmitype/MovingImage';
    case resourceTypes.audio:
      return 'http://purl.org/dc/dcmitype/Sound';
    case resourceTypes.text:
      return 'http://purl.org/dc/dcmitype/Text';
    case resourceTypes.h5p:
      return 'http://purl.org/dc/dcmitype/InteractiveResource';
    default:
      return null;
  }
};

export const microDataTypes = {
  person: 'person',
  organization: 'organization',
  thing: 'thing',
  url: 'url',
  creativeWork: 'creativeWork',
};

export const getMicroDataNamespaceByType = (type) => {
  if (!type) throw new Error('type is not defined');
  const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
  return `http://schema.org/${capitalized}`;
}

export const metaTypes = {
  author: 'author',
  copyrightHolder: 'copyrightHolder',
  contributor: 'contributor',
  title: 'title',
  other: 'other',
};

export const getMicroDataNamespaceByMicroDataTypeWithFallback = (metaType, microDataType = null) => {
  if (microDataType) {
    return getMicroDataNamespaceByType(microDataType);
  }

  let fallbackMicroDataType = microDataTypes.person;

  if (metaType === metaTypes.copyrightHolder) {
    fallbackMicroDataType = microDataTypes.organization;
  }

  return getMicroDataNamespaceByType(fallbackMicroDataType);
};
