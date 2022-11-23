import { ReactNode, useMemo } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { uniqueId } from 'lodash';

interface Props {
  children: ReactNode;
  delay?: number;
  timeout?: number;
  exitDelay?: number;
}

const animations = (duration: number, delayIn: number, delayOut: number) => ({
  open: { opacity: 1, transition: { delay: delayIn / 1000, ease: 'easeInOut', duration } },
  closed: { opacity: 0, transition: { delay: delayOut / 1000, ease: 'easeInOut', duration } },
});

const defaultTimeout = 300;

const Fade = ({ children, delay = 0, timeout = defaultTimeout, exitDelay = 0 }: Props) => {
  const id = useMemo(() => uniqueId(), []);

  const variants = useMemo(() => animations(timeout, delay, exitDelay), [timeout, delay, exitDelay]);

  return (
    <AnimatePresence>
      {children && (
        <m.div
          key={id}
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{
            duration: timeout / 1000,
            default: { ease: 'easeInOut' },
            delay: delay ? delay / 1000 : undefined,
          }}>
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
};
export default Fade;
