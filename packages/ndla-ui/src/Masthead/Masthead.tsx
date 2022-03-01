/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import { WithTranslation, withTranslation } from 'react-i18next';
import { DisplayOnPageYOffset } from '../Animation';

const classes = new BEMHelper({
  name: 'masthead',
  prefix: 'c-',
});

interface MastheadItemProps {
  children?: ReactNode;
  className?: string;
  right?: boolean;
  left?: boolean;
}
export const MastheadItem = ({ children, className, left = false, right = false }: MastheadItemProps) => {
  const itemClassName = left ? 'left' : right ? 'right' : undefined;
  const itemClassNames = itemClassName ? classes(itemClassName).className : undefined;

  return <div className={itemClassNames}>{children}</div>;
};

interface MastheadInfoProps {
  children?: ReactNode;
}

const MastheadInfo = ({ children }: MastheadInfoProps) => (
  <div {...classes('info')}>
    <div {...classes('info-content')}>{children}</div>
  </div>
);

interface Props {
  children?: ReactNode;
  fixed?: boolean;
  showLoaderWhenNeeded?: boolean;
  infoContent?: ReactNode;
  ndlaFilm?: boolean;
  skipToMainContentId?: string;
}

export const Masthead = ({
  children,
  fixed,
  infoContent,
  showLoaderWhenNeeded = true,
  ndlaFilm,
  skipToMainContentId,
  t,
}: Props & WithTranslation) => (
  <>
    {skipToMainContentId && (
      <a tabIndex={0} href={`#${skipToMainContentId}`} {...classes('skip-to-main-content')}>
        {t('masthead.skipToContent')}
      </a>
    )}
    <div {...classes('placeholder', { infoContent: !!infoContent })} />
    <div {...classes('', { fixed: !!fixed, infoContent: !!infoContent, showLoaderWhenNeeded, ndlaFilm: !!ndlaFilm })}>
      {infoContent && (
        <DisplayOnPageYOffset yOffsetMin={0} yOffsetMax={90}>
          <MastheadInfo>{infoContent}</MastheadInfo>
        </DisplayOnPageYOffset>
      )}
      <div className={`u-1/1 ${classes('content').className}`}>{children}</div>
    </div>
  </>
);

export default withTranslation()(Masthead);
