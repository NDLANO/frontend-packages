/**
 * Copyright (c) 2019-present, NDLA.
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
  OneColumn,
  SafeLink,
} from '@ndla/ui';
import { getCookie, setCookie } from '@ndla/util';
import { colors } from '@ndla/core';
import Button from '@ndla/button';

import ArticleLoader from '../article/ArticleLoader';
import Breadcrumb from '../molecules/breadcrumbs';

async function fetchLearningPathArticle({ learningPathId, stepId }) {
  return await fetch(
    `https://api.ndla.no/learningpath-api/v2/learningpaths/${learningPathId}/learningsteps/${stepId}?language=nb&fallback=true`,
  ).then(data => data.json());
}

async function fetchLearningPathLearningSteps({ learningPathId }) {
  return await fetch(
    `https://api.ndla.no/learningpath-api/v2/learningpaths/${learningPathId}?language=nb&fallback=true`,
  ).then(data => data.json());
}

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
  border: 4px solid ${colors.support.red};
  border-radius: 10px;
  position: fixed;
`;

const updateLearningStepNumber = (
  { learningStepsData, currentLearningStepNumber },
  code,
) => {
  let direction;
  if (code === 'ArrowLeft') {
    direction = -1;
  } else if (code === 'ArrowRight') {
    direction = 1;
  } else {
    return currentLearningStepNumber || 0;
  }
  if (
    currentLearningStepNumber + direction < 0 ||
    currentLearningStepNumber + direction >=
      learningStepsData.learningsteps.length
  ) {
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
  const [hideHelp, toggleHelp] = useState(true);
  const [learningPathId, updateLearningPathId] = useState(
    DEMO_LEARNING_PATH_ID,
  );
  const [tempLearningPathId, updateTempLearningPathId] = useState(
    DEMO_LEARNING_PATH_ID,
  );
  const {
    currentLearningStepNumber,
    currentLearningStep,
    learningStepsData,
  } = currentState;

  async function fetchLearningStep(params) {
    const data = await fetchLearningPathArticle(params);
    dispatch({ type: UPDATE_LEARNING_PATH_STEP, data });
  }

  async function fetchLearningSteps(params) {
    const data = await fetchLearningPathLearningSteps(params);
    dispatch({ type: UPDATE_LEARNING_PATH_DATA, data });
    dispatch({ type: UPDATE_SEQUENCE_NUMBER });
  }

  useEffect(() => {
    const onKeyUpEvent = e => {
      dispatch({ type: UPDATE_SEQUENCE_NUMBER, code: e.code });
    };
    window.addEventListener('keyup', onKeyUpEvent);
    fetchLearningSteps({ learningPathId });
    return () => {
      window.removeEventListener('keyup', onKeyUpEvent);
    };
  }, []);

  useEffect(() => {
    if (learningsteps && currentLearningStepNumber !== undefined) {
      dispatch({ type: UPDATE_LEARNING_PATH_STEP });
      fetchLearningStep({
        stepId: learningsteps[currentLearningStepNumber].id,
        learningPathId,
      });
      // Set cookies
      const cookieKey = `${LEARNING_PATHS_COOKIES_KEY}_${learningPathId}`;
      const currentCookie = getCookie(cookieKey, document.cookie);
      let updatedCookie = currentCookie ? JSON.parse(currentCookie) : {};
      updatedCookie[learningsteps[currentLearningStepNumber].id] = true;
      setCookie(cookieKey, JSON.stringify(updatedCookie));
    }
  }, [currentLearningStepNumber]);

  useEffect(() => {
    dispatch({ type: UPDATE_LEARNING_PATH_DATA });
    dispatch({ type: UPDATE_SEQUENCE_NUMBER });
    fetchLearningSteps({ learningPathId });
  }, [learningPathId]);

  if (!learningStepsData || currentLearningStepNumber === undefined) {
    return <div>LOADING</div>;
  }

  const { duration, lastUpdated, copyright, learningsteps } = learningStepsData;
  const stepId = learningsteps[currentLearningStepNumber].id; // should be fetched from url
  const currentIndex = learningsteps.findIndex(
    learningStep => learningStep.current,
  );
  const lastUpdatedDate = new Date(lastUpdated);
  const lastUpdatedString = `${lastUpdatedDate.getDate()}.${
    lastUpdatedDate.getMonth() < 10 ? '0' : ''
  }${lastUpdatedDate.getMonth()}.${lastUpdatedDate.getFullYear()}`;

  let articleId =
    currentLearningStep && currentLearningStep.embedUrl
      ? currentLearningStep.embedUrl.url.substr(
          currentLearningStep.embedUrl.url.lastIndexOf('/') + 1,
        )
      : null;

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
            learningPathURL="https://www.stier.ndla.no"
          />
          {currentLearningStep && (
            <div>
              {currentLearningStep.showTitle && (
                <LearningPathInformation
                  title={currentLearningStep.title.title}
                  description={
                    currentLearningStep.description &&
                    currentLearningStep.description.description
                  }
                  license={currentLearningStep.license}
                />
              )}
              {articleId && (
                <ArticleLoader hideResources hideForm articleId={articleId} />
              )}
              {currentLearningStepNumber === learningsteps.length -1 && (
                <OneColumn>
                  <div>
                    Dette er siste steg i læringsstien
                    "dsffdsff"
                  </div>
                  <div>
                    Gå til faget:
                    <SafeLink to="link">Samfunnsfag</SafeLink>
                  </div>
                  <div>
                    Gå til emne:
                    <SafeLink to="link">Emne eksempel</SafeLink>
                  </div>
                </OneColumn>
              )}
            </div>
          )}
        </LearningPathContent>
        <LearningPathSticky>
          {currentLearningStepNumber > 0 ? (
            <LearningPathStickySibling
              arrow="left"
              label="forrige"
              to={learningsteps[currentLearningStepNumber - 1].metaUrl}
              title={learningsteps[currentLearningStepNumber - 1].title.title}
            />
          ) : (
            <div />
          )}
          {currentLearningStepNumber < learningsteps.length - 1 && (
            <LearningPathStickySibling
              arrow="right"
              label="neste"
              to={learningsteps[currentLearningStepNumber + 1].metaUrl}
              title={learningsteps[currentLearningStepNumber + 1].title.title}
            />
          )}
        </LearningPathSticky>
      </LearningPathWrapper>
      {hideHelp && (
        <div css={infoCSS}>
          Simulate navigation with arrow keys
          <input
            type="text"
            name="article"
            placeholder="enter learningpath id to load"
            value={tempLearningPathId}
            onChange={e => updateTempLearningPathId(e.target.value)}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                updateLearningPathId(e.target.value);
                e.preventDefault();
              }
            }}
          />
          <Button onClick={() => toggleHelp(false)}>Close</Button>
        </div>
      )}
    </>
  );
};

export default LearningPathExample;
