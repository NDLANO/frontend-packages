import { ReactNode, useMemo } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { uniqueId } from 'lodash';

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
    <AnimatePresence>
      {show && (
        <m.div key={id} initial="closed" animate="open" exit="closed" variants={variants}>
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
};
export default Fade;
