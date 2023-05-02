/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useMemo } from 'react';
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion';
import uniqueId from 'lodash/uniqueId';

interface Props {
  children: ReactNode;
  delay?: number;
  timeout?: number;
  exitDelay?: number;
  show: boolean;
}

const animations = (duration: number, delayIn: number, delayOut: number) => ({
  open: { opacity: 1, transition: { delay: delayIn / 1000, ease: 'easeInOut', duration: duration / 1000 } },
  closed: { opacity: 0, transition: { delay: delayOut / 1000, ease: 'easeInOut', duration: duration / 1000 } },
});

const defaultTimeout = 300;

const Fade = ({ show, delay = 0, timeout = defaultTimeout, exitDelay = 0, children }: Props) => {
  const id = useMemo(() => uniqueId(), []);

  const variants = useMemo(() => animations(timeout, delay, exitDelay), [timeout, delay, exitDelay]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {show && (
          <m.div key={id} initial="closed" animate="open" exit="closed" variants={variants}>
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default Fade;
