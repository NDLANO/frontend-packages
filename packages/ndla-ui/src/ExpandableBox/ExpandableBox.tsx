/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDetailsElement> {}

export const ExpandableBox = ({ children, ...rest }: Props) => {
  return <details {...rest}>{children}</details>;
};

interface SummaryProps extends HTMLAttributes<HTMLElement> {}

export const ExpandableBoxSummary = ({ children, ...rest }: SummaryProps) => {
  return <summary {...rest}>{children}</summary>;
};
