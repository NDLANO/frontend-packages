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
import { StoryIntro, StoryBody } from 'ndla-ui';

import ImageSearcher from '../molecules/imageSearch';
import AudioSearcher from '../molecules/audioSearch';
import VideoSearcher from '../molecules/videoSearch';

storiesOf('Produksjonssystem', module)
  .add('Bildesøk', () =>
    <div>
      <StoryIntro title="Bildesøk">
        <p>
          Bildesøk som gjør det mulig å søke mot NDLA sitt bilde api. Denne
          modulen krever at det både finnes en token og api url.
        </p>
      </StoryIntro>
      <StoryBody>
        <ImageSearcher />
      </StoryBody>
    </div>,
  )
  .add('Lydsøk', () =>
    <div>
      <StoryIntro title="Lydsøk">
        <p>
          Lydsøk som gjør det mulig å søke mot NDLA sitt lyd-api. Denne modulen
          krever at det både finnes en token og api url.
        </p>
      </StoryIntro>
      <StoryBody>
        <AudioSearcher />
      </StoryBody>
    </div>,
  )
  .add('Videosøk', () =>
    <div>
      <StoryIntro title="Videosøk">
        <p>
          Videsøk som gjør det mulig å søke mot NDLA sine videoer på brightcove.
          Denne modulen krever at det både finnes en token og api url (fra
          brightcove).
        </p>
      </StoryIntro>
      <StoryBody>
        <VideoSearcher />
      </StoryBody>
    </div>,
  );
