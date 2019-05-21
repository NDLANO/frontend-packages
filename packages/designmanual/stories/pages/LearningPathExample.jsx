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
import ArticleLoader from '../article/ArticleLoader';
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
  const [learningPathData, setLearningPathData] = useState(null);
  const { duration, lastUpdated, copyright } = LearningPathData;
  const { learningsteps } = mockedAPIData;
  const { license } = StepsInformationData[currentSeqNo];
  const stepId = learningsteps[currentSeqNo].id; // should be fetched from url
  const currentIndex = learningsteps.findIndex(learningStep => learningStep.current);
  const lastUpdatedDate = new Date(lastUpdated);
  const lastUpdatedString = `${lastUpdatedDate.getDate()}.${lastUpdatedDate.getMonth() < 10 ? '0' : ''}${lastUpdatedDate.getMonth()}.${lastUpdatedDate.getFullYear()}`;
  console.log('learningPathData', learningPathData);
  async function fetchData(params) {
    // You can await here
    const data = await fetchLearningPathArticle(params);
    setLearningPathData(data);
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
    setLearningPathData(null);
    fetchData({ stepId: learningsteps[currentSeqNo].id, learningPathId: 434 })
  }, [currentSeqNo]);

  console.log(learningPathData);

  let articleId = learningPathData && learningPathData.embedUrl ?
    learningPathData.embedUrl.url.substr(learningPathData.embedUrl.url.lastIndexOf('/') + 1) : null;

  if (articleId && articleId.indexOf(':') !== -1) {
    articleId = articleId.substr(articleId.lastIndexOf(':') + 1);
  }

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
          {learningPathData && <div>
            {learningPathData.showTitle && <LearningPathInformation
              title={learningPathData.title.title}
              description={learningPathData.description && learningPathData.description.description}
              license={learningPathData.license}
            />}
            {articleId && <ArticleLoader hideResources hideForm articleId={articleId} />}
          </div>}
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
