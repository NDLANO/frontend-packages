/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import {
  LearningPathArticle,
  LearningPathIntroduction,
  LearningPathMultimedia,
  LearningPathQuiz,
  LearningPathSummary,
  LearningPathTask,
  LearningPathRead,
} from '@ndla/icons/contentType';

import { colors } from '@ndla/core';

const Icon = styled.div`
  border: 2px solid ${colors.brand.grey};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${colors.brand.greyLight};
  color: ${colors.text.light};
  svg {
    width: 24px;
    height: 24px;
  }
`;

interface Props {
  type: string;
}

export const LearningPathIcon: React.FunctionComponent<Props> = ({
  type,
}) => {
  let icon = null;
  switch (type) {
    case 'INTRODUCTION':
      icon = <LearningPathIntroduction />;
      break;
    case 'TEXT':
      icon = <LearningPathArticle />;
      break;
    case 'QUIZ':
      icon = <LearningPathQuiz />;
      break;
    case 'SUMMARY':
      icon = <LearningPathSummary />;
      break;
    case 'MULTIMEDIA':
      icon = <LearningPathMultimedia />;
      break;
    case 'TASK':
      icon = <LearningPathTask />;
      break;
    case 'HASREAD':
      icon = <LearningPathRead />;
      break;
    default:
      break;
  }
  return (
    <Icon>{icon}</Icon>
  )
};