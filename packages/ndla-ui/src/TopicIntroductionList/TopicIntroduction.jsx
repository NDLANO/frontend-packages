/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Additional, Core } from '@ndla/icons/common';
import Tooltip from '@ndla/tooltip';
import SafeLink from '@ndla/safelink';
import { TopicShape, ShortcutShape } from '../shapes';
import TopicIntroductionShortcuts from './TopicIntroductionShortcuts';

const topicClasses = new BEMHelper({
  prefix: 'c-',
  name: 'topic-introduction',
  outputIsString: true,
});

export const TopicIntroduction = ({
  toTopic,
  topic,
  subjectPage,
  shortcuts,
  messages,
  shortcutAlwaysExpanded,
  additional,
  showAdditionalCores,
  id,
}) => {
  const contentTypeDescription = additional
    ? messages.tooltipAdditionalTopic
    : messages.tooltipCoreTopic;

  return (
    <li
      className={topicClasses('item', {
        subjectPage,
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
            <Tooltip tooltip={messages.tooltipAdditionalTopic} align="left">
              <Additional className="c-icon--20 u-margin-left-tiny" />
            </Tooltip>
          )}
          {!additional && showAdditionalCores && (
            <Tooltip tooltip={messages.tooltipCoreTopic} align="left">
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
                messages={{
                  toggleButtonText: messages.shortcutButtonText,
                }}
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

TopicIntroduction.propTypes = {
  additional: PropTypes.bool,
  showAdditionalCores: PropTypes.bool,
  messages: PropTypes.shape({
    shortcutButtonText: PropTypes.string.isRequired,
    tooltipAdditionalTopic: PropTypes.string,
    tooltipCoreTopic: PropTypes.string,
  }),
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
  subjectPage: PropTypes.bool,
  shortcuts: PropTypes.arrayOf(ShortcutShape),
  twoColumns: PropTypes.bool,
  shortcutAlwaysExpanded: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

TopicIntroduction.defaultProps = {
  showAdditionalCores: false,
  additional: false,
};
