import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
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
// @ts-ignore
import Tooltip from '@ndla/tooltip';
// @ts-ignore
import { Additional, ChevronUp, ChevronDown } from '@ndla/icons/common';
import SafeLink from '../common/SafeLink';
// @ts-ignore
import ContentTypeBadge from '../ContentTypeBadge';
import { ContentTypeResultType, Resource } from '../types';

export const highlightedCSS = css`
  background: ${colors.brand.light};
  color: ${colors.brand.dark};
  display: flex !important;
  small {
    color: ${colors.text.primary} !important;
  }
`;

type inMenuProps = {
  inMenu?: boolean;
  animateUL?: number;
}

const StyledNoHit = styled.p<inMenuProps>`
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

type StyledLiProps = {
  delayAnimation?: boolean;
}

const StyledLi = styled.li<StyledLiProps>`
  ${props => props.delayAnimation && css`
    ${animations.fadeInLeftFromZero()}
    animation-delay: ${animations.durations.normal};
  `}
  ${props => !props.delayAnimation && animations.fadeInLeft()}
`;

const StyledUL = styled.ul<inMenuProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${props => {
    if (props.animateUL && props.animateUL > 0) {
      return animations.toggledContentWithSwitchAnimation(animations.durations.normal, `contentTypeResultAnimation${props.animateUL % 2 ? '1' : '2'}`);
    }
  }}
  li {
    margin: 0 -${spacing.small};
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
                  text-decoration: underline;
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

const renderAdditionalIcon = (label: string, isAdditional?: boolean) : React.ReactElement | null => {
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

type Props = {
  contentTypeResult: ContentTypeResultType;
  onNavigate: VoidFunction;
  defaultCount?: number,
  resourceToLinkProps: (resource: Resource) => {
    to: string;
  };
  showAdditionalResources?: boolean;
  messages: {
    allResultLabel?: string;
    showLessResultLabel?: string;
    noHit: string;
  },
  ignoreContentTypeBadge: boolean;
  keyboardPathNavigation: string;
  inMenu?: boolean,
  animateUL?: number,
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
}

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
  animateUL,
  t,
}) => {
  const [showAll, toggleShowAll] = useState(false);
  const showAllRef = useRef<HTMLLIElement>(null);

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
  console.log(animateUL);
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
        <StyledUL inMenu={inMenu} animateUL={animateUL}>
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
            const delayAnimation = (animateUL && additional === true && animateUL > 0 && showAdditionalResources === true) ? true : false;
            return (
              <StyledLi key={path} delayAnimation={delayAnimation}>
                <SafeLink
                  css={path === keyboardPathNavigation && highlightedCSS}
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
              </StyledLi>
            );
          })}
          {defaultCount && totalCount > defaultCount && (
            <StyledLi ref={showAllRef}>
              <Button
                ghostPill
                css={showAllButtonCss}
                onClick={() => toggleShowAll(!showAll)}>
                {showAll
                  ? messages.showLessResultLabel
                  : messages.allResultLabel}
                {showAll ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </StyledLi>
          )}
        </StyledUL>
      ) : (
        <StyledNoHit inMenu={inMenu}>{messages.noHit}</StyledNoHit>
      )}
    </StyledWrapper>
  );
};

export default injectT(ContentTypeResult);
