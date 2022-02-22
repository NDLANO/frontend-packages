import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BEMHelper from 'react-bem-helper';
import { Forward } from '@ndla/icons/common';

import ShortcutItem from './TopicShortcutItem';

import { Shortcut } from './TopicIntroductionList';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

interface Props {
  id: string;
  alwaysExpanded?: boolean;
  shortcuts: Shortcut[];
}

const TopicIntroductionShortcuts = ({ id, alwaysExpanded = false, shortcuts }: Props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(alwaysExpanded);
  const [returned, setReturned] = useState(false);
  const [showButtonText, setShowButtonText] = useState(true);

  const handleOnToggle = (newOpen: boolean) => {
    setOpen(newOpen);
    setShowButtonText(!newOpen);
    setReturned(!newOpen);
  };

  let onMouseEnter = undefined;
  let onMouseLeave = undefined;

  let buttonView = null;

  if (!alwaysExpanded) {
    onMouseEnter = () => handleOnToggle(true);
    onMouseLeave = () => handleOnToggle(false);

    buttonView = (
      <button
        type="button"
        aria-expanded={open}
        aria-label={t('resource.label')}
        aria-controls={id}
        {...classes('button', returned ? 're-enter' : '')}
        onClick={() => handleOnToggle(!open)}>
        <Forward />
        {showButtonText && <span {...classes('label')}>{t('resource.label')}</span>}
      </button>
    );
  }
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...classes()}>
      {buttonView}
      {open && (
        <ul className={classes('list', open ? 'visible' : '').className}>
          {shortcuts.map((shortcut) => (
            <li {...classes('item')} key={shortcut.id}>
              <ShortcutItem shortcut={shortcut} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopicIntroductionShortcuts;
