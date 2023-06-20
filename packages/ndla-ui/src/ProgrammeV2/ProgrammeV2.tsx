/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, colors, misc, breakpoints, mq } from '@ndla/core';
import  ProgrammeCard, { Programme } from '../ProgrammeCard/ProgrammeCard';

const ProgrammeV2 = ({programmes}: { programmes: Programme[] }) => {
  return (
      <div>
        { programmes.map((programme) => (
          <ProgrammeCard 
          id={programme.id}
          title={programme.title}
          desktopImage={programme.desktopImage}
          mobileImage={programme.mobileImage}
          url={programme.url}
          />
        ))}
      </div>
  );
};

export default ProgrammeV2;
