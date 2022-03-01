/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
//@ts-ignore
import { addShowConceptDefinitionClickListeners } from '@ndla/article-scripts';
import { OneColumn } from '@ndla/ui';
import NotionBlock from '../molecules/NotionBlock';
//@ts-ignore
import ComponentInfo from '../ComponentInfo';
//@ts-ignore
import NotionSiteTabs from '../molecules/NotionSiteTabs';

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
            <h2>Begrep med visuelt element bilde</h2>
            <NotionBlock type="image" />
            <h2>Begrep med visuelt element video</h2>
            <NotionBlock type="video" />
            <h2>Begrep med visuelt element h5p</h2>
            <NotionBlock type="H5P" />
          </OneColumn>
        }
        onSite={[<NotionSiteTabs></NotionSiteTabs>]}
        reactCode={`
  //Enkel forklaringsblokk
  <NotionBlock type="H5P"></NotionBlock>
  //Liste med forklaringsblokker
  <NotionListExample
  title="Liste med forklaringer"
  children={[{ type: 'image' }, { type: 'H5P' }, { type: 'video' }]}>
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
