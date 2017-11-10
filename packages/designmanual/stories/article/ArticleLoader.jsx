/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { OneColumn, Article, Button } from 'ndla-ui';
import moment from 'moment';
import { fetchArticle } from './articleApi';
import LicenseExample from './LicenseExample';
import SimpleSubmitForm from './SimpleSubmitForm';

class ArticleLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { articleId } = this.props;
    if (articleId) {
      this.handleSubmit(articleId);
    }
  }

  handleSubmit(articleId) {
    this.setState({ fetching: true });
    fetchArticle(articleId)
      .then(data => {
        const article = data;
        article.updated = moment(article.updated).format('DD/MM/YYYY');
        this.setState({
          article,
          fetching: false,
          message: '',
        });
      })
      .catch(error => {
        console.error(error); // eslint-disable-line no-console
        this.setState({
          message: error.message,
          fetching: false,
        });
      });
  }

  render() {
    const { article, message } = this.state;
    const { reset, closeButton } = this.props;
    const scripts =
      article && article.requiredLibraries
        ? article.requiredLibraries.map(lib => ({
            src: lib.url,
            type: lib.mediaType,
          }))
        : [];
    return (
      <div>
        <Helmet script={scripts} />
        {article ? (
          <OneColumn>
            <Article
              article={article}
              modifier={reset ? 'clean' : ''}
              messages={{
                writtenBy: 'Skrevet av',
                lastUpdated: 'Sist oppdatert',
                edition: 'Utgave',
                publisher: 'Utgiver',
              }}
              licenseBox={<LicenseExample />}
            />
          </OneColumn>
        ) : (
          <SimpleSubmitForm
            onSubmit={this.handleSubmit}
            errorMessage={message}
            labelText="Artikkel ID:"
          />
        )}
        {article && closeButton ? (
          <Button onClick={() => this.setState({ article: undefined })}>
            Lukk
          </Button>
        ) : null}
      </div>
    );
  }
}

ArticleLoader.propTypes = {
  articleId: PropTypes.string,
  closeButton: PropTypes.bool,
  reset: PropTypes.bool,
};

export default ArticleLoader;
