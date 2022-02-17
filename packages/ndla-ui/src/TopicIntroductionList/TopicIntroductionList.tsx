/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { useTranslation } from 'react-i18next';
import NoContentBox from '../NoContentBox';
import { TopicIntroduction } from './TopicIntroduction';

const topicClasses = new BEMHelper({
  prefix: 'c-',
  name: 'topic-introduction',
  outputIsString: true,
});

export interface Shortcut {
  id: string | number;
  tooltip: string;
  contentType: string;
  url: string;
  count: number;
}
export interface Topic {
  name: string;
  id: string;
  additional?: boolean;
  shortcuts?: Shortcut[];
  introduction: string;
  metaImage?: {
    url?: string;
    alt?: string;
  };
}

interface Props {
  toTopic: (id: string) => string;
  topics: Topic[];
  twoColumns?: boolean;
  shortcutAlwaysExpanded?: boolean;
  showAdditionalCores?: boolean;
  toggleAdditionalCores?: () => void;
}

const TopicIntroductionList = ({
  topics,
  twoColumns = false,
  shortcutAlwaysExpanded = false,
  showAdditionalCores = false,
  toggleAdditionalCores,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  const renderAdditionalTopicsTrigger =
    !showAdditionalCores &&
    topics.filter((topic) => topic.additional).length > 0 &&
    topics.filter((topic) => !topic.additional).length === 0;

  return (
    <ul className={topicClasses('list', { twoColumns })}>
      {topics.map((topic, index) => {
        const { shortcuts, additional } = topic;
        return (
          <TopicIntroduction
            key={topic.id}
            {...rest}
            topic={topic}
            shortcuts={shortcuts}
            additional={additional}
            showAdditionalCores={showAdditionalCores}
            shortcutAlwaysExpanded={shortcutAlwaysExpanded}
            id={`${topic.id}_${index}`}
          />
        );
      })}
      {renderAdditionalTopicsTrigger && (
        <li>
          <NoContentBox
            onClick={toggleAdditionalCores}
            text={t('resource.noCoreResourcesAvailableUnspecific')}
            buttonText={t('resource.activateAdditionalResources')}
          />
        </li>
      )}
    </ul>
  );
};

export default TopicIntroductionList;
