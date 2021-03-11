/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Modal, { ModalCloseButton, ModalBody, ModalHeader } from '@ndla/modal';
import { breakpoints, mq, spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { Plus as PlusIcon } from '@ndla/icons/action';
// @ts-ignore
import { ToggleItem } from '../Filter';

import FrontpageAllSubjects, {
  subjectsProps,
} from '../Frontpage/FrontpageAllSubjects';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ModalContent = styled.div`
  max-width: 1040px;
  flex-grow: 1;
`;

const FilterButtonText = styled.span`
  display: inline-block;
  font-weight: 600;
  margin-right: 10px;
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

type messagesProps = {
  buttonText: string;
  closeButton: string;
  filterLabel: string;
};

type ProgrammeOptionProps = {
  name: string;
  id: string;
};
type ProgrammeProps = {
  options: ProgrammeOptionProps[];
  values: string[];
  onProgrammeValuesChange: (values: string[]) => void;
};

type SubjectCategoriesProps = {
  categories: subjectsProps['categories'];
  values: string[];
  onSubjectValuesChange: (values: string[]) => void;
};

export type PopupFilterProps = {
  messages: messagesProps;
  programmes?: ProgrammeProps;
  subjectCategories?: SubjectCategoriesProps;
};

const PopupFilter = ({
  messages,
  programmes,
  subjectCategories,
  t,
}: PopupFilterProps & tType) => {
  const [selectedMenu, setSelectedMenu] = useState(MENU_ALL_SUBJECTS);
  const [subjectValues, setSubjectValues] = useState<Array<string>>([]);
  const [programmesValues, setProgrammesValues] = useState<Array<string>>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (subjectCategories) {
      setSubjectValues([...subjectCategories.values]);
    }
    if (programmes) {
      setProgrammesValues([...programmes.values]);
    }
  }, [isOpen]);

  const onToggleSubject = (subjectId: string) => {
    let updatedFilter = [...subjectValues];
    if (updatedFilter.includes(subjectId)) {
      updatedFilter = subjectValues.filter(option => option !== subjectId);
    } else {
      updatedFilter.push(subjectId);
    }
    setSubjectValues(updatedFilter);
    if (subjectCategories) {
      subjectCategories.onSubjectValuesChange(updatedFilter);
    }
  };

  const onToggleProgramme = (programmeId: string) => {
    let updatedFilter = [...programmesValues];
    if (updatedFilter.includes(programmeId)) {
      updatedFilter = programmesValues.filter(option => option !== programmeId);
    } else {
      updatedFilter.push(programmeId);
    }
    setProgrammesValues(updatedFilter);
    if (programmes) {
      programmes.onProgrammeValuesChange(updatedFilter);
    }
  };

  const buttonContent = (
    <Button type="button" size="normal" light borderShape="rounded">
      <FilterButtonText>{messages.buttonText}</FilterButtonText>
      <PlusIcon />
    </Button>
  );

  return (
    <Modal
      activateButton={buttonContent}
      backgroundColor="white"
      animation="subtle"
      animationDuration={50}
      onClick={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      size="fullscreen">
      {(onClose: () => void) => (
        <>
          <ModalHeader>
            <h1>{messages.filterLabel}</h1>
            <ModalCloseButton
              onClick={() => {
                setIsOpen(false);
                onClose();
              }}
              title={messages.closeButton}
            />
          </ModalHeader>
          <ModalBody>
            <ModalWrapper>
              <ModalContent>
                {programmes && (
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
                {subjectCategories && (
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
                    {programmes.options.map(item => (
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

export default injectT(PopupFilter);
