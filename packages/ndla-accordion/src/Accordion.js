/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { spacing } from 'ndla-core';

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.normal} 0;
`;

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelsOpen: props.openIndexes,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(index) {
    const { panelsOpen } = this.state;
    const { onlyOpenOne } = this.props;

    if (onlyOpenOne) {
      this.setState({
        panelsOpen: panelsOpen.includes(index) ? [] : [index],
      });
    } else if (panelsOpen.includes(index)) {
      panelsOpen.splice(panelsOpen.indexOf(index), 1);
      this.setState({
        panelsOpen,
      });
    } else {
      panelsOpen.push(index);
      this.setState({
        panelsOpen,
      });
    }
  }

  render() {
    return this.props.children({
      openIndexes: this.state.panelsOpen,
      handleItemClick: this.togglePanel,
    });
  }
}

Accordion.propTypes = {
  children: PropTypes.func.isRequired,
  onlyOpenOne: PropTypes.bool,
  openIndexes: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
};

Accordion.defaultProps = {
  openIndexes: [],
};
