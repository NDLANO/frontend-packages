import React, { Component, Fragment } from 'react';
import BEMHelper from 'react-bem-helper';
import { ContentTypeBadge } from 'ndla-ui';

import SafeLink from '../common/SafeLink';

import { ShortcutShape } from '../shapes';
import { Fade } from '../Animation';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

class ShortcutItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showtooltip: false };
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.handleHideTooltip = this.handleHideTooltip.bind(this);
  }

  handleShowTooltip() {
    this.setState({ showtooltip: true });
  }

  handleHideTooltip() {
    this.setState({ showtooltip: false });
  }

  render() {
    const { tooltip, contentType, url, count } = this.props.shortcut;
    const { showtooltip } = this.state;

    return (
      <Fragment>
        <Fade in={showtooltip}>
          <span {...classes('tooltip')}>{tooltip}</span>
        </Fade>
        <SafeLink
          {...classes('item-link')}
          aria-label={tooltip}
          to={url}
          onMouseEnter={this.handleShowTooltip}
          onMouseLeave={this.handleHideTooltip}
          onFocus={this.handleShowTooltip}
          onBlur={this.handleHideTooltip}>
          <ContentTypeBadge type={contentType} size="x-small" background />
          <span {...classes('count')}>{count}</span>
        </SafeLink>
      </Fragment>
    );
  }
}

ShortcutItem.propTypes = {
  shortcut: ShortcutShape.isRequired,
};

export default ShortcutItem;
