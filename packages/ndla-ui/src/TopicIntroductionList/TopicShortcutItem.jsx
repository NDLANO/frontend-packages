import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Trans } from '@ndla/i18n';
import Tooltip from '@ndla/tooltip';
import SafeLink from '@ndla/safelink';
import ContentTypeBadge from '../ContentTypeBadge';

import { ShortcutShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

const ShortcutItem = ({ shortcut: { id, tooltip, contentType, url, count } }) => (
  <Trans>
    {({ t }) => (
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
    )}
  </Trans>
);

ShortcutItem.propTypes = {
  shortcut: ShortcutShape.isRequired,
  disableToolTip: PropTypes.bool,
};

ShortcutItem.defaultProps = {
  disableToolTip: false,
};

export default ShortcutItem;
