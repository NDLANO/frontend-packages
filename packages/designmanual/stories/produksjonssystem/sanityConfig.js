const sanityClient = require('@sanity/client');

export const sanityConfig = {
  projectId: 'zwug2pao',
  dataset: 'articles',
  token: '',
  useCdn: true,
};

export const client = sanityClient(sanityConfig);
