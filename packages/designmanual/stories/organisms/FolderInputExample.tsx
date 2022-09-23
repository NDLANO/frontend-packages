/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FolderInput } from '@ndla/ui';
import React from 'react';

export const FolderInputExample = () => {
  return (
    <FolderInput
      autoSelect
      onAddFolder={() => {
        // eslint-disable-next-line no-console
        console.log('onAddFolder');
      }}
      // eslint-disable-next-line no-console
      onClose={() => console.log('onClose')}
    />
  );
};
export default FolderInputExample;
