/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
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

const ConfirmWrapper = styled.div`
  padding: ${spacing.medium} 0;
`;

type OptionProps = {
  title: string;
  value: string;
};

type messagesProps = {
  buttonText: string;
  closeButton: string;
  confirmButton: string;
  filterLabel: string;
};

export type PopupFilterProps = {
  options: OptionProps[];
  values: string[];
  onSubmit: (values: string[]) => void;
  messages: messagesProps;
};

const PopupFilter = ({
  options,
  values: valuesProps,
  onSubmit,
  messages,
}: PopupFilterProps) => {
  const [values, setValues] = useState(valuesProps);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setValues(valuesProps);
  }, [isOpen]);

  const buttonContent = (
    <Button size="normal" lighterGrey>
      <FilterButtonText>{messages.buttonText}</FilterButtonText>
      <PlusIcon />
    </Button>
  );
  return (
    <Modal
      activateButton={buttonContent}
      animation="subtle"
      animationDuration={50}
      onClick={() => setIsOpen(true)}
      size="fullscreen">
      {(onClose: () => void) => (
        <>
          <ModalHeader modifier="no-bottom-padding">
            <ModalCloseButton
              onClick={() => {
                onClose();
                setIsOpen(false);
              }}
              title={messages.closeButton}
            />
          </ModalHeader>
          <ModalBody>
            <FilterList
              preid="search-popover"
              options={options}
              label={messages.filterLabel}
              values={values}
              modifiers="search-popover"
              onChange={(values: string[]) => {
                setValues(values);
              }}
            />
            <ConfirmWrapper>
              <Button
                outline
                onClick={() => {
                  onClose();
                  setIsOpen(false);
                  onSubmit(values);
                }}>
                {messages.confirmButton}
              </Button>
            </ConfirmWrapper>
          </ModalBody>
        </>
      )}
    </Modal>
  );
};

export default PopupFilter;
