/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
//@ts-ignore
import Button from '@ndla/button';

interface Props {
  title: ReactNode;
  onClick: () => void;
  className?: string;
}

const ModalClose = ({ title, onClick, className = '' }: Props) => (
  <Button data-cy="close-modal-button" onClick={onClick} link className={className}>
    {title}
  </Button>
);

export default ModalClose;
