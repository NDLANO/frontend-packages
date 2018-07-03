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
    this.state = {
      open: props.alwaysExpanded,
      returned: false,
      showButtonText: true,
    };
    this.handleOnToggle = this.handleOnToggle.bind(this);
  }

  handleOnToggle(open) {
    this.setState({
      open,
      showButtonText: !open,
      returned: !open,
    });
  }

  render() {
    const { shortcuts, messages, id, alwaysExpanded } = this.props;
    const { open, returned, showButtonText } = this.state;

    let onMouseEnter = null;
    let onMouseLeave = null;

    let buttonView = null;

    if (!alwaysExpanded) {
      onMouseEnter = () => this.handleOnToggle(true);
      onMouseLeave = () => this.handleOnToggle(false);

      buttonView = (
        <button
          aria-expanded={this.state.open}
          aria-label={messages.toggleButtonText}
          aria-controls={id}
          {...classes('button', returned ? 're-enter' : '')}
          onClick={() => {
            this.handleOnToggle(!open);
          }}>
          <Forward />
          {showButtonText && (
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
          <ul className={classes('list', open ? 'visible' : '').className}>
            {shortcuts.map(shortcut => (
              <li {...classes('item')} key={shortcut.id}>
                <ShortcutItem shortcut={shortcut} />
              </li>
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
