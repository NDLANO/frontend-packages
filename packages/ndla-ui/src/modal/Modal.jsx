/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component, PropTypes } from 'react';

// import * as basicLightbox from 'basiclightbox';

import ReactModal from 'react-modal';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} data-show-id="1" className="u-float-right">Gjenbruk</button>
        <ReactModal
          isOpen={this.state.showModal}
          closeTimeoutMS="300"
          onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal}>Lukk</button>
          <div className="c-modal">
            {this.props.children}
          </div>
        </ReactModal>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
