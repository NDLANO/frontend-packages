/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Trans } from 'ndla-i18n';

import { Portrait, SafeLink } from 'ndla-ui';

const classes = new BEMHelper({
  name: 'article-author-popup',
  prefix: 'c-',
});

const ArticleAuthorContent = ({ showAuthor, authors, onSelectAuthor }) => {
  console.log(authors[0], 'has licenses?');
  if (
    (showAuthor === null || showAuthor === undefined) &&
    authors.length !== 1
  ) {
    // Render author list
    return (
      <Trans>
        {({ t }) => (
          <div>
            <h1>{t('article.multipleAuthorsLabel')}</h1>
            <hr />
            <p>{t('article.multipleAuthorsExplanation')}</p>
            <ul {...classes('ul-list')}>
              {authors.map((author, index) => (
                <li key={author.name}>
                  {author.role && <span>{author.role}:</span>}
                  <span>
                    {author.phone ||
                    author.email ||
                    author.introduction ||
                    author.title ? (
                      <button
                        type="button"
                        className="c-button--link"
                        onClick={() => {
                          onSelectAuthor(index);
                        }}>
                        {author.name}
                      </button>
                    ) : (
                      author.name
                    )}
                  </span>
                  {author.licenses && (
                    <span {...classes('', 'author-licenses')}>
                      {author.licenses}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Trans>
    );
  }
  // Show author
  const {
    image,
    name,
    shortName,
    title,
    role,
    phone,
    email,
    introduction,
    urlContributions,
    urlAuthor,
  } = authors[showAuthor !== null && showAuthor !== undefined ? showAuthor : 0];

  return (
    <Trans>
      {({ t }) => (
        <div {...classes()}>
          <div {...classes('author-info')}>
            {image && (
              <Portrait src={image} alt={name} {...classes('portrait')} />
            )}
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
                  <SafeLink
                    className="c-button c-button--outline"
                    to={urlContributions}>
                    {t('article.urlContributionsLabel', { name: shortName })}
                  </SafeLink>
                )}
                {urlAuthor && (
                  <SafeLink to={urlAuthor}>
                    {t('article.urlAuthorLabel', { name: shortName })}
                  </SafeLink>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </Trans>
  );
};

ArticleAuthorContent.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      shortName: PropTypes.string.isRequired,
      title: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string,
      introduction: PropTypes.string,
      role: PropTypes.string,
      urlContributions: PropTypes.string,
      urlAuthor: PropTypes.string,
      licenses: PropTypes.string,
    }),
  ).isRequired,
  showAuthor: PropTypes.number,
  onSelectAuthor: PropTypes.func.isRequired,
};

ArticleAuthorContent.defaultProps = {
  showAuthor: null,
};

export default ArticleAuthorContent;
