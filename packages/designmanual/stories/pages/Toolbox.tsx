/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createRef, ReactNode, useEffect, useRef, useState } from 'react';
import { SubjectBanner, ToolboxInfo, OneColumn, Topic, TopicProps } from '@ndla/ui';
// @ts-ignore
import { topics as toolboxTopics } from '../../dummydata/mockToolbox';
// @ts-ignore
import { fetchArticle } from '../article/articleApi';
// @ts-ignore
import Resources from '../molecules/resources';
// @ts-ignore
import backgroundToolbox from '../../images/banners/Verktoykasse.svg';

import { Image, Video, H5p } from '../molecules/VisualElements';

type VisualElementProps = {
  type: 'image' | 'video' | 'other';
  element: ReactNode;
};

const dummyVisualElementOfTopic = (): VisualElementProps => {
  const index = Math.floor(Math.random() * 3);
  switch (index) {
    case 0:
      return {
        type: 'image',
        element: <Image />,
      };
    case 1:
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

type topicProps = {
  label: string;
  id?: string;
  subTopics?: any[];
  content?: TopicProps['topic'];
  loading?: boolean;
};

const fetchTopicData = async (topic: topicProps) => {
  const article = await fetchArticle(topic.id);
  const resources = topic.subTopics ? null : <Resources title="" showActiveResource={false} />;
  return {
    title: article.title,
    introduction: article.introduction,
    image: { url: `${article.metaImage.url}?width=400`, alt: article.metaImage.alt },
    visualElement: dummyVisualElementOfTopic(),
    resources: resources,
  };
};

const Toolbox = () => {
  const [mainTopics, setMainTopics] = useState<topicProps[]>(toolboxTopics);
  const [topics, setTopics] = useState<topicProps[]>([]);

  const [selectedTopics, setSelectedTopics] = useState<(string | number)[]>([]);

  const topicContentRef = useRef<HTMLDivElement>(null);
  const topicRefs = topics.map(() => createRef<HTMLDivElement>());

  useEffect(() => {
    if (selectedTopics.length === 1) {
      // An update of selected main topic
      setTopics([{ loading: true, label: '' }]);
      const mainTopicId = selectedTopics[0];
      const updatedMainTopics = mainTopics.map((mainTopicItem) => {
        return {
          ...mainTopicItem,
          selected: mainTopicItem.id === mainTopicId,
        };
      });

      const mainTopic = updatedMainTopics.find((topic) => topic.selected);
      if (mainTopic) {
        fetchTopicData(mainTopic).then((topicData) => {
          mainTopic.content = topicData;
          setTopics([mainTopic]);
        });
      }
      setMainTopics(updatedMainTopics);
    } else if (selectedTopics.length > 1) {
      const selectedTopicIndex = selectedTopics.length - 1;
      const newSelectedTopicId = selectedTopics[selectedTopicIndex]; // The new selected topic is always the last one
      const updatedTopics = [...topics.slice(0, selectedTopicIndex)]; // When a new topic is selected on a level, remove that level and sub-levels

      // Update sub-topics with correct selected value on current topic
      const subTopicToUpdate = updatedTopics[updatedTopics.length - 1];
      if (subTopicToUpdate.subTopics) {
        subTopicToUpdate.subTopics = subTopicToUpdate.subTopics.map((topicItem) => {
          return {
            ...topicItem,
            selected: topicItem.id === newSelectedTopicId,
          };
        });
        const selectedSubTopic = subTopicToUpdate.subTopics.find((topic) => topic.selected);
        const selectedSubTopicIndex = selectedTopics.length - 1;
        fetchTopicData(selectedSubTopic).then((topicData) => {
          selectedSubTopic.content = topicData;
          const updatedTopics: any[] = [...topics];
          updatedTopics[selectedSubTopicIndex] = selectedSubTopic;
          setTopics(updatedTopics);
        });
      }

      updatedTopics.push({ loading: true, label: '' });
      setTopics(updatedTopics);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTopics]);

  const scrollToTopic = (ref: any) => {
    if (ref.current) {
      const scrollTo = ref.current.getBoundingClientRect().bottom + window.scrollY - 155;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  const onTopicSelected = (index: number, id?: string) => {
    if (id && (!selectedTopics[index] || selectedTopics[index] !== id)) {
      const updatedSelectedTopics = selectedTopics.slice(0, index + 1); // When a new topic is selected on a level, all sub-levels are inconsistent -> remove
      updatedSelectedTopics[index] = id;
      setSelectedTopics(updatedSelectedTopics);
      if (index === 0) {
        scrollToTopic(topicContentRef);
      } else {
        scrollToTopic(topicRefs[index - 1]);
      }
    }
  };

  return (
    <>
      <OneColumn wide>
        <div ref={topicContentRef}>
          <ToolboxInfo
            topics={mainTopics}
            onSelectTopic={(e, id) => onTopicSelected(0, id)}
            title="Verktøykassa"
            introduction="Hva vil det si å arbeide utforskende? Hvordan kan du lære bedre? Hva skal til for å få gruppearbeid til å fungere? I Verktøykassa finner både elever og lærere ressurser som er aktuelle for alle fag, og som støtter opp under læringsarbeid og utvikling av kunnskap, ferdigheter og forståelse."
          />
        </div>
        {topics.map((topic, index) => (
          <div key={index} ref={topicRefs[index]}>
            <Topic
              frame={!topic.subTopics} // Only leafs should have frame
              isLoading={topic.loading}
              subTopics={topic.subTopics}
              onSubTopicSelected={(e, id) => onTopicSelected(index + 1, id)}
              topic={topic.content}
            />
          </div>
        ))}
      </OneColumn>
      <SubjectBanner image={backgroundToolbox} negativeTopMargin={!topics.length} />
    </>
  );
};

export default Toolbox;
