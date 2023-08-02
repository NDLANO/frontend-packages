/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B This component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import { uuid } from '@ndla/util';
import { LicenseDescription } from '@ndla/notion';
import { FigureLicense } from './Figure';
import { Contributor } from '../types';

export const classLicenses = new BEMHelper({
  name: 'figure-license',
  prefix: 'c-',
});

interface FigureLicenseCtaProps {
  children?: ReactNode;
  origin?: string;
  authors?: Contributor[];
  messages: {
    source: string;
    title: string;
  };
  title?: string;
}

export const FigureLicenseCta = ({ children, messages, authors, origin, title }: FigureLicenseCtaProps) => (
  <div {...classLicenses('cta-wrapper')}>
    <ul {...classLicenses('list')}>
      {title && <li {...classLicenses('item')}>{`${messages.title}: ${title}`}</li>}
      {authors?.map((author) => (
        <li key={uuid()} {...classLicenses('item')}>{`${author.type}: ${author.name}`}</li>
      ))}
      {origin && (
        <li {...classLicenses('item')}>
          {messages.source}:{' '}
          {origin.startsWith('http') ? (
            <a href={origin} target="_blank" rel="noopener noreferrer">
              {origin}
            </a>
          ) : (
            origin
          )}
        </li>
      )}
    </ul>
    <div {...classLicenses('cta-block')}>{children}</div>
  </div>
);

interface Props {
  messages: {
    modelPremission?: string;
    learnAboutLicenses: string;
  };
  license: FigureLicense;
  locale: string;
}

export const FigureLicenseByline = ({ messages, license, locale }: Props) => (
  <>
    <LicenseDescription key="byline" highlightCC locale={locale} messages={messages} licenseRights={license.rights} />
    <a key="link" {...classLicenses('link')} target="_blank" rel="noopener noreferrer" href={license.url}>
      {license.linkText}
    </a>
  </>
);
