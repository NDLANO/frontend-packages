import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { ContentTypeBadge } from 'ndla-ui';
import SafeLink from '../common/SafeLink';

import { ShortcutShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

class ShortcutType extends Component {
  constructor(props) {
    super(props);
    this.state = { showtooltip: false };
  }

  render() {
    const { tooltip, contentType, url, count } = this.props.shortcut;
    const { showtooltip } = this.state;

    return (
      <li {...classes('item')}>
        {showtooltip ? <span {...classes('tooltip')}>{tooltip}</span> : null}
        <ContentTypeBadge type={contentType} size="x-small" />
        <span
          {...classes('count')}
          onMouseEnter={() => this.setState({ showtooltip: true })}
          onMouseLeave={() => this.setState({ showtooltip: false })}>
          <SafeLink to={url}>{count}</SafeLink>
        </span>
      </li>
    );
  }
}

ShortcutType.propTypes = {
  shortcut: ShortcutShape.isRequired,
};

export default ShortcutType;
