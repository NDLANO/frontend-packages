/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { Plus as PlusIcon } from '@ndla/icons/action';

import { Modal, ModalTrigger } from '@ndla/modal';
import PopupFilter, { PopupFilterProps } from '../PopupFilter';
import ActiveFilters from '../ActiveFilters';
import { FilterProps } from '../ActiveFilterContent';

const FilterButtonText = styled.span`
  display: inline-block;
  font-weight: 600;
  margin-right: 10px;
`;

type ProgrammeProps = PopupFilterProps['programmes'] & {
  values: string[];
  onProgrammeValuesChange: (values: string[]) => void;
};

type SubjectCategoriesProps = PopupFilterProps['subjectCategories'] & {
  values: string[];
  onSubjectValuesChange: (values: string[]) => void;
};

export type SubjectFilterProps = {
  filters: {
    programmes?: ProgrammeProps;
    subjectCategories?: SubjectCategoriesProps;
  };
  activeFilters?: {
    filters: FilterProps[];
    onFilterRemove: (value: string, name: string) => void;
  };
};

type Props = {
  isNarrowScreen?: boolean;
};

const SubjectFilters = ({ filters, activeFilters, isNarrowScreen }: SubjectFilterProps & Props) => {
  const { t } = useTranslation();
  const { subjectCategories, programmes } = filters;
  const [subjectValues, setSubjectValues] = useState<Array<string>>([]);
  const [programmesValues, setProgrammesValues] = useState<Array<string>>([]);
  const [isOpen, setIsOpen] = useState(false);

  const prevIsOpenRef = useRef<boolean>();
  useEffect(() => {
    prevIsOpenRef.current = isOpen;
  });
  const prevIsOpen = prevIsOpenRef.current;

  useEffect(() => {
    if (isOpen && isOpen !== prevIsOpen) {
      if (subjectCategories) {
        setSubjectValues([...subjectCategories.values]);
      }
      if (programmes) {
        setProgrammesValues([...programmes.values]);
      }
    }
  }, [isOpen, prevIsOpen, subjectCategories, programmes]);

  const onToggleSubject = (subjectId: string) => {
    let updatedFilter = [...subjectValues];
    if (updatedFilter.includes(subjectId)) {
      updatedFilter = subjectValues.filter((option) => option !== subjectId);
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
      updatedFilter = programmesValues.filter((option) => option !== programmeId);
    } else {
      updatedFilter.push(programmeId);
    }
    setProgrammesValues(updatedFilter);
    if (programmes) {
      programmes.onProgrammeValuesChange(updatedFilter);
    }
  };

  const handlePopupOpen = () => {
    setIsOpen(true);
  };

  const OpenModalButton = () => (
    <ModalTrigger>
      <ButtonV2 type="button" size="normal" colorTheme="greyLighter" shape="pill">
        <FilterButtonText>{t('searchPage.searchFilterMessages.noValuesButtonText')}</FilterButtonText>
        <PlusIcon />
      </ButtonV2>
    </ModalTrigger>
  );

  const ActiveFiltersElement = ({ showModalButton }: { showModalButton?: boolean }) => {
    const customElements = showModalButton ? [OpenModalButton()] : [];
    if (!activeFilters) return null;
    return (
      <ActiveFilters
        {...activeFilters}
        showOnSmallScreen={isNarrowScreen}
        onClickShowHiddenSubjects={handlePopupOpen}
        customElements={customElements}
      />
    );
  };

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      {isNarrowScreen ? (
        <ActiveFiltersElement showModalButton />
      ) : isNarrowScreen === false ? (
        <>
          <OpenModalButton />
          <ActiveFiltersElement />
        </>
      ) : undefined}
      <PopupFilter
        programmes={programmes}
        subjectCategories={subjectCategories}
        subjectValues={subjectValues}
        programmesValues={programmesValues}
        onToggleSubject={onToggleSubject}
        onToggleProgramme={onToggleProgramme}
      />
    </Modal>
  );
};

export default SubjectFilters;
