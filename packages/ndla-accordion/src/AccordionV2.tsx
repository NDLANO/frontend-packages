/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useState } from 'react';
import { AccordionContext } from './AccordionContext';

export interface RenderProps {
  isOpen: boolean;
}

export interface Props {
  id: string | number;
  initialValue?: boolean;
  /** Controlled state */
  expanded?: boolean;
  /** Controlled state */
  onChange?: (isOpen: boolean) => void;
  /** AccordionSummary and AccordionDetails */
  children: ReactNode;
}

const AccordionV2 = ({ expanded, children, initialValue, onChange: _onChange, id }: Props) => {
  const [_isOpen, _setIsOpen] = useState(initialValue ?? false);
  const isOpen = expanded ?? _isOpen;
  const setIsOpen = _onChange || _setIsOpen;

  const onChange = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <AccordionContext.Provider value={{ isOpen, onChange, id }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionV2;
