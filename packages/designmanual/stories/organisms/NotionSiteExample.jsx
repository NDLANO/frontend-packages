/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { addShowConceptDefinitionClickListeners } from '@ndla/article-scripts';
import { OneColumn } from '@ndla/ui';
import NotionBlock from '../molecules/NotionBlock';
import NotionListExample from '../molecules/NotionListExample';
import ComponentInfo from '../ComponentInfo';
import NotionSiteTabs from '../molecules/NotionSitetabs';

class NotionExample extends Component {
  componentDidMount() {
    addShowConceptDefinitionClickListeners();
  }

  render() {
    return (
      <ComponentInfo
        status={3}
        components={
          <OneColumn>
            <NotionBlock type="H5P"></NotionBlock>
            <NotionListExample
              title="Liste med forklaringer"
              notionBlocks={[{ type: 'image' }, { type: 'H5P' }, { type: 'video' }]}></NotionListExample>
          </OneColumn>
        }
        onSite={[<NotionSiteTabs></NotionSiteTabs>]}
        reactCode={`
//Enkel forklaringsblokk
<NotionBlock type="H5P"></NotionBlock>

//Liste med forklaringsblokker
<NotionListExample
title="Liste med forklaringer"
notionBlocks={[{ type: 'image' }, { type: 'H5P' }, { type: 'video' }]}>
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
            type: 'string',
            default: 'Required',
            description: 'Tittel for listen av forklaringsblokker',
          },
          {
            name: 'notionBlocks',
            type: 'NotionBlock[]',
            default: 'Required',
            description: 'Tar inn en liste med Notionsblocks',
          },
        ]}></ComponentInfo>
    );
  }
}

export default NotionExample;
