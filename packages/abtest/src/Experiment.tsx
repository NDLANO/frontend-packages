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
  weight?: number;
  index?: number;
};

export interface ExperimentShape {
  id: string;
  variant: VariationsShape;
};

interface Props {
  experiments: ExperimentShape[];
  id: string;
  googleAccountId: string;
  logPageView?: boolean;
  trackerName: string;
  children: React.ReactNode[];
};

export const Experiment: React.FC<Props> = ({ logPageView, trackerName, experiments, id: experimentId, googleAccountId, children }) => {
  const { Provider } = Context;
  const useVariant = experiments.find(experiment => experiment.id.localeCompare(experimentId, undefined, { sensitivity: 'base' }) === 0);
  return (
    <Provider
      value={{
        variant: useVariant ? useVariant.variant : {},
        googleAccountId,
        experimentId,
        logPageView,
        trackerName,
      }}>
      {children}
    </Provider>
  )
};
