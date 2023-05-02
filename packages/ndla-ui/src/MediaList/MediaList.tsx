/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import {
  getLicenseByAbbreviation,
  getResourceTypeNamespace,
  isCreativeCommonsLicense,
  metaTypes,
} from '@ndla/licenses';
import { LicenseDescription } from '@ndla/notion';
import BEMHelper from 'react-bem-helper';
import { uuid } from '@ndla/util';

const oClasses = new BEMHelper({
  name: 'media',
  prefix: 'o-',
});

const cClasses = new BEMHelper({
  name: 'medialist',
  prefix: 'c-',
});

interface MediaListProps {
  children: ReactNode;
}

export const MediaList = ({ children }: MediaListProps) => <ul {...cClasses()}>{children}</ul>;

interface MediaListItemProps {
  children: ReactNode;
}
export const MediaListItem = ({ children }: MediaListItemProps) => (
  <li {...oClasses(undefined, undefined, cClasses('item').className)}>{children}</li>
);

interface MediaListItemImageProps {
  children: ReactNode;
}
export const MediaListItemImage = ({ children }: MediaListItemImageProps) => (
  <div {...oClasses('img', undefined, cClasses('img').className)}>
    <div>{children}</div>
  </div>
);

interface MediaListCCLinkProps {
  children: ReactNode;
  url: string;
}
export const MediaListCCLink = ({ children, url }: MediaListCCLinkProps) => (
  <a className="c-figure-license__link" target="_blank" rel="noopener noreferrer license" href={url}>
    {children}
  </a>
);

interface MediaListItemBodyProps {
  children: ReactNode;
  license: string;
  locale: string;
  resourceUrl?: string;
  resourceType?: 'video' | 'image' | 'audio' | 'text' | 'h5p' | 'podcast';
  messages?: {
    modelPremission?: string;
  };
  title?: string;
}

export const MediaListItemBody = ({
  children,
  license: licenseAbbreviation,
  messages,
  title,
  locale,
  resourceUrl = '', // defaults to current page
  resourceType,
}: MediaListItemBodyProps) => {
  const license = getLicenseByAbbreviation(licenseAbbreviation, locale);
  const containerProps = isCreativeCommonsLicense(license.rights)
    ? {
        ...oClasses('body', undefined, cClasses('body').className),
        'xmlns:cc': 'https://creativecommons.org/ns#',
        'xmlns:dct': 'http://purl.org/dc/terms/',
        about: resourceUrl,
      }
    : {
        ...oClasses('body', undefined, cClasses('body').className),
      };

  const metaResourceType = getResourceTypeNamespace(resourceType);

  return (
    <div {...containerProps}>
      {/* @ts-ignore */}
      {metaResourceType && <span rel="dct:type" href={metaResourceType} style={{ display: 'none' }} />}
      {title ? <h3 className="c-medialist__title">{title} </h3> : null}
      <LicenseDescription locale={locale} messages={messages} licenseRights={license.rights} highlightCC />
      <MediaListCCLink url={license.url}>{license.linkText}</MediaListCCLink>
      {children}
    </div>
  );
};

interface MediaListItemActionsProps {
  children: ReactNode;
}
export const MediaListItemActions = ({ children }: MediaListItemActionsProps) => (
  <div {...cClasses('actions')}>{children}</div>
);

const isLink = (text: string) => text.startsWith('http') || text.startsWith('https');

interface HandleLinkProps {
  text: string;
  children: ReactNode;
}

export const HandleLink = ({ text, children }: HandleLinkProps) => {
  if (isLink(text)) {
    return (
      <a href={text} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <span>{children}</span>;
};

const attributionTypes = [metaTypes.author, metaTypes.copyrightHolder, metaTypes.contributor];

interface MediaListItemMetaProps {
  items?: {
    label: string;
    description: string;
    metaType: string;
  }[];
}

export const MediaListItemMeta = ({ items = [] }: MediaListItemMetaProps) => {
  const attributionItems = items.filter((item) => attributionTypes.some((type) => type === item.metaType));
  const attributionMeta = attributionItems.map((item) => `${item.label}: ${item.description}`).join(', ');

  return (
    //@ts-ignore
    // eslint-disable-next-line react/no-unknown-property
    <ul {...cClasses('actions')} property="cc:attributionName" content={attributionMeta}>
      {items.map((item) => (
        <li key={uuid()} className="c-medialist__meta-item">
          {item.label}: <HandleLink text={item.description}>{item.description}</HandleLink>
        </li>
      ))}
    </ul>
  );
};
