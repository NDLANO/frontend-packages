/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { injectT } from '@ndla/i18n';

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

const fetchTopicData = (topicDataItem, setDataCallback) => {
  loadArticle(topicDataItem.id).then(result => {
    const updatedItem = { ...topicDataItem };
    updatedItem.loadingContent = false;
    updatedItem.content = result.content;
    updatedItem.introduction = result.introduction;
    setDataCallback(updatedItem);
  });
};

const prepareTopicData = (topics, selectedId, setDataCallback) => {
  const items = [];
  let selectedItem = null;
  topics.forEach(item => {
    const newItem = { ...item };
    newItem.selected = newItem.id === selectedId;
    if (newItem.selected) {
      if (!newItem.content && setDataCallback) {
        newItem.loadingContent = true;
        fetchTopicData(newItem, setDataCallback);
      }
      selectedItem = newItem;
    }
    items.push(newItem);
  });
  return { items: items, selectedItem: selectedItem };
};

const SubjectPage = ({
  selectedMainTopic: preSelectedMainTopic,
  selectedSubTopic: preSelectedSubTopic,
  selectedSubSubTopic: preSelectedSubSubTopic,
  t,
}) => {
  const [selectedMainTopic, setSelectedMainTopic] = useState(
    preSelectedMainTopic,
  );
  const [selectedSubTopic, setSelectedSubTopic] = useState(preSelectedSubTopic);
  const [selectedSubSubTopic, setSelectedSubSubTopic] = useState(
    preSelectedSubSubTopic,
  );

  const [topicData, setTopicData] = useState(null);
  const [subTopicData, setSubTopicData] = useState(null);
  const [subSubTopicData, setSubSubTopicData] = useState(null);

  const [mainTopics, setMainTopics] = useState(() => {
    const { items, selectedItem } = prepareTopicData(
      topicsData,
      preSelectedMainTopic,
      setTopicData,
    );
    setTopicData(selectedItem);
    return items;
  });

  const [subTopics, setSubTopics] = useState(() => {
    const { selectedItem } = prepareTopicData(topicsData, preSelectedMainTopic);
    if (selectedItem) {
      const subTopics = selectedItem.subTopics;
      if (subTopics && subTopics.length) {
        const { items, selectedItem } = prepareTopicData(
          subTopics,
          preSelectedSubTopic,
          setSubTopicData,
        );
        setSubTopicData(selectedItem);
        return items;
      }
    }
    return [];
  });

  const [subSubTopics, setSubSubTopics] = useState(() => {
    if (preSelectedSubSubTopic) {
      const { selectedItem } = prepareTopicData(
        topicsData,
        preSelectedMainTopic,
      );
      if (selectedItem) {
        const subTopics = selectedItem.subTopics;
        if (subTopics && subTopics.length) {
          const { selectedItem: selectedSubItem } = prepareTopicData(
            subTopics,
            preSelectedSubTopic,
          );
          if (selectedSubItem) {
            const subSubTopics = selectedSubItem.subTopics;
            if (subSubTopics && subSubTopics.length) {
              const {
                items,
                selectedItem: selectedSubSubItem,
              } = prepareTopicData(
                subSubTopics,
                preSelectedSubSubTopic,
                setSubSubTopicData,
              );
              setSubTopicData(selectedSubSubItem);
              return items;
            }
          }
        }
      }
    }
    return [];
  });

  const [showMainTopicContent, setShowMainTopicContent] = useState(null);
  const [showSubTopicContent, setShowSubTopicContent] = useState(null);
  const [showSubSubTopicContent, setShowSubSubTopicContent] = useState(null);

  const [
    showSubTopicAdditionalTopics,
    setShowSubTopicAdditionalTopics,
  ] = useState(false);

  const [currentLevel, setCurrentLevel] = useState(() => {
    if (preSelectedSubSubTopic) {
      return 'SubSubtopic';
    } else if (preSelectedSubTopic) {
      return 'Subtopic';
    } else if (preSelectedMainTopic) {
      return 'Topic';
    }
    return 'Subject';
  });

  // Hold the previous selected main topic
  const prevSelectedMainTopicRef = useRef('__initial__');
  const prevSelectedSubTopicRef = useRef('__initial__');

  const mainTopicRef = createRef();
  const subTopicRef = createRef();
  const subSubTopicRef = createRef();

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
  if (subSubTopicData) {
    breadcrumbItems.push({
      ...subSubTopicData,
      typename: 'SubSubtopic',
      isCurrent: currentLevel === 'SubSubtopic',
    });
  }

  const updateMainContent = () => {
    const { items, selectedItem } = prepareTopicData(
      topicsData,
      selectedMainTopic,
      setTopicData,
    );
    setMainTopics(items);
    setTopicData(selectedItem);
    if (selectedItem && selectedItem.subTopics) {
      updateSubContent(selectedItem.subTopics);
    }
  };

  const updateSubContent = topicsData => {
    const { items, selectedItem } = prepareTopicData(
      topicsData,
      selectedSubTopic,
      setSubTopicData,
    );

    setSubTopics(items);
    setSubTopicData(selectedItem);
    setShowSubTopicContent(false);
    if (selectedItem && selectedItem.subTopics) {
      updateSubSubContent(selectedItem.subTopics);
    }
  };

  const updateSubSubContent = topicsData => {
    const { items, selectedItem } = prepareTopicData(
      topicsData,
      selectedSubSubTopic,
      setSubSubTopicData,
    );

    setSubSubTopics(items);
    setSubSubTopicData(selectedItem);
    setShowSubSubTopicContent(false);
  };

  const scrollToCurrentLevel = () => {
    let scrollTo = 0;
    switch (currentLevel) {
      case 'Subjecttype':
      case 'Subject':
        break;
      case 'Topic':
        scrollTo =
          mainTopicRef.current.getBoundingClientRect().bottom +
          window.scrollY -
          55;
        break;
      case 'Subtopic':
        scrollTo =
          subTopicRef.current.getBoundingClientRect().bottom +
          window.scrollY -
          55;
        break;
      case 'SubSubtopic':
        scrollTo =
          subSubTopicRef.current.getBoundingClientRect().bottom +
          window.scrollY -
          55;
        break;
      default: // do nothing, redirect??
    }
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const prevMainTopic = prevSelectedMainTopicRef.current;
    if (prevMainTopic !== '__initial__') {
      const prevSubTopic = prevSelectedSubTopicRef.current;
      // No need to run this on initial
      if (prevMainTopic !== selectedMainTopic) {
        updateMainContent();
      } else if (prevSubTopic !== selectedSubTopic) {
        updateSubContent(subTopics);
      } else {
        updateSubSubContent(subSubTopics);
      }
    }
    prevSelectedMainTopicRef.current = selectedMainTopic;
  }, [selectedMainTopic, selectedSubTopic, selectedSubSubTopic]);

  useEffect(() => {
    scrollToCurrentLevel();
  }, [currentLevel]);

  const onClickMainTopic = (e, id) => {
    e.preventDefault();
    if (id !== selectedMainTopic) {
      setSelectedSubTopic(null);
      setSubTopics([]);
      setSubTopicData(null);
      setShowSubTopicContent(false);

      setSelectedSubSubTopic(null);
      setSubSubTopics([]);
      setSubSubTopicData(null);
      setShowSubSubTopicContent(false);

      setShowMainTopicContent(false);
      setSelectedMainTopic(id);
    }
    if (currentLevel !== 'Topic') {
      setCurrentLevel('Topic');
    } else {
      scrollToCurrentLevel();
    }
  };

  const onClickSubTopic = (e, id) => {
    e.preventDefault();
    if (id !== selectedSubTopic) {
      setSelectedSubTopic(id);

      setSelectedSubSubTopic(null);
      setSubSubTopics([]);
      setSubSubTopicData(null);
      setShowSubSubTopicContent(false);
    }
    if (currentLevel !== 'Subtopic') {
      setCurrentLevel('Subtopic');
    } else {
      scrollToCurrentLevel();
    }
  };

  const onClickSubSubTopic = (e, id) => {
    e.preventDefault();
    setSelectedSubSubTopic(id);
    if (currentLevel !== 'SubSubtopic') {
      setCurrentLevel('SubSubtopic');
    } else {
      scrollToCurrentLevel();
    }
  };

  const handleNav = (e, item) => {
    e.preventDefault();
    if (currentLevel !== item.typename) {
      setCurrentLevel(item.typename);
    } else {
      scrollToCurrentLevel();
    }
  };

  const moveBannerUp = !subTopicData;

  const getSubTopics = () => {
    if (showSubTopicAdditionalTopics) {
      return subTopics;
    }
    return subTopics.filter(item => !item.isAdditionalResource);
  };

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
                onToggleShowContent={() =>
                  setShowMainTopicContent(!showMainTopicContent)
                }
                showContent={showMainTopicContent}
                isAdditionalTopic={topicData.isAdditionalResource}
                isLoading={topicData.loadingContent}>
                {topicData.content}
              </NavigationTopicAbout>

              <div ref={subTopicRef}>
                {subTopics.length ? (
                  <NavigationBox
                    colorMode="light"
                    heading={t('navigation.topics')}
                    hasAdditionalResources={subTopics.some(
                      item => item.isAdditionalResource,
                    )}
                    showAdditionalResources={showSubTopicAdditionalTopics}
                    items={getSubTopics()}
                    onToggleAdditionalResources={() =>
                      setShowSubTopicAdditionalTopics(
                        !showSubTopicAdditionalTopics,
                      )
                    }
                    onClick={onClickSubTopic}
                  />
                ) : null}
                {currentLevel === 'Topic' && (
                  <Resources
                    title={topicData.label}
                    showActiveResource={false}
                  />
                )}
              </div>
              {subTopicData && (
                <>
                  <NavigationTopicAbout
                    heading={subTopicData.label}
                    ingress={subTopicData.introduction}
                    onToggleShowContent={() =>
                      setShowSubTopicContent(!showSubTopicContent)
                    }
                    showContent={showSubTopicContent}
                    isAdditionalTopic={subTopicData.isAdditionalResource}
                    isLoading={subTopicData.loadingContent}>
                    {subTopicData.content}
                  </NavigationTopicAbout>
                </>
              )}
              <div ref={subSubTopicRef}>
                {subTopicData && (
                  <>
                    {subSubTopics.length ? (
                      <NavigationBox
                        colorMode="light"
                        heading={t('navigation.topics')}
                        hasAdditionalResources={subSubTopics.some(
                          item => item.isAdditionalResource,
                        )}
                        showAdditionalResources={showSubTopicAdditionalTopics}
                        items={subSubTopics}
                        onToggleAdditionalResources={() =>
                          setShowSubTopicAdditionalTopics(
                            !showSubTopicAdditionalTopics,
                          )
                        }
                        onClick={onClickSubSubTopic}
                      />
                    ) : null}
                    {currentLevel === 'Subtopic' && (
                      <Resources
                        title={subTopicData.label}
                        showActiveResource={false}
                      />
                    )}
                  </>
                )}
              </div>
              {subSubTopicData && (
                <>
                  <NavigationTopicAbout
                    heading={subSubTopicData.label}
                    ingress={subSubTopicData.introduction}
                    onToggleShowContent={() =>
                      setShowSubSubTopicContent(!showSubSubTopicContent)
                    }
                    showContent={showSubSubTopicContent}
                    isAdditionalTopic={subSubTopicData.isAdditionalResource}
                    isLoading={subSubTopicData.loadingContent}>
                    {subSubTopicData.content}
                  </NavigationTopicAbout>
                  <Resources
                    title={subSubTopicData.label}
                    showActiveResource={false}
                  />
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
  selectedMainTopic: PropTypes.number,
  selectedSubTopic: PropTypes.number,
  selectedSubSubTopic: PropTypes.number,
};

export default injectT(SubjectPage);
