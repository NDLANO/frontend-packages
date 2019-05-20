/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

interface Props {
  description?: string;
  title: string;
  license?: {
    license: string,
    description: string,
    url: string,
  },
};

export const LearningPathInformation: React.FunctionComponent<Props> = ({
  description, title, license,
}) => (
  <div>
    <div>
      <h1>
        {title}
      </h1>
      {license && license.license}
    </div>
    {description && <div
      dangerouslySetInnerHTML={{ __html: description }}
    />}
  </div>
);
