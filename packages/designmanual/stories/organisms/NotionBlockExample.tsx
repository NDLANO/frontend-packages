/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { OneColumn } from '@ndla/ui';

import NotionBlock from '../molecules/NotionBlock';

const NotionBlockExample = () => {
  return (
    <OneColumn cssModifier="narrow">
      <h2>Begrep med visuelt element bilde</h2>
      <NotionBlock type="image" />
      <h2>Begrep med visuelt element video</h2>
      <NotionBlock type="video" />
      <h2>Begrep med visuelt element h5p</h2>
      <NotionBlock type="H5P" />
    </OneColumn>
  );
};

export default NotionBlockExample;
