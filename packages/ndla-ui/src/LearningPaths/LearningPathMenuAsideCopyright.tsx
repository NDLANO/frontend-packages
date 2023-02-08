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
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { LicenseByline } from '../LicenseByline';

const StyledLearningPathDetails = styled.div`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
`;

const UserLine = styled.div`
  display: flex;
  margin-bottom: ${spacing.xsmall};

  span {
    margin-left: ${spacing.xsmall};
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
      <UserLine>
        <User />
        {copyright.contributors.map((contributor) => (
          <span key={contributor.name}>{contributor.name}</span>
        ))}
      </UserLine>

      <LicenseByline licenseRights={rights} color={colors.brand.tertiary} />
    </StyledLearningPathDetails>
  );
};

export default LearningPathMenuAsideCopyright;
