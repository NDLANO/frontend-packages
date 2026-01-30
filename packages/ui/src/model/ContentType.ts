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
export const SOURCE_MATERIAL = "source-material";
export const LEARNING_PATH = "learning-path";
export const TOPIC = "topic";
export const MULTIDISCIPLINARY = "multidisciplinary";
export const CONCEPT = "concept";
export const EXTERNAL = "external";
export const MISSING = "missing";
export const IMAGE = "image";
export const VIDEO = "video";
export const AUDIO = "audio";
export const PODCAST = "podcast";
export const GLOSS = "gloss";
export const PROGRAMME = "programme";
export const PODCAST_SERIES = "podcast-series";
export const FRONTPAGE_ARTICLE = "frontpage-article";
export const GAME = "game";
export const CASE = "case";

export const contentTypes = {
  SUBJECT_MATERIAL,
  TASKS_AND_ACTIVITIES,
  ASSESSMENT_RESOURCES,
  SUBJECT,
  SOURCE_MATERIAL,
  LEARNING_PATH,
  TOPIC,
  MULTIDISCIPLINARY,
  CONCEPT,
  EXTERNAL,
  MISSING,
  PROGRAMME,
  PODCAST_SERIES,
  GAME,
  CASE,
};

export const RESOURCE_TYPE_LEARNING_PATH = "urn:resourcetype:learningPath";
export const RESOURCE_TYPE_SUBJECT_MATERIAL = "urn:resourcetype:subjectMaterial";
export const RESOURCE_TYPE_TASKS_AND_ACTIVITIES = "urn:resourcetype:tasksAndActivities";
export const RESOURCE_TYPE_ASSESSMENT_RESOURCES = "urn:resourcetype:reviewResource";
export const RESOURCE_TYPE_SOURCE_MATERIAL = "urn:resourcetype:SourceMaterial";
export const RESOURCE_TYPE_CONCEPT = "urn:resourcetype:concept";
export const RESOURCE_TYPE_GAME = "urn:resourcetype:game";

export const contentTypeMapping: Record<string, string> = {
  [RESOURCE_TYPE_LEARNING_PATH]: LEARNING_PATH,
  [RESOURCE_TYPE_SUBJECT_MATERIAL]: SUBJECT_MATERIAL,
  [RESOURCE_TYPE_TASKS_AND_ACTIVITIES]: TASKS_AND_ACTIVITIES,
  [RESOURCE_TYPE_ASSESSMENT_RESOURCES]: ASSESSMENT_RESOURCES,
  [RESOURCE_TYPE_SOURCE_MATERIAL]: SOURCE_MATERIAL,
  [RESOURCE_TYPE_CONCEPT]: CONCEPT,
  [RESOURCE_TYPE_GAME]: GAME,
  [MULTIDISCIPLINARY]: MULTIDISCIPLINARY,
  [CASE]: CASE,
  [TOPIC]: TOPIC,
  [FRONTPAGE_ARTICLE]: FRONTPAGE_ARTICLE,
  default: SUBJECT_MATERIAL,
};

export const resourceEmbedTypeMapping: Record<string, string> = {
  image: "image",
  video: "video",
  concept: "concept",
  audio: "audio",
  podcast: "podcast",
  gloss: "gloss",
};
