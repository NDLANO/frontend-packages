/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { css } from '@emotion/core';
import { fonts, spacing, breakpoints, mq } from '@ndla/core';

const wrapperCSS = css`
  background: transparent;
  font-family: ${fonts.serif};
  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.serif};
  }
  max-width: 720px;
  margin: ${spacing.spacingUnit * 0.75}px ${spacing.normal} ${spacing.xsmall} 0 !important;
  ${mq.range({ from: breakpoints.desktop })} {
    margin: ${spacing.spacingUnit * 0.75}px ${spacing.normal} ${spacing.xsmall} 0 !important;
    padding: ${spacing.normal} ${spacing.large} ${spacing.large} ${spacing.spacingUnit * 4}px;
    ul {
      margin-left: ${spacing.normal};
    }
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    margin: 0;
    padding: ${spacing.small} ${spacing.normal};
    ul {
      padding: 0 ${spacing.spacingUnit * 0.75}px;
    }
  }
`;

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
  <section className="o-wrapper">
    <div className="c-article" css={wrapperCSS}>
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
  </section>
);
