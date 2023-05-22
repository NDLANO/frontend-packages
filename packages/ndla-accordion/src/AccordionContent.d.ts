/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { HTMLAttributes, ReactNode } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
  disableAnimation?: boolean;
  children: ReactNode;
  forceMount?: boolean;
}
declare const AccordionContent: ({
  disableAnimation,
  children,
  ...rest
}: Props) => import('@emotion/react/jsx-runtime').JSX.Element;
export default AccordionContent;
