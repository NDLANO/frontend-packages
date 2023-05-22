/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { SerializedStyles } from '@emotion/react';
import { HTMLAttributes, ReactNode } from 'react';
interface Props extends HTMLAttributes<HTMLButtonElement> {
  indicator?: ReactNode;
  headerCSS?: SerializedStyles;
}
declare const AccordionHeader: import('react').ForwardRefExoticComponent<
  Props & import('react').RefAttributes<HTMLButtonElement>
>;
export default AccordionHeader;
