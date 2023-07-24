import { ButtonV2 } from '@ndla/button';
import { Additional, ChevronDown, ChevronUp } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import Tooltip from '@ndla/tooltip';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { animations, breakpoints, colors, fonts, mq, spacing, spacingUnit } from '@ndla/core';
import ContentTypeBadge from '../ContentTypeBadge';
import { ContentTypeResultType, Resource } from '../types';
import {
  highlightStyle,
  noWidthhighlightStyle,
  showAllButtonStyle,
  StyledHeader,
  StyledTag,
  StyledWrapper,
} from './ContentTypeResultStyles';
import { isPathToHighlight } from './IsPathToHighlight';

const StyledNoHit = styled.p`
  color: ${colors.text.light};
  margin: 0;
  font-style: italic;
  ${fonts.sizes(16, 1.1)};
  &[data-in-menu='true'] {
    ${mq.range({ from: breakpoints.desktop })} {
      margin-left: ${spacingUnit * 1.5}px;
    }
  }
`;

const StyledListItem = styled.li`
  &[data-delay-animation='true'] {
    ${animations.fadeInLeftFromZero()}
    animation-delay: ${animations.durations.normal};
  }
  &[data-delay-animation='false'] {
    ${animations.fadeInLeft()}
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  &[data-animate-list='true'] {
    &[data-odd='true'] {
      ${(animations.toggledContentWithSwitchAnimation(animations.durations.normal), `contentTypeResultAnimation1`)}
    }
    &[data-odd='false'] {
      ${(animations.toggledContentWithSwitchAnimation(animations.durations.normal), `contentTypeResultAnimation2`)}
    }
  }
  li {
    margin: 0 -${spacing.small};
    a {
      > div {
        margin-right: ${spacing.small};
      }
      color: ${colors.brand.primary};
      box-shadow: none;
      display: inline-flex;
      flex-grow: 1;
      align-items: center;
      padding: ${spacing.xsmall} ${spacing.small};
      small {
        color: ${colors.text.light};
        padding-left: ${spacing.xsmall};
        ${mq.range({ until: breakpoints.tablet })} {
          display: none;
        }
      }
      &:focus {
        ${highlightStyle};
      }

      strong {
        font-weight: ${fonts.weight.semibold};
      }
      &:hover {
        strong {
          text-decoration: underline;
        }
      }
      &[data-in-menu='true'] {
        ${mq.range({ from: breakpoints.desktop })} {
          &[data-ungrouped='false'] {
            margin-left: ${spacing.mediumlarge};
          }
        }
        strong {
          text-decoration: underline;
          font-weight: ${fonts.weight.normal};
        }
        &:hover {
          strong {
            text-decoration: none;
          }
        }
      }
    }
  }
`;

const renderAdditionalIcon = (label: string, isAdditional?: boolean): ReactElement | null => {
  if (isAdditional && label) {
    return (
      <Tooltip tooltip={label}>
        <div>
          <Additional className="c-icon--20" aria-hidden={false} />
        </div>
      </Tooltip>
    );
  }
  if (isAdditional) {
    return <Additional className="c-icon--20" />;
  }
  return null;
};

type Props = {
  contentTypeResult: ContentTypeResultType;
  onNavigate?: VoidFunction;
  defaultCount?: number;
  resourceToLinkProps: (resource: Resource) => {
    to: string;
  };
  showAdditionalResources?: boolean;
  messages: {
    allResultLabel?: string;
    showLessResultLabel?: string;
    noHit: string;
  };
  ignoreContentTypeBadge?: boolean;
  keyboardPathNavigation?: HTMLElement | string | null;
  inMenu?: boolean;
  animateList?: number;
  unGrouped?: boolean;
};

const ContentTypeResult = ({
  contentTypeResult,
  onNavigate,
  defaultCount,
  resourceToLinkProps,
  showAdditionalResources,
  messages,
  ignoreContentTypeBadge,
  keyboardPathNavigation,
  inMenu,
  animateList,
  unGrouped,
}: Props) => {
  const { t } = useTranslation();
  const [showAll, toggleShowAll] = useState(false);
  const showAllRef = useRef<HTMLLIElement>(null);

  const results =
    showAdditionalResources || !contentTypeResult.resources
      ? contentTypeResult.resources
      : contentTypeResult.resources.filter((items) => !items.additional);

  const resources = showAll || !defaultCount ? results : results.slice(0, defaultCount);

  const displayShowAllButton = defaultCount && results.length > defaultCount;
  const shouldHighlightShowAllButton = showAllRef.current === keyboardPathNavigation;

  useEffect(() => {
    if (showAll && showAllRef.current) {
      showAllRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [showAll]);

  return (
    <StyledWrapper>
      {!unGrouped && (
        <StyledHeader>
          {!ignoreContentTypeBadge && contentTypeResult.contentType && (
            <ContentTypeBadge type={contentTypeResult.contentType} size="x-small" background border />
          )}
          <h1>
            {contentTypeResult.title} <small>({results.length})</small>
          </h1>
        </StyledHeader>
      )}
      {resources.length > 0 ? (
        <StyledList data-in-menu={inMenu} data-animate-list={!!animateList} data-ungrouped={unGrouped}>
          {resources.map((resource) => {
            const { path, name, resourceTypes, subject, additional } = resource;

            const linkProps = resourceToLinkProps(resource);
            const linkContent = (
              <>
                <strong>{name}</strong>
                {!inMenu && subject && <small>{subject}</small>}
                {!inMenu &&
                  resourceTypes &&
                  resourceTypes.map((type) => <StyledTag key={type.name}>{type.name}</StyledTag>)}
              </>
            );
            const delayAnimation = !!animateList && !!additional && animateList > 0 && !!showAdditionalResources;

            // Figure out highlighting by comparing path of link with keyboard navigated anchor
            const anchor =
              keyboardPathNavigation instanceof HTMLElement &&
              keyboardPathNavigation &&
              keyboardPathNavigation.querySelector('a');
            const anchorHref = anchor && anchor.getAttribute('href');
            const shouldHighlight = isPathToHighlight(path, anchorHref);

            return (
              <StyledListItem key={path} data-delay-animation={delayAnimation}>
                <SafeLink
                  css={shouldHighlight && highlightStyle}
                  data-highlighted={shouldHighlight || false}
                  {...linkProps}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate();
                    }
                  }}
                >
                  {unGrouped && !ignoreContentTypeBadge && (
                    <ContentTypeBadge type={resource.contentType ?? ''} size="x-small" background border />
                  )}
                  {linkContent}
                  {renderAdditionalIcon(t('resource.additionalTooltip'), additional)}
                </SafeLink>
              </StyledListItem>
            );
          })}
          {displayShowAllButton && (
            <StyledListItem ref={showAllRef}>
              <ButtonV2
                variant="ghost"
                shape="pill"
                css={[showAllButtonStyle, shouldHighlightShowAllButton && noWidthhighlightStyle]}
                data-highlighted={shouldHighlightShowAllButton}
                onClick={() => toggleShowAll(!showAll)}
                tabIndex={-1}
              >
                {showAll ? messages.showLessResultLabel : messages.allResultLabel}
                {showAll ? <ChevronUp /> : <ChevronDown />}
              </ButtonV2>
            </StyledListItem>
          )}
        </StyledList>
      ) : (
        <StyledNoHit data-in-menu={inMenu}>{messages.noHit}</StyledNoHit>
      )}
    </StyledWrapper>
  );
};

export default ContentTypeResult;
