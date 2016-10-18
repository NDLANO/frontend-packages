import React, { Component, PropTypes } from 'react';

import { storiesOf, linkTo } from '@kadira/storybook';

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
      <div style={styles.main}>
        <h1>Welcome to NDLA styleguide and component gallery</h1>
        <p>
          See: <button onClick={this.showApp}>stories</button> for a component called <code style={styles.code}>Button</code>.
        </p>
      </div>
    );
  }
}

Welcome.propTypes = {
  showApp: PropTypes.func,
};

storiesOf('Welcome', module)
  .add('to NDLA styleguide', () => (
    <Welcome showApp={linkTo('Button')} />
  ));
