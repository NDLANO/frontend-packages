/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component, PropTypes } from 'react';

import * as basicLightbox from 'basiclightbox';

// import basicLightbox from './license/basicLightbox.js'

//
// const getTargetHTML = function (elem) {
//   const id = elem.getAttribute('data-show-id');
//   const target = document.querySelector(`[data-id="${id}"]`);
//
//   return target.outerHTML;
// };
//
// const toggleLightbox = (elem) => {
//   console.warn(elem);
//   const html = getTargetHTML(elem);
//
//   elem.onclick = basicLightbox.create(html).show; // eslint-disable-line no-param-reassign
// };

const CreateHTML = function () {
  return `<div class="c-modal"><img src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1124&amp;q=80&amp;cs=tinysrgb&amp;crop=" alt=""><figcaption class="c-figcaption"><div class="c-figcaption__info">I værmeldingene til NRK på 1980-tallet var symbolet for strålende solskinn en hvit sirkel. Ved skiftende vær var sirkelen delt i to med en hvit og en svart halvdel.</div></figcaption><div class="c-modal__details">${document.querySelectorAll("[data-id='1']")[0].innerHTML}</div></div>`;
};


class ToggleImageLicense extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    const run = basicLightbox.create(CreateHTML());

    run.show();
  }

  render() {
    return (
      <button onClick={this.handleClick} data-show-id="1" className="u-float-right">Gjenbruk</button>
    );
  }
}

ToggleImageLicense.propTypes = {
  children: PropTypes.node,
};

export default ToggleImageLicense;
