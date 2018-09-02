/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Back, ChevronRight } from 'ndla-icons/common';
import { injectT } from 'ndla-i18n';

import { SafeLink } from 'ndla-ui';
import { TopicShape } from '../shapes';

import { ContentTypeResult, SearchToggleFilter } from '../Search';
import { renderAdditionalIcon } from './TopicMenu';

const SubtopicLink = ({
  classes,
  to,
  subtopic: { id, name, additional },
  onSubtopicExpand,
  expandedSubtopicId,
  subtopicId,
  additionalTooltipLabel,
}) => {
  const active = id === expandedSubtopicId;

  return (
    <li {...classes('subtopic-item', active && 'active')} key={id}>
      <SafeLink
        {...classes('link')}
        onClick={event => {
          event.preventDefault();
          onSubtopicExpand(subtopicId);
        }}
        to={to}>
        <span>
          {name}
          {renderAdditionalIcon(additional, additionalTooltipLabel)}
        </span>
        <ChevronRight />
      </SafeLink>
    </li>
  );
};

SubtopicLink.propTypes = {
  classes: PropTypes.func.isRequired,
  subtopic: TopicShape.isRequired,
  to: PropTypes.string.isRequired,
  onSubtopicExpand: PropTypes.func,
  expandedSubtopicId: PropTypes.string,
  toTopic: PropTypes.func,
  subtopicId: PropTypes.string,
  additionalTooltipLabel: PropTypes.string,
};

class SubtopicLinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdditionalResources: false,
    };
    this.toggleAdditionalResources = this.toggleAdditionalResources.bind(this);
    this.containerRef = null;
  }

  componentDidMount() {
    this.setFocusOnFirstLink();
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic.id !== prevProps.topic.id) {
      this.setFocusOnFirstLink();
    }
  }

  setFocusOnFirstLink() {
    this.containerRef.querySelector('a').focus();
  }

  toggleAdditionalResources() {
    this.setState(prevState => ({
      showAdditionalResources: !prevState.showAdditionalResources,
    }));
  }

  render() {
    const {
      className,
      classes,
      closeMenu,
      topic,
      toTopic,
      expandedSubtopicId,
      onSubtopicExpand,
      onGoBack,
      backLabel,
      resourceToLinkProps,
      competenceButton,
      defaultCount,
      t,
    } = this.props;

    const { showAdditionalResources } = this.state;

    const hasSubTopics = topic.subtopics && topic.subtopics.length > 0;
    const hasContentTypeResults =
      topic.contentTypeResults && topic.contentTypeResults.length > 0;

    const hasContentTypeInfo =
      hasContentTypeResults &&
      topic.contentTypeResults.some(result => result.contentType);

    const someResourcesAreAdditional =
      hasContentTypeResults &&
      topic.contentTypeResults.some(result =>
        result.resources.some(resource => resource.additional),
      );

    return (
      <div
        className={className}
        ref={ref => {
          this.containerRef = ref;
        }}>
        <button type="button" {...classes('back-button')} onClick={onGoBack}>
          <Back /> <span>{backLabel}</span>
        </button>
        <SafeLink
          {...classes('link', ['big'])}
          onClick={closeMenu}
          to={toTopic(topic.id)}>
          <span {...classes('link-label')}>{t('masthead.menu.goTo')}: </span>
          <span {...classes('link-target')}>
            {topic.name} <span {...classes('arrow')}>›</span>
          </span>
          <ChevronRight />
        </SafeLink>
        {hasSubTopics && (
          <ul {...classes('list')}>
            {topic.subtopics.map(subtopic => (
              <SubtopicLink
                onSubtopicExpand={onSubtopicExpand}
                expandedSubtopicId={expandedSubtopicId}
                classes={classes}
                key={subtopic.id}
                to={toTopic(topic.id, subtopic.id)}
                subtopicId={subtopic.id}
                subtopic={subtopic}
                additionalTooltipLabel={t('resource.additionalTooltip')}
              />
            ))}
          </ul>
        )}
        {hasContentTypeResults && (
          <aside
            {...classes('content-type-results', [
              hasContentTypeInfo ? 'with-content-badges' : '',
              this.state.showAdditionalResources ? 'show-all' : '',
            ])}>
            <div>
              <h1>{t('masthead.menu.learningResourcesHeading')}</h1>
              {someResourcesAreAdditional && (
                <SearchToggleFilter
                  wide
                  checked={showAdditionalResources}
                  label={t('masthead.menu.additionalFilterLabel')}
                  onClick={this.toggleAdditionalResources}
                />
              )}
            </div>
            {topic.contentTypeResults.map(result => (
              <ContentTypeResult
                resourceToLinkProps={resourceToLinkProps}
                onNavigate={closeMenu}
                key={result.title}
                contentTypeResult={result}
                messages={{
                  allResultLabel: t(
                    `masthead.menu.contentTypeResultsShowMore.${
                      result.contentType
                    }`,
                  ),
                  showLessResultLabel: t(
                    `masthead.menu.contentTypeResultsShowLess.${
                      result.contentType
                    }`,
                  ),
                  noHit: t(
                    `masthead.menu.contentTypeResultsNoHit.${
                      result.contentType
                    }`,
                  ),
                }}
                defaultCount={defaultCount}
                iconOnRight
                showAdditionalResources={showAdditionalResources}
              />
            ))}
            {someResourcesAreAdditional && (
              <SearchToggleFilter
                narrow
                checked={showAdditionalResources}
                label={t('masthead.menu.additionalFilterLabel')}
                onClick={this.toggleAdditionalResources}
              />
            )}
          </aside>
        )}
        {competenceButton}
      </div>
    );
  }
}

SubtopicLinkList.propTypes = {
  resourceToLinkProps: PropTypes.func.isRequired,
  expandedSubtopicId: PropTypes.string,
  onSubtopicExpand: PropTypes.func,
  classes: PropTypes.func.isRequired,
  className: PropTypes.string,
  closeMenu: PropTypes.func.isRequired,
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  backLabel: PropTypes.string.isRequired,
  competenceButton: PropTypes.node,
  defaultCount: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default injectT(SubtopicLinkList);
