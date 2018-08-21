/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Time, User, Additional } from 'ndla-icons/common';
import ClickToggle from '../common/ClickToggle';
import ArticleAuthorContent from './ArticleAuthorContent';

const classes = new BEMHelper({
  name: 'article-byline',
  prefix: 'c-',
});

class ArticleByline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuthor: null,
      showAuthors: false,
    };
    this.onSelectAuthor = this.onSelectAuthor.bind(this);
  }

  onSelectAuthor(showAuthor = null) {
    this.setState({
      showAuthor,
    });
  }

  render() {
    const {
      authors,
      license,
      licenseBox,
      messages,
      updated,
      additional,
      id,
    } = this.props;

    const { showAuthor, showAuthors } = this.state;
    const authorLabelledBy = `author-labelled-by_${id}`;

    const authorsLinkable =
      messages.authorLabel &&
      messages.authorDescription &&
      !authors.some(author => !author.title || !author.role);

    return (
      <div {...classes()}>
        {authors.length && (
          <span {...classes('flex')}>
            <span {...classes('icon')}>
              <User />
            </span>
            <span {...classes('authors')}>
              {authorsLinkable ? (
                <ClickToggle
                  id={`dialog-authors-${id}`}
                  labelledby={authorLabelledBy}
                  isOpen={showAuthors}
                  renderAsLink
                  buttonClassName={classes('toggle-authors').className}
                  onToggle={showAuthorsDialog => {
                    this.setState({
                      showAuthors: showAuthorsDialog,
                      showAuthor: null,
                    });
                  }}
                  title={
                    authors.length === 1
                      ? authors[0].name
                      : messages.authorLabel
                  }>
                  <ArticleAuthorContent
                    messages={messages}
                    showAuthor={showAuthor}
                    authors={authors}
                    onSelectAuthor={this.onSelectAuthor}
                    labelledBy={authorLabelledBy}
                  />
                </ClickToggle>
              ) : (
                `${authors.map(author => author.name).join(', ')} `
              )}
              ({license})
            </span>
          </span>
        )}
        <span {...classes('flex')}>
          <span {...classes('icon')}>
            <Time />
          </span>
          <span {...classes('date')}>
            {messages.lastUpdated} {updated}
          </span>
        </span>
        {additional && (
          <span {...classes('flex')}>
            <span {...classes('additional')}>
              <Additional
                key="additional"
                className="c-icon--20 u-margin-right-tiny"
              />
              {messages.additionalLabel}
            </span>
          </span>
        )}
        {licenseBox && (
          <span {...classes('flex')}>
            <ClickToggle
              id="useArticleId"
              labelledby={licenseBox.headingId}
              renderAsLink
              buttonClassName={classes('toggle-use-article').className}
              dialogModifier="medium"
              title={messages.useContent}
              openTitle={messages.closeLabel}>
              {licenseBox}
            </ClickToggle>
          </span>
        )}
      </div>
    );
  }
}

ArticleByline.propTypes = {
  id: PropTypes.string,
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
      urlContributionsLabel: (props, propName, componentName) => {
        if (typeof props[propName] !== 'string' && props.urlContributions) {
          return new Error(
            `Invalid prop props.messages.urlContributionsLabel supplied to ${componentName}. Required as label for props.messages.urlContributions`,
          );
        }
        return null;
      },
      urlAuthor: PropTypes.string,
      urlAuthorLabel: (props, propName, componentName) => {
        if (typeof props[propName] !== 'string' && props.urlAuthor) {
          return new Error(
            `Invalid prop props.messages.urlAuthorLabel supplied to ${componentName}. Required as label for props.messages.urlAuthor`,
          );
        }
        return null;
      },
    }),
  ),
  updated: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  licenseBox: PropTypes.node,
  messages: PropTypes.shape({
    lastUpdated: PropTypes.string.isRequired,
    authorLabel: PropTypes.string,
    authorDescription: PropTypes.string,
    additionalLabel: PropTypes.string,
    useContent: PropTypes.string.isRequired,
    closeLabel: PropTypes.string.isRequired,
  }).isRequired,
  additional: PropTypes.bool,
};

ArticleByline.defaultProps = {
  id: 'article-line-id',
  additional: false,
};

export default ArticleByline;
