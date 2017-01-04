/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { storiesOf } from '@kadira/storybook';

import NDLAEditor from './editor/NDLAEditor';
import ExampleEditor from './editor/ExampleEditor';


storiesOf('Lekegrind', module)
  .add('Empty NDLA editor', () => (
    <div>
      <h1>NDLA Editor</h1>
      <NDLAEditor />
    </div>
  ))
  .add('NDLA editor med innhold', () => (
    <div>
      <h1>NDLA Editor</h1>
      <ExampleEditor />
    </div>
  ))
;
