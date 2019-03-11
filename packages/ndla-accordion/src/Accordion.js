/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.normal} 0;
`;

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndexes: props.openIndexes,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(index) {
    const { openIndexes } = this.state;
    const { single } = this.props;

    if (single) {
      this.setState({
        openIndexes: openIndexes.includes(index) ? [] : [index],
      });
    } else if (openIndexes.includes(index)) {
      openIndexes.splice(openIndexes.indexOf(index), 1);
      this.setState({
        openIndexes,
      });
    } else {
      openIndexes.push(index);
      this.setState({
        openIndexes,
      });
    }
  }

  render() {
    return this.props.children({
      openIndexes: this.state.openIndexes,
      handleItemClick: this.togglePanel,
      getBarProps: panelId => ({
        panelId,
        isOpen: this.state.openIndexes.includes(panelId),
        onClick: () => this.togglePanel(panelId),
      }),
      getPanelProps: panelId => ({
        id: panelId,
        isOpen: this.state.openIndexes.includes(panelId),
      }),
    });
  }
}

Accordion.propTypes = {
  children: PropTypes.func.isRequired,
  single: PropTypes.bool,
  openIndexes: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
};

Accordion.defaultProps = {
  openIndexes: [],
};
