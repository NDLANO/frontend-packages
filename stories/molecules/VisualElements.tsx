/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

// @ts-ignore
import FigureWithLicense from '../article/FigureWithLicense';

// @ts-ignore
import FigureImage from '../article/FigureImage';

const Video = () => {
  const { t } = useTranslation();

  return (
    <FigureWithLicense
      type="full-column"
      resizeIframe
      caption="Velferdsteknologi"
      messages={{ rulesForUse: t('license.video.rules'), reuse: t('video.reuse'), download: null }}
    >
      <iframe
        title="Video: Velferdsteknologi"
        height="270"
        width="480"
        frameBorder="0"
        src="https://players.brightcove.net/4806596774001/BkLm8fT_default/index.html?videoId=6154610667001"
        // eslint-disable-next-line react/no-unknown-property
        allowFullScreen
      />
    </FigureWithLicense>
  );
};

const Image = () => (
  <FigureImage type="full-column" alt="alt" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" />
);

const H5p = () => (
  <FigureWithLicense type="full-column" resizeIframe caption="Mikroskop" hasHiddenCaption>
    <iframe
      title="Mikroskop"
      loading="lazy"
      width="762"
      height="571.5"
      // eslint-disable-next-line react/no-unknown-property
      allowFullScreen
      src="https://h5p.ndla.no/resource/24f047a0-9282-46d2-ac28-860428708be8?locale=nb-no&cssUrl=https%3A%2F%2Fndla.no%2Fstatic%2Fh5p-custom-css.css"
      data-ratio="0.75"
    />
  </FigureWithLicense>
);

export { Video };
export { Image };
export { H5p };
