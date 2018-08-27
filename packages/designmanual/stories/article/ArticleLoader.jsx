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
import moment from 'moment';
import {
  OneColumn,
  Article,
  Button,
  ResourcesWrapper,
  ResourcesTitle,
  TopicIntroductionList,
} from 'ndla-ui';
import Resources from '../molecules/resources';
import { fetchArticle } from './articleApi';
import LicenseBox from './LicenseBox';
import SimpleSubmitForm from './SimpleSubmitForm';
import { topicList } from '../../dummydata/index';

import { CompetenceGoalsDialogExample } from '../organisms/CompetenceGoalsExample';

const ResourcesSubTopics = () => (
  <ResourcesWrapper>
    <ResourcesTitle>Emner</ResourcesTitle>
    <TopicIntroductionList
      shortcutAlwaysExpanded
      toTopic={() => '#'}
      topics={topicList}
      messages={{
        shortcutButtonText: 'Lærestoff',
      }}
    />
  </ResourcesWrapper>
);

class ArticleLoader extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      article: undefined,
    };
  }

  componentDidMount() {
    const { articleId } = this.props;
    if (articleId) {
      this.handleSubmit(articleId);
    }
  }

  handleSubmit(articleId) {
    fetchArticle(articleId)
      .then(data => {
        const article = data;
        article.updated = moment(article.updated).format('DD/MM/YYYY');
        this.setState({
          article,
          message: '',
        });
      })
      .catch(error => {
        console.error(error); // eslint-disable-line no-console
        this.setState({
          message: error.message,
        });
      });
  }

  render() {
    const { article, message } = this.state;
    const {
      reset,
      closeButton,
      icon,
      label,
      hideResources,
      showSubTopics,
    } = this.props;
    const scripts =
      article && article.requiredLibraries
        ? article.requiredLibraries.map(lib => ({
            src: lib.url,
            type: lib.mediaType,
          }))
        : [];

    const articleChildren = [];

    if (showSubTopics) {
      articleChildren.push(<ResourcesSubTopics key="subTopic" />);
    }

    if (!hideResources) {
      articleChildren.push(<Resources key="resources" />);
    }

    return (
      <div>
        <Helmet script={scripts} />
        {article ? (
          <OneColumn>
            <Article
              icon={icon}
              article={article}
              modifier={reset ? 'clean' : ''}
              messages={{
                lastUpdated: 'Sist oppdatert',
                edition: 'Utgave',
                publisher: 'Utgiver',
                authorLabel: 'Opphavsmann',
                authorDescription:
                  'Denne artikkelen er laget av flere opphavsmenn',
                close: 'Lukk',
                label,
              }}
              licenseBox={
                <LicenseBox headingId="article-license-box-heading-id" />
              }
              competenceGoals={
                <CompetenceGoalsDialogExample
                  headingId="article-competence-goals-heading-id"
                  wide
                />
              }
              competenceGoalsNarrow={
                <CompetenceGoalsDialogExample
                  headingId="article-competence-goals-narrow-heading-id"
                  narrow
                />
              }>
              {articleChildren}
            </Article>
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
  icon: PropTypes.node,
  label: PropTypes.string,
  hideResources: PropTypes.bool,
  showSubTopics: PropTypes.bool,
  articleId: PropTypes.string,
  closeButton: PropTypes.bool,
  reset: PropTypes.bool,
};

ArticleLoader.defaultProps = {
  icon: null,
  label: null,
};

export default ArticleLoader;
