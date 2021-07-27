import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@ndla/modal';
import Tooltip from '@ndla/tooltip';
import { InformationOutline } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { Wrapper, InModalHeader, Heading, Lead, ImageWrapper, IconButton, PushGrid } from './Styles';

import { stories } from './StaticInfoComponents';

const ModalContent = ({ pageId, onClose }) => {
  const useStory = stories[pageId] || {
    title: `Fant ingen veiledningstekster "${pageId}"`,
    lead: 'Sjekk key-names i @ndla-howto/src/StaticInfoComponents og propType pageId til <ArticleInModal />',
  };
  return (
    <Wrapper>
      <div>
        <InModalHeader>
          <InformationOutline style={{ position: 'absolute' }} />
          <Heading inModal>{useStory.title}</Heading>
          <IconButton type="button" onClick={onClose}>
            <Cross />
          </IconButton>
        </InModalHeader>
        {useStory.imageUrl && (
          <ImageWrapper>
            <img alt="Bilde eksempel" src={useStory.imageUrl} />
          </ImageWrapper>
        )}
        <Lead>{useStory.lead}</Lead>
      </div>
      {useStory.body && (
        <PushGrid>
          {useStory.body.map((block, index) => {
            if (block.type === 'text') {
              return <p key={`${pageId}-${index}`}>{block.content}</p>;
            }
            if (block.type === 'image') {
              return <img key={`${pageId}-${index}`} src={block.content} alt="example" />;
            }
            if (block.type === 'component') {
              return <block.content key={`${pageId}-${index}`} />;
            }
            if (block.type === 'link') {
              return (
                <a key={`${pageId}-${index}`} href={block.content.href} target="_blank" rel="noopener noreferrer">
                  {block.content.text}
                </a>
              );
            }
            return null;
          })}
        </PushGrid>
      )}
    </Wrapper>
  );
};

const ArticleInModal = ({ pageId, tooltip, activateButton }) => (
  <Modal
    size="medium"
    backgroundColor="white"
    wrapperFunctionForButton={tooltip ? btn => <Tooltip tooltip={tooltip}>{btn}</Tooltip> : null}
    activateButton={activateButton}>
    {onClose =>
      ModalContent({
        pageId,
        onClose,
      })
    }
  </Modal>
);

ArticleInModal.propTypes = {
  pageId: PropTypes.string.isRequired,
  activateButton: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
};

export default ArticleInModal;
