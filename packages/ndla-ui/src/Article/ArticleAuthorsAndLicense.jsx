import React, { Fragment } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { User } from 'ndla-icons/common';
import SafeLink from '../common/SafeLink';

const classes = new BEMHelper('c-article-authors-and-license');

const ArticleAuthorsAndLicense = ({ authors, license, singleLine }) => (
  <div {...classes()}>
    <span {...classes('icon')}>
      <User />
    </span>
    <span {...classes('authors')}>
      {authors &&
        authors.map((author, index) => {
          let element = null;
          const postfix = index !== authors.length - 1 ? ', ' : null;

          if (author.url) {
            element = <SafeLink to={author.url}>{author.name}</SafeLink>;
          } else {
            element = author.name;
          }

          return (
            <Fragment key={author.name}>
              {element}
              {postfix}
            </Fragment>
          );
        })}
      {'. '}
      {!singleLine && <br />}
      ({license.abbreviation})
    </span>
  </div>
);

ArticleAuthorsAndLicense.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),
  ).isRequired,
  license: PropTypes.shape({
    abbreviation: PropTypes.string.isRequired,
  }).isRequired,
  singleLine: PropTypes.bool,
};

ArticleAuthorsAndLicense.defaultProps = {
  singleLine: false,
};

export default ArticleAuthorsAndLicense;
