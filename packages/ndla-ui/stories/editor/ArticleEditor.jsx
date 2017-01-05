/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { convertFromHTML } from 'draft-convert';
import { EditorState, convertToRaw } from 'draft-js';
import { fetchArticleFromApi } from '../article/articleApi';
import NDLAEditor from './NDLAEditor';

class ArticleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { article: undefined };
  }

  componentDidMount() {
    fetchArticleFromApi('86')
      .then((article) => {
        const initialState = convertFromHTML(article.content);
        console.info(convertToRaw(initialState)); //eslint-disable-line
        this.setState({
          initialState,
          article,
        });
      })
    ;
  }

  render() {
    const { initialState } = this.state;
    const editorState = initialState ? EditorState.createWithContent(initialState) : undefined;
    return editorState ? <NDLAEditor editorState={editorState} /> : null;
  }
}

ArticleEditor.propTypes = {
};

export default ArticleEditor;
