/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { m, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { spacing } from '@ndla/core';
import { AccordionContext } from './AccordionContext';

const Details = styled.div`
  padding: ${spacing.xsmall} ${spacing.small};
  overflow: hidden;
`;

interface Props {
  className?: string;
  children?: ReactNode;
}

const AccordionDetails = ({ className, children }: Props) => {
  const { isOpen, id } = useContext(AccordionContext);

  return (
    <Details className={className} role="region" id={`${id}-details`} aria-labelledby={`${id}-summary`}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { height: 'auto' },
                collapsed: { height: 0 },
              }}
              transition={{ duration: 0.2, default: { ease: 'easeInOut' } }}>
              {children}
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </Details>
  );
};

export default AccordionDetails;
