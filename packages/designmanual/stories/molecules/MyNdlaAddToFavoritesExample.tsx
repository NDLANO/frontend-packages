/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { DialogBox } from '@ndla/ui';

const MyNdlaDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>hello dialog!</h1>
      <button onClick={() => setIsOpen(!isOpen)}>open dialog</button>
      {isOpen && (
        <DialogBox title="Hello dialog" isOpen={isOpen} closeCallback={() => setIsOpen(!isOpen)}>
          <p>content of dialog..</p>
        </DialogBox>
      )}
      opened {isOpen ? 'true' : 'false'}
    </div>
  );
};

export default MyNdlaDialogExample;
