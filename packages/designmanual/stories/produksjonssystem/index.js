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
import { spacing, colors } from 'ndla-core';
import { StoryIntro, StoryBody } from '../wrappers';

import ImageSearcher from '../molecules/imageSearch';
import AudioSearcher from '../molecules/audioSearch';
import VideoSearcher from '../molecules/videoSearch';
import AccordionExample from './AccordionExample';
import FormExampleAuthors from './FormExampleAuthors';
import SlateBlockMenuExample from './SlateBlockMenuExample';
import TaxonomyEditorExample from './TaxonomyEditorExample';
import FileStructureExample from './FileStructureExample';
import { Center } from '../helpers';

storiesOf('Produksjonssystem', module)
  .add('Trekkspill', () => (
    <div
      style={{
        backgroundColor: colors.brand.greyLightest,
        paddingBottom: spacing.large,
        minHeight: '100vh',
      }}>
      <StoryIntro title="Trekkspill">
        <p>
          Trekkspill (Accordion). Importeres via ndla-accordion. Innbygget
          kontroll for åpning og lukking gjennom render props. Støtter
          feil-status via boolean prop på paneler.
        </p>
      </StoryIntro>
      <div className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
        <AccordionExample />
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
  ))
  .add('Form elements', () => (
    <div>
      <StoryIntro title="Form elementer">
        <p>Tekst kommer</p>
      </StoryIntro>
      <StoryBody>
        <FormExampleAuthors />
      </StoryBody>
    </div>
  ))
  .add('Editor', () => (
    <div>
      <StoryIntro title="Editor komponenter">
        <p>Tekst kommer</p>
      </StoryIntro>
      <StoryBody>
        <SlateBlockMenuExample />
      </StoryBody>
    </div>
  ))
  .add('Taksonomi editor', () => (
    <div>
      <StoryIntro title="Taksonomi editor">
        <p>Tekst kommer</p>
      </StoryIntro>
      <Center>
        <TaxonomyEditorExample />
      </Center>
    </div>
  ))
  .add('Sidesturktur', () => (
    <div>
      <StoryIntro title="Taksonomi editor">
        <p>Tekst kommer</p>
      </StoryIntro>
      <Center>
        <FileStructureExample />
      </Center>
    </div>
  ));
