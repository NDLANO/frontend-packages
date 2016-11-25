/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, PropTypes } from 'react';
import { fetchArticle } from './articleApi';
import SimpleSubmitForm from './SimpleSubmitForm';
import ArticleExample from './ArticleExample';

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
      .then((article) => {
        this.setState({
          article,
          fetching: false,
          message: '',
        });
      }).catch((error) => {
        this.setState({
          message: error.message,
          fetching: false,
        });
      })
    ;
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        { article ? <button className="dm-close-button" onClick={() => this.setState({ article: undefined })}>X</button> : null}
        { article ? <ArticleExample article={article} /> : <SimpleSubmitForm onSubmit={this.handleSubmit} labelText="Article ID:" />}
      </div>
    );
  }
}

ArticleLoader.propTypes = {
  articleId: PropTypes.string,
};

export default ArticleLoader;
