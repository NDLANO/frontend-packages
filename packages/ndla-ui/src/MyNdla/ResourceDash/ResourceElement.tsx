/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { HorizontalMenu } from '@ndla/icons/contentType';
import SafeLink from '@ndla/safelink';
import { mq, breakpoints } from '@ndla/core';
import { css } from '@emotion/core';
import { fonts, spacing, colors } from '@ndla/core';
import { IconButton } from '@ndla/button';
import { useTranslation } from 'react-i18next';

import Image from '../../Image';

const ResourceTopicText = styled.p`
  display: flex;
  margin: 0;

  ${fonts.sizes('16')};
`;

const ResourceTitle = styled.h2<{ layout: LayoutProps }>`
  ${fonts.sizes('18')};
  font-weight: 700;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      height: auto;
    `}
  ${(props) =>
    props.layout === 'block' &&
    css`
      margin-top: ${spacing.small};
      overflow: hidden;
    `}
`;

const ResourceElementWrapper = styled(SafeLink)<{ layout: LayoutProps }>`
  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      min-height: 129px;
    `}

  display: flex;
  align-items: center;
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.light};
  border-radius: 2px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: ${fonts.sans};
  box-shadow: none;
  text-decoration: none;
  color: ${colors.brand.greyDark};
  gap: 15px;
  &visited {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 1px 1px 6px 2px ${colors.brand.neutral7};
    transition-duration: 0.5s;
    ${ResourceTitle} {
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
    ${ResourceTopicText} {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &active {
    text-decoration: none;
  }
  ${(props) =>
    props.layout === 'block' &&
    css`
      min-height: 232px;
      flex-direction: column;
      padding: 0;
      gap: 0;

      ${ResourceTopicText} {
        height: 0;
        transition: height 0.2s ease-out;
      }
      &:hover {
        ${ResourceTopicText} {
          height: 50px;
        }
      }
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-height: 80px;
    flex-direction: row;
    padding: ${spacing.xsmall};
  }

  height: 64px;
`;
const ResourceTopic = styled.ul`
  display: flex;
  margin: 0;
  ${fonts.sizes('12')};
  list-style: none;
  gap: 5px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: 0;
  }
  span:last-child {
    display: none;
  }
  li {
    margin-bottom: 0;
    line-height: 1;
    display: inline-flex;
    align-items: center;
  }
`;

const ResourceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-width: 56px;
    justify-content: center;
  }
`;
const ResourceImageWrapper = styled.div<{ layout: LayoutProps }>`
  width: 56px;

  overflow: hidden;

  ${(props) =>
    props.layout === 'list' &&
    css`
      height: 40px;
      object-fit: cover;
    `}
  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      min-width: 136px;
      max-height: 96px;
      object-fit: cover;
    `}
  ${(props) =>
    props.layout === 'block' &&
    css`
      height: 50%;
      width: 100%;
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-width: 56px;
    object-fit: cover;
    height: 100%;
    div {
      max-height: 40px;
      overflow: hidden;
    }
  }
`;
const ResourceImage = styled(Image)<{ layout: LayoutProps }>`
  border-radius: 2px;

  ${(props) =>
    props.layout === 'list' &&
    css`
      min-height: 40px;
    `}
  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      min-height: 96px;
      min-width: 136px;
    `}
  ${(props) =>
    props.layout === 'block' &&
    css`
      width: 100%;
    `}
    ${mq.range({ until: breakpoints.tabletWide })} {
    width: 96px;
  }
`;
const ResourceLeftSide = styled.div<{ layout: LayoutProps }>`
  display: flex;
  flex-direction: row;
`;
const ResourceRightSide = styled.div<{ layout: LayoutProps }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  ${(props) =>
    props.layout === 'list' &&
    css`
      :last-child {
        gap: 10px;
      }
    `}

  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      :last-child {
        gap: 5px;
      }
    `}
`;
const Halfwrapper = styled.div<{ layout: LayoutProps }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      margin-top: ${spacing.xxsmall};
      display: flex;
      flex-direction: column;
    `}
  ${(props) =>
    props.layout === 'block' &&
    css`
      padding-left: ${spacing.small};
      padding-right: ${spacing.small};
      background-color: white;
    `}
`;

const Tophalf = styled.div<{ layout: LayoutProps }>`
  display: flex;
  flex-direction: row;
  ${(props) =>
    props.layout === 'block' &&
    css`
      flex-direction: column;
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    margin-top: ${spacing.xsmall};
  }
`;

const Bottomhalf = styled.div<{ layout: LayoutProps }>`
  overflow: hidden;
  text-overflow: ellipsis;
  transition-duration: 0.5s;
`;

const TagsList = styled.div<{ layout: LayoutProps }>`
  display: flex;
  list-style: none;
  display: flex;
  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.layout === 'block' &&
    css`
      height: 50px;
    `}

  li {
    display: flex;
    margin: 0;
    align-items: center;
    padding-right: ${spacing.xxsmall};
    padding-left: ${spacing.xxsmall};
    color: ${colors.brand.grey};
    ${fonts.sizes(14)};
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-right: ${spacing.small};
  }
`;

const MoreIcon = styled(IconButton)<{ layout: LayoutProps }>`
  background-color: transparent;
  display: flex;
  justify-content: center;
  border: none;

  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  svg {
    fill: ${colors.brand.light};
    &:hover {
      fill: ${colors.brand.primary};
    }
    ${(props) =>
      props.layout === 'block' &&
      css`
        margin-left: 10px;
      `}
  }
`;

type ResourceImageProps = {
  alt: string;
  src: string;
};
interface ResourceElementProps {
  link: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  children?: ReactElement;
  layout: LayoutProps;
}
type LayoutProps = 'list' | 'listLarger' | 'block';

const ResourceElement = ({ link, title, tags, resourceImage, topics, layout, description }: ResourceElementProps) => {
  const { t } = useTranslation();
  return (
    <ResourceElementWrapper to={link} layout={layout}>
      <ResourceImageWrapper layout={layout}>
        <ResourceImage layout={layout} alt={resourceImage.alt} src={resourceImage.src} />
      </ResourceImageWrapper>

      <Halfwrapper layout={layout}>
        <Tophalf layout={layout}>
          <ResourceLeftSide layout={layout}>
            <ResourceInfoWrapper>
              <ResourceTitle layout={layout}>{title}</ResourceTitle>
              <ResourceTopic>
                {topics?.map((topic) => (
                  <>
                    <li> {topic} </li>
                    <span>•</span>
                  </>
                ))}
              </ResourceTopic>
            </ResourceInfoWrapper>
          </ResourceLeftSide>
          <Bottomhalf layout={layout}>
            {layout === 'block' && <ResourceTopicText>{description}</ResourceTopicText>}
          </Bottomhalf>
          <ResourceRightSide layout={layout}>
            <TagsList layout={layout}>
              {tags?.map((tag) => (
                <li> #{tag}</li>
              ))}
            </TagsList>
            <MoreIcon layout={layout} aria-label={t('myNdla.more')} size="xsmall">
              <HorizontalMenu />
            </MoreIcon>
          </ResourceRightSide>
        </Tophalf>
        <Bottomhalf layout={layout}>
          {layout === 'listLarger' && <ResourceTopicText>{description}</ResourceTopicText>}
        </Bottomhalf>
      </Halfwrapper>
    </ResourceElementWrapper>
  );
};

export default ResourceElement;
