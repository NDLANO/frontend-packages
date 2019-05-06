/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ExperimentShape, VariationsShape } from './Experiment';

export interface ExperimentShapeClean {
  id: string;
  variations: VariationsShape[]; 
};

export function cleanupExperiments(experiments: ExperimentShapeClean[], cookieExperiments: ExperimentShape[]) {
  return experiments.map(experiment => {
    const {
      id,
      variations,
    } = experiment;

    if (cookieExperiments) {
      const experimentInCookie = cookieExperiments.find((cookieExperiments: ExperimentShape) => cookieExperiments.id === id);
      if (experimentInCookie) {
        return experimentInCookie;
      }
    }

    const pickVariant = Math.random();
    let variationsWeightCounter = 0;
    const variationsTotal = variations.length - 1;
    const winner = variations.find((variation: VariationsShape, index: number) => {
      if (variationsWeightCounter + (variation.weight || 0) > pickVariant || index === variationsTotal) {
        return true;
      } else {
        variationsWeightCounter += (variation.weight || 0);
        return false;
      }
    });
    
    if (typeof winner === 'object') {
      winner.index = variations.findIndex(variant => variant.name === winner.name);
      return {
        id,
        variant: winner,
      }
    }
    return null;
  }).filter(experiment => experiment);
};