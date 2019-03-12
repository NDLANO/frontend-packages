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
import { Trans } from '@ndla/i18n';
import NoContentBox from '../NoContentBox';
import { TopicShape } from '../shapes';
import { TopicIntroduction } from './TopicIntroduction';

const topicClasses = new BEMHelper({
  prefix: 'c-',
  name: 'topic-introduction',
  outputIsString: true,
});

const TopicIntroductionList = ({
  topics,
  twoColumns,
  shortcutAlwaysExpanded,
  showAdditionalCores,
  toggleAdditionalCores,
  ...rest
}) => {
  const renderAdditionalTopicsTrigger =
    !showAdditionalCores &&
    topics.filter(topic => topic.additional).length > 0 &&
    topics.filter(topic => !topic.additional).length === 0;

  return (
    <Trans>
      {({ t }) => (
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
                messages={{
                  shortcutButtonText: t('resource.label'),
                  tooltipAdditionalTopic: t('resource.tooltipAdditionalTopic'),
                  tooltipCoreTopic: t('resource.tooltipCoreTopic'),
                }}
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
      )}
    </Trans>
  );
};

TopicIntroductionList.propTypes = {
  toTopic: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(TopicShape).isRequired,
  twoColumns: PropTypes.bool,
  shortcutAlwaysExpanded: PropTypes.bool,
  showAdditionalCores: PropTypes.bool,
  toggleAdditionalCores: PropTypes.func.isRequired,
};

TopicIntroductionList.defaultProps = {
  twoColumns: false,
  shortcutAlwaysExpanded: false,
  showAdditionalCores: false,
};

export default TopicIntroductionList;
