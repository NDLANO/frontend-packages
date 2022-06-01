/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { Back, ChevronRight } from '@ndla/icons/common';
import { Switch } from '@ndla/switch';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { mq, breakpoints, fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { useTranslation } from 'react-i18next';
import ContentTypeResult from '../Search/ContentTypeResult';
import { renderAdditionalIcon, Topic, TopicResource } from './TopicMenu';

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

interface SubtopicLinkProps {
  classes: Function;
  subtopic: Topic;
  to: string;
  onSubtopicExpand: (id: string) => void;
  expandedSubtopicId?: string;
  toTopic?: (topicId: string) => string;
  subtopicId: string;
  additionalTooltipLabel: string;
}

const SubtopicLink = ({
  classes,
  to,
  subtopic: { id, name, additional },
  onSubtopicExpand,
  expandedSubtopicId,
  subtopicId,
  additionalTooltipLabel,
}: SubtopicLinkProps) => {
  const active = id === expandedSubtopicId;

  return (
    <li {...classes('subtopic-item', active && 'active')} key={id}>
      <SafeLink
        {...classes('link')}
        onClick={(event: MouseEvent) => {
          event.preventDefault();
          onSubtopicExpand(subtopicId);
        }}
        to={to}>
        <span>
          {name}
          {renderAdditionalIcon(!!additional, additionalTooltipLabel)}
        </span>
        <ChevronRight />
      </SafeLink>
    </li>
  );
};

interface Props {
  topic: Topic;
  resourceToLinkProps: (resource: TopicResource) => { to: string };
  expandedSubtopicId?: string;
  onSubtopicExpand: (id: string) => void;
  classes: Function;
  className?: string;
  closeMenu: () => void;
  toTopic: (topicId: string) => string;
  onGoBack: () => void;
  backLabel: string;
  defaultCount?: number;
  lastOpen?: boolean;
  isUngrouped?: boolean;
}

const SubtopicLinkList = ({
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
  lastOpen,
  isUngrouped,
}: Props) => {
  const [showAdditionalResources, setShowAdditionalResources] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    containerRef.current?.querySelector('a')?.focus();
  }, [topic.id]);

  const toggleAdditionalResources = () => {
    setShowAdditionalResources((prev) => !prev);
  };

  const hasSubTopics = topic.subtopics && topic.subtopics.length > 0;
  const hasContentTypeResults = lastOpen && topic.contentTypeResults && topic.contentTypeResults.length > 0;

  const someResourcesAreAdditional =
    hasContentTypeResults &&
    topic.contentTypeResults?.some((result) => result.resources.some((resource) => resource.additional));

  return (
    <div className={className} ref={containerRef}>
      <button type="button" {...classes('back-button')} onClick={onGoBack}>
        <Back /> <span>{backLabel}</span>
      </button>
      <SafeLink {...classes('link', ['big'])} onClick={closeMenu} to={toTopic(topic.id)}>
        <span {...classes('link-wrapper')}>
          <span {...classes('link-label')}>{t('masthead.menu.goTo')}:</span>
          <span {...classes('link-target')}>
            <span {...classes('link-target-name')}>{topic.name} </span>
            <ChevronRight className="c-icon--22" />
          </span>
        </span>
        <ChevronRight />
      </SafeLink>
      {hasSubTopics && (
        <ul {...classes('list')}>
          {topic.subtopics.map((subtopic) => (
            <SubtopicLink
              onSubtopicExpand={onSubtopicExpand}
              expandedSubtopicId={expandedSubtopicId}
              classes={classes}
              key={subtopic.id}
              to={toTopic(topic.id)}
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
            <StyledHeader>{t('masthead.menu.learningResourcesHeading')}</StyledHeader>
            {someResourcesAreAdditional && (
              <Switch
                id="showAdditionalId"
                checked={showAdditionalResources}
                label={t('masthead.menu.additionalFilterLabel')}
                onChange={toggleAdditionalResources}
                css={switchLarge}
              />
            )}
          </HeaderWrapper>
          {isUngrouped && (
            <ContentTypeResult
              resourceToLinkProps={(res) => resourceToLinkProps(res as TopicResource)}
              onNavigate={closeMenu}
              contentTypeResult={{
                resources: topic.contentTypeResults
                  .flatMap((grouped) =>
                    grouped.resources.map((res) => ({
                      ...res,
                      contentType: grouped.contentType,
                    })),
                  )
                  .sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0)),
              }}
              messages={{
                noHit: t(`masthead.menu.contentTypeResultsNoHit.unGrouped`),
              }}
              unGrouped={isUngrouped}
              showAdditionalResources={showAdditionalResources}
              inMenu
            />
          )}
          {!isUngrouped &&
            topic.contentTypeResults.map((result) => (
              <ContentTypeResult
                resourceToLinkProps={(res) => resourceToLinkProps(res as TopicResource)}
                onNavigate={closeMenu}
                key={result.title}
                contentTypeResult={result}
                messages={{
                  noHit: t(`masthead.menu.contentTypeResultsNoHit.${result.contentType}`),
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
              onChange={toggleAdditionalResources}
              css={switchSmall}
            />
          )}
        </StyledAside>
      )}
    </div>
  );
};

export default SubtopicLinkList;
