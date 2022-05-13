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
import { Button } from '@ndla/button/src/Button';

const DashOptionWrapper = styled.div`
  height: 56px;
  display: flex;
`;

const DashRightSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 70%;
  svg {
    margin-left: ${spacing.xsmall};
    margin-right: ${spacing.xsmall};
    transform: scale(1.5);
    height: 100%;
  }
`;
const DashLeftSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 30%;
`;

const AddButton = styled(Button)`
  background-color: transparent;
  border: none;
  display: flex;
  :hover {
    background-color: transparent;
    margin: 0;
  }
`;
const AddFolder = styled.p`
  height: 100%;
  color: ${colors.brand.primary};
  margin: 0;
  padding-left: ${spacing.small};
  align-items: center;
  display: flex;
`;

const AddNewFolder = styled(NewFolder)`
  height: 100%;
  stroke: ${colors.brand.primary};
  stroke-width: 1.5;
  fill: white;
  margin-left: ${spacing.xsmall};
  transform: scale(1.5);
`;

const StyledLearningPath = styled(LearningPathSummary)`
  stroke: ${colors.brand.primary};
  fill: ${colors.brand.primary};
`;
const StyledViewList = styled(ViewListBlack)`
  stroke: ${colors.brand.primary};
  fill: white;
`;
const StyledGridView = styled(GridView)`
  fill: ${colors.brand.primary};
`;

const Filterbutton = styled(Button)`
  background-color: transparent;
  border: none;
  display: flex;
`;

export type DashProps = {};
const DashOptions = ({}: DashProps) => {
  const { t } = useTranslation();
  return (
    <DashOptionWrapper>
      <DashLeftSide>
        <AddButton>
          <AddNewFolder />
          <AddFolder>{t('myNdla.newFolder')}</AddFolder>
        </AddButton>
      </DashLeftSide>
      <DashRightSide>
        <Filterbutton>
          <StyledLearningPath />
        </Filterbutton>
        <Filterbutton>
          <StyledViewList />
        </Filterbutton>
        <Filterbutton>
          <StyledGridView />
        </Filterbutton>
      </DashRightSide>
    </DashOptionWrapper>
  );
};

export default DashOptions;
