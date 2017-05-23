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
  addCloseFigureDetailsClickListners,
  addShowFigureDetailsClickListners,
  makeFigureLicenseIconsClickable,
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
    addShowFigureDetailsClickListners();
    addCloseFigureDetailsClickListners();
    makeFigureLicenseIconsClickable();
  }

  render() {
    return (
      <Figure>
        <div className="c-figure__img">
          {this.props.children}
        </div>
        <FigureCaption caption={caption} reuseLabel="Gjenbruk" licenseAbbreviation="by-nc-nd" authors={authors} />
        <FigureDetails licenseAbbreviation="by-nc-nd" authors={authors}>
          <button className="c-button c-button--outline c-licenseToggle__button" type="button">Kopier referanse</button>
          <button className="c-button c-button--outline c-licenseToggle__button" type="button">Last ned bilde</button>
        </FigureDetails>
      </Figure>
    );
  }
}

FigureWithLicense.propTypes = {
  children: PropTypes.node.isRequired,
  offsetRight: PropTypes.boolean,
};

export default FigureWithLicense;
