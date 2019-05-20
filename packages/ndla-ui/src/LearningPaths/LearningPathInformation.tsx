/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SafeLink, ContentTypeBadge } from '@ndla/ui';
import { useWindowSize } from '@ndla/hooks';
import { Time } from '@ndla/icons/common';
import { colors, spacing, fonts, misc, typography, mq, breakpoints } from '@ndla/core';
import { ArrowExpandRight, ArrowExpandLeft } from '@ndla/icons/action';

interface Props {
  description: string;
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
    <div
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);
