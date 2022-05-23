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
import { useTranslation } from 'react-i18next';
import Image from '../../Image';

const ResourceTopicText = styled.p`
  display: flex;
  margin: 0;
  font-size: ${fonts.sizes('16')};
`;

const ResourceTitle = styled.h2<{ layout: LayoutProps }>`
  height: 100%;
  font-size: ${fonts.sizes('18')};
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
  padding: 0.5rem;
  border: 1px solid rgba(209, 214, 219, 1);
  border-radius: 2px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: ${fonts.sans};
  box-shadow: none;
  text-decoration: none;
  color: ${colors.brand.greyDark};

  &visited {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.5s;
    ${ResourceTitle} {
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
    ${ResourceTopicText} {
      transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      height: auto;
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

      ${ResourceTopicText} {
        height: 0;
      }
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-height: 80px;
    flex-direction: row;
  }

  height: 64px;
`;
const ResourceTopic = styled.ul`
  display: flex;
  margin: 0;
  font-size: ${fonts.sizes('12')};
  margin-top: -5px;
  list-style: none;
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: 0;
  }
  li {
    margin-right: ${spacing.xsmall};
    margin-bottom: 0;
  }
`;

const ResourceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${spacing.medium};
  margin-left: ${spacing.small};
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-width: 56px;
    justify-content: center;
  }
`;
const ResourceImageWrapper = styled.div<{ layout: LayoutProps }>`
  width: 56px;
  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      min-width: 136px;
    `}
  ${(props) =>
    props.layout === 'block' &&
    css`
      height: 50%;
      width: 100%;
      overflow: hidden;
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-width: 56px;
    height: 100%;
  }
`;
const ResourceImage = styled(Image)<{ layout: LayoutProps }>`
  border-radius: 2px;
  ${(props) =>
    props.layout === 'block' &&
    css`
      width: 100%;
    `}
`;
const ResourceLeftSide = styled.div<{ layout: LayoutProps }>`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 60%;
  ${(props) =>
    props.layout === 'block' &&
    css`
      width: 100%;
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
    height: 50%;
  }
`;
const ResourceRightSide = styled.div<{ layout: LayoutProps }>`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 40%;
  ${(props) =>
    props.layout === 'block' &&
    css`
      width: 100%;
      align-items: center;
    `}
  ${(props) =>
    props.layout === 'list' &&
    css`
      align-items: center;
    `}
    ${(props) =>
    props.layout === 'listLarger' &&
    css`
      height: 50%;
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
  }
`;
const Halfwrapper = styled.div<{ layout: LayoutProps }>`
  width: 100%;
  ${(props) =>
    props.layout === 'listLarger' &&
    css`
      margin-top: ${spacing.xxsmall};
      height: 100%;
      display: flex;
      flex-direction: column;
    `}
  ${(props) =>
    props.layout === 'block' &&
    css`
      background-color: white;
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-top: 0;
    margin-top: ${spacing.xxsmall};
  }
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
  }
`;

const Bottomhalf = styled.div<{ layout: LayoutProps }>`
  margin-left: ${spacing.small};
  margin-right: ${spacing.small};
  overflow: hidden;
  text-overflow: ellipsis;
  transition-duration: 0.5s;
`;

const TagsList = styled.div<{ layout: LayoutProps }>`
  height: 100%;
  display: flex;
  list-style: none;
  margin-right: ${spacing.medium};
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
    font-size: ${fonts.sizes(14)};
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-right: ${spacing.small};
  }
`;

const MoreIcon = styled(HorizontalMenu)<{ layout: LayoutProps }>`
  height: 100%;
  margin-right: ${spacing.small};
  fill: ${colors.brand.tertiary};
  transform: scale(1.5);
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-right: ${spacing.xsmall};
    margin-top: ${spacing.xsmall};
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

const ResourceElement = ({
  link,
  title,
  tags,
  children,
  resourceImage,
  topics,
  layout,
  description,
}: ResourceElementProps) => {
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
                {' '}
                {topics?.map((topic) => (
                  <>
                    <li> {topic}</li>
                    <span></span>
                  </>
                ))}
              </ResourceTopic>
            </ResourceInfoWrapper>
            {children}
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
            <MoreIcon layout={layout} aria-label={t('myNdla.more')} />
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
