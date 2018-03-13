import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ContentTypeBadge } from 'ndla-ui';
import SafeLink from '../common/SafeLink';

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
    const { tooltip, contentType, url, count } = this.props;
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
  tooltip: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ShortcutType;
