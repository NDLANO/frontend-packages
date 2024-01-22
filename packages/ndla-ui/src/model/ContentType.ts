/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const SUBJECT_MATERIAL = "subject-material";
export const TASKS_AND_ACTIVITIES = "tasks-and-activities";
export const ASSESSMENT_RESOURCES = "assessment-resources";
export const SUBJECT = "subject";
export const EXTERNAL_LEARNING_RESOURCES = "external-learning-resources";
export const SOURCE_MATERIAL = "source-material";
export const LEARNING_PATH = "learning-path";
export const TOPIC = "topic";
export const MULTIDISCIPLINARY_TOPIC = "multidisciplinary-topic";

export const contentTypes = {
  SUBJECT_MATERIAL,
  TASKS_AND_ACTIVITIES,
  ASSESSMENT_RESOURCES,
  SUBJECT,
  EXTERNAL_LEARNING_RESOURCES,
  SOURCE_MATERIAL,
  LEARNING_PATH,
  TOPIC,
  MULTIDISCIPLINARY_TOPIC,
};

export const RESOURCE_TYPE_LEARNING_PATH = "urn:resourcetype:learningPath";
export const RESOURCE_TYPE_SUBJECT_MATERIAL = "urn:resourcetype:subjectMaterial";
export const RESOURCE_TYPE_TASKS_AND_ACTIVITIES = "urn:resourcetype:tasksAndActivities";
export const RESOURCE_TYPE_ASSESSMENT_RESOURCES = "urn:resourcetype:reviewResource";
export const RESOURCE_TYPE_EXTERNAL_LEARNING_RESOURCES = "urn:resourcetype:externalResource";
export const RESOURCE_TYPE_SOURCE_MATERIAL = "urn:resourcetype:SourceMaterial";

export const ListOfContentTypes = [
  "SUBJECT_MATERIAL",
  "TASKS_AND_ACTIVITIES",
  "ASSESSMENT_RESOURCES",
  "SUBJECT",
  "EXTERNAL_LEARNING_RESOURCES",
  "SOURCE_MATERIAL",
  "LEARNING_PATH",
  "TOPIC",
  "MULTIDISIPLINARY_TOPIC",
];

export const contentTypeMapping: Record<string, string> = {
  [RESOURCE_TYPE_LEARNING_PATH]: LEARNING_PATH,
  [RESOURCE_TYPE_SUBJECT_MATERIAL]: SUBJECT_MATERIAL,
  [RESOURCE_TYPE_TASKS_AND_ACTIVITIES]: TASKS_AND_ACTIVITIES,
  [RESOURCE_TYPE_ASSESSMENT_RESOURCES]: ASSESSMENT_RESOURCES,
  [RESOURCE_TYPE_EXTERNAL_LEARNING_RESOURCES]: EXTERNAL_LEARNING_RESOURCES,
  [RESOURCE_TYPE_SOURCE_MATERIAL]: SOURCE_MATERIAL,
  default: SUBJECT_MATERIAL,
};

export const resourceEmbedTypeMapping: Record<string, string> = {
  image: "image",
  video: "video",
  concept: "concept",
  audio: "audio",
};
