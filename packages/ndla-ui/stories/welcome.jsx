import React, { Component, PropTypes } from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import { Center } from './helpers';

const styles = {
  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.showApp = this.showApp.bind(this);
  }
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <Center>
        <div style={styles.main}>
          <h2>NDLA</h2>
          <h1>Designmanual</h1>
          <ul class="o-list--arrows">Typografi
            <li>Overskrifter</li>
            <li>Brødtekst</li>
            <li>Tabeller</li>
            <li>Lister</li>
          </ul>
          <ul class="o-list--arrows">Atomer
            <li>Ikoner</li>
            <li>Media</li>
            <li>Flagg</li>
          </ul>
          <ul class="o-list--arrows">Molekyler
            <li>Logo</li>
            <li>Lisensbyline</li>
            <li>Fagressurs</li>
            <li>Sidefot</li>
            <li>Sidehode</li>
          </ul>
        </div>
      </Center>
    );
  }
}

Welcome.propTypes = {
  showApp: PropTypes.func,
};

storiesOf('Velkommen', module)
  .add('til NDLAs designmanual', () => (
    <Welcome showApp={linkTo('Button')} />
  ));
