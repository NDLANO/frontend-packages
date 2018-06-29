import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { TransitionGroup } from 'react-transition-group';
import { Forward } from 'ndla-icons/common';

import ShortcutItem from './TopicShortcutItem';

import Fade from '../Animation/Fade';

import { ShortcutShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

const animationDelay = 50;
const animationDuration = 300;

class TopicIntroductionShortcuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.alwaysExpanded,
      showButtonText: true,
      disableToolTip: false,
    };
    this.handleOnToggle = this.handleOnToggle.bind(this);
    this.disableToolTipTimeout = null;
  }

  handleOnToggle(open) {
    clearInterval(this.disableToolTipTimeout);
    if (open) {
      this.setState({ open, showButtonText: false, disableToolTip: true });
      this.disableToolTipTimeout = setTimeout(() => {
        this.setState({ disableToolTip: false });
      }, 400);
    } else {
      this.setState({ open, disableToolTip: false });
      const { shortcuts } = this.props;

      setTimeout(() => {
        this.setState({ showButtonText: true });
      }, shortcuts.length * animationDelay + animationDuration);
    }
  }

  render() {
    const { shortcuts, messages, id, alwaysExpanded } = this.props;
    const { open, showButtonText, disableToolTip } = this.state;

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
          {...classes('button')}
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
        <TransitionGroup className={classes('list').className} component="ul">
          {(open ? shortcuts : []).map((shortcut, index, array) => (
            <Fade
              timeout={animationDuration}
              key={shortcut.id}
              delay={index * animationDelay}
              exitDelay={(array.length - index) * animationDelay}>
              <li {...classes('item')}>
                <ShortcutItem
                  shortcut={shortcut}
                  disableToolTip={disableToolTip}
                />
              </li>
            </Fade>
          ))}
        </TransitionGroup>
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
