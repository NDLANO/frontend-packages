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
  CourseObjectivesDialog,
  CourseObjectives,
} from 'ndla-ui';
import { Resources } from '../molecules/resources';
import { fetchArticle } from './articleApi';
import LicenseExample from './LicenseExample';
import SimpleSubmitForm from './SimpleSubmitForm';
import { topicList } from '../../dummydata/index';

const ResourcesSubTopics = () => (
  <ResourcesWrapper>
    <ResourcesTitle>Emner</ResourcesTitle>
    <TopicIntroductionList toTopic={() => '#'} topics={topicList} />
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
      courseObjectives,
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
                writtenBy: 'Skrevet av',
                lastUpdated: 'Sist oppdatert',
                edition: 'Utgave',
                publisher: 'Utgiver',
                label,
              }}
              licenseBox={<LicenseExample />}
              courseObjectives={
                <CourseObjectivesDialog
                  id="course-objectives-dialog"
                  messages={{
                    buttonText: 'Kompetansemål',
                    closeButtonText: 'Lukk',
                  }}>
                  {headingId => (
                    <CourseObjectives
                      headingId={headingId}
                      messages={{
                        heading: 'Kompetansemål og læreplan',
                        description:
                          'Mål for opplæring er at elevene skal kunne',
                      }}
                      topics={[
                        {
                          heading: 'Emne',
                          items: [
                            {
                              text:
                                'Planlegge, produsere og presentere tekst, lyd, stillbilder, levende bilder og kombinasjoner av disse i aktuelle formater og standarder til trykte og elektroniske medier',
                            },
                            {
                              text:
                                'bruke relevante metoder for kvalitetssikring av egen arbeidsprosess og eget produkt',
                            },
                            {
                              text:
                                'bruke tidsmessig verktøy, programvare og annet teknisk utstyr på en forsvarlig måte',
                            },
                          ],
                        },
                      ]}
                    />
                  )}
                </CourseObjectivesDialog>
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
  courseObjectives: PropTypes.node,
};

ArticleLoader.defaultProps = {
  icon: null,
  label: null,
};

export default ArticleLoader;
