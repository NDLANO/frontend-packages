/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */

import { storiesOf } from '@storybook/react';
import { Image } from '@ndla/ui';
import { Spinner } from '@ndla/icons';
import { spacing, colors } from '@ndla/core';
import { StoryIntro, StoryBody } from '../wrappers';

import ImageSearcher from '../molecules/imageSearch';
import AudioSearcher from '../molecules/audioSearch';
import VideoSearcher from '../molecules/videoSearch';
import FormExampleAuthors from './FormExampleAuthors';
import HowtoExamples from './HowtoExamples';
import MultiSelectDropdownExample from './MultiSelectDropdownExample';
import FileListEditorExample from './FileListEditorExample';
import { Center } from '../helpers';
import NdlaFilmEditorExample from './NdlaFilmEditorExample';
import ProductionToolVersionLog from './ProductionToolVersionLog';
import CodeBlockEditorExample from './CodeBlockEditorExample';

storiesOf('Other/Production system', module)
  .add('Image crop and focal point', () => (
    <div>
      <StoryIntro title="Bildesøk">
        <p>
          I produksjonssystemet til nye NDLA så er det mulig å definere et utsnitt og/eller et fokuspunkt på et bilde.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Orginalbilde</h2>
        <Image alt="Mann med maske" src="https://api.test.ndla.no/image-api/raw/id/604" />
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
          src="https://api.test.ndla.no/image-api/raw/id/604"
        />
        <h2>Fokuspunkt</h2>
        <p>Et fokuspunkt sikrer at ansikt/objekt er i fokus når bildet tilpasses for visning på mindre flater.</p>
        <Image
          alt="Mann med maske"
          focalPoint={{
            x: 65.08,
            y: 45.28,
          }}
          sizes="(min-width: 320px) 320px"
          src="https://api.test.ndla.no/image-api/raw/id/604"
        />
      </StoryBody>
    </div>
  ))
  .add('Image search', () => (
    <div>
      <StoryIntro title="Bildesøk">
        <p>Bildesøk som gjør det mulig å søke mot NDLA sitt bilde api.</p>
      </StoryIntro>
      <StoryBody>
        <ImageSearcher />
      </StoryBody>
    </div>
  ))
  .add('Audio search', () => (
    <div>
      <StoryIntro title="Lydsøk">
        <p>Lydsøk som gjør det mulig å søke mot NDLA sitt lyd-api..</p>
      </StoryIntro>
      <StoryBody>
        <AudioSearcher />
      </StoryBody>
    </div>
  ))
  .add('Video search', () => (
    <div>
      <StoryIntro title="Videosøk">
        <p>
          Videsøk som gjør det mulig å søke mot NDLA sine videoer på brightcove. Denne modulen krever at det både finnes
          en token og api url (for brightcove).
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
  .add('Dropdown with multiselect', () => (
    <div>
      <StoryIntro title="Dropdown with multiselect">
        <p>Tekst kommer</p>
      </StoryIntro>
      <StoryBody>
        <MultiSelectDropdownExample />
      </StoryBody>
    </div>
  ))
  .add('FileListEditor', () => (
    <div>
      <StoryIntro title="Editor for redigering av fillister" />
      <StoryBody>
        <FileListEditorExample />
      </StoryBody>
      <StoryBody>
        <h1>Med markering av pdf-filer:</h1>
        <FileListEditorExample withCheckboxes />
      </StoryBody>
    </div>
  ))
  .add('How-to', () => (
    <div>
      <StoryIntro title="Veiledningstekster">
        <p>Midlertidige og statiske veiledningstekster</p>
      </StoryIntro>
      <StoryBody>
        <HowtoExamples />
      </StoryBody>
    </div>
  ))
  .add('Loading', () => (
    <div>
      <StoryIntro title="Loading komponent" />
      <Center>
        <Spinner />
        <Spinner size="medium" />
        <Spinner size="normal" />
      </Center>
    </div>
  ))
  .add('Ndla movie editor', () => (
    <div>
      <StoryIntro title="Redigering av NDLA film forside" />
      <Center>
        <NdlaFilmEditorExample />
      </Center>
    </div>
  ))
  .add('Version log and history', () => (
    <div
      style={{
        backgroundColor: colors.brand.greyLightest,
        paddingBottom: spacing.large,
        minHeight: '100vh',
      }}
    >
      <StoryIntro title="Versjonslogg og historikk">
        <p>
          Versjonshistorikk og logg for emner/læringssressurser i ED. Mulighet for å se eller tilbakestille til
          tidligere versjon eller kommentere på versjonen man står i.
        </p>
      </StoryIntro>
      <div className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
        <ProductionToolVersionLog />
      </div>
    </div>
  ))
  .add('Code editor', () => (
    <div>
      <StoryIntro title="Kodesnutter">
        <p>Visning av formatert kode</p>
      </StoryIntro>
      <Center>
        <CodeBlockEditorExample />
      </Center>
    </div>
  ));
