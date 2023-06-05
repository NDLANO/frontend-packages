/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

import * as contentTypes from '../model/ContentType';

const classes = new BEMHelper({
  name: 'hero',
  prefix: 'c-',
});

export type HeroContentType =
  | 'subject-material'
  | 'tasks-and-activities'
  | 'assessment-resources'
  | 'subject'
  | 'external-learning-resources'
  | 'source-material'
  | 'learning-path'
  | 'topic'
  | 'beta'
  | 'ndla-film'
  | 'ndla-film has-image';

interface HeroProps {
  children?: ReactNode;
  contentType?: HeroContentType;
}

export const Hero = ({ children, contentType, ...rest }: HeroProps) => (
  <div {...classes('', contentType)} {...rest}>
    {children || null}
  </div>
);

interface Props {
  children?: ReactNode;
}
export const SubjectMaterialHero = (props: Props) => <Hero contentType={contentTypes.SUBJECT_MATERIAL} {...props} />;
export const TasksAndActivitiesHero = (props: Props) => (
  <Hero contentType={contentTypes.TASKS_AND_ACTIVITIES} {...props} />
);
export const AssessmentResourcesHero = (props: Props) => (
  <Hero contentType={contentTypes.ASSESSMENT_RESOURCES} {...props} />
);
export const SubjectHero = (props: Props) => <Hero contentType={contentTypes.SUBJECT} {...props} />;
export const ExternalLearningResourcesHero = (props: Props) => (
  <Hero contentType={contentTypes.EXTERNAL_LEARNING_RESOURCES} {...props} />
);
export const SourceMaterialHero = (props: Props) => <Hero contentType={contentTypes.SOURCE_MATERIAL} {...props} />;
export const NdlaFilmHero = ({ hasImage, ...rest }: Props & { hasImage?: boolean }) => (
  <Hero {...rest} contentType={hasImage ? 'ndla-film has-image' : 'ndla-film'} />
);
