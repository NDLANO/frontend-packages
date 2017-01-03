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


storiesOf('Lekegrind', module)
  .add('NDLA editor', () => (
    <div>
      <h1>NDLA Editor</h1>
      <NDLAEditor />
    </div>
  ))
;
