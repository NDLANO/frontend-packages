/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Button from '@ndla/button';

interface Props {
  onClick?: () => void;
  buttonText?: string;
  text: string;
}

export const NoContentBox = ({ buttonText, text, onClick }: Props) => (
  <div>
    <span>
      <div>
        <p>{text}</p>
        {onClick && (
          <Button outline onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </span>
  </div>
);

export default NoContentBox;
