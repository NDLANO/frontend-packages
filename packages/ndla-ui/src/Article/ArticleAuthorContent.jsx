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

import { Portrait, SafeLink } from 'ndla-ui';

const classes = new BEMHelper({
  name: 'article-author-popup',
  prefix: 'c-',
});

const ArticleAuthorContent = ({
  showAuthor,
  authors,
  messages: { authorLabel, authorDescription },
  onSelectAuthor,
  labelledBy,
}) => {
  if (
    (showAuthor === null || showAuthor === undefined) &&
    authors.length !== 1
  ) {
    // Render author list
    return (
      <div {...classes()}>
        <h1 {...classes('heading')} id={labelledBy}>
          {authorLabel}
        </h1>
        <p>{authorDescription}</p>
        <hr />
        <ul {...classes('ul-list')}>
          {authors.map((author, index) => (
            <li key={author.name}>
              <span>{author.role}:</span>
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
    urlContributionsLabel,
    urlAuthor,
    urlAuthorLabel,
  } = authors[showAuthor !== null && showAuthor !== undefined ? showAuthor : 0];

  return (
    <div {...classes()}>
      <div {...classes('author-info')}>
        {image && <Portrait src={image} alt={name} {...classes('portrait')} />}
        <section>
          <h1 {...classes('heading')} id={labelledBy}>
            {name}
          </h1>
          {title && <p>{`${title}${title ? ' / ' : ''}${role}`}</p>}
          {phone && <p>{phone}</p>}
          {email && <SafeLink to={`mailto:${email}`}>{email}</SafeLink>}
          {introduction && <p {...classes('', 'ingress')}>{introduction}</p>}
        </section>
      </div>
      <div {...classes('author-link-container')}>
        {urlContributions && (
          <SafeLink
            className="c-button c-button--outline"
            to={urlContributions}>
            {urlContributionsLabel}
          </SafeLink>
        )}
        {urlAuthor && <SafeLink to={urlAuthor}>{urlAuthorLabel}</SafeLink>}
      </div>
    </div>
  );
};

ArticleAuthorContent.propTypes = {
  labelledBy: PropTypes.string.isRequired,
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
