import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ContentTypeBadge, Tooltip } from 'ndla-ui';

import SafeLink from '../common/SafeLink';

import { ShortcutShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

const ShortcutItem = ({ shortcut: { tooltip, contentType, url, count } }) => (
  <Tooltip tooltip={tooltip} delay={100} align="bottom">
    <SafeLink {...classes('item-link')} aria-label={tooltip} to={url}>
      <ContentTypeBadge type={contentType} size="x-small" background />
      <span {...classes('count')}>{count}</span>
    </SafeLink>
  </Tooltip>
);

ShortcutItem.propTypes = {
  shortcut: ShortcutShape.isRequired,
  disableToolTip: PropTypes.bool,
};

ShortcutItem.defaultProps = {
  disableToolTip: false,
};

export default ShortcutItem;
