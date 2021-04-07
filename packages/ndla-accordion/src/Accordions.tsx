/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, Children } from 'react';
import { getPanelIds, getOpenPanels } from './accordionUtil';
import AccordionSection from './AccordionSection';

type Props = { tiny?: boolean; single?: boolean };

const Accordions: React.FC<Props> = ({ tiny, single, children }) => {
  const [panelIds] = useState<string[]>(getPanelIds(children));
  const [openPanels, setOpenPanels] = useState<string[]>(
    getOpenPanels(children),
  );

  const toggleOpen = (id: string) => {
    if (single) {
      const newOpenPanels = openPanels.includes(id) ? [] : [id];
      setOpenPanels(newOpenPanels);
    } else {
      const newOpenPanels = openPanels.includes(id)
        ? openPanels.filter(p => p !== id)
        : openPanels.concat(id);
      setOpenPanels(newOpenPanels);
    }
  };
  const toggleAllOpen = () => {
    const newOpenPanels =
      openPanels.length === panelIds.length ? [] : [...panelIds];
    setOpenPanels(newOpenPanels);
  };

  return (
    <>
      {!single && <button onClick={toggleAllOpen}>button</button>}
      {Children.map(children, child => {
        if (React.isValidElement(child) && child.type === AccordionSection) {
          const { id } = child.props;
          return React.cloneElement(child, {
            open: openPanels.includes(id),
            onClick: () => toggleOpen(id),
            tiny,
          });
        }
        return child;
      })}
    </>
  );
};

export default Accordions;
