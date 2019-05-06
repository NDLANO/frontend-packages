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
  index?: number;
  name?: string;
  weight?: number;
};

export interface ExperimentShape {
  id: string;
  variant: VariationsShape;
};

interface Props {
  experiments: ExperimentShape[];
  id: string;
  googleAccountId: string;
  trackerName: string;
  onRenderVariant?: void;
  children: React.ReactNode[];
};

export const Experiment: React.FC<Props> = ({ trackerName, experiments, id: experimentId, googleAccountId, onRenderVariant, children }) => {
  const { Provider } = Context;
  const useVariant = experiments.find(experiment => experiment.id.localeCompare(experimentId, undefined, { sensitivity: 'base' }) === 0);
  return (
    <Provider
      value={{
        variant: useVariant ? useVariant.variant : {},
        googleAccountId,
        experimentId,
        trackerName,
        onRenderVariant,
      }}>
      {children}
    </Provider>
  )
};

interface fetchVariantIndexShape {
  id: string;
  experiments: ExperimentShape[];
};

export const fetchVariantIndex = ({ experiments, id: experimentId }: fetchVariantIndexShape) => {
  const useVariant = experiments.find(experiment => experiment.id.localeCompare(experimentId, undefined, { sensitivity: 'base' }) === 0);
  return useVariant ? useVariant.variant : {};
}
