import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';
import ShortcutItem from './TopicShortcutItem';

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
    const { shortcuts, messages, id } = this.props;
    const { open } = this.state;

    return (
      <div
        onMouseEnter={() => this.setState({ open: true })}
        onMouseLeave={() => this.setState({ open: false })}
        {...classes()}>
        <button
          aria-expanded={this.state.open}
          aria-label={messages.toggleButtonText}
          aria-controls={id}
          {...classes('button')}
          onClick={() => {
            this.setState(prevState => ({
              open: !prevState.open,
            }));
          }}>
          <Forward />
          {!open && (
            <span {...classes('label')}>{messages.toggleButtonText}</span>
          )}
        </button>
        {open && (
          <ul {...classes('list')} id={id}>
            {shortcuts.map(shortcut => (
              <ShortcutItem key={shortcut.id} shortcut={shortcut} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

TopicIntroductionShortcuts.propTypes = {
  id: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    toggleButtonText: PropTypes.string.isRequired,
  }),
  shortcuts: PropTypes.arrayOf(ShortcutShape).isRequired,
};

export default TopicIntroductionShortcuts;
