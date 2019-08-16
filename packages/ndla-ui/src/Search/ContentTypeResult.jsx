import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { injectT } from '@ndla/i18n';
import Button from '@ndla/button';
import {
  colors,
  spacing,
  fonts,
  misc,
  animations,
  mq,
  breakpoints,
} from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { Additional, ChevronUp, ChevronDown } from '@ndla/icons/common';

import SafeLink from '../common/SafeLink';
import ContentTypeBadge from '../ContentTypeBadge';
import { ContentTypeResultShape } from '../shapes';

export const highlightedCSS = css`
  background: ${colors.brand.light};
  color: ${colors.brand.dark};
  display: flex !important;
  small {
    color: ${colors.text.primary} !important;
  }
`;

const StyledNoHit = styled.p`
  color: ${colors.text.light};
  margin: 0;
  font-style: italic;
  ${fonts.sizes(16, 1.1)};
  ${props =>
    props.inMenu &&
    css`
      ${mq.range({ from: breakpoints.desktop })} {
        margin-left: ${spacing.spacingUnit * 1.5}px;
      }
    `}
`;

const showAllButtonCss = css`
  margin-left: -${spacing.xsmall};
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
    ${props =>
      props.animated &&
      css`
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
        ${mq.range({ until: breakpoints.tablet })} {
          display: none;
        }
      }
      &:focus {
        ${highlightedCSS};
      }
      ${props =>
        props.inMenu
          ? css`
              ${mq.range({ from: breakpoints.desktop })} {
                margin-left: ${spacing.spacingUnit * 1.5}px;
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
            `
          : css`
              strong {
                font-weight: ${fonts.weight.semibold};
              }
              &:hover {
                strong {
                  box-shadow: ${misc.textLinkBoxShadow};
                }
              }
            `}
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
  ${mq.range({ until: breakpoints.desktop })} {
    display: none;
  }
`;

const renderAdditionalIcon = (isAdditional, label) => {
  if (isAdditional && label) {
    return (
      <Tooltip tooltip={label} align="top" css={tooltipCss}>
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
  inMenu,
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
        <StyledUL animated inMenu={inMenu}>
          {resources.map(resource => {
            const { path, name, resourceTypes, subject, additional } = resource;
            const linkProps = resourceToLinkProps(resource);
            const linkContent = (
              <>
                {' '}
                <strong>{name}</strong>
                {!inMenu && subject && <small>{subject}</small>}
                {!inMenu &&
                  resourceTypes &&
                  resourceTypes.map(type => (
                    <StyledTag key={type.name}>{type.name}</StyledTag>
                  ))}
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
            <li ref={showAllRef} key="showAll">
              <Button
                ghostPill
                css={showAllButtonCss}
                onClick={() => toggleShowAll(!showAll)}>
                {showAll
                  ? messages.showLessResultLabel
                  : messages.allResultLabel}
                {showAll ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </li>
          )}
        </StyledUL>
      ) : (
        <StyledNoHit inMenu={inMenu}>{messages.noHit}</StyledNoHit>
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
  inMenu: PropTypes.bool,
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
