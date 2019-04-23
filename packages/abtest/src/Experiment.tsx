/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { Context } from './Context';

export interface VariationsShape {
  name: string;
  url?: string;
  status?: string;
  weight: number;
  won: boolean;
};

export interface ExperimentShape {
  id: string;
  name: string;
  startTime: number;
  endTime: number;
  winnerFound: boolean;
  variations: VariationsShape; 
};

interface Props {
  experiment: ExperimentShape;
  children: React.ReactNode[];
};

export const Experiment: React.FC<Props> = ({ experiment, children }) => {
  const { Provider } = Context;
  const useVariant = experiment.variations.name;
  return (
    <Provider value={useVariant}>
      {children}
    </Provider>
  )
};
