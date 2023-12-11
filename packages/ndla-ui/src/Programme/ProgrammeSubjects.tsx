/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { SafeLinkButton } from '@ndla/safelink';
import { NavigationBox } from '../Navigation';
import { MessageBox } from '../Messages';

const GradesMenu = styled.ul`
  display: flex;
  gap: ${spacing.small};
  padding-left: 0;
  li {
    list-style: none;
    padding: 0;
  }
`;

export type GradesProps = {
  selectedGrade?: string;
  grades?: {
    missingProgrammeSubjects?: boolean;
    name: string;
    categories?: {
      name: string;
      subjects?: {
        label: string;
        url: string;
      }[];
    }[];
  }[];
};

type Props = GradesProps & {
  onNavigate?: () => void;
};

const ProgrammeSubjects = ({ grades, onNavigate, selectedGrade = 'vg1' }: Props) => {
  const { t } = useTranslation();

  const grade = useMemo(
    () => grades?.find((grade) => grade.name.toLowerCase() === selectedGrade) ?? grades?.[0],
    [grades, selectedGrade],
  );

  return (
    <>
      <GradesMenu aria-label={t('programmes.grades')}>
        {grades?.map((item) => {
          const current = item.name.toLowerCase() === selectedGrade;
          return (
            <li key={item.name}>
              <SafeLinkButton
                to={current ? '' : item.name.toLowerCase()}
                colorTheme={item !== grade ? 'lighter' : undefined}
                shape="pill"
                size="normal"
                aria-current={current}
              >
                {item.name}
              </SafeLinkButton>
            </li>
          );
        })}
      </GradesMenu>
      {grade?.missingProgrammeSubjects && <MessageBox>{t('messageBoxInfo.noContent')}</MessageBox>}
      {grade?.categories?.map((category) => (
        <NavigationBox key={category.name} heading={category.name} items={category.subjects} onClick={onNavigate} />
      ))}
    </>
  );
};

export default ProgrammeSubjects;
