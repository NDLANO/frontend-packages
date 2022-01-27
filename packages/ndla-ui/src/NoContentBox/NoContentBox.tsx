/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
//@ts-ignore
import Button from '@ndla/button';

const classes = new BEMHelper({
  name: 'topic-resource',
  prefix: 'c-',
});

interface Props {
  onClick?: () => void;
  buttonText?: string;
  text: string;
}
export const NoContentBox = ({ buttonText, text, onClick }: Props) => (
  <div {...classes('additional-resources-trigger')}>
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
