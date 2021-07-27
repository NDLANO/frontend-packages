import React, { useState, useEffect, useRef } from 'react';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import Tooltip from '@ndla/tooltip';
// @ts-ignore
import { Additional, ChevronUp, ChevronDown } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import ContentTypeBadge from '../ContentTypeBadge';
import { ContentTypeResultType, Resource } from '../types';
import {
  highlightStyle,
  showAllButtonStyle,
  tooltipStyle,
  StyledNoHit,
  StyledWrapper,
  StyledHeader,
  StyledListItem,
  StyledList,
  StyledTag,
  noWidthhighlightStyle,
} from './ContentTypeResultStyles';
import { isPathToHighlight } from './IsPathToHighlight';

const renderAdditionalIcon = (label: string, isAdditional?: boolean): React.ReactElement | null => {
  if (isAdditional && label) {
    return (
      <Tooltip tooltip={label} align="top" css={tooltipStyle}>
        <Additional className="c-icon--20" />
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
  ignoreContentTypeBadge: boolean;
  keyboardPathNavigation: HTMLElement | string | null;
  inMenu?: boolean;
  animateList?: number;
};

const ContentTypeResult: React.FC<Props & tType> = ({
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
  t,
}) => {
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
      <StyledHeader>
        {!ignoreContentTypeBadge && contentTypeResult.contentType && (
          <ContentTypeBadge type={contentTypeResult.contentType} size="x-small" background outline />
        )}
        <h1>
          {contentTypeResult.title} <small>({results.length})</small>
        </h1>
      </StyledHeader>
      {resources.length > 0 ? (
        <StyledList inMenu={inMenu} animateList={animateList}>
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
              <StyledListItem key={path} delayAnimation={delayAnimation}>
                <SafeLink
                  css={shouldHighlight && highlightStyle}
                  data-highlighted={shouldHighlight || false}
                  {...linkProps}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate();
                    }
                  }}>
                  {linkContent}
                  {renderAdditionalIcon(t('resource.additionalTooltip'), additional)}
                </SafeLink>
              </StyledListItem>
            );
          })}
          {displayShowAllButton && (
            <StyledListItem ref={showAllRef}>
              <Button
                ghostPill
                css={[showAllButtonStyle, shouldHighlightShowAllButton && noWidthhighlightStyle]}
                data-highlighted={shouldHighlightShowAllButton}
                onClick={() => toggleShowAll(!showAll)}>
                {showAll ? messages.showLessResultLabel : messages.allResultLabel}
                {showAll ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </StyledListItem>
          )}
        </StyledList>
      ) : (
        <StyledNoHit inMenu={inMenu}>{messages.noHit}</StyledNoHit>
      )}
    </StyledWrapper>
  );
};

export default injectT(ContentTypeResult);
