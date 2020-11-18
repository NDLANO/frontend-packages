import React, { useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Modal, { ModalCloseButton, ModalHeader, ModalBody } from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { Plus as PlusIcon } from '@ndla/icons/action';
// @ts-ignore
import { FilterList } from '../Filter';

const FilterButtonText = styled.span`
  display: inline-block;
  font-weight: 600;
  margin-right: 10px;
`;

type OptionProps = {
  title: string;
  value: string;
};

export type PopupFilterProps = {
  options: OptionProps[];
  values: string[];
  onSubmit: (values: string[]) => void;
};

const PopupFilter = ({
  options,
  values: valuesProps,
  onSubmit,
}: PopupFilterProps) => {
  const [values, setValues] = useState(valuesProps);

  const buttonContent = (
    <Button size="medium">
      <FilterButtonText>Filtrer på fag</FilterButtonText>
      <PlusIcon style={{ width: '24px', height: '24px' }} />
    </Button>
  );
  return (
    <Modal
      activateButton={buttonContent}
      animation="subtle"
      animationDuration={50}
      size="fullscreen">
      {(onClose: () => void) => (
        <>
          <ModalHeader modifier="no-bottom-padding">
            <ModalCloseButton onClick={onClose} title="Lukk" />
          </ModalHeader>
          <ModalBody>
            <FilterList
              preid="search-popover"
              options={options}
              label="Label..."
              values={values}
              modifiers="search-popover"
              onChange={(values: string[]) => {
                setValues(values);
              }}
            />
            <Button
              outline
              onClick={() => {
                onClose();
                onSubmit(values);
              }}>
              Bruk filter
            </Button>
          </ModalBody>
        </>
      )}
    </Modal>
  );
};

export default PopupFilter;
