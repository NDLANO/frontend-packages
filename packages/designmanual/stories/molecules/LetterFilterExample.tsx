/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LetterFilter } from '@ndla/ui';
import React, { useState } from 'react';

const letters = ['a', 'B', 'c', 'f', 'g', 'i', 'Æ'];

const LetterFilterExample = () => {
  const [letterFilter, setLetterFilter] = useState<string>();

  return <LetterFilter value={letterFilter} onChange={setLetterFilter} letters={letters} />;
};

export default LetterFilterExample;
