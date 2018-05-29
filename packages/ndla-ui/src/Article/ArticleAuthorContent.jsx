/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SafeLink from '../common/SafeLink';

const classes = new BEMHelper({
  name: 'article-author-popup',
  prefix: 'c-',
});

const ArticleAuthorContent = ({
  showAuthor,
  showLicenseBox,
  authors,
  messages,
  onSelectAuthor,
}) => {
  if ((showAuthor === null || showAuthor === undefined) && authors.length !== 1) {
    // Render author list
    return (
      <div {...classes('content')}>
        <h1 id="author-labelled-by">{messages.authorLabel}</h1>
        <p>{messages.authorDescription}</p>
        <hr />
        <ul {...classes('ul-list')}>
          {authors.map((author, index) => (
            <li key={author.name}>
              {author.role && <span>{author.role}:</span>}
              <span>
                <button
                  className="c-button--link"
                  onClick={() => {
                    onSelectAuthor(index);
                  }}>
                  {author.name}
                </button>
              </span>
              {author.licenses && <span>{author.licenses}</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  // Show author
  const {
    image,
    name,
    title,
    role,
    phone,
    email,
    introduction,
    urlContributions,
    urlAuthor,
  } = authors[showAuthor !== null && showAuthor !== undefined ? showAuthor : 0];
  const firstName =
    name.indexOf(' ') === -1 ? name : name.substr(0, name.indexOf(' '));

  return (
    <div {...classes('content')}>
      <div {...classes('author-info')}>
        {image && (
          <figure>
            <img src={image} alt={name} />
          </figure>
        )}
        <section>
          <h1 id="author-labelled-by">{name}</h1>
          {title && <p>{title}</p>}
          <ul {...classes('ul-list')}>
            {phone && (
              <li>
                <SafeLink to={`tel:${phone.replace(/\s/g, '')}`}>
                  {phone}
                </SafeLink>
              </li>
            )}
            {email && (
              <li>
                <SafeLink to={`mailto:${email}`}>{email}</SafeLink>
              </li>
            )}
          </ul>
          {introduction && (
            <div
              dangerouslySetInnerHTML={{ __html: introduction }}
              {...classes('author-ingress')}
            />
          )}
        </section>
      </div>
      <div {...classes('author-link-container')}>
        {urlContributions && <span>
          <a
            href={urlContributions}
            target="_blank"
            className="c-button c-button--outline">
            Se hva {firstName} har bidratt med
          </a>
        </span>}
        {urlAuthor && <span>
          <a href={urlAuthor} target="_blank" className="c-button--link">
            Les mer om {firstName}
          </a>
        </span>}
      </div>
    </div>
  );
};

ArticleAuthorContent.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
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
  messages: PropTypes.shape({
    authorLabel: PropTypes.string.isRequired,
    authorDescription: PropTypes.string.isRequired,
  }).isRequired,
  showAuthor: PropTypes.number,
  onSelectAuthor: PropTypes.func.isRequired,
};

ArticleAuthorContent.defaultProps = {
  showAuthor: null,
};

export default ArticleAuthorContent;
