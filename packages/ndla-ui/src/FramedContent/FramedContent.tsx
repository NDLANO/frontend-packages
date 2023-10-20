/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, useMemo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const FramedContent = ({ className, children, ...rest }: Props) => {
  const classes = useMemo(() => {
    const classes = ['c-bodybox'];
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  }, [className]);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default FramedContent;
