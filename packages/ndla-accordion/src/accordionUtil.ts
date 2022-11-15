/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactElement, ReactNode, Children, isValidElement } from 'react';
import AccordionSection, { Props as AccordionSectionProps } from './AccordionSection';

// Filtrer ut alle children som ikke er AccordionSections
type AccSec = ReactElement<AccordionSectionProps>;

const getPanels = (children: ReactNode): AccSec[] => {
  const panels = Children.map<ReactElement<AccordionSectionProps> | null, ReactNode>(children, (child) => {
    if (isValidElement(child) && child.type === AccordionSection) {
      return child as ReactElement<AccordionSectionProps>;
    }
    return null;
  });

  return panels ? panels.filter((p): p is AccSec => !!p) : [];
};
export const getPanelIds = (children: ReactNode) => getPanels(children).map((p) => p.props.id);
export const getOpenPanels = (children: ReactNode) =>
  getPanels(children)
    .filter((p) => p.props.startOpen)
    .map((p) => p.props.id);
