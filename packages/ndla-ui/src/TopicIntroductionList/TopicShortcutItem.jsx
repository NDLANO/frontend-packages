import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ContentTypeBadge, Tooltip } from 'ndla-ui';
import { injectT } from 'ndla-i18n';

import SafeLink from '../common/SafeLink';

import { ShortcutShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

const ShortcutItem = ({
  t,
  shortcut: { id, tooltip, contentType, url, count },
}) => (
  <Tooltip
    id={`shortcut-tooltip-${id}`}
    tooltip={t('resource.shortcutsTooltip', { count })}
    delay={100}
    align="bottom">
    <SafeLink {...classes('item-link')} aria-label={tooltip} to={url}>
      <ContentTypeBadge type={contentType} size="x-small" background />
      <span {...classes('count')}>{count}</span>
    </SafeLink>
  </Tooltip>
);

ShortcutItem.propTypes = {
  shortcut: ShortcutShape.isRequired,
  disableToolTip: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

ShortcutItem.defaultProps = {
  disableToolTip: false,
};

export default injectT(ShortcutItem);
