/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

// @ts-ignore
import FigureWithLicense from '../article/FigureWithLicense';

// @ts-ignore
import FigureImage from '../article/FigureImage';

type VisualElementProps = {
  hideLicence?: boolean;
};
const Video = ({ hideLicence }: VisualElementProps) => (
  <FigureWithLicense
    type="full-column"
    resizeIframe
    caption="Utholdenhet - animasjon av oksygentransporten"
    hideLicence={hideLicence}>
    <iframe
      title="Video: Utholdenhet - animasjon av oksygentransporten"
      height="270"
      width="480"
      frameBorder="0"
      src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
      allowFullScreen
    />
  </FigureWithLicense>
);

const Image = () => (
  <FigureImage type="full-column" alt="alt" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" />
);

const H5p = ({ hideLicence }: VisualElementProps) => (
  <FigureWithLicense
    type="full-column"
    resizeIframe
    caption="Utholdenhet - animasjon av oksygentransporten"
    hideLicence={hideLicence}>
    <iframe
      title="Ekskresjon"
      loading="lazy"
      width="762"
      height="571.5"
      allowFullScreen
      src="https://h5p.ndla.no/resource/d1816a8f-4641-483a-980b-743defd0f709?locale=nb-no"
      data-ratio="0.75"
    />
  </FigureWithLicense>
);

export { Video };
export { Image };
export { H5p };
