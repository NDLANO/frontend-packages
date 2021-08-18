/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const RouterWrapper = (storyFn) => <BrowserRouter>{storyFn()}</BrowserRouter>;

export default RouterWrapper;
