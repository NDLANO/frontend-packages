/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { Fragment, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { parseMarkdown } from '@ndla/util';

import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import { keyframes } from '@emotion/core';
import { NotionVisualElementType } from './NotionVisualElement';

const NotionContainer = styled.div``;

const ContentWrapper = styled.div`
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: flex;
    flex-direction: column-reverse;
  }
  .c-figure {
    margin: 0;
    position: relative;
    left: 0;
    width: 25%;
    padding: 0 0 0 20px;
    float: right;
    &.expanded {
      width: 100% !important;
      padding: 0;
      margin-bottom: ${spacing.normal};
    }
    ${mq.range({ until: breakpoints.tabletWide })} {
      width: 100% !important;
      padding: 0;
    }
  }
`;
const TextWrapper = styled.div<{ hasVisualElement: boolean }>`
  width: ${(props) => (props.hasVisualElement ? '75%' : '100%')};
  text-align: initial;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
  }
  font-family: ${fonts.sans};
  ${fonts.sizes('18px', '28px')};
  ${ContentWrapper} .c-figure.expanded + & {
    width: 100%;
  }
`;

const fadeInMediaKeyframe = keyframes`
  0% {
    opacity: 0;
    height: auto;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOutMediaKeyframe = keyframes`
  0% {
    opacity: 1;
    height: auto;
  }
  100% {
    opacity: 0;
    height:0;
    overflow: hidden;
  }
`;

const ClearWrapper = styled.div`
  clear: both;
`;

const MediaContainer = styled.div`
  opacity: 0;
  height: 0;
  overflow: hidden;
  &.expanded {
    animation-name: ${fadeInMediaKeyframe};
    animation-duration: 2.8s;
    opacity: 1;
    height: auto;
  }
  &.fadeOut {
    animation-name: ${fadeOutMediaKeyframe};
    animation-duration: 2.8s;
  }
`;

const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  ${fonts.sizes('14px', '24px')};
  font-family: ${fonts.sans};
  margin: ${spacing.small} 0;
`;

export type NotionProps = {
  id: string | number;
  labels?: string[];
  text: ReactNode;
  title: string;
  visualElement?: NotionVisualElementType;
  imageElement?: ReactNode;
  children?: ReactNode;
};

const Notion = ({ id, labels = [], text, title, visualElement, imageElement, children }: NotionProps) => {
  const { t } = useTranslation();

  return (
    <NotionContainer>
      {visualElement && <MediaContainer id={`notion-media-${id}`}>{visualElement.element}</MediaContainer>}

      <ContentWrapper>
        {imageElement}
        {visualElement}
        <TextWrapper hasVisualElement={!!(imageElement || visualElement?.image)}>
          {parseMarkdown(`**${title}** \u2013 ${text}`, 'body')}
          {!!labels.length && (
            <LabelsContainer>
              {t('searchPage.resultType.notionLabels')}
              {labels.map((label, i) => (
                <Fragment key={`notion-${id}-label-${i + 1}`}>
                  {' '}
                  {label}
                  {i < labels?.length - 1 && <> &#8226;</>}
                </Fragment>
              ))}
            </LabelsContainer>
          )}
        </TextWrapper>
        <ClearWrapper />
      </ContentWrapper>
      {children}
    </NotionContainer>
  );
};

export default Notion;
