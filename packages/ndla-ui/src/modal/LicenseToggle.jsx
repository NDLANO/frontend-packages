/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component, PropTypes } from 'react';

import Icon from '../icons/Icon';

import { Figure, FigureCaption, FigureDetails } from '../';

function findAncestorByClass(el, cls) {
  let target = el;
  while (!target.classList.contains(cls)) {
    target = target.parentElement;
  }
  return target;
}

const caption = `I værmeldingene til NRK på 1980-tallet var symbolet for strålende
            solskinn en hvit sirkel. Ved skiftende vær var sirkelen delt i to
            med en hvit og en svart halvdel.`;
const authors = [
  { type: 'Opphavsmann', name: 'Gary Waters' },
  { type: 'Leverandør', name: 'Corbis' },
  { type: 'Leverandør', name: 'NTB scanpix' },
];

class LicenseToggle extends Component {

  componentDidMount() {
    document.querySelectorAll('.c-figure__close')
      .forEach((el) => {
        const target = el;
        target.onclick = () => {
          target.parentNode.classList.remove('c-figure--active');
          target.parentNode.querySelector('figcaption').classList.remove('u-hidden');
        };
      });

    document.querySelectorAll('.c-figure__captionbtn')
      .forEach((el) => {
        const target = el;
        target.onclick = () => {
          const figure = findAncestorByClass(target, 'c-figure');
          figure.classList.add('c-figure--active');

          const figcaption = findAncestorByClass(target, 'c-figure__caption');
          figcaption.classList.add('u-hidden');
        };
      });
  }

  render() {
    return (
      <Figure>
        <div className="c-figure__img">
          <a onClick={this.handleClick} href="">
            {this.props.children}
          </a>
        </div>
        <FigureCaption caption={caption} reuseLabel="Gjenbruk" licenseAbbreviation="by-nc-nd" authors={authors} />
        <FigureDetails licenseAbbreviation="by-nc-nd" authors={authors}>
          <button className="c-button c-button--small c-button--transparent c-licenseToggle__button" type="button"><Icon.Copy /> Kopier referanse</button>
          <button className="c-button c-button--small c-button--transparent c-licenseToggle__button" type="button"><Icon.Link /> Gå til kilde</button>
          <button className="c-button c-licenseToggle__button" type="button"><Icon.OpenWindow /> Vis bilde</button>
        </FigureDetails>
      </Figure>
    );
  }
}

LicenseToggle.propTypes = {
  children: PropTypes.node,
};

export default LicenseToggle;
