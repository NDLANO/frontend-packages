import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '@ndla/modal';
import Tooltip from '@ndla/tooltip';
import { InformationOutline } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { Spinner } from '@ndla/editor';
import {
    Wrapper,
    InModalHeader,
    Heading,
    Lead,
    ImageWrapper,
    IconButton,
    PushGrid,
} from './Styles';
import FetchArticle from './FetchArticle';
import SearchBlock from './SearchBlock';
import { serializers, getArticleQuery } from './helpers';

const BlockContent = require('@sanity/block-content-to-react');

const ModalContent = ({ story, sanityConfig, sanityClient, pageId, onClose, notFound }) => {

  if (notFound) {
    return (
      <Wrapper>
        <div>
          <InModalHeader>
            <InformationOutline />
            <Heading>Not found..</Heading>
            <IconButton type="button" onClick={onClose}>
              <Cross />
            </IconButton>
          </InModalHeader>
        </div>
      </Wrapper>
    )
  }
  if (!story) {
    return (
      <Wrapper>
        <div>
          <InModalHeader>
            <InformationOutline />
            <Heading></Heading>
            <IconButton type="button" onClick={onClose}>
              <Cross />
            </IconButton>
          </InModalHeader>
          <Spinner />
        </div>
      </Wrapper>
    );
  }
  // Search block
  const Search = story.searchBlock && (
    <SearchBlock
      searchFor={story.searchBlock}
      search={story.searchBlock}
      sanityClient={sanityClient}
      sanityConfig={sanityConfig}
      currentPageId={pageId}
    />
  );
     
  return (
    <Wrapper>
      <div>
        <InModalHeader>
          <InformationOutline style={{ position: 'absolute'}} />
          <Heading inModal>{story.title}</Heading>
          <IconButton type="button" onClick={onClose}>
            <Cross />
          </IconButton>
        </InModalHeader>
        {story.imageUrl && (
          <ImageWrapper>
            <img alt="Bilde eksempel" src={story.imageUrl} />
          </ImageWrapper>
        )}
        <Lead>
          {story.lead}
        </Lead>
      </div>
      {story.reactComponent ?
        <FetchArticle
          useComponent={story.reactComponent.name}
          sanityClient={sanityClient}
          sanityConfig={sanityConfig}
          sanityContent={story.content && (
            <PushGrid>
              <BlockContent
                projectId={sanityConfig.projectId}
                dataset={sanityConfig.dataset}
                blocks={story.content}
                serializers={serializers}
              />
              {Search}
            </PushGrid>
          )}
        /> : 
        <PushGrid>
          <BlockContent
            projectId={sanityConfig.projectId}
            dataset={sanityConfig.dataset}
            blocks={story.content}
            serializers={serializers}
          />
          {Search}
        </PushGrid>
      }
      </Wrapper>
    );
}

class ArticleInModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loadArticle = this.loadArticle.bind(this);
  }

  loadArticle() {
      if (!this.state.loading && !this.state.story) {
        this.setState({
            loading: true,
        });
        const query = getArticleQuery(this.props.pageId);
        this.props.sanityClient.fetch(query).then(story => {
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
  }

  render() {
    const { story, notFound } = this.state;
    const { sanityClient, sanityConfig, pageId } = this.props;

    return (
        <Modal
            size="medium"
            backgroundColor="white"
            wrapperFunctionForButton={this.props.tooltip &&
            <Tooltip tooltip={this.props.tooltip}>
                {this.props.activateButton}
            </Tooltip>
            }
            activateButton={!this.props.tooltip && this.props.activateButton}
            onOpen={this.loadArticle}
        >
        {onClose => ModalContent({ pageId, story, notFound, sanityClient, sanityConfig, onClose })}
      </Modal>
    );
  }
};

ArticleInModal.propTypes = {
  pageId: PropTypes.string.isRequired,
  activateButton: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
  sanityClient: PropTypes.shape({}).isRequired,
  sanityConfig: PropTypes.shape({}).isRequired,
};

export default ArticleInModal;