import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';
import ShortcutType from './TopicShortcutType';

import { ShortcutShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

class TopicIntroductionShortcuts extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { shortcuts } = this.props;
    const { open } = this.state;

    return (
      <div
        {...classes('')}
        onMouseEnter={() => this.setState({ open: true })}
        onMouseLeave={() => this.setState({ open: false })}>
        <Forward />
        {!open ? <span {...classes('label')}>Lærestoff</span> : null}
        {open ? (
          <ul {...classes('list')}>
            {shortcuts.map(shortcut => (
              <ShortcutType key={shortcut.id} shortcut={shortcut} />
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

TopicIntroductionShortcuts.propTypes = {
  shortcuts: PropTypes.arrayOf(ShortcutShape).isRequired,
};

export default TopicIntroductionShortcuts;
