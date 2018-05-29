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
import { Time, User } from 'ndla-icons/common';
import ClickToggle from '../common/ClickToggle';
import ArticleAuthorContent from './ArticleAuthorContent';
import SafeLink from '../common/SafeLink';

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
      showAuthor: showAuthor,
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
      dialogLabelledBy,
      children,
    } = this.props;

    const { showAuthor, showAuthors } = this.state;

    return (
      <div {...classes()}>
        {authors.length && (
          <span {...classes('flex')}>
            <span {...classes('icon')}>
              <User />
            </span>
            <span {...classes('authors')}>
              <ClickToggle
                useDialog
                id="authorsArticleId"
                labelledby="authorsArticleId_heading"
                isOpen={showAuthors}
                renderAsLink
                disablePortal
                buttonClassName={classes('toggle-authors').className}
                onToggle={showAuthors => {
                  this.setState({
                    showAuthors,
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
                />
              </ClickToggle>
              ({license.abbreviation})
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
            <span {...classes('additional')}>{additional}</span>
          </span>
        )}
        <span {...classes('flex')}>
          {licenseBox && (
            <ClickToggle
              useDialog
              id="useArticleId"
              labelledby="useArticleId_heading"
              renderAsLink
              buttonClassName={classes('toggle-use-article').className}
              dialogModifier={'large'}
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
}

ArticleByline.propTypes = {
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
  updated: PropTypes.string.isRequired,
  license: PropTypes.shape({
    rights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  licenseBox: PropTypes.node,
  messages: PropTypes.shape({
    lastUpdated: PropTypes.string.isRequired,
    authorLabel: PropTypes.string.isRequired,
    authorDescription: PropTypes.string.isRequired,
  }).isRequired,
  additional: PropTypes.node,
  children: PropTypes.node,
};

export default ArticleByline;
