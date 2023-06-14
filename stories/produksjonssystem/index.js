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
import { Image } from '@ndla/ui';
import { Spinner } from '@ndla/icons';
import { spacing, colors } from '@ndla/core';
import { StoryIntro, StoryBody } from '../wrappers';

import ImageSearcher from '../molecules/imageSearch';
import AudioSearcher from '../molecules/audioSearch';
import VideoSearcher from '../molecules/videoSearch';
import AccordionExample from './AccordionExample';
import AccordionExample2 from './AccordionExample2';
import FormExampleAuthors from './FormExampleAuthors';
import HowtoExamples from './HowtoExamples';
import SlateBlockMenuExample from './SlateBlockMenuExample';
import StructureExample from './StructureExample';
import MultiSelectDropdownExample from './MultiSelectDropdownExample';
import UploaderExample from './UploaderExample';
import FileListEditorExample from './FileListEditorExample';
import { Center } from '../helpers';
import NdlaFilmEditorExample from './NdlaFilmEditorExample';
import ProductionToolVersionLog from './ProductionToolVersionLog';
import CodeBlockEditorExample from './CodeBlockEditorExample';

storiesOf('Other/Produksjonssystem', module)
  .add('Trekkspill', () => (
    <div
      style={{
        backgroundColor: colors.brand.greyLightest,
        paddingBottom: spacing.large,
        minHeight: '100vh',
      }}
    >
      <StoryIntro title="Trekkspill">
        <p>
          Trekkspill (Accordion). Importeres via ndla-accordion. Innbygget kontroll for åpning og lukking gjennom render
          props. Støtter feil-status via boolean prop på paneler.
        </p>
      </StoryIntro>
      <div className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
        <AccordionExample />
      </div>
    </div>
  ))
  .add('Trekkspill 2', () => (
    <div
      style={{
        backgroundColor: colors.brand.greyLightest,
        paddingBottom: spacing.large,
        minHeight: '100vh',
      }}
    >
      <StoryIntro title="Trekkspill">
        <p>
          Trekkspill (Accordions). Importeres via ndla-accordion. Innbygget kontroll for åpning og lukking gjennom
          render props. Støtter feil-status via boolean prop på paneler.
        </p>
        <p>Denne versjonen bruker Accordions og AccordionSection komponentene for å forenkle koden</p>
      </StoryIntro>

      <div className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
        <AccordionExample2 />
      </div>
    </div>
  ))
  .add('Bildeutsnitt og fokuspunkt', () => (
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
  .add('Bildesøk', () => (
    <div>
      <StoryIntro title="Bildesøk">
        <p>Bildesøk som gjør det mulig å søke mot NDLA sitt bilde api.</p>
      </StoryIntro>
      <StoryBody>
        <ImageSearcher />
      </StoryBody>
    </div>
  ))
  .add('Lydsøk', () => (
    <div>
      <StoryIntro title="Lydsøk">
        <p>Lydsøk som gjør det mulig å søke mot NDLA sitt lyd-api..</p>
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
  .add('Uploader', () => (
    <div>
      <StoryIntro title="Uploader">
        <p>Komponent for filopplasting</p>
      </StoryIntro>
      <StoryBody>
        <UploaderExample />
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
  .add('Sidestruktur og taksonomi', () => (
    <div>
      <StoryIntro title="Sidestruktur og taksonomi">
        <p>Emnevelger for taksonomi</p>
      </StoryIntro>
      <Center>
        <StructureExample />
        <h3>Strukturredigering</h3>
        <StructureExample structureEditor />
      </Center>
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
  .add('Ndla film editor', () => (
    <div>
      <StoryIntro title="Redigering av NDLA film forside" />
      <Center>
        <NdlaFilmEditorExample />
      </Center>
    </div>
  ))
  .add('Versjonslogg og historikk', () => (
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
  .add('Kode editor', () => (
    <div>
      <StoryIntro title="Kodesnutter">
        <p>Visning av formatert kode</p>
      </StoryIntro>
      <Center>
        <CodeBlockEditorExample />
      </Center>
    </div>
  ));
