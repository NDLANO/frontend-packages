/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal, { ModalCloseButton, ModalBody } from '@ndla/modal';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import Button from '@ndla/button';
import { useTranslation } from 'react-i18next';
// @ts-ignore
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

const ModalHeading = styled.h1`
  ${fonts.sizes('22px', 1.2)};
  margin: 0;
`;
const ModalContent = styled.div`
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
  onClose: () => void;
  onToggleSubject: (value: string) => void;
  onToggleProgramme: (value: string) => void;
  isOpen: boolean;
};

const PopupFilter = ({
  programmes,
  subjectCategories,
  subjectValues,
  programmesValues,
  onToggleSubject,
  onToggleProgramme,
  onClose,
  isOpen,
}: PopupFilterProps) => {
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState(MENU_ALL_SUBJECTS);

  return (
    <Modal
      controllable
      backgroundColor="white"
      animation="subtle"
      animationDuration={50}
      onClose={onClose}
      isOpen={isOpen}
      size="fullscreen">
      {() => (
        <>
          <ModalBody>
            <ModalWrapper>
              <ModalContent>
                <ModalHeaderWrapper>
                  <ModalHeading>{t('searchPage.searchFilterMessages.filterLabel')}</ModalHeading>
                  <ModalCloseButton
                    onClick={() => {
                      onClose();
                    }}
                    title={t('searchPage.close')}
                  />
                </ModalHeaderWrapper>
                {subjectCategories && programmes && (
                  <MainFilterButtonWrapper>
                    <Button
                      onClick={() => setSelectedMenu(MENU_ALL_SUBJECTS)}
                      lighter={selectedMenu !== MENU_ALL_SUBJECTS}
                      size="normal"
                      borderShape="rounded">
                      {t('frontpageMenu.allsubjects')}
                    </Button>
                  </MainFilterButtonWrapper>
                )}
                {programmes && (
                  <Button
                    onClick={() => setSelectedMenu(MENU_PROGRAMMES)}
                    lighter={selectedMenu !== MENU_PROGRAMMES}
                    size="normal"
                    borderShape="rounded">
                    {t('frontpageMenu.program')}
                  </Button>
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
                          onChange={() => {
                            onToggleProgramme(item.id);
                          }}
                        />
                      </StyledListItem>
                    ))}
                  </StyledList>
                )}
              </ModalContent>
            </ModalWrapper>
          </ModalBody>
        </>
      )}
    </Modal>
  );
};

export default PopupFilter;
