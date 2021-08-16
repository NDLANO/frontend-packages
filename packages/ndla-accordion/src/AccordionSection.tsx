/*
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Children, useState, useEffect } from 'react';
import { AccordionBar, AccordionPanel } from './';

export interface Props {
  id: string;
  title: string;
  hasError?: boolean;
  startOpen?: boolean;
  tiny?: boolean;
  barChildren?: React.ReactNode;
  open?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const AccordionSection = (props: Props) => {
  const { id, children, startOpen, open, onClick, className } = props;
  const { title, barChildren, tiny, hasError } = props; // bar props
  const [isOpen, setIsOpen] = useState(!!startOpen);

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  return (
    <>
      <AccordionBar
        panelId={id}
        hasError={hasError}
        title={title}
        onClick={() => (onClick ? onClick() : setIsOpen((old) => !old))}
        isOpen={isOpen}
        tiny={tiny}>
        {barChildren}
      </AccordionBar>
      {isOpen && (
        <AccordionPanel id={id} hasError={hasError} isOpen={isOpen}>
          <div className={className}>
            {Children.map(children, (child) => {
              if (React.isValidElement(child) && typeof child.type !== 'string') {
                return React.cloneElement(child, {
                  setIsOpen: onClick ? onClick : setIsOpen,
                });
              }
              return child;
            })}
          </div>
        </AccordionPanel>
      )}
    </>
  );
};

export default AccordionSection;
