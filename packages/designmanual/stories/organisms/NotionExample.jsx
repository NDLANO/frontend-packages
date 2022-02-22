/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { addShowConceptDefinitionClickListeners } from '@ndla/article-scripts';
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
          <>
            <NotionBlock type="H5P"></NotionBlock>
            <NotionListExample></NotionListExample>
          </>
        }
        onSite={[<NotionSiteTabs></NotionSiteTabs>]}
        reactCode={`

            `}
        usesPropTypes={[
          {
            name: '',
            type: '',
            default: '',
            description: '',
          },
        ]}></ComponentInfo>
    );
  }
}

export default NotionExample;
