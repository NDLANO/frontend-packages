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
      authorsLinkable,
      license,
      licenseBox,
      messages,
      updated,
      additional,
      children,
      id,
    } = this.props;

    const { showAuthor, showAuthors } = this.state;
    const authorLabelledBy = `author-labelled-by_${id}`;

    return (
      <div {...classes()}>
        {authors.length && (
          <span {...classes('flex')}>
            <span {...classes('icon')}>
              <User />
            </span>
            <span {...classes('authors')}>
              {authorsLinkable ? <ClickToggle
                useDialog
                id={`dialog-authors-${id}`}
                labelledby={authorLabelledBy}
                isOpen={showAuthors}
                renderAsLink
                disablePortal
                buttonClassName={classes('toggle-authors').className}
                onToggle={(showAuthorsDialog) => {
                  this.setState({
                    showAuthors: showAuthorsDialog,
                    showAuthor: null,
                  });
                }}
                title={
                  authors.length === 1 ? authors[0].name : messages.authorLabel
                }>
                <ArticleAuthorContent
                  messages={messages}
                  showAuthor={showAuthor}
                  authors={authors}
                  onSelectAuthor={this.onSelectAuthor}
                  labelledBy={authorLabelledBy}
                />
              </ClickToggle> : `${authors.map(author => author.name).join(', ')}`}
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
              Tilleggsstoff
            </span>
          </span>
        )}
        <span {...classes('flex')}>
          {licenseBox && (
            <ClickToggle
              useDialog
              id="useArticleId"
              labelledby={licenseBox.headingId}
              renderAsLink
              buttonClassName={classes('toggle-use-article').className}
              dialogModifier="large"
              title="Bruk innhold"
              openTitle="Lukk boks">
              {licenseBox}
            </ClickToggle>
          )}
          {children}
        </span>
      </div>
    );
  }
};

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
      urlAuthor: PropTypes.string,
    }),
  ),
  authorsLinkable: PropTypes.bool,
  updated: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  licenseBox: PropTypes.node,
  messages: PropTypes.shape({
    lastUpdated: PropTypes.string.isRequired,
    authorLabel: PropTypes.string.isRequired,
    authorDescription: PropTypes.string.isRequired,
  }).isRequired,
  additional: PropTypes.node,
  children: PropTypes.node,
};

ArticleByline.defaultProps = {
  id: 'article-line-id',
  authorsLinkable: true,
};

export default ArticleByline;
