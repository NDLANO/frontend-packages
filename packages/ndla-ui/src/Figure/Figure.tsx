/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These components is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import { isFunction as isFunctionHelper, parseMarkdown } from '@ndla/util';
import { Link as LinkIcon } from '@ndla/icons/common';
import { LicenseByline } from '@ndla/notion';
import SafeLink from '@ndla/safelink';
import { ButtonV2 } from '@ndla/button';
import { isMobile } from 'react-device-detect';
const classes = new BEMHelper({
  name: 'figure',
  prefix: 'c-',
});

export const FigureCaption = ({
  figureId,
  id,
  modalButton,
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
  linkedVideoMessages,
  linkedVideoButton,
  className,
}: FigureCaptionProps) => {
  return (
    <figcaption {...classes('caption', hideFigcaption && !isMobile ? 'hidden-caption' : undefined, className)}>
      {caption ? <div {...classes('info')}>{parseMarkdown(caption)}</div> : null}
      <footer {...classes('byline')}>
        <div {...classes('byline-licenselist')}>
          <LicenseByline licenseRights={hideIconsAndAuthors ? [] : licenseRights} locale={locale} marginRight>
            <div {...classes('byline-author-buttons', hideIconsAndAuthors ? 'no-siblings' : undefined)}>
              {!hideIconsAndAuthors && (
                <span {...classes('byline-authors')}>{authors?.map((author) => author.name).join(', ')}</span>
              )}
              <div>
                {modalButton ? (
                  modalButton
                ) : (
                  <ButtonV2
                    shape="pill"
                    variant="outline"
                    size="small"
                    data-dialog-trigger-id={id}
                    data-dialog-source-id={figureId}
                  >
                    {reuseLabel}
                  </ButtonV2>
                )}
                {hasLinkedVideo &&
                  (linkedVideoButton ? (
                    linkedVideoButton
                  ) : (
                    <ButtonV2 shape="pill" variant="outline" size="small" {...classes('toggleAlternativeVideo')}>
                      <span className="original">{linkedVideoMessages?.alternative}</span>
                      <span className="alternative hidden">{linkedVideoMessages?.original}</span>
                    </ButtonV2>
                  ))}
              </div>
              {children}
            </div>
          </LicenseByline>

          {link && (
            <div {...classes('link-wrapper')}>
              <SafeLink
                to={link.url}
                {...classes('link')}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <span {...classes('link-text')}>{link.text}</span>
                <LinkIcon />
              </SafeLink>
              {link.description && <p {...classes('link-description')}>{link.description}</p>}
            </div>
          )}
        </div>
      </footer>
    </figcaption>
  );
};

interface FigureCaptionProps {
  className?: string;
  figureId: string;
  id?: string;
  caption?: string;
  reuseLabel?: string;
  licenseRights: string[];
  children?: ReactNode;
  modalButton?: ReactNode;
  linkedVideoButton?: ReactNode;
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
  linkedVideoMessages?: {
    original: string;
    alternative: string;
  };
}

const Figure = ({ children, type = 'full', resizeIframe, className, ...rest }: Props) => {
  const typeClass = type === 'full-column' ? 'c-figure--full-column' : `u-float-${type}`;
  const right = ['small-right', 'xsmall-right'].includes(type);
  return (
    <figure
      data-sizetype={type}
      {...classes('', { resize: !!resizeIframe, right }, `${typeClass} ${className ?? ''}`)}
      {...rest}
    >
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
  className?: string;
}

export default Figure;
