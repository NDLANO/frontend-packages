/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import { ToolboxPage } from '@ndla/ui';
// @ts-ignore
import { topics as toolboxTopics } from '../../dummydata/mockToolbox';
// @ts-ignore
import { fetchArticle } from '../article/articleApi';
// @ts-ignore
import Resources from '../molecules/resources';

const Toolbox = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [topics, setTopics] = useState(toolboxTopics);
  const [topicData, setTopicData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

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
          image: data.metaImage,
          resources: <Resources title="" showActiveResource={false} />,
        };
        setLoading(false);
        setTopicData(topicData);
      });
    }
  }, [selectedTopic]);

  const onTopicSelected = (e: React.MouseEvent<HTMLElement>, id?: string) => {
    if (id) {
      setSelectedTopic(id);
    }
  };

  return (
    <ToolboxPage
      topics={topics}
      onSelectTopic={onTopicSelected}
      selectedTopic={topicData}
      isLoadingTopic={loading}
      introduction="Har du lyst til å bli god til å presentere, eller vil du lære å studere smartere ved hjelp av riktig studieteknikk? Trenger du råd om hvordan du leser mest mulig effektivt til eksamen? I Verktøykassen til NDLA finner du masse gode tips og råd!"
    />
  );
};

export default Toolbox;
