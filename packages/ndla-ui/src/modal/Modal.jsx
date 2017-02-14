/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component, PropTypes } from 'react';

import * as basicLightbox from 'basiclightbox';

// const CreateHTML = function () {
//   return `<div class="c-modal"><img src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1124&amp;q=80&amp;cs=tinysrgb&amp;crop=" alt=""><figcaption class="c-figcaption"><div class="c-figcaption__info">I værmeldingene til NRK på 1980-tallet var symbolet for strålende solskinn en hvit sirkel. Ved skiftende vær var sirkelen delt i to med en hvit og en svart halvdel.</div></figcaption><div class="c-modal__details">${document.querySelectorAll("[data-id='1']")[0].innerHTML}</div></div>`;
// };

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // this.

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));

    basicLightbox.create(document.querySelectorAll("[data-id='1']")[0].innerHTML).show();

    // run.show();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} data-show-id="1" className="u-float-right">Gjenbruk</button>
        <div data-basicLightbox data-id="1">{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
