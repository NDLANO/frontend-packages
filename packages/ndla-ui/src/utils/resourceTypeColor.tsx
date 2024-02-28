/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { colors } from "@ndla/core";
import constants from "../model";
import { resourceEmbedTypeMapping } from "../model/ContentType";
const { contentTypes } = constants;

export const resourceTypeColor = (type: string) => {
  switch (type) {
    case contentTypes.SUBJECT_MATERIAL:
      return colors.subjectMaterial.light;
    case contentTypes.SUBJECT:
      return colors.subject.light;
    case contentTypes.TOPIC:
      return colors.subject.light;
    case contentTypes.TASKS_AND_ACTIVITIES:
      return colors.tasksAndActivities.light;
    case contentTypes.ASSESSMENT_RESOURCES:
      return colors.assessmentResource.light;
    case contentTypes.EXTERNAL_LEARNING_RESOURCES:
      return colors.externalLearningResource.light;
    case contentTypes.SOURCE_MATERIAL:
      return colors.sourceMaterial.light;
    case contentTypes.LEARNING_PATH:
      return colors.learningPath.light;
    case contentTypes.MULTIDISCIPLINARY_TOPIC:
      return colors.learningPath.background;
    case resourceEmbedTypeMapping.image:
    case resourceEmbedTypeMapping.video:
    case resourceEmbedTypeMapping.concept:
    case resourceEmbedTypeMapping.audio:
      return colors.brand.greyLight;
    default:
      return "";
  }
};

export default resourceTypeColor;
