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
import format from 'date-fns/format';
import {
  OneColumn,
  Article,
  ResourcesWrapper,
  ResourcesTopicTitle,
  TopicIntroductionList,
} from '@ndla/ui';
import Button from '@ndla/button';
import Resources from '../molecules/resources';
import { fetchArticle } from './articleApi';
import LicenseBox from './LicenseBox';
import SimpleSubmitForm from './SimpleSubmitForm';
import { topicList, topicListFilm } from '../../dummydata/index';
import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import NdlaFilmArticleHero from './NdlaFilmArticleHero';

const ResourcesSubTopics = ({
  showAdditionalCores,
  toggleAdditionalCores,
  ndlaFilm,
}) => (
  <ResourcesWrapper
    header={
      <ResourcesTopicTitle
        messages={{
          label: 'Emner',
          additionalFilterLabel: 'Tilleggsemner',
          dialogTooltip: 'Hva er kjernestoff og tilleggsstoff?',
          dialogHeading: 'Kjernestoff og tilleggsstoff',
          dialogTexts: [
            'Når du lærer deg kjernestoffet skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
            'Tilleggsstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
          ],
        }}
        title="Medieproduksjon"
        hasAdditionalResources={topicList.some(topic => topic.additional)}
        toggleAdditionalResources={toggleAdditionalCores}
        showAdditionalResources={showAdditionalCores}
      />
    }>
    <TopicIntroductionList
      toTopic={() => '#'}
      topics={ndlaFilm ? topicListFilm : topicList}
      toggleAdditionalCores={toggleAdditionalCores}
      showAdditionalCores={showAdditionalCores}
      messages={{
        shortcutButtonText: 'Lærestoff',
      }}
    />
  </ResourcesWrapper>
);

ResourcesSubTopics.propTypes = {
  showAdditionalCores: PropTypes.bool,
  toggleAdditionalCores: PropTypes.func,
  ndlaFilm: PropTypes.bool,
};

class ArticleLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdditionalCores: false,
      article: undefined,
    };
    this.toggleAdditionalCores = this.toggleAdditionalCores.bind(this);
  }

  componentDidMount() {
    const { articleId } = this.props;
    if (articleId) {
      this.handleSubmit(articleId);
    }
  }

  handleSubmit = async articleId => {
    const { useFFServer } = this.props;
    try {
      const article = await fetchArticle(articleId, useFFServer);
      this.setState({
        article: {
          ...article,
          published: format(article.published, 'DD.MM.YYYY'),
        },
        message: '',
      });
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
      this.setState({
        message: error.message,
      });
    }
  };

  toggleAdditionalCores = () => {
    this.setState(prevState => ({
      showAdditionalCores: !prevState.showAdditionalCores,
    }));
  };

  render() {
    const { article, message } = this.state;
    const {
      reset,
      closeButton,
      icon,
      label,
      articleChildrenBeforeResources,
      hideResources,
      showSubTopics,
      ndlaFilm,
      withBackgroundImage,
      hideForm,
      id,
      hideCompetenceGoals,
      isFFServer,
    } = this.props;
    const scripts =
      article && article.requiredLibraries
        ? article.requiredLibraries.map(lib => ({
            src: lib.url,
            type: lib.mediaType,
          }))
        : [];

    const articleChildren = [];

    if (articleChildrenBeforeResources) {
      articleChildren.push(articleChildrenBeforeResources);
    }

    if (showSubTopics) {
      articleChildren.push(
        <ResourcesSubTopics
          key="subTopic"
          toggleAdditionalCores={this.toggleAdditionalCores}
          showAdditionalCores={this.state.showAdditionalCores}
          ndlaFilm={ndlaFilm}
        />,
      );
    }

    if (!hideResources) {
      articleChildren.push(<Resources key="resources" />);
    }

    if (article && article.status) {
      return (
        <OneColumn>
          <h1>Error fetching article..</h1>
        </OneColumn>
      );
    }

    return (
      <>
        {ndlaFilm && (
          <NdlaFilmArticleHero
            article={article}
            withBackgroundImage={withBackgroundImage}
            isFFServer={isFFServer}
          />
        )}
        <div>
          <Helmet script={scripts} />
          {article && (
            <OneColumn noPadding={reset}>
              <Article
                id={id}
                icon={icon}
                article={article}
                modifier={reset ? 'clean' : ''}
                messages={{
                  edition: 'Utgave',
                  publisher: 'Utgiver',
                  authorLabel: 'Opphaver',
                  authorDescription:
                    'Denne artikkelen er laget av flere opphavere',
                  close: 'Lukk',
                  label,
                }}
                licenseBox={<LicenseBox />}
                competenceGoals={
                  !hideCompetenceGoals ? <CompetenceGoalListExample /> : null
                }>
                {articleChildren}
              </Article>
            </OneColumn>
          )}
          {!article && !hideForm && (
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
      </>
    );
  }
}

ArticleLoader.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  hideResources: PropTypes.bool,
  showSubTopics: PropTypes.bool,
  articleChildrenBeforeResources: PropTypes.node,
  hideForm: PropTypes.bool,
  articleId: PropTypes.string,
  closeButton: PropTypes.bool,
  reset: PropTypes.bool,
  ndlaFilm: PropTypes.bool,
  useFFServer: PropTypes.bool,
  hideCompetenceGoals: PropTypes.bool,
  isFFServer: PropTypes.bool,
};

ArticleLoader.defaultProps = {
  icon: null,
  label: null,
  articleChildrenBeforeResources: null,
};

export default ArticleLoader;
