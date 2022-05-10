/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { DialogBox } from '@ndla/ui';
import { FavoriteButton } from '@ndla/button';

const MyNdlaDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <FavoriteButton onClick={() => setIsOpen(!isOpen)} aria-label="Legg i favoritter" />
      {isOpen && (
        <DialogBox title="Hello dialog" isOpen={isOpen} closeCallback={() => setIsOpen(!isOpen)}>
          <p>content of dialog..</p>
        </DialogBox>
      )}
    </div>
  );
};

export default MyNdlaDialogExample;
