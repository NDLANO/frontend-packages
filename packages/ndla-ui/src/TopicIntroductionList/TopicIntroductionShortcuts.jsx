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
    this.state = { open: props.alwaysExpanded };
  }

  render() {
    const { shortcuts, messages, id, alwaysExpanded } = this.props;
    const { open } = this.state;

    let onMouseEnter = null;
    let onMouseLeave = null;

    let buttonView = null;

    if (!alwaysExpanded) {
      onMouseEnter = () => this.setState({ open: true });
      onMouseLeave = () => this.setState({ open: false });

      buttonView = (
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
      );
    }

    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...classes()}>
        {buttonView}
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
  alwaysExpanded: PropTypes.bool,
  messages: PropTypes.shape({
    toggleButtonText: PropTypes.string.isRequired,
  }),
  shortcuts: PropTypes.arrayOf(ShortcutShape).isRequired,
};

TopicIntroductionShortcuts.defaultProps = {
  alwaysExpanded: false,
};

export default TopicIntroductionShortcuts;
