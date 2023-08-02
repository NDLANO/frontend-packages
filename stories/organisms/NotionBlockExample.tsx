/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component } from 'react';
//@ts-ignore
import { addShowConceptDefinitionClickListeners } from '@ndla/article-scripts';
import { OneColumn } from '@ndla/ui';
import { Helmet } from 'react-helmet-async';
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
      <>
        <Helmet>
          <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" />
        </Helmet>
        <ComponentInfo
          status={3}
          components={
            <OneColumn>
              <h2 className="u-heading">Begrep med visuelt element bilde</h2>
              <NotionBlock type="image" hideIconsAndAuthors />
              <h2 className="u-heading">Begrep med visuelt element video</h2>
              <NotionBlock type="video" hideIconsAndAuthors />
              <h2 className="u-heading">Begrep med visuelt element h5p</h2>
              <NotionBlock type="h5p" hideIconsAndAuthors />
              <h2 className="u-heading">Begrep med visuelt element iframe</h2>
              <NotionBlock type="iframe" hideIconsAndAuthors />
              <h2 className="u-heading">Begrep med forfatter og lisensikoner</h2>
              <NotionBlock type="image" />
              <h2 className="u-heading">Begrep med manglende lisens</h2>
              <NotionBlock type="video" data="other" />
              <h2 className="u-heading">Begrep med markdown-innhold</h2>
              <NotionBlock type="video" data="richtext" />
            </OneColumn>
          }
          onSite={[<NotionSiteTabs key={1}></NotionSiteTabs>]}
          reactCode={`
  //Enkel forklaringsblokk
  <NotionBlock type="H5P" hideIconsAndAuthors></NotionBlock>
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
          ]}
        ></ComponentInfo>
      </>
    );
  }
}

export default NotionBlockExample;
