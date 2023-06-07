/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import format from 'date-fns/format';
import { OneColumn, Article, ResourcesWrapper, ResourcesTopicTitle } from '@ndla/ui';
import { ButtonV2 } from '@ndla/button';
import Resources from '../molecules/resources';
import { fetchArticle } from './articleApi';
import LicenseBox from './LicenseBox';
import SimpleSubmitForm from './SimpleSubmitForm';
import { topicList } from '../../dummydata/index';
import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import NdlaFilmArticleHero from './NdlaFilmArticleHero';

const ResourcesSubTopics = ({ showAdditionalCores, toggleAdditionalCores }) => (
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
        hasAdditionalResources={topicList.some((topic) => topic.additional)}
        toggleAdditionalResources={toggleAdditionalCores}
        showAdditionalResources={showAdditionalCores}
      />
    }
    id="resourcesListId"
  ></ResourcesWrapper>
);

ResourcesSubTopics.propTypes = {
  showAdditionalCores: PropTypes.bool,
  toggleAdditionalCores: PropTypes.func,
  ndlaFilm: PropTypes.bool,
  onArticleLoaded: PropTypes.func,
};

class ArticleLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdditionalCores: false,
      article: undefined,
    };
    this.resourcesRef = createRef();
    this.toggleAdditionalCores = this.toggleAdditionalCores.bind(this);
  }

  componentDidMount() {
    const { articleId } = this.props;
    if (articleId) {
      this.handleSubmit(articleId);
    }
  }

  handleSubmit = async (articleId) => {
    const { onArticleLoaded } = this.props;
    try {
      const article = await fetchArticle(articleId);
      this.setState({
        article: {
          ...article,
          published: format(article.published, 'DD.MM.YYYY'),
        },
        message: '',
      });
      if (onArticleLoaded) {
        onArticleLoaded(article, this.resourcesRef);
      }
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
      this.setState({
        message: error.message,
      });
    }
  };

  toggleAdditionalCores = () => {
    this.setState((prevState) => ({
      showAdditionalCores: !prevState.showAdditionalCores,
    }));
  };

  render() {
    const { article, message } = this.state;
    const {
      reset,
      articleModifier,
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
      showOutdatedWarning,
    } = this.props;
    const scripts =
      article && article.requiredLibraries
        ? article.requiredLibraries.map((lib) => ({
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
      articleChildren.push(
        <div key="resources" ref={this.resourcesRef}>
          <Resources />
        </div>,
      );
    }

    if (article && article.status) {
      return (
        <OneColumn>
          <h1>Error fetching article..</h1>
        </OneColumn>
      );
    }

    const messages = {
      label,
      messageBox: showOutdatedWarning ? 'Artikkelen er foreldet.' : undefined,
    };

    return (
      <>
        {ndlaFilm && <NdlaFilmArticleHero article={article} withBackgroundImage={withBackgroundImage} />}
        {article && (
          <div>
            <Helmet script={scripts} />
            <OneColumn noPadding={reset}>
              <Article
                id={id}
                icon={icon}
                article={article}
                modifier={articleModifier}
                messages={messages}
                licenseBox={<LicenseBox />}
                competenceGoals={!hideCompetenceGoals ? () => <CompetenceGoalListExample /> : null}
              >
                {articleChildren}
              </Article>
            </OneColumn>

            {!article && !hideForm && (
              <SimpleSubmitForm onSubmit={this.handleSubmit} errorMessage={message} labelText="Artikkel ID:" />
            )}
            {article && closeButton ? (
              <ButtonV2 onClick={() => this.setState({ article: undefined })}>Lukk</ButtonV2>
            ) : null}
          </div>
        )}
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
  articleModifier: PropTypes.string,
  ndlaFilm: PropTypes.bool,
  hideCompetenceGoals: PropTypes.bool,
  showOutdatedWarning: PropTypes.bool,
};

ArticleLoader.defaultProps = {
  icon: null,
  label: null,
  articleChildrenBeforeResources: null,
};

export default ArticleLoader;
