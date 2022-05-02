/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import { isFunction as isFunctionHelper, parseMarkdown } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import { Link as LinkIcon } from '@ndla/icons/common';
import { LicenseByline } from '@ndla/licenses';
import SafeLink from '@ndla/safelink';
import Button from '@ndla/button';

const classes = new BEMHelper({
  name: 'figure',
  prefix: 'c-',
});

export const FigureCaption = ({
  figureId,
  id,
  children,
  caption,
  authors,
  reuseLabel,
  licenseRights,
  locale,
  link,
  hideFigcaption,
  hasLinkedVideo,
  hideIconsAndAuthors,
}: FigureCaptionProps) => {
  const { t } = useTranslation();

  let classNameButton = '';
  let changableLicenseRights: string[];
  if (hideIconsAndAuthors) {
    classNameButton = 'byline-author-buttons--noSiblings';
    changableLicenseRights = [];
  } else {
    classNameButton = 'byline-author-buttons';
    changableLicenseRights = licenseRights;
  }

  return (
    <>
      <figcaption {...classes('caption', hideFigcaption ? 'hidden-caption' : undefined)}>
        {caption ? <div {...classes('info')}>{parseMarkdown(caption)}</div> : null}
        <footer {...classes('byline')}>
          <div {...classes('byline-licenselist')}>
            <LicenseByline licenseRights={changableLicenseRights} locale={locale} marginRight>
              <div {...classes(classNameButton)}>
                {!hideIconsAndAuthors && (
                  <span {...classes('byline-authors')}>{authors?.map((author) => author.name).join(', ')}</span>
                )}
                <div>
                  <Button
                    borderShape="rounded"
                    outline
                    size="small"
                    type="button"
                    data-dialog-trigger-id={id}
                    data-dialog-source-id={figureId}>
                    {reuseLabel}
                  </Button>
                  {hasLinkedVideo && (
                    <Button
                      borderShape="rounded"
                      outline
                      size="small"
                      type="button"
                      {...classes('toggleAlternativeVideo')}>
                      <span className="original">{t('figure.button.alternative')}</span>
                      <span className="alternative hidden">{t('figure.button.original')}</span>
                    </Button>
                  )}
                </div>{' '}
                {children}
              </div>
            </LicenseByline>

            {link && (
              <div {...classes('link-wrapper')}>
                <SafeLink
                  to={link.url}
                  {...classes('link')}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}>
                  <span {...classes('link-text')}>{link.text}</span>
                  <LinkIcon />
                </SafeLink>
                {link.description && <p {...classes('link-description')}>{link.description}</p>}
              </div>
            )}
          </div>
        </footer>
      </figcaption>
    </>
  );
};

export interface FigureLicense {
  short: string;
  title: string;
  userFriendlyTitle: string;
  description: string;
  rights: string[];
  linkText?: string;
  url?: string;
}

interface FigureCaptionProps {
  figureId: string;
  id?: string;
  caption?: string;
  reuseLabel: string;
  licenseRights: string[];
  children?: ReactNode;
  authors?: { name: string }[];
  link?: {
    url: string;
    text: string;
    description?: string;
    external?: boolean;
  };
  locale?: string;
  hideFigcaption?: boolean;
  hasLinkedVideo?: boolean;
  hideIconsAndAuthors?: boolean;
}

const Figure = ({ children, type = 'full', resizeIframe, ...rest }: Props) => {
  const typeClass = type === 'full-column' ? 'c-figure--full-column' : `u-float-${type}`;
  const right = ['small-right', 'xsmall-right'].includes(type);
  return (
    <figure data-sizetype={type} {...classes('', { resize: !!resizeIframe, right }, typeClass)} {...rest}>
      {isFunction(children) ? children({ typeClass }) : children}
    </figure>
  );
};

const isFunction = (children: Function | ReactNode): children is Function => {
  return isFunctionHelper(children);
};

export type FigureType =
  | 'full'
  | 'full-column'
  | 'left'
  | 'small-left'
  | 'right'
  | 'small-right'
  | 'xsmall-right'
  | 'xsmall-left';

interface Props {
  id?: string;
  children: ReactNode | ((params: { typeClass: string }) => ReactNode);
  type?: FigureType;
  resizeIframe?: boolean;
  noFigcaption?: boolean;
}

export default Figure;
