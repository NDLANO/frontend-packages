/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// react-app-polyfill includes minimum requirements and commonly used language
// features used by react apps
import 'react-app-polyfill/ie11';

// addition polyfill for language features used in ndla frontends
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';
import 'core-js/fn/array/fill';
import 'core-js/fn/array/includes';
import 'core-js/fn/string/starts-with';
import 'core-js/fn/string/includes';
import 'core-js/fn/number/is-integer';

// polyfill for <details></details> and <summary></summary> html elements used in articles.
import 'details-polyfill';
