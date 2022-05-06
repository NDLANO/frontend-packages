/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { Component } from 'react';
//@ts-ignore
import { addShowConceptDefinitionClickListeners } from '@ndla/article-scripts';
import { OneColumn } from '@ndla/ui';
import { breakpoints, mq } from '@ndla/core';
import NotionBlock from '../molecules/NotionBlock';
//@ts-ignore
import ComponentInfo from '../ComponentInfo';
//@ts-ignore
import NotionSiteTabs from '../molecules/NotionSiteTabs';

const ContentWrapper = styled.div`
  position: relative !important;
  right: auto !important;
  left: -16.6666666667%;
  width: 133.3333333333% !important;
  padding-left: 24px;
  padding-right: 24px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100% !important;
    left: 0 !important;
  }
`;

class NotionBlockExample extends Component {
  componentDidMount() {
    addShowConceptDefinitionClickListeners();
  }

  render() {
    return (
      <ComponentInfo
        status={3}
        components={
          <OneColumn>
            <ContentWrapper>
              <h2>Begrep med visuelt element bilde</h2>
            </ContentWrapper>
            <NotionBlock type="image" hideIconsAndAuthors />
            <ContentWrapper>
              <h2>Begrep med visuelt element video</h2>
            </ContentWrapper>
            <NotionBlock type="video" hideIconsAndAuthors />
            <ContentWrapper>
              <h2>Begrep med visuelt element h5p</h2>
            </ContentWrapper>
            <NotionBlock type="h5p" hideIconsAndAuthors />
            <ContentWrapper>
              <h2>Begrep med forfatter og lisensikoner</h2>
            </ContentWrapper>
            <NotionBlock type="image" />
          </OneColumn>
        }
        onSite={[<NotionSiteTabs></NotionSiteTabs>]}
        reactCode={`
  //Enkel forklaringsblokk
  <NotionBlock type="H5P" hideIconsAndAuthors adjustSizeToFitWiderPage></NotionBlock>
  //Liste med forklaringsblokker
  <NotionListExample
  title="Liste med forklaringer"
  children={[{ type: 'image' }, { type: 'h5p' }, { type: 'video' }]}>
  </NotionListExample>
              `}
        usesPropTypes={[
          {
            name: 'Type',
            type: '"image" ,"H5P", "video"',
            default: 'Required',
            description: 'Velger embeded type innhold for forklaringsboksen',
          },

          {
            name: 'hideIconsAndAuthors ',
            type: 'boolean',
            default: '',
            description: 'Fjerner lisensikonene og forfatterne',
          },

          {
            name: ' adjustSizeToFitWiderPage',
            type: 'boolean',
            default: '',
            description: 'Justerer bredden er til blokken for å passe inn på søkesiden',
          },

          {
            name: 'I liste: ',
            type: '',
            default: '',
            description: '',
          },

          {
            name: 'title',
            type: 'ReactNode',
            default: 'Required',
            description: 'Tittel for listen av forklaringsblokker',
          },
          {
            name: 'children',
            type: 'NotionBlock[]',
            default: 'Required',
            description: 'Tar inn en liste med Notionsblocks',
          },
        ]}></ComponentInfo>
    );
  }
}

export default NotionBlockExample;
