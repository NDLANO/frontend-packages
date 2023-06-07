/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { contentTypes, contentTypeMapping, resourceEmbedTypeMapping } from './ContentType';
import * as subjectCategories from './SubjectCategories';
import * as subjectTypes from './SubjectTypes';
import * as WordClass from './WordClass';

const model = {
  contentTypes,
  subjectCategories,
  subjectTypes,
  contentTypeMapping,
  resourceEmbedTypeMapping,
  WordClass,
};

export default model;
