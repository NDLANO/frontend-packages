/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ContentTypeShape } from '../shapes';

import * as contentTypes from '../model/ContentType';

const classes = new BEMHelper({
  name: 'hero',
  prefix: 'c-',
});

export const Hero = ({ children, contentType }) => (
  <div {...classes('', contentType)}>{children || null}</div>
);

Hero.propTypes = {
  contentType: ContentTypeShape,
  children: PropTypes.node,
};

export const SubjectMaterialHero = props => (
  <Hero contentType={contentTypes.SUBJECT_MATERIAL} {...props} />
);
export const TasksAndActivitiesHero = props => (
  <Hero contentType={contentTypes.TASKS_AND_ACTIVITIES} {...props} />
);
export const AssessmentResourcesHero = props => (
  <Hero contentType={contentTypes.ASSESSMENT_RESOURCES} {...props} />
);
export const SubjectHero = props => (
  <Hero contentType={contentTypes.SUBJECT} {...props} />
);
export const ExternalLearningResourcesHero = props => (
  <Hero contentType={contentTypes.EXTERNAL_LEARNING_RESOURCES} {...props} />
);
export const SourceMaterialHero = props => (
  <Hero contentType={contentTypes.SOURCE_MATERIAL} {...props} />
);
export const NdlaFilmHero = props => (
  <Hero contentType="ndla-film" {...props} />
);
