/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import BaseAccordion, { BaseAccordionProps } from './BaseAccordion';

interface Props extends BaseAccordionProps {}

const AccordionV2 = ({ expanded, children, initialValue, onChange, icon, titleItems, title, id }: Props) => {
  return (
    <BaseAccordion
      expanded={expanded}
      icon={icon}
      id={id}
      initialValue={initialValue}
      onChange={onChange}
      title={title}
      titleItems={titleItems}>
      {children}
    </BaseAccordion>
  );
};

export default AccordionV2;
