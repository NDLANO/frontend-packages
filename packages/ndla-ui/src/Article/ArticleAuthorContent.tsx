/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { useTranslation } from 'react-i18next';
import Button from '@ndla/button';
import SafeLink from '@ndla/safelink';
import Portrait from '../Portrait';

const classes = new BEMHelper({
  name: 'article-author-popup',
  prefix: 'c-',
});

type Author = {
  image: string;
  name: string;
  shortName: string;
  role: string;
  phone: string;
  email: string;
  introduction: string;
  urlContributions: string;
  urlAuthor: string;
  title: string;
  licenses: string[];
};

type Props = {
  showAuthor: any;
  authors: Array<Author>;
  onSelectAuthor: (index: number) => void;
};

const ArticleAuthorContent = ({ showAuthor, authors, onSelectAuthor }: Props) => {
  const { t } = useTranslation();
  if ((showAuthor === null || showAuthor === undefined) && authors.length !== 1) {
    // Render author list
    return (
      <div>
        <h1>{t('article.multipleAuthorsLabel')}</h1>
        <hr />
        <ul {...classes('ul-list')}>
          {authors.map((author, index) => (
            <li key={author.name}>
              {author.role && <span>{author.role}:</span>}
              <span>
                {author.phone || author.email || author.introduction || author.title ? (
                  <Button
                    type="button"
                    appearance="link"
                    onClick={() => {
                      onSelectAuthor(index);
                    }}>
                    {author.name}
                  </Button>
                ) : (
                  author.name
                )}
              </span>
              {author.licenses && <span {...classes('', 'author-licenses')}>{author.licenses}</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  // Show author
  const { image, name, shortName, title, role, phone, email, introduction, urlContributions, urlAuthor } =
    authors[showAuthor !== null && showAuthor !== undefined ? showAuthor : 0];

  return (
    <div {...classes()}>
      <div {...classes('author-info')}>
        {image && <Portrait src={image} alt={name} />}
        <section>
          <h1>{name}</h1>
          <hr />
          <ul>
            {title && <li>{`${title}${title ? ' / ' : ''}${role}`}</li>}
            {phone && <li>{phone}</li>}
            {email && (
              <li>
                <SafeLink to={`mailto:${email}`}>{email}</SafeLink>
              </li>
            )}
          </ul>
          {introduction && <p>{introduction}</p>}
          <div {...classes('link-container')}>
            {urlContributions && (
              <SafeLink to={urlContributions}>{t('article.urlContributionsLabel', { name: shortName })}</SafeLink>
            )}
            {urlAuthor && <SafeLink to={urlAuthor}>{t('article.urlAuthorLabel', { name: shortName })}</SafeLink>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArticleAuthorContent;
