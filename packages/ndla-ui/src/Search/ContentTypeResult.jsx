import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
import { colors, spacing, fonts, misc, animations } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { Additional } from '@ndla/icons/common';

import SafeLink from '../common/SafeLink';
import ContentTypeBadge from '../ContentTypeBadge';
import { ContentTypeResultShape } from '../shapes';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'content-type-result',
});

export const highlightedCSS = css`
  background: ${colors.brand.light};
  color: ${colors.brand.dark};
  display: flex !important;
  small {
    color: ${colors.text.primary} !important;
  }
`;

const tooltipCss = css`
  padding-left: ${spacing.xsmall};
`;

const StyledWrapper = styled.section`
  padding-bottom: ${spacing.normal};
  padding-top: ${spacing.normal};
`;

const StyledHeader = styled.header`
  margin-bottom: ${spacing.small};
  display: flex;
  align-items: center;
  > div {
    margin-right: ${spacing.small};
  }
  h1 {
    margin: 0;
    ${fonts.sizes(16, 1.1)};
    small {
      font-weight: ${fonts.weight.normal};
      font-size: inherit;
    }
  }
`;

const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0 -${spacing.small};
    ${props => props.animated && css`
      ${animations.fadeInLeft(animations.durations.slow)};
    `}
    a {
      color: ${colors.brand.primary};
      box-shadow: none;
      display: inline-flex;
      flex-grow: 1;
      align-items: center;
      padding: ${spacing.xsmall} ${spacing.small};
      small {
        color: ${colors.text.light};
        padding-left: ${spacing.xsmall};
      }
      &:focus {
        ${highlightedCSS}
      }
      &:hover {
        strong {
          box-shadow: ${misc.textLinkBoxShadow};
        }
      }
    }
  }
`;

const StyledTag = styled.span`
  background: ${colors.brand.greyLightest};
  border-radius: ${misc.borderRadius};
  color: ${colors.text.primary};
  ${fonts.sizes('12px', '20px')};
  font-weight: ${fonts.weight.semibold};
  margin: 0 0 0 ${spacing.small};
  height: ${spacing.normal};
  display: flex;
  align-items: center;
  padding: 0 ${spacing.spacingUnit / 6}px;
`;

const renderAdditionalIcon = (isAdditional, label) => {
  if (isAdditional && label) {
    return (
      <Tooltip
        tooltip={label}
        align="top"
        css={tooltipCss}>
        <Additional className="c-icon--20" />
      </Tooltip>
    );
  }
  if (isAdditional) {
    return <Additional className="c-icon--20" />;
  }
  return null;
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
  animated,
  t,
}) => {
  const [showAll, toggleShowAll] = useState(false);
  const showAllRef = useRef(null);

  const results =
    showAdditionalResources || !contentTypeResult.resources
      ? contentTypeResult.resources
      : contentTypeResult.resources.filter(items => !items.additional);

  const totalCount = results.length;

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
          {contentTypeResult.title} <small>({totalCount})</small>
        </h1>
      </StyledHeader>
      {resources.length > 0 ? (
        <StyledUL animated={animated}>
          {resources.map(resource => {
            const { path, name, resourceTypes, subject, additional } = resource;
            const linkProps = resourceToLinkProps(resource);
            const linkContent = (
              <>
                {' '}
                <strong>{name}</strong>
                {subject && <small>{subject}</small>}
                {resourceTypes && (
                  resourceTypes.map(type => <StyledTag key={type.name}>{type.name}</StyledTag>)
                )}
              </>
            );
            if (linkProps && linkProps.href) {
              return (
                <li key={path}>
                  <a
                    {...linkProps}
                    data-highlighted={path === keyboardPathNavigation}
                    css={path === keyboardPathNavigation && highlightedCSS}>
                    {linkContent}
                  </a>
                </li>
              );
            }

            const safeLinkProps =
              linkProps && linkProps.to
                ? { ...linkProps }
                : { to: resource.path };

            return (
              <li key={path}>
                <SafeLink
                  css={path === keyboardPathNavigation && highlightedCSS}
                  data-highlighted={path === keyboardPathNavigation}
                  {...safeLinkProps}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate();
                    }
                  }}>
                  {linkContent}
                  {renderAdditionalIcon(
                    additional,
                    t('resource.additionalTooltip'),
                  )}
                </SafeLink>
              </li>
            );
          })}
          {defaultCount && totalCount > defaultCount && (
            <li key="showAll" {...classes('show-all')}>
              <button
                ref={showAllRef}
                type="button"
                onClick={() => toggleShowAll(!showAll)
              }>
                {showAll
                  ? messages.showLessResultLabel
                  : messages.allResultLabel}
              </button>
            </li>
          )}
        </StyledUL>
      ) : (
        <p {...classes('no-hit')}>{messages.noHit}</p>
      )}
    </StyledWrapper>
  );
};

ContentTypeResult.propTypes = {
  defaultCount: PropTypes.number,
  onNavigate: PropTypes.func,
  contentTypeResult: ContentTypeResultShape.isRequired,
  ignoreContentTypeBadge: PropTypes.bool,
  resourceToLinkProps: PropTypes.func.isRequired,
  showAdditionalResources: PropTypes.bool,
  animated: PropTypes.bool,
  keyboardPathNavigation: PropTypes.string,
  t: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    allResultLabel: PropTypes.string,
    showLessResultLabel: PropTypes.string,
    noHit: PropTypes.string.isRequired,
  }).isRequired,
};

ContentTypeResult.defaultProps = {
  showAdditionalResources: false,
};

export default injectT(ContentTypeResult);
