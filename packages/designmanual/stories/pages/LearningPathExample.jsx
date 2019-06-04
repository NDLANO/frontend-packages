/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useReducer, useEffect, useState, useMemo } from 'react';
import { css } from '@emotion/core';
import {
  LearningPathWrapper,
  LearningPathMenu,
  LearningPathSticky,
  LearningPathStickySibling,
  LearningPathContent,
  LearningPathInformation,
  SubjectBadge,
} from '@ndla/ui';
import {
  getCookie,
  setCookie,
} from '@ndla/util';

import ArticleLoader from '../article/ArticleLoader';
import Breadcrumb from '../molecules/breadcrumbs';

// Dummy data
import { fetchLearningPathArticle, fetchLearningPathLearningSteps } from '../../dummydata/mockLearningPaths';

const LEARNING_PATHS_COOKIES_KEY = 'LEARNING_PATHS_COOKIES_KEY';
const UPDATE_SEQUENCE_NUMBER = 'UPDATE_SEQUENCE_NUMBER';
const UPDATE_LEARNING_PATH_STEP = 'UPDATE_LEARNING_PATH_STEP';
const UPDATE_LEARNING_PATH_DATA = 'UPDATE_LEARNING_PATH_DATA';
const DEMO_LEARNING_PATH_ID = 434;

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

const updateLearningStepNumber = ({ learningStepsData, currentLearningStepNumber }, code) => {
  let direction;
  if (code === 'ArrowLeft') {
    direction = -1;
  } else if (code === 'ArrowRight') {
    direction = 1;
  } else {
    return currentLearningStepNumber || 0;
  }
  if (currentLearningStepNumber + direction < 0 || currentLearningStepNumber + direction >= learningStepsData.learningsteps.length) {
    return currentLearningStepNumber;
  }
  
  return currentLearningStepNumber + direction;
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SEQUENCE_NUMBER:
      return {
        ...state,
        currentLearningStepNumber: updateLearningStepNumber(state, action.code),
      };
    case UPDATE_LEARNING_PATH_STEP:
      return {
        ...state,
        currentLearningStep: action.data,
      };
    case UPDATE_LEARNING_PATH_DATA:
      return {
        ...state,
        learningStepsData: action.data,
      };
    default:
      throw new Error();
  }
};

const LearningPathExample = () => {
  const [currentState, dispatch] = useReducer(dataReducer, {});
  const { currentLearningStepNumber, currentLearningStep, learningStepsData } = currentState;

  async function fetchData(params) {
    const data = await fetchLearningPathArticle(params);
    dispatch({ type: UPDATE_LEARNING_PATH_STEP, data });
  }

  async function fetchLearningSteps(params) {
    const data = await fetchLearningPathLearningSteps(params);
    dispatch({ type: UPDATE_LEARNING_PATH_DATA, data });
    dispatch({ type: UPDATE_SEQUENCE_NUMBER });
  }
  
  useEffect(() => {
    const onKeyUpEvent = (e) => {
      dispatch({ type: UPDATE_SEQUENCE_NUMBER, code: e.code });
    }
    window.addEventListener('keyup', onKeyUpEvent);
    fetchLearningSteps({ learningPathId: DEMO_LEARNING_PATH_ID });
    return () => {
      window.removeEventListener('keyup', onKeyUpEvent);
    };
  }, []);

  useEffect(() => {
    if (learningsteps && currentLearningStepNumber !== undefined) {
      dispatch({ type: UPDATE_LEARNING_PATH_STEP });
      fetchData({ stepId: learningsteps[currentLearningStepNumber].id, learningPathId: DEMO_LEARNING_PATH_ID });
      // Set cookies
      const cookieKey = `${LEARNING_PATHS_COOKIES_KEY}_${DEMO_LEARNING_PATH_ID}`;
      const currentCookie = getCookie(cookieKey, document.cookie);
      let updatedCookie = currentCookie ? JSON.parse(currentCookie) : {};
      updatedCookie[learningsteps[currentLearningStepNumber].id] = true;
      setCookie(
        cookieKey,
        JSON.stringify(updatedCookie),
      );
    }
  }, [currentLearningStepNumber]);

  if (!learningStepsData || currentLearningStepNumber === undefined) {
    return <div>LOADING</div>
  }

  const { duration, lastUpdated, copyright, learningsteps } = learningStepsData;
  const stepId = learningsteps[currentLearningStepNumber].id; // should be fetched from url
  const currentIndex = learningsteps.findIndex(learningStep => learningStep.current);
  const lastUpdatedDate = new Date(lastUpdated);
  const lastUpdatedString = `${lastUpdatedDate.getDate()}.${lastUpdatedDate.getMonth() < 10 ? '0' : ''}${lastUpdatedDate.getMonth()}.${lastUpdatedDate.getFullYear()}`;

  let articleId = currentLearningStep && currentLearningStep.embedUrl ?
    currentLearningStep.embedUrl.url.substr(currentLearningStep.embedUrl.url.lastIndexOf('/') + 1) : null;

  if (articleId && articleId.indexOf(':') !== -1) {
    articleId = articleId.substr(articleId.lastIndexOf(':') + 1);
  }

  const cookieKey = `${LEARNING_PATHS_COOKIES_KEY}_${DEMO_LEARNING_PATH_ID}`;
  const fetchedCookies = getCookie(cookieKey, document.cookie);
  const useCookies = fetchedCookies ? JSON.parse(fetchedCookies) : {};
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
            name={learningStepsData.title.title}
            cookies={useCookies}
          />
          {currentLearningStep && <div>
            {currentLearningStep.showTitle && <LearningPathInformation
              title={currentLearningStep.title.title}
              description={currentLearningStep.description && currentLearningStep.description.description}
              license={currentLearningStep.license}
            />}
            {articleId && <ArticleLoader hideResources hideForm articleId={articleId} />}
          </div>}
        </LearningPathContent>
        <LearningPathSticky>
          {currentLearningStepNumber > 0 ?
            <LearningPathStickySibling
              arrow="left"
              label="forrige"
              to={learningsteps[currentLearningStepNumber - 1].metaUrl}
              title={learningsteps[currentLearningStepNumber - 1].title.title}
            /> :
            <div />
          }
          {currentLearningStepNumber < learningsteps.length - 1 ?
            <LearningPathStickySibling
              arrow="right"
              label="neste"
              to={learningsteps[currentLearningStepNumber + 1].metaUrl}
              title={learningsteps[currentLearningStepNumber + 1].title.title}
            /> :
            <LearningPathStickySibling
              label="Gå videre til emne"
              to="#"
              title={"Navn på emne"}
              icon={<SubjectBadge background />}
            />
          }
        </LearningPathSticky>
      </LearningPathWrapper>
      <div css={infoCSS}>
        Use Key arrows to simulate navigation
        <input type="text" />
      </div>
    </>
  )
};

export default LearningPathExample;
