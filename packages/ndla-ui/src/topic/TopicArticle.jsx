/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { presets } from 'react-motion';
import { Collapse } from 'react-collapse';
import Icon from '../icons/Icon';

import Article from '../article/Article';
import Button from '../button/Button';
import ArticleFootNotes from '../article/ArticleFootNotes';
import ArticleContent from '../article/ArticleContent';
import { ArticleShape } from '../shapes';


class TopicArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }


  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { article, openTitle, closeTitle, notitle } = this.props;
    const { isOpen } = this.state;
    return (
      <section>
        { notitle ? null : <h1>{article.title}</h1> }
        <Article.Introduction introduction={article.introduction} />
        <Collapse className={isOpen ? 'c-article-collapse c-article-collapse--open' : 'c-article-collapse'} isOpened={isOpen} springConfig={presets.wobble} >
          {/* Since react-collapse remounts the component on hide and show article-scripts needs to be initialized
            on mounth in a sub component */}
          <ArticleContent style={{ overflow: 'hidden' }} content={article.content} />
        </Collapse>
        { article.footNotes && isOpen ? <ArticleFootNotes footNotes={article.footNotes} /> : null }
        <div className={isOpen ? 'c-topic-article__btnwrapper c-topic-article__btnwrapper--open' : 'c-topic-article__btnwrapper'} >
          <Button className="c-topic-article_toggle-button" onClick={this.toggleOpen} outline>{ isOpen ? closeTitle : openTitle }
            <Icon.ArrowDown className={isOpen ? 'icon icon--rotate' : 'icon'} />
          </Button>
        </div>
      </section>
    );
  }
}


TopicArticle.propTypes = {
  article: ArticleShape.isRequired,
  openTitle: PropTypes.node.isRequired,
  closeTitle: PropTypes.node.isRequired,
  notitle: PropTypes.bool,
};

export default TopicArticle;
