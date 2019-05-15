/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import {
  LearningPathWrapper,
  LearningPathMenu,
  LearningPathSticky,
  LearningPathStickySibling,
  LearningPathContent,
  constants,
} from '@ndla/ui';

import ArticleLearningmaterial from './ArticleLearningmaterial';
import Breadcrumb from '../molecules/breadcrumbs';

const { contentTypes } = constants;

const learningSteps = [
  {
    id: 5806,
    title: 'Introduksjon',
    url: '#',
    type: contentTypes.SUBJECT_MATERIAL,
  },
  {
    id: 5808,
    title: 'Noe å lure på!',
    url: '#',
    type: contentTypes.SUBJECT_MATERIAL,
  },
  {
    id: 5809,
    title: 'Enkel taledisposisjon',
    url: '#',
    type: contentTypes.SUBJECT_MATERIAL,
  },
  {
    id: 5809,
    title: 'Eksempeltale',
    url: '#',
    type: contentTypes.SUBJECT_MATERIAL,
    current: true,
  },
  {
    id: 5810,
    title: 'Bruk etos, logos og patos!',
    url: '#',
    type: contentTypes.SUBJECT_MATERIAL,
  },
  {
    id: 5811,
    title: 'Hold en tale!',
    url: '#',
    type: contentTypes.SUBJECT_MATERIAL,
  },
  {
    id: 5812,
    title: 'Noen tips for viderekomne',
    url: '#',
    type: contentTypes.SUBJECT_MATERIAL,
  },
  {
    id: 5813,
    title: 'Egenvurdering',
    url: '#',
    type: contentTypes.SUBJECT_MATERIAL,
  },
];

const LearningPathExample = () => {
  const currentIndex = learningSteps.findIndex(learningStep => learningStep.current);
  return (
    <LearningPathWrapper>
      <div className="c-hero__content">
        <section>
          <Breadcrumb />
        </section>
      </div>
      <LearningPathContent>
        <LearningPathMenu
          learningSteps={learningSteps}
          estimatedTime={3}
          lastUpdated={"21.06.2019"}
          authors={['Ivar Borthen']}
          license="CC-BY-SA"
        />
        <ArticleLearningmaterial />
      </LearningPathContent>
      <LearningPathSticky>
        {currentIndex > 0 ?
          <LearningPathStickySibling arrow="left" label="forrige" to={learningSteps[currentIndex - 1].url} title={learningSteps[currentIndex - 1].title} /> :
          <div />
        }
        {currentIndex < learningSteps.length - 1 ?
          <LearningPathStickySibling arrow="right" label="neste" to={learningSteps[currentIndex + 1].url} title={learningSteps[currentIndex + 1].title} /> :
          <div>YOU ARE DONE</div>
        }
      </LearningPathSticky>
    </LearningPathWrapper>
  )
};

export default LearningPathExample;
