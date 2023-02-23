/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';

import Tabs from '@ndla/tabs';
import { ButtonV2 } from '@ndla/button';
import { InlineContainer } from '../helpers';

export class TabsControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <div>
        <Tabs
          selectedIndex={this.state.selectedIndex}
          onSelect={(selectedIndex) => {
            this.setState({
              selectedIndex,
            });
          }}
          tabs={[
            { title: 'Bilde', content: <p>Bilde innhold</p> },
            { title: 'Video', content: <p>Video innhold</p> },
            { title: 'Lyd', content: <p>Lyd innhold</p> },
          ]}
        />
        <InlineContainer>
          <ButtonV2 style={{ marginRight: '5px' }} onClick={() => this.setState({ selectedIndex: 0 })}>
            Vis bildefane
          </ButtonV2>
          <ButtonV2 style={{ marginRight: '5px' }} onClick={() => this.setState({ selectedIndex: 1 })}>
            Vis videofane
          </ButtonV2>
          <ButtonV2 style={{ marginRight: '5px' }} onClick={() => this.setState({ selectedIndex: 2 })}>
            Vis lydfane
          </ButtonV2>
        </InlineContainer>
      </div>
    );
  }
}

export const TabsDefault = () => (
  <Tabs
    tabs={[
      { title: 'Bilde', content: <p>Bilde innhold</p> },
      { title: 'Video', content: <p>Video innhold</p> },
      { title: 'Lyd', content: <p>Lyd innhold</p> },
      { title: 'Inaktiv', content: <p>Inaktivt innhold</p>, disabled: true },
    ]}
  />
);

export default TabsDefault;
