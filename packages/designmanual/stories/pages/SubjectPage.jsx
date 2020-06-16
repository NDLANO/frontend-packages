/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  LayoutItem,
  NavigationBox,
  NavigationHeading,
  NavigationTopicAbout,
  OneColumn,
  SubjectAbout,
  SubjectBanner,
  SubjectCarousel,
  BreadCrumblist,
  ArticleHeaderWrapper,
  ArticleByline,
  ArticleContent,
  ArticleFootNotes,
  ArticleIntroduction,
  ArticleWrapper,
} from '@ndla/ui';
import { getLicenseByAbbreviation } from '@ndla/licenses';

import {
  subject,
  topics as topicsData,
  programs,
} from '../../dummydata/mockPrograms';

import { contentCards } from '../../dummydata';
import Resources from '../molecules/resources';
import exampleBackground from '../../images/banners/Service-og-samferdsel-black.svg';
import { fetchArticle } from '../article/articleApi';
import LicenseBox from '../article/LicenseBox';

const subjectAbout = (label, description) => (
  <SubjectAbout
    wide
    media={
      <Image
        alt="Forstørrelsesglass"
        src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
      />
    }
    heading={label}
    description={description}
  />
);

const loadArticle = async articleId => {
  try {
    const article = await fetchArticle(articleId);
    const renderMarkdown = text => text;
    const {
      introduction,
      published,
      content: articleContent,
      footNotes,
      copyright: { license: licenseObj, creators, rightsholders, processors },
    } = article;

    const license = getLicenseByAbbreviation(licenseObj.license, 'nb')
      .abbreviation;

    let authors = creators;
    if (Array.isArray(authors) && authors.length === 0) {
      authors = rightsholders;
    }
    if (Array.isArray(authors) && authors.length === 0) {
      authors = processors;
    }

    const content = (
      <ArticleWrapper modifier="clean-in-context">
        <LayoutItem layout="extend">
          <ArticleHeaderWrapper>
            <ArticleIntroduction renderMarkdown={renderMarkdown}>
              {introduction}
            </ArticleIntroduction>
            <ArticleByline
              licenseBox={<LicenseBox />}
              {...{
                authors,
                published,
                license,
              }}
            />
          </ArticleHeaderWrapper>
        </LayoutItem>
        <LayoutItem layout="extend">
          <ArticleContent content={articleContent} />
        </LayoutItem>
        <LayoutItem layout="extend">
          {footNotes && footNotes.length > 0 && (
            <ArticleFootNotes footNotes={footNotes} />
          )}
        </LayoutItem>
      </ArticleWrapper>
    );
    return { content: content, introduction: introduction };
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
};

const getMainTopicData = selectedTopic => {
  const topics = [];

  topicsData.forEach(topic => {
    const item = { ...topic };
    item.selected = topic.label === selectedTopic;
    topics.push(item);
  });
  return topics;
};

const SubjectPage = ({
  selectedMainTopic: preSelectedMainTopic,
  selectedSubTopic: preSelectedSubTopic,
}) => {
  const fetchTopicData = (topicDataItem, setDataCallback, articleId) => {
    loadArticle(articleId).then(result => {
      const updatedItem = { ...topicDataItem };
      updatedItem.loadingContent = false;
      updatedItem.content = result.content;
      updatedItem.introduction = result.introduction;
      setDataCallback(updatedItem);
    });
  };

  const loadTopicData = (topicDataItem, articleId = 1344, isSubTopic) => {
    const callback = item => {
      isSubTopic ? setSubTopicData(item) : setTopicData(item);
    };
    fetchTopicData(topicDataItem, callback, articleId);
  };

  const [selectedMainTopic, setSelectedMainTopic] = useState(
    preSelectedMainTopic,
  );
  const [selectedSubTopic, setSelectedSubTopic] = useState(preSelectedSubTopic);

  const [mainTopics, setMainTopics] = useState(() =>
    getMainTopicData(preSelectedMainTopic),
  );
  const [subTopics, setSubTopics] = useState(() => {
    const topics = getMainTopicData(preSelectedMainTopic);
    const mainTopicData = topics.find(item => item.label === selectedMainTopic);
    const newSubTopics = [];
    if (mainTopicData) {
      const subTopics = mainTopicData.subTopics;
      if (subTopics && subTopics.length) {
        subTopics.forEach(item => {
          const newSubItem = { ...item };
          newSubItem.selected = newSubItem.label === preSelectedSubTopic;
          if (newSubItem.label === preSelectedSubTopic) {
            if (!newSubItem.content) {
              newSubItem.loadingContent = true;
              loadTopicData(newSubItem, 1345, true);
            }
          }
          newSubTopics.push(newSubItem);
        });
      }
    }
    return newSubTopics;
  });

  const [topicData, setTopicData] = useState(() => {
    const topics = getMainTopicData(preSelectedMainTopic);
    const mainTopicData = topics.find(item => item.label === selectedMainTopic);

    if (mainTopicData && !mainTopicData.content) {
      mainTopicData.loadingContent = true;
      loadTopicData(mainTopicData);
    }
    return mainTopicData;
  });
  const [subTopicData, setSubTopicData] = useState(null);

  const [showMainTopicContent, setShowMainTopicContent] = useState(null);
  const [showSubTopicContent, setShowSubTopicContent] = useState(null);

  const [currentLevel, setCurrentLevel] = useState('Subject'); // default to subject

  // Hold the previous selected main topic
  const prevSelectedMainTopicRef = useRef('__initial__');

  const mainTopicRef = createRef();
  const subTopicRef = createRef();

  const breadcrumbItems = [
    { ...programs[11], typename: 'Subjecttype' },
    { ...subject, typename: 'Subject', isCurrent: currentLevel === 'Subject' },
  ];

  if (topicData) {
    breadcrumbItems.push({
      ...topicData,
      typename: 'Topic',
      isCurrent: currentLevel === 'Topic',
    });
  }
  if (subTopicData) {
    breadcrumbItems.push({
      ...subTopicData,
      typename: 'Subtopic',
      isCurrent: currentLevel === 'Subtopic',
    });
  }

  const updateMainContent = () => {
    const topics = getMainTopicData(selectedMainTopic);
    setMainTopics(getMainTopicData(selectedMainTopic));

    if (selectedMainTopic) {
      const mainTopicData = topics.find(
        item => item.label === selectedMainTopic,
      );

      if (!mainTopicData.content) {
        mainTopicData.loadingContent = true;
        loadTopicData(mainTopicData);
      }
      setTopicData(mainTopicData);
      updateSubContent(mainTopicData.subTopics);
    }
  };

  const updateSubContent = topicsData => {
    const newSubTopics = [];
    if (topicsData && topicsData.length) {
      topicsData.forEach(item => {
        const newSubItem = { ...item };
        newSubItem.selected = newSubItem.label === selectedSubTopic;
        if (newSubItem.label === selectedSubTopic) {
          if (!newSubItem.content) {
            newSubItem.loadingContent = true;
            loadTopicData(newSubItem, 1344, true);
          }
          setSubTopicData(newSubItem);
        }
        newSubTopics.push(newSubItem);
      });
    }
    setSubTopics(newSubTopics);
    setShowSubTopicContent(false);
  };

  useEffect(() => {
    const prevMainTopic = prevSelectedMainTopicRef.current;
    if (prevMainTopic !== '__initial__') {
      // No need to run this on initial
      if (prevMainTopic !== selectedMainTopic) {
        updateMainContent();
      } else {
        updateSubContent(subTopics);
      }
    }
    prevSelectedMainTopicRef.current = selectedMainTopic;
  }, [selectedMainTopic, selectedSubTopic]);

  useEffect(() => {
    if (preSelectedMainTopic) {
      if (preSelectedSubTopic) {
        setCurrentLevel('Subtopic');
        window.scrollTo({
          top:
            subTopicRef.current.getBoundingClientRect().bottom +
            window.scrollY -
            100,
          behavior: 'smooth',
        });
      } else {
        setCurrentLevel('Topic');
        window.scrollTo({
          top:
            mainTopicRef.current.getBoundingClientRect().bottom +
            window.scrollY -
            100,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  const onClickMainTopic = e => {
    e.preventDefault();
    const topic = e.currentTarget.textContent;
    if (topic !== selectedMainTopic) {
      setSelectedSubTopic(null);
      setSubTopicData(null);
      setShowMainTopicContent(false);
      setShowSubTopicContent(false);
      setSelectedMainTopic(topic);
    }

    setCurrentLevel('Topic');
    window.scrollTo({
      top:
        mainTopicRef.current.getBoundingClientRect().bottom +
        window.scrollY -
        100,
      behavior: 'smooth',
    });
  };

  const onClickSubTopic = e => {
    e.preventDefault();
    const subTopic = e.currentTarget.textContent;
    setSelectedSubTopic(subTopic);
    setCurrentLevel('Subtopic');

    window.scrollTo({
      top:
        subTopicRef.current.getBoundingClientRect().bottom +
        window.scrollY -
        100,
      behavior: 'smooth',
    });
  };

  const handleNav = (e, item) => {
    const { typename } = item;
    switch (typename) {
      case 'Subjecttype':
        e.preventDefault();
        window.scrollTo({
          top: 50,
          behavior: 'smooth',
        });
        setCurrentLevel(typename);
        break;
      case 'Subject':
        e.preventDefault();
        window.scrollTo({
          top: 50,
          behavior: 'smooth',
        });
        setCurrentLevel(typename);
        break;
      case 'Topic':
        e.preventDefault();
        window.scrollTo({
          top:
            mainTopicRef.current.getBoundingClientRect().bottom +
            window.scrollY -
            100,
          behavior: 'smooth',
        });
        setCurrentLevel(typename);
        break;
      case 'Subtopic':
        e.preventDefault();
        window.scrollTo({
          top:
            subTopicRef.current.getBoundingClientRect().bottom +
            window.scrollY -
            100,
          behavior: 'smooth',
        });
        setCurrentLevel(typename);
        break;
      default: // do nothing, redirect??
    }
  };

  const onToggleShowMainContent = () => {
    if (topicData) {
      setShowMainTopicContent(!showMainTopicContent);
    }
  };

  const onToggleShowSubContent = () => {
    if (subTopicData) {
      setShowSubTopicContent(!showSubTopicContent);
    }
  };

  const moveBannerUp = !subTopicData;

  return (
    <>
      <OneColumn>
        <LayoutItem layout="extend">
          <BreadCrumblist items={breadcrumbItems} onNav={handleNav} />
          <NavigationHeading subHeading={subject.subjectName}>
            {subject.label}
          </NavigationHeading>
          <div ref={mainTopicRef}>
            <NavigationBox items={mainTopics} onClick={onClickMainTopic} />
          </div>
          {topicData && (
            <>
              <NavigationTopicAbout
                heading={topicData.label}
                ingress={topicData.introduction}
                onToggleShowContent={onToggleShowMainContent}
                showContent={showMainTopicContent}
                isLoading={topicData.loadingContent}>
                {topicData.content}
              </NavigationTopicAbout>
              {subTopics.length ? (
                <div ref={subTopicRef}>
                  <NavigationBox
                    colorMode="light"
                    heading="emner"
                    items={subTopics}
                    onClick={onClickSubTopic}
                  />
                </div>
              ) : null}
              {subTopicData && (
                <>
                  <NavigationTopicAbout
                    heading={subTopicData.label}
                    ingress={subTopicData.introduction}
                    onToggleShowContent={onToggleShowSubContent}
                    showContent={showSubTopicContent}
                    isLoading={subTopicData.loadingContent}>
                    {subTopicData.content}
                  </NavigationTopicAbout>
                  <Resources />
                </>
              )}
            </>
          )}
        </LayoutItem>
      </OneColumn>
      <SubjectBanner
        image={exampleBackground}
        negativeTopMargin={moveBannerUp}
      />
      <OneColumn wide>
        {subjectAbout(subject.description.heading, subject.description.text)}
      </OneColumn>
      <SubjectCarousel
        wideScreen
        subjects={contentCards}
        title="Litt forskjellig fra faget"
        subjectPage
      />
    </>
  );
};

SubjectPage.propTypes = {
  selectedMainTopic: PropTypes.string,
  selectedSubTopic: PropTypes.string,
};

export default SubjectPage;
