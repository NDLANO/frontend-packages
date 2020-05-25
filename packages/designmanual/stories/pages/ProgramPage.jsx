/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { Program } from '@ndla/ui';

import { programs } from '../../dummydata/mockPrograms';

export default () => {
  const exampleProgram = programs[11];
  return (
    <Program heading={exampleProgram.label} grades={exampleProgram.grades} />
  );
};
