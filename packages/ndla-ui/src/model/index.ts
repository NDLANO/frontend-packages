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

const model = {
  contentTypes,
  subjectCategories,
  subjectTypes,
  contentTypeMapping,
  resourceEmbedTypeMapping,
};

export default model;
