/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

// @ts-ignore
import Modal, { ModalHeader, ModalCloseButton, ModalBody } from '@ndla/modal';
import { mq, breakpoints, fonts, colors } from '@ndla/core';
import { Explanation, NotionFlip } from '@ndla/icons/common';
import { Locale } from '../types';
import { Notion } from '../Notion';
import { NotionProps } from '../Notion/Notion';

const ArticleNotionsContainer = styled.div`
  margin-bottom: 26px;

  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 0;
  }
`;

const NotionsTrigger = styled.div`
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  background-color: ${colors.brand.greyLighter};
  border-radius: 4px;
  cursor: pointer;

  ${mq.range({ from: breakpoints.tablet })} {
    position: fixed;
    border: none;
    padding: 0;
    height: auto;
    top: 12rem;
    right: 18px;
    background-color: transparent;
    z-index: 10;
  }

  svg {
    &:first-of-type {
      display: none;
      width: 40px;
      height: 54px;
      cursor: pointer;
      color: #def1ed;

      ${mq.range({ from: breakpoints.tablet })} {
        display: block;
      }
    }
    &:nth-of-type(2) {
      display: block;
      color: ${colors.brand.primary};
      margin-right: 8px;

      ${mq.range({ from: breakpoints.tablet })} {
        display: none;
      }
    }
  }

  span {
    ${fonts.sizes('16px', '39px')};
    display: block;
    font-family: ${fonts.sans};
    font-weight: ${fonts.weight.semibold};
    color: ${colors.brand.primary};
    padding-bottom: 1px;

    ${mq.range({ from: breakpoints.tablet })} {
      display: none;
    }
  }
`;

const ModalHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 2rem;

  ${mq.range({ from: breakpoints.tablet })} {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  svg {
    display: block;
    width: 2rem;
    height: 2rem;
    color: #638b98;
    margin: 0 1rem 0 -0.25rem;

    ${mq.range({ from: breakpoints.tablet })} {
      width: 3rem;
      height: 3rem;
      margin: 0 1.5rem 0 -0.5rem;
    }
  }

  h1 {
    margin: 0;
  }
`;

const NotionsContainer = styled.div`
  padding: 0 20px;

  ${mq.range({ from: breakpoints.tablet })} {
    padding: 0 3.5rem;
  }
`;

const RelatedContentContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 0 2rem;
  padding: 0 20px;

  ${mq.range({ from: breakpoints.tablet })} {
    padding: 0 3.5rem;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  > li {
    width: 100%;

    &:not(:nth-child(2n)) {
      margin-right: 0;
    }

    ${mq.range({ from: breakpoints.tablet })} {
      width: calc(100% * (1 / 3));

      &:not(:nth-child(2n)) {
        margin-right: 0.5rem;
      }
    }
  }
`;

export type NotionRelatedContent = {
  url: string;
  label: string;
};

type ArticleNotionsProps = {
  locale: Locale;
  notions: NotionProps[];
  onReferenceClick?: React.MouseEventHandler<HTMLButtonElement>;
  relatedContent?: NotionRelatedContent[];
  renderMarkdown?: (text: string) => string;
  buttonOffsetRight: number;
};

export const ArticleNotions = ({
  locale,
  notions,
  onReferenceClick,
  relatedContent = [],
  renderMarkdown,
  buttonOffsetRight,
}: ArticleNotionsProps) => {
  const { t } = useTranslation();
  const leftOffset = `${buttonOffsetRight - 32}px`;
  return (
    <ArticleNotionsContainer>
      <Modal
        activateButton={
          <NotionsTrigger role="button" aria-label={t('article.notionsPrompt')} style={{ left: leftOffset }}>
            <NotionFlip />
            <Explanation />
            <span>{t('article.notionsPrompt')}</span>
          </NotionsTrigger>
        }
        size="large"
        backgroundColor="white">
        {(onClose: void) => (
          <div>
            <ModalHeader modifier="notions-modal-header no-padding">
              <ModalCloseButton onClick={onClose} title="Lukk" />
            </ModalHeader>
            <ModalBody modifier="notions-modal-body no-padding">
              <ModalHeadingContainer>
                <Explanation />
                <h1>{t('article.notionsPrompt')}</h1>
              </ModalHeadingContainer>
              <NotionsContainer>
                {notions.map((notion) => (
                  <Notion
                    key={notion.id}
                    locale={locale}
                    onReferenceClick={onReferenceClick}
                    renderMarkdown={renderMarkdown}
                    {...notion}
                  />
                ))}
              </NotionsContainer>
              {relatedContent.length > 0 && (
                <RelatedContentContainer>
                  {relatedContent.map((content, i) => (
                    <li key={`notion-related-item-${i + 1}`}>
                      <a href={content.url}>{content.label}</a>
                    </li>
                  ))}
                </RelatedContentContainer>
              )}
            </ModalBody>
          </div>
        )}
      </Modal>
    </ArticleNotionsContainer>
  );
};

export default ArticleNotions;
