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
import { OneColumn, Article, NdlaFilmHero } from '@ndla/ui';
import Button from '@ndla/button';
import Breadcrumb from '../molecules/breadcrumbs';
import Resources from '../molecules/resources';
import Topics from '../molecules/topics';
import { fetchArticle } from './articleApi';
import LicenseBox from './LicenseBox';
import SimpleSubmitForm from './SimpleSubmitForm';
import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';

class ArticleLoaderNdlaFilm extends Component {
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
      withBackgroundImage,
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
      articleChildren.push(<Topics ndlaFilm />);
    }

    if (!hideResources) {
      articleChildren.push(<Resources key="resources" />);
    }

    const backgroundImage =
      article && article.metaImage && article.metaImage.url;

    return (
      <>
        <NdlaFilmHero hasImage={withBackgroundImage && backgroundImage}>
          {withBackgroundImage && backgroundImage && (
            <div className="c-hero__background">
              <img src={backgroundImage} alt={article.metaImage.alt} />
            </div>
          )}
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb />
              </section>
            </div>
          </OneColumn>
        </NdlaFilmHero>
        <div>
          <Helmet script={scripts} />
          {article ? (
            <OneColumn>
              <Article
                icon={icon}
                article={article}
                modifier={reset ? 'clean' : ''}
                messages={{
                  edition: 'Utgave',
                  publisher: 'Utgiver',
                  authorLabel: 'Opphavsmann',
                  authorDescription:
                    'Denne artikkelen er laget av flere opphavsmenn',
                  close: 'Lukk',
                  label,
                }}
                licenseBox={<LicenseBox />}
                competenceGoals={<CompetenceGoalListExample />}>
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
      </>
    );
  }
}

ArticleLoaderNdlaFilm.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  hideResources: PropTypes.bool,
  showSubTopics: PropTypes.bool,
  articleId: PropTypes.string,
  closeButton: PropTypes.bool,
  reset: PropTypes.bool,
  withBackgroundImage: PropTypes.bool,
};

ArticleLoaderNdlaFilm.defaultProps = {
  icon: null,
  label: null,
};

export default ArticleLoaderNdlaFilm;
