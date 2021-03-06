/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, Children } from 'react';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';

import { getPanelIds, getOpenPanels } from './accordionUtil';
import AccordionSection from './AccordionSection';

type Props = { tiny?: boolean; single?: boolean; children?: React.ReactNode };

const Accordions = ({ tiny, single, t, children }: Props & tType) => {
  const [panelIds] = useState<string[]>(getPanelIds(children));
  const [openPanels, setOpenPanels] = useState<string[]>(getOpenPanels(children));

  const toggleOpen = (id: string) => {
    if (single) {
      const newOpenPanels = openPanels.includes(id) ? [] : [id];
      setOpenPanels(newOpenPanels);
    } else {
      const newOpenPanels = openPanels.includes(id) ? openPanels.filter((p) => p !== id) : openPanels.concat(id);
      setOpenPanels(newOpenPanels);
    }
  };
  const allOpen = openPanels.length === panelIds.length;
  const toggleAllOpen = () => {
    const newOpenPanels = allOpen ? [] : [...panelIds];
    setOpenPanels(newOpenPanels);
  };

  return (
    <>
      {!single && (
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Button size="small" stripped onClick={toggleAllOpen}>
            {allOpen ? t('accordion.closeAll') : t('accordion.openAll')}
          </Button>
        </div>
      )}
      {Children.map(children, (child) => {
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

export default injectT(Accordions);
