/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Button from '@ndla/button';
import { breakpoints, mq } from '@ndla/core';
import { NavigationBox } from '../Navigation';
import { MessageBox } from '../Messages';

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
  selectedGrade?: string;
  onChangeGrade: (newGrade: string) => void;
  grades: {
    missingProgrammeSubjects?: boolean;
    name: string;
    categories: {
      name: string;
      subjects: {
        label: string;
        url: string;
      }[];
    }[];
  }[];
};

type Props = GradesProps & {
  onNavigate?: () => void;
};

const ProgrammeSubjects = ({ grades, onNavigate, onChangeGrade, selectedGrade = 'vg1' }: Props) => {
  const { t } = useTranslation();
  const grade = grades.find((grade) => grade.name.toLowerCase() === selectedGrade) ?? grades[0];
  return (
    <>
      <GradesMenu>
        {grades.map((item) => (
          <Button
            key={item.name}
            onClick={() => onChangeGrade(item.name.toLowerCase())}
            lighter={item !== grade}
            size="normal"
            borderShape="rounded">
            {item.name}
          </Button>
        ))}
      </GradesMenu>
      {grade.missingProgrammeSubjects && <MessageBox>{t('messageBoxInfo.noContent')}</MessageBox>}
      {grade.categories.map((category) => (
        <NavigationBox key={category.name} heading={category.name} items={category.subjects} onClick={onNavigate} />
      ))}
    </>
  );
};

export default ProgrammeSubjects;
