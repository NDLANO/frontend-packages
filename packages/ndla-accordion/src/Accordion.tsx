/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.normal} 0;
`;

import { openIndexesProps } from '../types';

type childrenProps = {
  openIndexes: Array<openIndexesProps>,
  handleItemClick: (arg: openIndexesProps) => void;
  getBarProps: (arg: openIndexesProps) => {
    onClick: () => void,
    isOpen: boolean,
    panelId: openIndexesProps,
  };
  getPanelProps: (arg: openIndexesProps) => {
    id: openIndexesProps,
    isOpen: boolean,
  };
};

type Props = {
  openIndexes: Array<openIndexesProps>,
  single: boolean;
  children: (arg: childrenProps) => React.ReactElement;
};

export const Accordion: React.FC<Props> = ({ openIndexes, single, children }) => {
  const [currentOpenedIndexes, setOpenIndexes] = useState(openIndexes || []);

  const togglePanel = (index: openIndexesProps) => {
    if (single) {
      setOpenIndexes(currentOpenedIndexes.includes(index) ? [] : [index]);
    } else if (currentOpenedIndexes.includes(index)) {
      setOpenIndexes(currentOpenedIndexes.filter(openIndex => openIndex !== index));
    } else {
      setOpenIndexes([...currentOpenedIndexes, index]);
    }
  }

  return children({
    openIndexes: currentOpenedIndexes,
    handleItemClick: togglePanel,
    getBarProps: (panelId: openIndexesProps) => ({
      panelId,
      isOpen: currentOpenedIndexes.includes(panelId),
      onClick: () => togglePanel(panelId),
    }),
    getPanelProps: (panelId: openIndexesProps) => ({
      id: panelId,
      isOpen: currentOpenedIndexes.includes(panelId),
    }),
  });
};