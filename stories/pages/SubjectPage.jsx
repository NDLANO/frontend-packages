/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from '@ndla/hooks';
import { useTranslation } from 'react-i18next';

import {
  LayoutItem,
  NavigationBox,
  NavigationHeading,
  OneColumn,
  Breadcrumblist,
  ArticleHeaderWrapper,
  ArticleByline,
  ArticleContent,
  ArticleFootNotes,
  ArticleIntroduction,
  ArticleWrapper,
  Topic,
  AuthModal,
  MessageBox,
} from '@ndla/ui';
import { getLicenseByAbbreviation } from '@ndla/licenses';

import Resources from '../molecules/resources';
import { fetchArticle } from '../article/articleApi';
import LicenseBox from '../article/LicenseBox';
import FigureImage from '../article/FigureImage';

const loadArticle = async (articleId) => {
  try {
    const article = await fetchArticle(articleId);
    const renderMarkdown = (text) => text;
    const {
      introduction,
      published,
      content: articleContent,
      footNotes,
      copyright: { license: licenseObj, creators, rightsholders, processors },
    } = article;

    const license = getLicenseByAbbreviation(licenseObj.license, 'nb').abbreviation;

    let authors = creators;
    if (Array.isArray(authors) && authors.length === 0) {
      authors = rightsholders;
    }
    if (Array.isArray(authors) && authors.length === 0) {
      authors = processors;
    }

    const content = (
      <ArticleWrapper modifier="in-topic">
        <LayoutItem layout="full">
          <ArticleHeaderWrapper>
            <ArticleIntroduction renderMarkdown={renderMarkdown}>{introduction}</ArticleIntroduction>
          </ArticleHeaderWrapper>
        </LayoutItem>
        <LayoutItem layout="full">
          <ArticleContent content={articleContent} />
        </LayoutItem>
        <LayoutItem layout="full">
          {footNotes && footNotes.length > 0 && <ArticleFootNotes footNotes={footNotes} />}
        </LayoutItem>
        <ArticleByline
          licenseBox={<LicenseBox />}
          {...{
            authors,
            published,
            license,
          }}
        />
      </ArticleWrapper>
    );
    return { content: content, introduction: introduction, metaImage: article.metaImage };
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
};

const fetchTopicData = (topicDataItem, setDataCallback) => {
  loadArticle(topicDataItem.id).then((result) => {
    const updatedItem = { ...topicDataItem };
    updatedItem.loadingContent = false;
    updatedItem.content = result.content;
    updatedItem.introduction = result.introduction;
    if (result.metaImage) {
      updatedItem.image = { url: `${result.metaImage.url}`, alt: result.metaImage.alt };
      updatedItem.visualElement = {
        type: 'image',
        element: <FigureImage type="full-column" alt={result.metaImage.alt} src={result.metaImage.url} />,
      };
    }

    setDataCallback(updatedItem);
  });
};

const prepareTopicData = (topics, selectedId, setDataCallback) => {
  const items = [];
  let selectedItem = null;
  topics.forEach((item) => {
    const newItem = { ...item };
    newItem.selected = parseInt(newItem.id) === selectedId;
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
  topics: topicsData,
  initialBreadcrumb = [],
  subjectName,
  messagebox: message,
  messageBoxTagMessage,
}) => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [selectedMainTopic, setSelectedMainTopic] = useState(preSelectedMainTopic);
  const [selectedSubTopic, setSelectedSubTopic] = useState(preSelectedSubTopic);
  const [selectedSubSubTopic, setSelectedSubSubTopic] = useState(preSelectedSubSubTopic);

  const [topicData, setTopicData] = useState(null);
  const [subTopicData, setSubTopicData] = useState(null);
  const [subSubTopicData, setSubSubTopicData] = useState(null);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const [mainTopics, setMainTopics] = useState(() => {
    const { items, selectedItem } = prepareTopicData(topicsData, preSelectedMainTopic, setTopicData);
    setTopicData(selectedItem);
    return items;
  });

  const [subTopics, setSubTopics] = useState(() => {
    const { selectedItem } = prepareTopicData(topicsData, preSelectedMainTopic);
    if (selectedItem) {
      const subTopics = selectedItem.subTopics;
      if (subTopics && subTopics.length) {
        const { items, selectedItem } = prepareTopicData(subTopics, preSelectedSubTopic, setSubTopicData);
        setSubTopicData(selectedItem);
        return items;
      }
    }
    return [];
  });

  const [subSubTopics, setSubSubTopics] = useState(() => {
    if (preSelectedSubSubTopic) {
      const { selectedItem } = prepareTopicData(topicsData, preSelectedMainTopic);
      if (selectedItem) {
        const subTopics = selectedItem.subTopics;
        if (subTopics && subTopics.length) {
          const { selectedItem: selectedSubItem } = prepareTopicData(subTopics, preSelectedSubTopic);
          if (selectedSubItem) {
            const subSubTopics = selectedSubItem.subTopics;
            if (subSubTopics && subSubTopics.length) {
              const { items, selectedItem: selectedSubSubItem } = prepareTopicData(
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

  const [showSubTopicAdditionalTopics, setShowSubTopicAdditionalTopics] = useState(false);

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

  const mainTopicRef = useRef(null);
  const subTopicRef = useRef(null);
  const subSubTopicRef = useRef(null);

  /*const breadcrumbItems = [
    { ...programs[11], typename: 'Subjecttype' },
    { ...subject, typename: 'Subject', isCurrent: currentLevel === 'Subject' },
*/

  const breadcrumbItems = initialBreadcrumb.map((item) => ({
    ...item,
    isCurrent: currentLevel === item.typename,
  }));

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
    const { items, selectedItem } = prepareTopicData(topicsData, selectedMainTopic, setTopicData);
    setMainTopics(items);
    setTopicData(selectedItem);
    if (selectedItem && selectedItem.subTopics) {
      updateSubContent(selectedItem.subTopics);
    }
  };

  const updateSubContent = (topicsData) => {
    const { items, selectedItem } = prepareTopicData(topicsData, selectedSubTopic, setSubTopicData);

    setSubTopics(items);
    setSubTopicData(selectedItem);
    setShowSubTopicContent(false);
    if (selectedItem && selectedItem.subTopics) {
      updateSubSubContent(selectedItem.subTopics);
    }
  };

  const updateSubSubContent = (topicsData) => {
    const { items, selectedItem } = prepareTopicData(topicsData, selectedSubSubTopic, setSubSubTopicData);

    setSubSubTopics(items);
    setSubSubTopicData(selectedItem);
    setShowSubSubTopicContent(false);
  };

  const scrollToCurrentLevel = useCallback(() => {
    let scrollTo = 0;
    switch (currentLevel) {
      case 'Subjecttype':
      case 'Subject':
        break;
      case 'Topic':
        scrollTo = mainTopicRef.current.getBoundingClientRect().bottom + window.scrollY - 55;
        break;
      case 'Subtopic':
        scrollTo = subTopicRef.current.getBoundingClientRect().bottom + window.scrollY - 55;
        break;
      case 'SubSubtopic':
        scrollTo = subSubTopicRef.current.getBoundingClientRect().bottom + window.scrollY - 55;
        break;
      default: // do nothing, redirect??
    }
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  }, [currentLevel]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMainTopic, selectedSubTopic, selectedSubSubTopic]);

  useEffect(scrollToCurrentLevel, [currentLevel, scrollToCurrentLevel]);

  const onClickMainTopic = (e, id) => {
    e.preventDefault();
    const { isRestrictedResource } = topicsData.find((item) => id === item.id);
    if (isRestrictedResource) {
      setShowLoginModal(true);
      return;
    }

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
  /* Stored for later
  const moveBannerUp = !topicData;
*/
  const getSubTopics = () => {
    if (showSubTopicAdditionalTopics) {
      return subTopics;
    }
    return subTopics.filter((item) => !item.isAdditionalResource);
  };

  // show/hide breadcrumb based on intersection
  const { entry } = useIntersectionObserver({
    root: null,
    target: containerRef.current,
    rootMargin: '-325px',
  });
  const showBreadCrumb = entry && entry.isIntersecting;
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`The component is ${showBreadCrumb ? 'visible' : 'not visible'}.`);
  }, [showBreadCrumb]);

  return (
    <>
      <div ref={containerRef}>
        <OneColumn>
          <LayoutItem layout="extend">
            {message && <MessageBox>{message}</MessageBox>}
            <NavigationHeading>{subjectName}</NavigationHeading>
            <div ref={mainTopicRef}>
              <NavigationBox items={mainTopics} onClick={onClickMainTopic} />
            </div>
            {topicData && (
              <>
                <Topic
                  renderMarkdown={(text) => text}
                  isLoading={topicData.loadingContent}
                  topic={{
                    title: topicData.label,
                    introduction: topicData.introduction,
                    image: topicData.image,
                    visualElement: topicData.visualElement,
                  }}
                  onToggleShowContent={() => setShowMainTopicContent(!showMainTopicContent)}
                  isAdditionalTopic={topicData.isAdditionalResource}
                  showContent={showMainTopicContent}>
                  {topicData.content}
                </Topic>
                <div ref={subTopicRef}>
                  {subTopics.length ? (
                    <NavigationBox
                      colorMode="light"
                      heading={t('navigation.topics')}
                      hasAdditionalResources={subTopics.some((item) => item.isAdditionalResource)}
                      showAdditionalResources={showSubTopicAdditionalTopics}
                      items={getSubTopics()}
                      onToggleAdditionalResources={() => setShowSubTopicAdditionalTopics(!showSubTopicAdditionalTopics)}
                      onClick={onClickSubTopic}
                    />
                  ) : null}
                  {currentLevel === 'Topic' && <Resources title={topicData.label} showActiveResource={false} />}
                </div>
                {subTopicData && (
                  <Topic
                    renderMarkdown={(text) => text}
                    isLoading={subTopicData.loadingContent}
                    topic={{
                      title: subTopicData.label,
                      introduction: subTopicData.introduction,
                      image: subTopicData.image,
                      visualElement: subTopicData.visualElement,
                    }}
                    onToggleShowContent={() => setShowSubTopicContent(!showSubTopicContent)}
                    isAdditionalTopic={subTopicData.isAdditionalResource}
                    showContent={showSubTopicContent}>
                    {subTopicData.content}
                  </Topic>
                )}
                <div ref={subSubTopicRef}>
                  {subTopicData && (
                    <>
                      {subSubTopics.length ? (
                        <NavigationBox
                          colorMode="light"
                          heading={t('navigation.topics')}
                          hasAdditionalResources={subSubTopics.some((item) => item.isAdditionalResource)}
                          showAdditionalResources={showSubTopicAdditionalTopics}
                          items={subSubTopics}
                          onToggleAdditionalResources={() =>
                            setShowSubTopicAdditionalTopics(!showSubTopicAdditionalTopics)
                          }
                          onClick={onClickSubSubTopic}
                        />
                      ) : null}
                      {currentLevel === 'Subtopic' && (
                        <Resources title={subTopicData.label} showActiveResource={false} />
                      )}
                    </>
                  )}
                </div>
                {subSubTopicData && (
                  <>
                    <Topic
                      renderMarkdown={(text) => text}
                      isLoading={subSubTopicData.loadingContent}
                      topic={{
                        title: subSubTopicData.label,
                        introduction: subSubTopicData.introduction,
                        image: subSubTopicData.image,
                        visualElement: subSubTopicData.visualElement,
                      }}
                      onToggleShowContent={() => setShowSubSubTopicContent(!showSubSubTopicContent)}
                      isAdditionalTopic={subSubTopicData.isAdditionalResource}
                      showContent={showSubSubTopicContent}>
                      {subSubTopicData.content}
                    </Topic>
                    <Resources title={subSubTopicData.label} showActiveResource={false} />
                  </>
                )}
              </>
            )}
          </LayoutItem>
        </OneColumn>
      </div>

      <OneColumn wide>
        {message && (
          <Breadcrumblist
            isVisible={showBreadCrumb}
            items={breadcrumbItems}
            onNav={handleNav}
            messageBoxTagMessage={messageBoxTagMessage}
            startOffset={100}
          />
        )}
        {!message && <Breadcrumblist isVisible={showBreadCrumb} items={breadcrumbItems} onNav={handleNav} />}
      </OneColumn>
      {showLoginModal && (
        <AuthModal
          showGeneralMessage={false}
          onAuthenticateClick={() => {}}
          onClose={() => setShowLoginModal(false)}
          isOpen>
          <p>{t('user.modal.topic')}</p>
        </AuthModal>
      )}
    </>
  );
};

SubjectPage.propTypes = {
  selectedMainTopic: PropTypes.number,
  selectedSubTopic: PropTypes.number,
  selectedSubSubTopic: PropTypes.number,
  topics: PropTypes.array,
  initialBreadcrumb: PropTypes.array,
  subjectName: PropTypes.string,
  bannerBackground: PropTypes.string,
};

export default SubjectPage;
