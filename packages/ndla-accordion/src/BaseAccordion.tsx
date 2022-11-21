/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactElement, ReactNode, useRef, useState } from 'react';

export interface RenderProps {
  isOpen: boolean;
}
interface ChildProps {
  isOpen: boolean;
  id: string | number;
  onToggle: () => void;
}

export interface BaseAccordionProps {
  id: string | number;
  initialValue?: boolean;
  /** Controlled state */
  expanded?: boolean;
  /** Controlled state */
  onChange?: (isOpen: boolean) => void;
  children: (args: ChildProps) => ReactElement;
}

const BaseAccordion = ({ expanded, children, initialValue, onChange, id }: BaseAccordionProps) => {
  const [_isOpen, _setIsOpen] = useState(initialValue ?? false);
  const isOpen = expanded ?? _isOpen;
  const setIsOpen = onChange || _setIsOpen;

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return children({ isOpen, id, onToggle });
};

export default BaseAccordion;
