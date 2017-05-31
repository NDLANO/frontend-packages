/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  // addCloseFigureDetailsClickListners,
  addShowFigureDetailsClickListners,
  // makeFigureLicenseIconsClickable,
} from 'ndla-article-scripts';

import { Figure, FigureCaption, FigureDetails } from '../../src';


const caption = `I værmeldingene til NRK på 1980-tallet var symbolet for strålende
            solskinn en hvit sirkel. Ved skiftende vær var sirkelen delt i to
            med en hvit og en svart halvdel.`;
const authors = [
  { type: 'Opphavsmann', name: 'Gary Waters' },
  { type: 'Leverandør', name: 'Corbis' },
  { type: 'Leverandør', name: 'NTB scanpix' },
];

class FigureWithLicense extends Component {

  componentDidMount() {
    // Overriding function -> fix closing license popup
    const addCloseFigureDetailsClickListners = () => {
      document.querySelectorAll('.c-figure .c-figure__close').forEach((el) => {
        const target = el;
        target.onclick = () => {
          target.parentNode.parentNode.classList.remove('c-figure--active');
          target.parentNode.parentNode.querySelector('figcaption').classList.remove('u-hidden');
        };
      });
    };
    addShowFigureDetailsClickListners();
    addCloseFigureDetailsClickListners();
    // makeFigureLicenseIconsClickable();
  }


  render() {
    return (
      <Figure className={`c-figure ${this.props.classes}`}>
        <div className="c-figure__img">
          {this.props.children}
        </div>
        <FigureCaption caption={caption} reuseLabel="Bruk bildet" licenseAbbreviation="by-nc-nd" authors={authors} />
        <FigureDetails licenseAbbreviation="by-nc-nd" authors={authors}>
          <button className="c-button c-button--outline c-figure-license__button" type="button">Kopier referanse</button>
          <button className="c-button c-button--outline c-figure-license__button" type="button">Last ned bilde</button>
        </FigureDetails>
      </Figure>
    );
  }
}

FigureWithLicense.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};

export default FigureWithLicense;
