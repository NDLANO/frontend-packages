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

const ContentWrapper = styled.div`
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: flex;
    flex-direction: column-reverse;
  }
  .c-figure {
    margin: 0;
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

  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
  }
  font-family: ${fonts.sans};
  ${fonts.sizes('18px', '28px')};
  ${ContentWrapper} .c-figure.expanded + & {
    width: 100%;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    ul,
    ol {
      margin: 12px 0;
      padding: 0 1rem 0 2rem;
    }
    ol > li {
      margin-left: 24px;
    }
  }
`;

const ClearWrapper = styled.div`
  clear: both;
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
  visualElement: ReactNode;
  imageElement?: ReactNode;
  children?: ReactNode;
};

const Notion = ({ id, labels = [], text, title, visualElement, imageElement, children }: NotionProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <ContentWrapper>
        {imageElement}
        {visualElement}
        <TextWrapper hasVisualElement={!!(imageElement || visualElement)}>
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
    </div>
  );
};

export default Notion;
