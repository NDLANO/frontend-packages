/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import {
  OneColumn,
  LayoutItem,
  ArticleWrapper,
  AuthorInfo,
  Button,
} from 'ndla-ui';

export default () => (
  <OneColumn>
    <ArticleWrapper>
      <LayoutItem layout="center">
        <AuthorInfo
          authorName="Cecilie Isaksen Eftedal"
          authorRole="Stilling / rolle"
          image="https://placehold.it/300x300"
          email="cecilie@ndla.no"
          phone="+47 123 45 678"
        />
      </LayoutItem>
      <LayoutItem layout="center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </LayoutItem>
      <LayoutItem layout="center">
        <Button outline className="c-author-info__readmore">
          Se hva Cecilie har bidratt med
        </Button>
      </LayoutItem>
    </ArticleWrapper>
  </OneColumn>
);
