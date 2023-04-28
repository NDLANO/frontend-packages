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
import { StoryIntro, BannerList } from '../wrappers';

import banners from '../../images/banners';
storiesOf('Fag- og emnesider', module).add('Bannerbilder', () => (
  <div>
    <StoryIntro title="Bannerbilder">
      <p>
        Hvert fag i NDLA kan ha sitt eget unike bannerbilde. Det er anbefalt at bannerbildene er i SVG format og har en
        versjon for desktop og en annen versjon for mobil.
      </p>
      <p>
        Ved utfylling av importskjema må lenken til bannerbildet hentes herfra. Ved å trykke på «Kopier mobil/desktop
        banner» knappene, får du en lenke som kan limes inn i importskjemaet.
      </p>
    </StoryIntro>
    <div>
      <BannerList banners={banners} />
    </div>
  </div>
));
