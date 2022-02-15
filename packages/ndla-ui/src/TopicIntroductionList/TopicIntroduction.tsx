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
import { Additional, Core } from '@ndla/icons/common';
import Tooltip from '@ndla/tooltip';
import SafeLink from '@ndla/safelink';
import TopicIntroductionShortcuts from './TopicIntroductionShortcuts';
import { Shortcut, Topic } from './TopicIntroductionList';

const topicClasses = new BEMHelper({
  prefix: 'c-',
  name: 'topic-introduction',
  outputIsString: true,
});

interface Props {
  additional?: boolean;
  showAdditionalCores?: boolean;
  topic: Topic;
  toTopic: (id: string) => string;
  subjectPage?: boolean;
  shortcuts?: Shortcut[];
  twoColumns?: boolean;
  shortcutAlwaysExpanded?: boolean;
  id: string;
}

export const TopicIntroduction = ({
  toTopic,
  topic,
  subjectPage,
  shortcuts,
  shortcutAlwaysExpanded,
  additional = false,
  showAdditionalCores = false,
  id,
}: Props) => {
  const { t } = useTranslation();
  const contentTypeDescription = t(additional ? 'resource.tooltipAdditionalTopic' : 'resource.tooltipCoreTopic');

  return (
    <li
      className={topicClasses('item', {
        subjectPage: !!subjectPage,
        additional,
        showAdditionalCores,
      })}>
      <article className={topicClasses('body')}>
        <div className={topicClasses('heading-wrapper')}>
          <h1 className={topicClasses('header')}>
            <SafeLink to={toTopic(topic.id)} aria-describedby={id}>
              {topic.name}
            </SafeLink>
          </h1>
          <span id={id} hidden>
            {contentTypeDescription}
          </span>
          {additional && (
            <Tooltip tooltip={t('resource.tooltipAdditionalTopic')} align="left">
              <Additional className="c-icon--20 u-margin-left-tiny" />
            </Tooltip>
          )}
          {!additional && showAdditionalCores && (
            <Tooltip tooltip={t('resource.tooltipCoreTopic')} align="left">
              <Core className="c-icon--20 u-margin-left-tiny" />
            </Tooltip>
          )}
        </div>
        <div className={topicClasses('content-wrapper')}>
          <div>
            {/* Since topic introduction is already escaped from the api
            we run into a double escaping issues as React escapes all strings.
            Use dangerouslySetInnerHTML to circumvent the issue */}
            <p dangerouslySetInnerHTML={{ __html: topic.introduction }} />
            {shortcuts && (
              <TopicIntroductionShortcuts
                alwaysExpanded={shortcutAlwaysExpanded}
                id={`${topic.id}_shortcuts`}
                shortcuts={shortcuts}
              />
            )}
          </div>
          {topic.metaImage && (
            <div>
              <img src={topic.metaImage.url} alt={topic.metaImage.alt} />
            </div>
          )}
        </div>
      </article>
    </li>
  );
};
