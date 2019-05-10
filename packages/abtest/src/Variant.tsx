/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ExperimentsContext } from './Context';
import { VariationsShape } from './Experiment';

interface Props {
  variantIndex: number;
  original?: boolean;
  onVariantMount?: void;
  children: React.ReactNode[];
}

interface ValueShape {
  experimentId?: string;
  variant?: VariationsShape;
}

export class Variant extends React.Component<Props> {
  componentDidMount() {
    const { experimentId, variant, onVariantMount } = this.context;
    const isActiveExperiment = this.isActive(this.context);
    if (isActiveExperiment && onVariantMount) {
      onVariantMount({
        expId: experimentId,
        expVar: variant.index,
        isActiveExperiment: isActiveExperiment,
      });
    }
  }
  isActive(value: ValueShape) {
    const { variantIndex, original } = this.props;
    return (
      (!value.variant && original) ||
      (value.variant && value.variant.index === variantIndex)
    );
  }
  render() {
    const { Consumer } = ExperimentsContext;
    return (
      <Consumer>
        {(value: ValueShape) =>
          this.isActive(value) ? this.props.children : null
        }
      </Consumer>
    );
  }
}

Variant.contextType = ExperimentsContext;
