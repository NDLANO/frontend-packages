/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import styled from '@emotion/styled';
import { ModalCloseButton, ModalBody, ModalTitle, ModalContent } from '@ndla/modal';
import { breakpoints, mq, spacing } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { useTranslation } from 'react-i18next';
import { ToggleItem } from '../Filter';

import FrontpageAllSubjects, { subjectsProps } from '../Frontpage/FrontpageAllSubjects';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.normal};
`;

const Content = styled.div`
  max-width: 1040px;
  flex-grow: 1;
`;

const MainFilterButtonWrapper = styled.div`
  display: inline-block;
  margin-right: ${spacing.xsmall};
`;
const StyledList = styled.ul`
  list-style: none;
  margin: 40px 0 0;
  padding: 0;
  ${mq.range({ from: breakpoints.tablet })} {
    column-count: 2;
    column-gap: 20px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    column-count: 3;
    column-gap: 20px;
  }
  animation-name: fadeInLeft;
  animation-duration: 500ms;
`;
const StyledListItem = styled.li`
  margin-bottom: 0;
  break-inside: avoid;
`;

const MENU_PROGRAMMES = 'programmes';
const MENU_ALL_SUBJECTS = 'allSubjects';

type ProgrammeOptionProps = {
  name: string;
  id: string;
};

export type PopupFilterProps = {
  programmes?: { options: ProgrammeOptionProps[] };
  subjectCategories?: { categories: subjectsProps['categories'] };
  subjectValues: string[];
  programmesValues: string[];
  onToggleSubject: (value: string) => void;
  onToggleProgramme: (value: string) => void;
};

const PopupFilter = ({
  programmes,
  subjectCategories,
  subjectValues,
  programmesValues,
  onToggleSubject,
  onToggleProgramme,
}: PopupFilterProps) => {
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState(MENU_ALL_SUBJECTS);

  return (
    <ModalContent animation="subtle" animationDuration={50} size="full">
      <ModalBody>
        <ModalWrapper>
          <Content>
            <ModalHeaderWrapper>
              <ModalTitle>{t('searchPage.searchFilterMessages.filterLabel')}</ModalTitle>
              <ModalCloseButton />
            </ModalHeaderWrapper>
            {subjectCategories && programmes && (
              <MainFilterButtonWrapper>
                <ButtonV2
                  onClick={() => setSelectedMenu(MENU_ALL_SUBJECTS)}
                  colorTheme={selectedMenu !== MENU_ALL_SUBJECTS ? 'lighter' : undefined}
                  size="normal"
                  shape="pill"
                >
                  {t('frontpageMenu.allsubjects')}
                </ButtonV2>
              </MainFilterButtonWrapper>
            )}
            {programmes && (
              <ButtonV2
                onClick={() => setSelectedMenu(MENU_PROGRAMMES)}
                colorTheme={selectedMenu !== MENU_PROGRAMMES ? 'lighter' : undefined}
                size="normal"
                shape="pill"
              >
                {t('frontpageMenu.program')}
              </ButtonV2>
            )}
            {selectedMenu === MENU_ALL_SUBJECTS && subjectCategories && (
              <FrontpageAllSubjects
                categories={subjectCategories.categories}
                selectedSubjects={subjectValues}
                onToggleSubject={onToggleSubject}
                subjectViewType="checkbox"
              />
            )}
            {selectedMenu === MENU_PROGRAMMES && programmes && (
              <StyledList>
                {programmes.options.map((item: ProgrammeOptionProps) => (
                  <StyledListItem key={item.id}>
                    <ToggleItem
                      id={item.id}
                      value={item.id}
                      checked={programmesValues.includes(item.id)}
                      label={item.name}
                      component="div"
                      onChange={() => onToggleProgramme(item.id)}
                    />
                  </StyledListItem>
                ))}
              </StyledList>
            )}
          </Content>
        </ModalWrapper>
      </ModalBody>
    </ModalContent>
  );
};

export default PopupFilter;
