/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getLicenseByAbbreviation } from 'ndla-licenses';

import Icon from '../icons/Icon';

import { ClickableLicenseByline } from '../';


class LicenseToggle extends Component {

  constructor() {
    super();
    this.state = {
      condition: false,
    };

    this.handleClick = this.handleClick.bind(this);
    return false;
  }

  handleClick() {
    this.setState({ condition: !this.state.condition });
    document.getElementById('figureExample').classList.toggle('c-figure--active');

    // Show/hide content
    if (this.state.condition === true) {
      document.getElementById('toggle').classList.remove('u-hidden');
    } else {
      document.getElementById('toggle').classList.add('u-hidden');
    }
  }

  render() {
    return (
      <figure className="c-figure" id="figureExample">
        <button onClick={this.handleClick} className="c-figure__close">X</button>
        <div className="c-figure__img">
          <a onClick={this.handleClick} href="">
            {this.props.children}
          </a>
        </div>
        <figcaption className="" id="toggle">
          <div className="c-figcaption__info">
            I værmeldingene til NRK på 1980-tallet var symbolet for strålende
            solskinn en hvit sirkel. Ved skiftende vær var sirkelen delt i to
            med en hvit og en svart halvdel.
          </div>
          <div className="c-figure__byline">
            <div className="c-figure__byline-licenselist">
              <ClickableLicenseByline
                license={getLicenseByAbbreviation('by-nc-nd')}
              >
                Forfatter, dato
              </ClickableLicenseByline>
              <button onClick={this.handleClick} className="c-button c-button--outline c-figure__captionbtn">Bruk bildet</button>
            </div>
          </div>
        </figcaption>
        <div className="c-figure__license" id="figmeta">
          <div className="u-expanded">
            <div className="c-licenseToggle__details">
              <ClickableLicenseByline
                license={getLicenseByAbbreviation('by-nc-nd')}
              />
              <ul className="c-figure__list">
                <li className="o-list__item">12. desember 2014</li>
                <li className="o-list__item">Opphavsperson: Ola Nordmann</li>
                <li className="o-list__item">Rettighetshaver: Kari Nordmann</li>
                <li className="o-list__item">Remikser:: </li>
              </ul>
            </div>
            <div className="c-licenseToggle__ctablock">
              <button className="c-button c-button--small c-button--transparent c-licenseToggle__button" type="button"><Icon.Copy /> Kopier referanse</button>
              <button className="c-button c-licenseToggle__button" type="button"><Icon.OpenWindow /> Last ned bilde</button>
            </div>
          </div>
        </div>
      </figure>
    );
  }
}

LicenseToggle.propTypes = {
  children: PropTypes.node,
};

export default LicenseToggle;
