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

import FormExampleAuthors from './FormExampleAuthors';
import HowtoExamples from './HowtoExamples';
import MultiSelectDropdownExample from './MultiSelectDropdownExample';

storiesOf('Other/Production system', module)
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
  .add('How-to', () => (
    <div>
      <StoryIntro title="Veiledningstekster">
        <p>Midlertidige og statiske veiledningstekster</p>
      </StoryIntro>
      <StoryBody>
        <HowtoExamples />
      </StoryBody>
    </div>
  ));
