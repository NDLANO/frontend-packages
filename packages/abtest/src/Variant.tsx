/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Context } from './Context';
import { VariationsShape } from './Experiment';

interface Props {
  variantIndex: number;
  original?: boolean;
  children: React.ReactNode[];
}

interface ValueShape {
  experimentId?: string;
  logPageView?: boolean;
  googleAccountId?: string;
  variant?: VariationsShape;
  trackerName?: string;
}

export class Variant extends React.Component<Props> {
  componentDidMount() {
    const {
      logPageView,
      googleAccountId,
      trackerName,
      experimentId,
      variant,
    } = this.context;
    if (this.isActive(this.context) && logPageView) {
      console.log('log pageview');
      window.ga('create', googleAccountId, 'auto', {
        name: trackerName
      });
      // Uses this variant AND experiment is active AND we want to log to GA!
      window.ga(() => {
        window.ga(`${trackerName}.set`, {
          expId: experimentId,
          expVar: variant.index,
        });
        window.ga(`${trackerName}.send`, 'pageview');
      });
    }
  }
  isActive(value: ValueShape) {
    const { variantIndex, original } = this.props;
    return (
      (!value.variant && original)) ||
      ((value.variant && value.variant.index === variantIndex)
    );
  }
  render() {
    const { Consumer } = Context;
    return (
      <Consumer>
        {(value: ValueShape) => (
          this.isActive(value) ? this.props.children : null
        )}
      </Consumer>
    )
  }
};

Variant.contextType = Context;