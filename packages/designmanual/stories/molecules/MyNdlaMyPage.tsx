/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { MyPage } from '@ndla/ui';

const MyNdlaMyPage = () => {
  return (
    <MyPage
      name={{ firstName: 'Peter', lastName: 'Rolfsen' }}
      title="utvikler"
      courses={['Matte', 'Gym']}
      school="Charlottenlund VGS"
    />
  );
};

export default MyNdlaMyPage;
