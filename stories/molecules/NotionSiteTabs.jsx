/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Tabs from '@ndla/tabs';
import styled from '@emotion/styled';
import ConceptBlockExample from './ConceptBlockExample';
import ConceptBlockListExample from './ConceptBlockListExample';

const Wrapper = styled.div`
  margin-top: 200px;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  font-family: sans-serif;
`;

const NotionSiteTabs = () => {
  return (
    <>
      <Tabs
        tabs={[
          {
            title: 'Enkel i artikkel',
            content: (
              <Wrapper>
                <ConceptBlockExample />
              </Wrapper>
            ),
          },
          {
            title: 'Liste i artikkel',
            content: (
              <Wrapper>
                <ConceptBlockListExample />
              </Wrapper>
            ),
          },
        ]}
      />
    </>
  );
};

export default NotionSiteTabs;
