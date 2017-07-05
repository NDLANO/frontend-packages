
/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import ImageSearch from 'ndla-image-search';

export const ImageSearcher = () => {
  const imageSelect = (image) => {
    console.log(image);
  };

  const ndlaClient = {
    apiUrl: 'https://test.api.ndla.no',
    token: 'ndla-token',
  };

  return (
    <ImageSearch searchPlaceholder="Søk i bilder" searchButtonTitle="Søk" ndlaClient={ndlaClient} locale="nb" onImageSelect={imageSelect} />
  );
};

export default ImageSearcher;
