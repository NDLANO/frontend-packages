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
import { Image } from 'ndla-ui';
import Button from 'ndla-button';
import Accordion from 'ndla-accordion';
import { spacing, colors } from 'ndla-core';
import { StoryIntro, StoryBody } from '../wrappers';

import ImageSearcher from '../molecules/imageSearch';
import AudioSearcher from '../molecules/audioSearch';
import VideoSearcher from '../molecules/videoSearch';

storiesOf('Produksjonssystem', module)
  .add('Trekkspill', () => (
    <div
      style={{
        backgroundColor: colors.brand.greyLightest,
        marginBottom: spacing.large,
      }}>
      <StoryIntro title="Trekkspill">
        <p>Noe fornuftig tekst her</p>
      </StoryIntro>
      <div className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
        <h2>Eksempel</h2>
        <Accordion
          tabs={[
            {
              title: 'Tab 1',
              children: (
                <div>
                  <p>noe innhold 1</p>
                </div>
              ),
              open: true,
            },
            {
              title: 'Tab 2',
              children: (
                <div>
                  <p>noe innhold 2</p>
                  <Button>Hello</Button>
                </div>
              ),
            },
            {
              title: 'Tab 3',
              children: (
                <div>
                  <p>noe innhold 3</p>
                </div>
              ),
            },
          ]}
        />
        <h2>Eksempel 2, framed og kun en tillatt åpen om gangen</h2>
        <Accordion
          framedChildren
          onlyOpenOne
          tabs={[
            {
              title: 'Tab 1',
              children: (
                <div>
                  <p>noe innhold 1</p>
                </div>
              ),
              open: true,
            },
            {
              title: 'Tab 2',
              children: (
                <div>
                  <p>noe innhold 2</p>
                  <Button>Hello</Button>
                </div>
              ),
            },
            {
              title: 'Tab 3',
              children: (
                <div>
                  <p>noe innhold 3</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  ))
  .add('Bildeutsnitt og fokuspunkt', () => (
    <div>
      <StoryIntro title="Bildesøk">
        <p>
          I produksjonssystemet til nye NDLA så er det mulig å definere et
          utsnitt og/eller et fokuspunkt på et bilde.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Orginalbilde</h2>
        <Image
          alt="Mann med maske"
          src="https://test.api.ndla.no/image-api/raw/id/604"
        />
        <h2>Utsnitt</h2>
        <p>Et utsnitt fører til at kun en mindre del av bildet vises. </p>
        <Image
          alt="Mann med maske"
          crop={{
            startX: 14.59,
            endX: 79.63,
            startY: 20,
            endY: 100,
          }}
          src="https://test.api.ndla.no/image-api/raw/id/604"
        />
        <h2>Fokuspunkt</h2>
        <p>
          Et fokuspunkt sikrer at ansikt/objekt er i fokus når bildet tilpasses
          for visning på mindre flater.
        </p>
        <Image
          alt="Mann med maske"
          focalPoint={{
            x: 65.08,
            y: 45.28,
          }}
          sizes="(min-width: 320px) 320px"
          src="https://test.api.ndla.no/image-api/raw/id/604"
        />
      </StoryBody>
    </div>
  ))
  .add('Bildesøk', () => (
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
    </div>
  ))
  .add('Lydsøk', () => (
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
    </div>
  ))
  .add('Videosøk', () => (
    <div>
      <StoryIntro title="Videosøk">
        <p>
          Videsøk som gjør det mulig å søke mot NDLA sine videoer på brightcove,
          samt YouTube via Google Custom Search. Denne modulen krever at det
          både finnes en token og api url (for brightcove).
        </p>
      </StoryIntro>
      <StoryBody>
        <VideoSearcher />
      </StoryBody>
    </div>
  ));
