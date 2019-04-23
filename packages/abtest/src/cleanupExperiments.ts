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
  name: string;
  startTime: number;
  endTime: number;
  winnerFound: boolean;
  variations: VariationsShape[]; 
};

export function cleanupExperiments(experiments: ExperimentShapeClean[], cookieExperiments: ExperimentShape[]) {
  return experiments.map(experiment => {
    const {
      winnerFound,
      startTime,
      endTime,
      id,
      variations,
    } = experiment;
    if (winnerFound) {
      // send Id + winner from variations.
      return {
        id,
        variations: variations.find((variation: VariationsShape) => (
          variation.won
        )),
      }
    }
    if (startTime > Date.now() || endTime < Date.now()) {
      // Experiment not active, return null! (this above winnerFound?)
      return null;
    }
    if (cookieExperiments) {
      const experimentInCookie = cookieExperiments.find((cookieExperiments: ExperimentShape) => cookieExperiments.id === id);
      if (experimentInCookie) {
        return experimentInCookie;
      }
    }
    const pickVariant = Math.random();
    let variationsWeightCounter = 0;
    const winner = variations.find(variation => {
      if (variationsWeightCounter + variation.weight > pickVariant) {
        return true;
      } else {
        variationsWeightCounter += variation.weight;
        return false;
      }
    });
    return {
      id,
      variations: winner,
    }
  }).filter(experiment => experiment !== null)
};