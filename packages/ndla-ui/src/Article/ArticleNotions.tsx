/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';

// @ts-ignore
import Modal, { ModalHeader, ModalCloseButton, ModalBody } from '@ndla/modal';
import { mq, breakpoints, fonts } from '@ndla/core';
import { Explanation } from '@ndla/icons/common';
import { injectT, tType } from '@ndla/i18n';
import SearchNotionItem from '../SearchTypeResult/SearchNotionItem';
import { to2DArray } from './utils/to2DArray';

const NotionsTrigger = styled.div`
  position: fixed;
  right: 26px;
  bottom: 1rem;
  padding: calc(0.4rem - 2px) 0.6rem 0.4rem;
  background-color: #def1ed;
  border: 2px solid #638b98;
  border-radius: 2px;
  z-index: 10;

  ${mq.range({ from: breakpoints.tablet })} {
    top: 12rem;
    bottom: auto;
    padding: 0;
    background-color: transparent;
    border: none;
  }
  ${mq.range({ from: '1076px' })} {
    right: calc(50vw - 60.75rem / 2 + 3rem - 9px);
  }

  svg {
    display: none;
    width: 100%;
    height: 100%;
    cursor: pointer;

    ${mq.range({ from: breakpoints.tablet })} {
      display: block;
    }
  }

  span {
    display: block;
    font-family: ${fonts.sans};
    font-weight: ${fonts.weight.bold};
    color: #3f6679;

    ${mq.range({ from: breakpoints.tablet })} {
      display: none;
    }
  }
`;

const ModalHeadingContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    display: block;
    width: 4.5rem;
    height: 4.5rem;
  }

  h1 {
    margin: 0;
  }
`

const RelatedContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  > div {
    width: calc(100% * (1/3));

    &:not(:nth-child(2n)) {
      margin-right: 0.5rem;
    }
  }
`

export type Notion = {
  id: string;
  title: string;
  text: string;
  authors: {
    name: string;
  }[];
  license: string;
  image: {
    url: string;
    alt: string;
  };
  url: string;
}

export type NotionRelatedContent = {
  url: string;
  label: string;
}

type ArticleNotionsProps = {
  locale: string;
  notions: Notion[];
  renderMarkdown: (text: string) => string;
  relatedContent?: NotionRelatedContent[];
}

export const ArticleNotions: React.VFC<ArticleNotionsProps & tType> = ({ locale, notions, renderMarkdown, relatedContent = [], t }) => (
  <div>
    <Modal
      activateButton={
        <NotionsTrigger role="button">
          <svg width="41" height="54" viewBox="0 0 41 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.5 47.085L32.5 52.485V1.51501L36.5 6.91501V47.085Z" fill="#638B98" stroke="#638B98" />
            <path d="M1 27C1 15.9543 9.95431 7 21 7H37V47H21C9.95431 47 1 38.0457 1 27Z" fill="#DEF1ED" />
            <path d="M2 27C2 16.5066 10.5066 8 21 8H36V46H21C10.5066 46 2 37.4934 2 27Z" stroke="#638B98" stroke-width="2" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8682 28.0598C24.2622 25.5195 27.0859 25.344 27.5445 23.8441C27.7891 23.0441 27.4522 22.3579 26.6022 22.098C25.9188 21.8891 25.2669 22.0543 24.6206 22.4398L23.8545 21.1304C24.8311 20.4995 25.9978 20.2002 27.2145 20.5721C29.0144 21.1224 30.0073 22.4648 29.4519 24.2814C28.8048 26.3981 25.9755 26.3532 25.5516 28.5745L23.8682 28.0598ZM22.7256 30.4259C22.9549 29.6759 23.6564 29.289 24.3564 29.503C25.0564 29.717 25.4382 30.4352 25.2089 31.1851C24.9796 31.9351 24.2615 32.317 23.5615 32.103C22.8615 31.889 22.4963 31.1759 22.7256 30.4259Z" fill="#638B98" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9054 31.0545C15.7266 28.0129 18.7184 26.0285 18.2706 24.0891C18.0318 23.0548 17.2262 22.5145 16.1272 22.7682C15.2437 22.9722 14.6321 23.5673 14.1664 24.4012L12.4938 23.4482C13.1667 22.1353 14.259 21.0661 15.832 20.7029C18.1592 20.1656 20.102 21.0108 20.6443 23.3596C21.2761 26.0962 18.1384 27.842 19.0818 30.5521L16.9054 31.0545ZM17.151 34.3796C16.9272 33.41 17.4525 32.5397 18.3576 32.3307C19.2626 32.1218 20.1379 32.6687 20.3617 33.6384C20.5856 34.6081 20.0387 35.4833 19.1337 35.6923C18.2286 35.9012 17.3749 35.3493 17.151 34.3796Z" fill="#638B98" />
          </svg>
          <span>{t('article.notionsPrompt')}</span>
        </NotionsTrigger>
      }
      size="large"
      backgroundColor="white"
    >
      {(onClose: void) => (
        <>
          <ModalHeader modifier="no-bottom-padding">
            <ModalCloseButton onClick={onClose} title="Lukk" />
          </ModalHeader>
          <ModalBody>
            <ModalHeadingContainer>
              <Explanation />
              <h1>{t('article.notionsPrompt')}</h1>
            </ModalHeadingContainer>
            {notions.map((notion) => (
              <SearchNotionItem
                key={notion.id}
                locale={locale}
                {...notion}
                renderMarkdown={renderMarkdown}
              />
            ))}
            {relatedContent.length > 0 && (
              <div>
                {to2DArray<NotionRelatedContent>(relatedContent, 2).map((row, i) => (
                  <RelatedContentRow key={`notion-related-row-${i + 1}`}>
                    {row.map((rcItem, j) => (
                      <div key={`notion-related-item-${j + 1}`}>
                        <a href={rcItem.url}>{rcItem.label}</a>
                      </div>
                    ))}
                  </RelatedContentRow>
                ))}
              </div>
            )}
          </ModalBody>
        </>
      )}
    </Modal>
  </div>
);

export default injectT(ArticleNotions);
