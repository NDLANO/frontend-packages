import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchArticle from './FetchArticle';
import SearchBlock from './SearchBlock';
import { serializers, getArticleQuery } from './helpers';
import {
  Wrapper,
  PushGrid,
  Heading,
  Lead,
  ImageWrapper,
  RichTextBlock,
} from './Styles';

const BlockContent = require('@sanity/block-content-to-react');

class SanityArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const oldPageId = prevState.pageId;
    const newPageId = nextProps.pageId;
    if (newPageId !== oldPageId) {
      return {
        pageId: newPageId,
      };
    }
    return null;
  }

  componentDidMount() {
    this.loadArticle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageId !== this.state.pageId) {
      this.loadArticle();
    }
  }

  loadArticle() {
    const query = getArticleQuery(this.state.pageId);
    this.props.sanityClient.fetch(query).then(story => {
      console.log('plain query', story);
      if (!story) {
        this.setState({
          notFound: true,
        });
      } else {
        this.setState({
          story,
          notFound: false,
        });
      }
    });
  }

  render() {
    const { story, notFound } = this.state;
    const { sanityClient, sanityConfig, inBeta } = this.props;
    if (notFound) {
      return <div>Not Found...</div>;
    }
    if (!story) {
      return null;
    }

    // Search block
    const Search = !inBeta && story.searchBlock && (
      <SearchBlock
        searchFor={story.searchBlock}
        search={story.searchBlock}
        sanityClient={sanityClient}
        sanityConfig={sanityConfig}
        currentPageId={this.state.pageId}
      />
    );
    return (
      <Wrapper>
        <div>
          <Heading>{story.title}</Heading>
          {story.imageUrl && (
            <ImageWrapper>
              <img alt="Bilde eksempel" src={story.imageUrl} />
            </ImageWrapper>
          )}
          <Lead>{story.lead}</Lead>
        </div>
        {!inBeta && story.reactComponent ? (
          <FetchArticle
            useComponent={story.reactComponent.name}
            sanityClient={sanityClient}
            sanityConfig={sanityConfig}
            sanityContent={
              story.content && (
                <PushGrid>
                  <RichTextBlock>
                    <BlockContent
                      projectId={sanityConfig.projectId}
                      dataset={sanityConfig.dataset}
                      blocks={story.content}
                      serializers={serializers}
                    />
                  </RichTextBlock>
                  {Search}
                </PushGrid>
              )
            }
          />
        ) : (
          <PushGrid>
            <RichTextBlock>
              <BlockContent
                projectId={sanityConfig.projectId}
                dataset={sanityConfig.dataset}
                blocks={story.content}
                serializers={serializers}
              />
            </RichTextBlock>
            {Search}
          </PushGrid>
        )}
      </Wrapper>
    );
  }
}

SanityArticle.propTypes = {
  pageId: PropTypes.string.isRequired,
  sanityClient: PropTypes.shape({}).isRequired,
  sanityConfig: PropTypes.shape({}).isRequired,
  inBeta: PropTypes.bool,
};

SanityArticle.defaultProps = {
  inBeta: true,
};

export default SanityArticle;
