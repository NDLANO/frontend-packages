/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import AccordionDetails from './AccordionDetails';
import AccordionSummary from './AccordionSummary';
import BaseAccordion, { BaseAccordionProps } from './BaseAccordion';

interface Props extends Omit<BaseAccordionProps, 'children'> {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
}

const AccordionV2 = ({ expanded, initialValue, onChange, id, children, title, icon }: Props) => {
  return (
    <BaseAccordion expanded={expanded} id={id} initialValue={initialValue} onChange={onChange}>
      {({ isOpen, onToggle, id }) => (
        <>
          <AccordionSummary isOpen={isOpen} onToggle={onToggle} id={id} title={title} icon={icon} />
          <AccordionDetails isOpen={isOpen} id={id}>
            {children}
          </AccordionDetails>
        </>
      )}
    </BaseAccordion>
  );
};

export default AccordionV2;
