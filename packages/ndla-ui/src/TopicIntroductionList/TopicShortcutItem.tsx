import React from 'react';
import BEMHelper from 'react-bem-helper';
import Tooltip from '@ndla/tooltip';
import SafeLink from '@ndla/safelink';
import { useTranslation } from 'react-i18next';
import ContentTypeBadge from '../ContentTypeBadge';
import { Shortcut } from './TopicIntroductionList';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

interface Props {
  shortcut: Shortcut;
}
const ShortcutItem = ({ shortcut: { tooltip, contentType, url, count } }: Props) => {
  const { t } = useTranslation();
  return (
    <Tooltip tooltip={t('resource.shortcutsTooltip', { count })} delay={100} align="bottom">
      <SafeLink {...classes('item-link')} aria-label={tooltip} to={url}>
        <ContentTypeBadge type={contentType} size="x-small" background />
        <span {...classes('count')}>{count}</span>
      </SafeLink>
    </Tooltip>
  );
};

export default ShortcutItem;
