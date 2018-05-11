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

import Dialog from '../Dialog';
import SafeLink from '../common/SafeLink';

const classes = new BEMHelper({
  name: 'article-author-popup',
  prefix: 'c-',
});

const dialogClasses = new BEMHelper({
  name: 'dialog',
  prefix: 'c-',
});

class ArticleAuthorsPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuthor: null,
      showLicenseBox: false,
      showDialog: false,
    };
  }
  componentWillUnmount() {
    this.setState({
      showAuthor: null,
      showLicenseBox: false,
    });
  }
  renderAuthors(authors, messages) {
    return (
      <div {...classes('content')}>
        <h1 id="author-labelled-by" {...classes('heading')}>
          {messages.authorLabel}
        </h1>
        <p>{messages.authorDescription}</p>
        <hr />
        <ul {...classes('ul-list')}>
          {authors.map((author, index) => (
            <li key={author.name}>
              <span>{author.role}:</span>
              <span>
                <a
                  role="button"
                  onClick={() => {
                    this.setState({ showAuthor: index });
                  }}>
                  {author.name}
                </a>
              </span>
              <span>{author.licenses}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  renderSingleAuthor(
    {
      name,
      email,
      phone,
      image,
      urlContributions,
      urlAuthor,
      title,
      introduction,
    },
    messages,
  ) {
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
            <h1 id="author-labelled-by" {...classes('heading')}>
              {name}
            </h1>
            {title && <p>{title}</p>}
            <ul {...classes('ul-list', 'large')}>
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
          <span>
            <button
              href={urlContributions}
              target="_blank"
              className="c-button c-button--outline">
              Se hva {firstName} har bidratt med
            </button>
          </span>
          <span>
            <button href={urlAuthor} target="_blank" className="c-button--link">
              Les mer om {firstName}
            </button>
          </span>
        </div>
      </div>
    );
  }
  render() {
    const { authors, messages, licenseBox } = this.props;
    const { showAuthor, showLicenseBox, showDialog } = this.state;
    const onlyOneAuthor = authors.length === 1;
    return (
      <Fragment>
        <a
          id="authors-authors-button"
          data-dialog-trigger-id="authors-authors-dialog"
          data-dialog-source-id="authors-authors-button"
          role="button"
          onClick={() => {
            this.setState({
              showAuthor: null,
              showLicenseBox: false,
              showDialog: true,
            });
          }}>
          {authors.length === 1 ? authors[0].name : messages.authorLabel}
        </a>
        <Dialog
          id="authors-authors-dialog"
          labelledby="author-labelled-by"
          messages={messages}>
          {showAuthor === null &&
            !onlyOneAuthor &&
            !showLicenseBox &&
            this.renderAuthors(authors, messages)}
          {(showAuthor !== null || onlyOneAuthor) &&
            this.renderSingleAuthor(
              authors[onlyOneAuthor ? 0 : showAuthor],
              messages,
            )}
        </Dialog>
      </Fragment>
    );
  }
}

ArticleAuthorsPopup.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string,
      introduction: PropTypes.string,
      role: PropTypes.string.isRequired,
      urlContributions: PropTypes.string.isRequired,
      urlAuthor: PropTypes.string.isRequired,
      licenses: PropTypes.string.isRequired,
    }),
  ).isRequired,
  licenseBox: PropTypes.node,
  messages: PropTypes.shape({
    lastUpdated: PropTypes.string.isRequired,
    authorLabel: PropTypes.string.isRequired,
    authorDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleAuthorsPopup;
