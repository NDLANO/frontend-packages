/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import {
  initArticleScripts,
  removeEventListenerForResize,
  removeAsideClickListener,
} from 'ndla-article-scripts';

const Li = (props) => <li><strong>{props.children}</strong></li>

export default class TopicArticleContent extends Component {
  componentDidMount() {
    initArticleScripts();
  }

  componentWillUnmount() {
    removeEventListenerForResize();
    removeAsideClickListener();
  }

  render() {
    const { content, ...rest } = this.props;

    return (
      <div>
        {Parser(content, {
        replace: (node) => {
            if (node.name === 'p') {
              console.log(node.children[0].data)
              return <Li>{node.children[0].data}</Li>;
            }
        }
    })}
      </div>
    )
  }
}

TopicArticleContent.propTypes = {
  content: PropTypes.string.isRequired,
};

/*<div dangerouslySetInnerHTML={{ __html: content }} {...rest} />; */
