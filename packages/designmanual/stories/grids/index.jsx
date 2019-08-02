/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { spacing } from '@ndla/core';
import { StoryIntro } from '../wrappers';
import GridStandard from './grids-standard';
import GridOffset from './grids-offset';
import GridResponsive from './grids-responsive';
import GridVariants from './grids-variants';

storiesOf('Grids', module)
  .add('Grid standard', () => (
    <div>
      <StoryIntro title="Grid vanlig">
        12 - delt grid med standard spacing. ({spacing.normal})
      </StoryIntro>
      <GridStandard />
    </div>
  ))  
  .add('Grid offset', () => (
    <div>
      <StoryIntro title="Grid offset eksempler">
      </StoryIntro>
      <GridOffset />
    </div>
  ))
  .add('Grid responsiv', () => (
    <div>
      <StoryIntro title="Grid responsive eksempler">
      </StoryIntro>
      <GridResponsive />
    </div>
  ))
  .add('Grid varianter', () => (
    <div>
      <StoryIntro title="Grid variant eksempler">
      </StoryIntro>
      <GridVariants />
    </div>
  ));