/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { User } from '@ndla/icons/common';
import { spacing, fonts, colors } from '@ndla/core';
import { getLicenseByAbbreviation, LicenseByline } from '@ndla/licenses';

const StyledLearningPathDetails = styled.div`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  margin-bottom: ${spacing.xsmall};
  p {
    margin: 0;
    padding-left: ${spacing.xsmall};
  }
  span {
    display: block;
  }
`;

type Props = {
  copyright: {
    contributors: {
      type: string;
      name: string;
    }[];
    license: {
      license: string;
    };
  };
};

const LearningPathMenuAsideCopyright = ({ copyright }: Props) => {
  const { rights } = getLicenseByAbbreviation(copyright.license.license || '', 'nb');
  return (
    <StyledLearningPathDetails>
      <User />
      <p>
        {copyright.contributors.map((contributor) => (
          <span key={contributor.name}>{contributor.name}</span>
        ))}
        <LicenseByline licenseRights={rights} color={colors.brand.tertiary} />
      </p>
    </StyledLearningPathDetails>
  );
};

export default LearningPathMenuAsideCopyright;
