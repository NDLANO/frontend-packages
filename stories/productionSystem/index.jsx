/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */

import { storiesOf } from '@storybook/react';
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

storiesOf('Other/Production system', module)
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
  .add('Ndla movie editor', () => (
    <div>
      <StoryIntro title="Redigering av NDLA film forside" />
      <Center>
        <NdlaFilmEditorExample />
      </Center>
    </div>
  ));
