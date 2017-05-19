import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { storiesOf, linkTo } from '@kadira/storybook';
import { Center } from './helpers';
import { Logo } from '../src'

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
        <article className="o-wrapper--narrow">
          <section className="c-factbox">
            <Logo />
            <h1>Designmanual</h1>
            <p>Denne designmanualen definerer visuelt utrykk og interaksjonsdesign for NDLAs grensesnitt på skjermflater.</p>
          </section>
          <section>
            <h2>Hvordan bruke denne designmanualen</h2>
            <p>Denne designmanualen består av hovedsakelig to deler: Et CSS-bibliotek som styler de mest brukte HTML-elementene, og et
              komponent-bibliotek for <a href="https://facebook.github.io/react/">React</a>.
              Den er også publisert på <a href="https://www.npmjs.com/package/ndla-ui">npm</a>.
            </p>
            <h3>Hente inn prosjekt direkte via npm</h3>
            <code>npm install ndla-ui --save</code><br />
            <code>yarn add ndla-ui -S</code>
            <h3>Hente inn stilark direkte via CDN</h3>
            <code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;ndla-ui.css&quot;&gt;</code>
          </section>
        </article>
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
