/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Back, ChevronRight } from '@ndla/icons/common';
import { injectT } from '@ndla/i18n';
import { Switch } from '@ndla/switch';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { mq, breakpoints, fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { TopicShape } from '../shapes';
import ContentTypeResult from '../Search/ContentTypeResult';
import { renderAdditionalIcon } from './TopicMenu';

const switchLarge = css`
  display: none;
  ${mq.range({ from: breakpoints.mobileWide })} {
    display: inline-flex;
  }
`;

const switchSmall = css`
  display: inline-flex !important;
  align-items: normal !important;
  margin: 0 0 0 20px;
  min-height: 0 !important;
  ${mq.range({ from: breakpoints.mobileWide })} {
    display: none !important;
  }
`;

const StyledHeader = styled.h1`
  ${fonts.sizes('16px', '26px')};
  margin: 0;
  text-transform: uppercase;
  padding-right: ${spacing.normal};
`;

const StyledAside = styled.aside`
  padding: ${spacing.normal};
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: ${spacing.small};
    width: 600px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
`;

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
      animateUL: 0,
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
      animateUL: prevState.animateUL + 1,
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
      lastOpen,
      t,
    } = this.props;

    const { showAdditionalResources, animateUL } = this.state;

    const hasSubTopics = topic.subtopics && topic.subtopics.length > 0;
    const hasContentTypeResults =
      lastOpen &&
      topic.contentTypeResults &&
      topic.contentTypeResults.length > 0;

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
          <span {...classes('link-wrapper')}>
            <span {...classes('link-label')}>{t('masthead.menu.goTo')}:</span>
            <span {...classes('link-target')}>
              <span>{topic.name} </span>
              <ChevronRight className="c-icon--22" />
            </span>
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
          <StyledAside>
            <HeaderWrapper>
              <StyledHeader>
                {t('masthead.menu.learningResourcesHeading')}
              </StyledHeader>
              {someResourcesAreAdditional && (
                <Switch
                  id="showAdditionalId"
                  checked={showAdditionalResources}
                  label={t('masthead.menu.additionalFilterLabel')}
                  onChange={this.toggleAdditionalResources}
                  css={switchLarge}
                />
              )}
            </HeaderWrapper>
            {topic.contentTypeResults.map(result => (
              <ContentTypeResult
                animateUL={animateUL}
                resourceToLinkProps={resourceToLinkProps}
                onNavigate={closeMenu}
                key={result.title}
                contentTypeResult={result}
                messages={{
                  noHit: t(
                    `masthead.menu.contentTypeResultsNoHit.${result.contentType}`,
                  ),
                }}
                showAdditionalResources={showAdditionalResources}
                inMenu
              />
            ))}
            {someResourcesAreAdditional && (
              <Switch
                id="showSomeAdditionalId"
                checked={showAdditionalResources}
                label={t('masthead.menu.additionalFilterLabel')}
                onChange={this.toggleAdditionalResources}
                css={switchSmall}
              />
            )}
          </StyledAside>
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
  lastOpen: PropTypes.bool,
};

export default injectT(SubtopicLinkList);
