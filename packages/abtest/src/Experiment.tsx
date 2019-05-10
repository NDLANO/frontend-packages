/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { ExperimentsContext } from './Context';

export interface VariationsShape {
  index?: number;
  name?: string;
  weight?: number;
}

export interface ExperimentShape {
  id: string;
  variant: VariationsShape;
}

interface Props {
  experiments: ExperimentShape[];
  id: string;
  onVariantMount?: void;
  children: React.ReactNode[];
}

export const Experiment: React.FC<Props> = ({
  experiments,
  id: experimentId,
  onVariantMount,
  children,
}) => {
  const { Provider } = ExperimentsContext;
  const useVariant = experiments.find(
    experiment =>
      experiment.id.localeCompare(experimentId, undefined, {
        sensitivity: 'base',
      }) === 0,
  );
  return (
    <Provider
      value={{
        variant: useVariant ? useVariant.variant : {},
        experimentId,
        onVariantMount,
      }}>
      {children}
    </Provider>
  );
};

interface fetchVariantIndexShape {
  id: string;
  experiments: ExperimentShape[];
}

export const fetchVariantIndex = ({
  experiments,
  id: experimentId,
}: fetchVariantIndexShape) => {
  const useVariant = experiments.find(
    experiment =>
      experiment.id.localeCompare(experimentId, undefined, {
        sensitivity: 'base',
      }) === 0,
  );
  return useVariant ? useVariant.variant : {};
};

export const isValidExperiment = ({
  experiments,
  id,
}: fetchVariantIndexShape) => {
  return experiments && experiments.find(ex => ex.id === id);
};
