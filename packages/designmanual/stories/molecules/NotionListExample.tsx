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

const NotionListExample = () => {
  return (
    <>
      <OneColumn cssModifier="narrow">
        <h1>Tittel</h1>
        <NotionBlock type="image" />
        <NotionBlock type="video" />
        <NotionBlock type="H5P" />
      </OneColumn>
    </>
  );
};

export default NotionListExample;
