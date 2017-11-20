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
import {
  addCloseFigureDetailsClickListeners,
  addShowFigureDetailsClickListeners,
} from 'ndla-article-scripts';

import { Button, Figure, FigureCaption, FigureDetails } from 'ndla-ui';

const authors = [{ type: 'Opphavsmann', name: 'Gary Waters' }];

class FigureWithLicense extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    addShowFigureDetailsClickListeners();
    addCloseFigureDetailsClickListeners();
  }

  update() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    const license = getLicenseByAbbreviation('by-nc-nd', 'nb');

    const messages = {
      close: 'Lukk',
      rulesForUse: 'Regler for bruk av bildet',
      learnAboutLicenses: license.linkText,
      source: 'Kilde',
      title: 'Tittel',
    };

    const caption = this.props.caption ? this.props.caption : ``;
    const reuseLabel = this.props.reuseLabel
      ? `Bruk ${this.props.reuseLabel}`
      : 'Bruk bildet';
    const typeLabel = this.props.typeLabel ? this.props.typeLabel : 'bilde';
    return (
      <Figure
        className={
          this.state.active ? `c-figure` : `c-figure ${this.props.classes}`
        }>
        <div className="c-figure__img">
          <Button stripped className="u-fullw" onClick={() => this.update()}>
            {this.props.children}
          </Button>
        </div>
        <FigureCaption
          caption={caption}
          reuseLabel={reuseLabel}
          licenseRights={license.rights}
          authors={authors}
        />
        <FigureDetails
          licenseRights={license.rights}
          authors={authors}
          licenseUrl={license.url}
          origin="https://www.wikimedia.com"
          title="Liten mann og lupe"
          messages={messages}>
          <button
            className="c-button c-button--outline c-figure-license__button"
            type="button">
            Kopier referanse
          </button>
          <button
            className="c-button c-button--outline c-figure-license__button"
            type="button">
            Last ned {typeLabel}
          </button>
        </FigureDetails>
      </Figure>
    );
  }
}

FigureWithLicense.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  caption: PropTypes.string,
  reuseLabel: PropTypes.string,
  typeLabel: PropTypes.string,
};

FigureWithLicense.defaultProps = {
  classes: '',
};

export default FigureWithLicense;
