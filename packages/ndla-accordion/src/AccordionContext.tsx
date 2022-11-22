/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createContext, useContext } from 'react';

interface Context {
  isOpen: boolean;
  onChange: (value: boolean) => void;
  id: string | number;
}

const defaultValue: Context = {
  isOpen: false,
  onChange: () => {},
  id: '',
};

export const AccordionContext = createContext(defaultValue);

export const useAccordion = () => {
  const { isOpen, onChange } = useContext(AccordionContext);

  return { isOpen, onChange };
};
