import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore
import { injectT } from '@ndla/i18n';
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
} from './ContentTypeResultStyles';

const renderAdditionalIcon = (
  label: string,
  isAdditional?: boolean,
): React.ReactElement | null => {
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
  onNavigate: VoidFunction;
  defaultCount?: number;
  resourceToLinkProps: (
    resource: Resource,
  ) => {
    to: string;
  };
  showAdditionalResources?: boolean;
  messages: {
    allResultLabel?: string;
    showLessResultLabel?: string;
    noHit: string;
  };
  ignoreContentTypeBadge: boolean;
  keyboardPathNavigation: string;
  inMenu?: boolean;
  animateList?: number;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const ContentTypeResult: React.FC<Props> = ({
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
      : contentTypeResult.resources.filter(items => !items.additional);

  const resources =
    showAll || !defaultCount ? results : results.slice(0, defaultCount);

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
          <ContentTypeBadge
            type={contentTypeResult.contentType}
            size="x-small"
            background
            outline
          />
        )}
        <h1>
          {contentTypeResult.title} <small>({results.length})</small>
        </h1>
      </StyledHeader>
      {resources.length > 0 ? (
        <StyledList inMenu={inMenu} animateList={animateList}>
          {resources.map(resource => {
            const { path, name, resourceTypes, subject, additional } = resource;
            const linkProps = resourceToLinkProps(resource);
            const linkContent = (
              <>
                <strong>{name}</strong>
                {!inMenu && subject && <small>{subject}</small>}
                {!inMenu &&
                  resourceTypes &&
                  resourceTypes.map(type => (
                    <StyledTag key={type.name}>{type.name}</StyledTag>
                  ))}
              </>
            );
            const delayAnimation =
              !!animateList &&
              !!additional &&
              animateList > 0 &&
              !!showAdditionalResources;

            return (
              <StyledListItem key={path} delayAnimation={delayAnimation}>
                <SafeLink
                  css={path === keyboardPathNavigation && highlightStyle}
                  data-highlighted={path === keyboardPathNavigation}
                  {...linkProps}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate();
                    }
                  }}>
                  {linkContent}
                  {renderAdditionalIcon(
                    t('resource.additionalTooltip'),
                    additional,
                  )}
                </SafeLink>
              </StyledListItem>
            );
          })}
          {defaultCount && results.length > defaultCount && (
            <StyledListItem ref={showAllRef}>
              <Button
                ghostPill
                css={showAllButtonStyle}
                onClick={() => toggleShowAll(!showAll)}>
                {showAll
                  ? messages.showLessResultLabel
                  : messages.allResultLabel}
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
