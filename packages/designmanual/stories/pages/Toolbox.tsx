/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
// @ts-ignore
import { SubjectBanner, ToolboxPage } from '@ndla/ui';
// @ts-ignore
import { topics as toolboxTopics } from '../../dummydata/mockToolbox';
// @ts-ignore
import { fetchArticle } from '../article/articleApi';
// @ts-ignore
import Resources from '../molecules/resources';
// @ts-ignore
import backgroundToolbox from '../../images/banners/Verktoykasse.svg';

import { Image, Video, H5p } from '../molecules/VisualElements';

const dummyVisualElementOfTopic = (id: string) => {
  const index = toolboxTopics.findIndex((topic: any) => id === topic.id) + 1;
  switch (index % 3) {
    case 1:
      return {
        type: 'image',
        element: <Image />,
      };
    case 2:
      return {
        type: 'video',
        element: <Video />,
      };
    default:
      return {
        type: 'other',
        element: <H5p />,
      };
  }
};

const Toolbox = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [topics, setTopics] = useState(toolboxTopics);
  const [topicData, setTopicData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const topicContentRef = React.useRef<any>(null);

  useEffect(() => {
    const updatedTopics = toolboxTopics.map((topic: any) => {
      return {
        ...topic,
        selected: selectedTopic === topic.id,
      };
    });
    setTopics(updatedTopics);
    if (selectedTopic) {
      setLoading(true);
      fetchArticle(selectedTopic).then((data: any) => {
        const topicData = {
          title: data.title,
          introduction: data.introduction,
          image: { url: `${data.metaImage.url}?width=400`, alt: data.metaImage.alt },
          resources: <Resources title="" showActiveResource={false} />,
          visualElement: dummyVisualElementOfTopic(selectedTopic),
        };
        setLoading(false);
        setTopicData(topicData);
      });
    }
  }, [selectedTopic]);

  const scrollToTopic = () => {
    if (topicContentRef.current) {
      const scrollTo = topicContentRef.current.getBoundingClientRect().top + window.scrollY - 155;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  const onTopicSelected = (e: React.MouseEvent<HTMLElement>, id?: string) => {
    e.preventDefault();
    if (id) {
      setSelectedTopic(id);
      scrollToTopic();
    }
  };

  return (
    <>
      <ToolboxPage
        ref={topicContentRef}
        topics={topics}
        onSelectTopic={onTopicSelected}
        selectedTopic={topicData}
        isLoadingTopic={loading}
        title="Verktøykassa"
        introduction="Hva vil det si å arbeide utforskende? Hvordan kan du lære bedre? Hva skal til for å få gruppearbeid til å fungere? I Verktøykassa finner både elever og lærere ressurser som er aktuelle for alle fag, og som støtter opp under læringsarbeid og utvikling av kunnskap, ferdigheter og forståelse."
      />
      <SubjectBanner image={backgroundToolbox} negativeTopMargin={!selectedTopic} />
    </>
  );
};

export default Toolbox;
