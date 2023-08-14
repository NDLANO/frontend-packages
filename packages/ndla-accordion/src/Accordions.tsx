/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState, Children, ReactNode, isValidElement, cloneElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonV2 } from '@ndla/button';

import { getPanelIds, getOpenPanels } from './accordionUtil';
import AccordionSection from './AccordionSection';

type Props = { tiny?: boolean; single?: boolean; children?: ReactNode };

const Accordions = ({ tiny, single, children }: Props) => {
  const { t } = useTranslation();
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
          <ButtonV2 size="small" variant="stripped" onClick={toggleAllOpen}>
            {allOpen ? t('accordion.closeAll') : t('accordion.openAll')}
          </ButtonV2>
        </div>
      )}
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === AccordionSection) {
          const { id } = child.props;
          return cloneElement(child, {
            open: openPanels.includes(id),
            onClick: () => toggleOpen(id),
            tiny,
            ...child.props,
          });
        }
        return child;
      })}
    </>
  );
};

export default Accordions;
