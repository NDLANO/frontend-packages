/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { Programme } from '@ndla/ui';

import { programme } from '../../dummydata/mockPrograms';

const ProgrammePage = () => (
  <Programme heading={programme.label} grades={programme.grades} image={programme.image} />
);

export default ProgrammePage;
