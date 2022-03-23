/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, MouseEvent } from 'react';
import BEMHelper from 'react-bem-helper';
import Button from '@ndla/button';
import { useTranslation } from 'react-i18next';

const classes = new BEMHelper({
  name: 'factbox',
  prefix: 'c-',
});

interface Props {
  dangerouslySetInnerHTML?: { __html: string };
  children?: ReactNode;
}

const toggleFactBox = (event: MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget;
  const aside = button?.previousSibling?.parentElement;
  aside?.classList?.toggle('expanded');
};
const FactBox = ({ children, dangerouslySetInnerHTML }: Props) => {
  const { t } = useTranslation();

  return (
    <aside {...classes()}>
      <div {...classes('content')} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
        {children}
      </div>
      <Button {...classes('button', 'collapsed')} onClick={toggleFactBox} title={t('factbox.open')} />
      <Button {...classes('button', 'open')} onClick={toggleFactBox} title={t('factbox.close')} />
    </aside>
  );
};

export default FactBox;
