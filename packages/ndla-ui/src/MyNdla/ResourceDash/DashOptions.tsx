/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { LearningPathSummary, ViewListBlack, NewFolder } from '@ndla/icons/contentType';
import { GridView } from '@ndla/icons/common';
import { colors, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';

const DashOptionWrapper = styled.div`
  height: 56px;
  border: 1px solid black;
  display: flex;
`;

const DashRightSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 70%;
`;
const DashLeftSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 30%;
`;

const StyledNewFolder = styled(NewFolder)`
  height: 100%;
  stroke: ${colors.brand.primary};
  stroke-width: 2;
  fill: white;
  margin-left: ${spacing.xsmall};
  transform: scale(1.5);
`;

const AddFolder = styled.p`
  margin-left: ${spacing.medium};
  stroke: ${colors.brand.primary};
`;

const StyledLearningPath = styled(LearningPathSummary)``;
const StyledViewList = styled(ViewListBlack)``;
const StyledGridView = styled(GridView)``;

export type DashProps = {};
const DashOptions = ({}: DashProps) => {
  const { t } = useTranslation();
  return (
    <DashOptionWrapper>
      <DashLeftSide>
        <StyledNewFolder />
        <AddFolder>{t('myNdla.newFolder')}</AddFolder>
      </DashLeftSide>
      <DashRightSide>
        <StyledLearningPath />
        <StyledViewList />
        <StyledGridView />
      </DashRightSide>
    </DashOptionWrapper>
  );
};

export default DashOptions;
