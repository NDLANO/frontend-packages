/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { Center } from '../helpers';
import ImageSearcher from '../molecules/imageSearch';
import AudioSearcher from '../molecules/audioSearch';
import VideoSearcher from '../molecules/videoSearch';

storiesOf('Produksjonssystem', module)
  .add('Bildesøk', () =>
    <Center>
      <h2 className="u-heading">Bildesøk</h2>
      <div className="o-wrapper--inner">
        <p>
          Bildesøk som gjør det mulig å søke mot NDLA sitt bilde api. Denne
          modulen krever at det både finnes en token og api url.
        </p>
        <ImageSearcher />
      </div>
    </Center>,
  )
  .add('Lydsøk', () =>
    <Center>
      <h2 className="u-heading">Lydsøk</h2>
      <div className="o-wrapper--inner">
        <p>
          Lydsøk som gjør det mulig å søke mot NDLA sitt lyd-api. Denne modulen
          krever at det både finnes en token og api url.
        </p>
        <AudioSearcher />
      </div>
    </Center>,
  )
  .add('Videosøk', () =>
    <Center>
      <h2 className="u-heading">Videosøk</h2>
      <div className="o-wrapper--inner">
        <p>
          Videsøk som gjør det mulig å søke mot NDLA sine videoer på brightcove.
          Denne modulen krever at det både finnes en token og api url (fra
          brightcove).
        </p>
        <VideoSearcher />
      </div>
    </Center>,
  );
