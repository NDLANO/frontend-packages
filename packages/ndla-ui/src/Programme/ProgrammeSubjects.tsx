/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';
import { breakpoints, mq } from '@ndla/core';
import { NavigationBox } from '../Navigation';

const GradesMenu = styled.div`
  margin-bottom: 28px;
  > * {
    margin-right: 10px;
  }
  > *:last-of-type {
    margin-right: 0;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 40px;
  }
`;

export type GradesProps = {
  grades: [
    {
      name: string;
      categories: [
        {
          name: string;
          subjects: [
            {
              label: string;
              url: string;
            },
          ];
        },
      ];
    },
  ];
};

type Props = GradesProps & {
  preSelectedGradeIndex?: number;
};

const ProgrammeSubjects = ({ grades, preSelectedGradeIndex = 0 }: Props) => {
  const [showGradeIndex, setShowGradeIndex] = useState(preSelectedGradeIndex);

  const selectedGrade = grades[showGradeIndex];
  return (
    <>
      <GradesMenu>
        {grades.map((item, index) => (
          <Button
            key={item.name}
            onClick={() => setShowGradeIndex(index)}
            lighter={showGradeIndex !== index}
            size="normal"
            borderShape="rounded">
            {item.name}
          </Button>
        ))}
      </GradesMenu>
      {selectedGrade.categories.map(category => (
        <NavigationBox
          key={category.name}
          heading={category.name}
          items={category.subjects}
        />
      ))}
    </>
  );
};

export default ProgrammeSubjects;
