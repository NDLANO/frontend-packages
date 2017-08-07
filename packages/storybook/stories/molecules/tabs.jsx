/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';

import Tabs from 'ndla-tabs';
import { Button } from 'ndla-ui';
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
          tabs={[
            { title: 'Bilde', content: <p>Bilde innhold</p> },
            { title: 'Video', content: <p>Video innhold</p> },
            { title: 'Lyd', content: <p>Lyd innhold</p> },
          ]}
        />
        <InlineContainer>
          <Button onClick={() => this.setState({ selectedIndex: 0 })}>
            Vis bilde fane
          </Button>
          <Button onClick={() => this.setState({ selectedIndex: 1 })}>
            Vis video fane
          </Button>
          <Button onClick={() => this.setState({ selectedIndex: 2 })}>
            Vis lyd fane
          </Button>
        </InlineContainer>
      </div>
    );
  }
}

export const TabsDefault = () =>
  <Tabs
    tabs={[
      { title: 'Bilde', content: <p>Bilde innhold</p> },
      { title: 'Video', content: <p>Video innhold</p> },
      { title: 'Lyd', content: <p>Lyd innhold</p> },
    ]}
  />;

export default TabsDefault;
