/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactElement, ReactNode, Children } from 'react';
import AccordionSection, { Props as ASProps } from './AccordionSection';

const getPanels = (children: ReactNode): ReactElement<ASProps>[] => {
  const panels = Children.map(children, child =>
    React.isValidElement(child) && child.type === AccordionSection
      ? child
      : null,
  );
  return panels ? panels.filter(p => p) : [];
};
export const getPanelIds = (children: ReactNode) =>
  getPanels(children).map(p => p.props.id);
export const getOpenPanels = (children: ReactNode) =>
  getPanels(children)
    .filter(p => p.props.startOpen)
    .map(p => p.props.id);
