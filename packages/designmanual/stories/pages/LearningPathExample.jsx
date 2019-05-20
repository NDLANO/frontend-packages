/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useReducer, useEffect, useState } from 'react';
import { css } from '@emotion/core';
import {
  LearningPathWrapper,
  LearningPathMenu,
  LearningPathSticky,
  LearningPathStickySibling,
  LearningPathContent,
  LearningPathInformation,
} from '@ndla/ui';

import ArticleLearningPaths from './ArticleLearningPaths';
import Breadcrumb from '../molecules/breadcrumbs';

// Dummy data
import { StepsInformationData, LearningPathData, fetchLearningPathArticle, mockedAPIData } from '../../dummydata/mockLearningPaths';

const infoCSS = css`
  display: block;
  width: 200px;
  left: calc(50% - 100px);
  top: 78px;
  background: #fff;
  z-index: 9999;
  border: 4px solid red;
  border-radius: 10px;
  position: fixed;
`;

const updateSeqNo = (currentSeqNo, code) => {
  let direction;
  if (code === 'ArrowLeft') {
    direction = -1;
  } else if (code === 'ArrowRight') {
    direction = 1;
  } else {
    return currentSeqNo;
  }

  if (currentSeqNo + direction < 0 || currentSeqNo + direction >= LearningPathData.learningsteps.length) {
    return currentSeqNo;
  }
  return currentSeqNo + direction;
}

const LearningPathExample = () => {
  const [currentSeqNo, setSeqNo] = useReducer(updateSeqNo, 0);
  const { duration, lastUpdated, copyright } = LearningPathData;
  const { learningsteps } = mockedAPIData;
  const { title, description, license, showTitle } = StepsInformationData[currentSeqNo];
  const stepId = learningsteps[currentSeqNo].id; // should be fetched from url
  const currentIndex = learningsteps.findIndex(learningStep => learningStep.current);
  const lastUpdatedDate = new Date(lastUpdated);
  const lastUpdatedString = `${lastUpdatedDate.getDate()}.${lastUpdatedDate.getMonth() < 10 ? '0' : ''}${lastUpdatedDate.getMonth()}.${lastUpdatedDate.getFullYear()}`;
  console.log('learningsteps', learningsteps);
  async function fetchData(params) {
    // You can await here
    const data = await fetchLearningPathArticle(params);
    console.log('got data', data);
  }
  
  useEffect(() => {
    const onKeyUpEvent = (e) => {
      setSeqNo(e.code);
    }
    window.addEventListener('keyup', onKeyUpEvent);
    fetchData({ stepId: 3249, learningPathId: 434 });
    return () => {
      window.removeEventListener('keyup', onKeyUpEvent);
    };
  }, []);

  useEffect(() => {
    console.log('updated currentSeqNo', mockedAPIData[currentSeqNo]);
  }, [currentSeqNo]);

  return (
    <>
      <LearningPathWrapper>
        <div className="c-hero__content">
          <section>
            <Breadcrumb />
          </section>
        </div>
        <LearningPathContent>
          <LearningPathMenu
            learningsteps={learningsteps}
            duration={duration}
            lastUpdated={lastUpdatedString}
            copyright={copyright}
            stepId={stepId}
            currentIndex={currentIndex}
          />
          <div>
            {showTitle && <LearningPathInformation
              title={title.title}
              description={description && description.description}
              license={license}
            />}
            <ArticleLearningPaths />
          </div>
        </LearningPathContent>
        <LearningPathSticky>
          {currentIndex > 0 ?
            <LearningPathStickySibling
              arrow="left"
              label="forrige"
              to={learningsteps[currentIndex - 1].metaUrl}
              title={learningsteps[currentIndex - 1].title.title}
            /> :
            <div />
          }
          {currentIndex < learningsteps.length - 1 ?
            <LearningPathStickySibling
              arrow="right"
              label="neste"
              to={learningsteps[currentIndex + 1].metaUrl}
              title={learningsteps[currentIndex + 1].title.title}
            /> :
            <div>YOU ARE DONE</div>
          }
        </LearningPathSticky>
      </LearningPathWrapper>
      <div css={infoCSS}>
        Use Key arrows to simulate navigation
      </div>
    </>
  )
};

export default LearningPathExample;
