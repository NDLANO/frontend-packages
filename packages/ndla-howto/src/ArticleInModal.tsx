import React, { ReactElement } from 'react';
import { ModalCloseButton, Modal } from '@ndla/modal';
import Tooltip from '@ndla/tooltip';
import { InformationOutline } from '@ndla/icons/common';

import { Wrapper, InModalHeader, Heading, Lead, ImageWrapper, PushGrid } from './Styles';
import { stories } from './StaticInfoComponents';

interface ModalContentProps {
  pageId: string;
  onClose: () => void;
}

const headingId = 'popupModalHeader';

const ModalContent = ({ pageId, onClose }: ModalContentProps) => {
  const useStory = stories[pageId] || {
    title: `Fant ingen veiledningstekster "${pageId}"`,
    lead: 'Sjekk key-names i @ndla-howto/src/StaticInfoComponents og propType pageId til <ArticleInModal />',
  };

  return (
    <Wrapper>
      <div>
        <InModalHeader>
          <InformationOutline style={{ position: 'absolute' }} />
          <Heading id={headingId} inModal>
            {useStory.title}
          </Heading>
          <ModalCloseButton onClick={onClose} />
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

interface Props {
  pageId: string;
  activateButton: ReactElement;
  tooltip?: string;
}

const ArticleInModal = ({ pageId, tooltip, activateButton }: Props) => (
  <Modal
    aria-labelledby={headingId}
    wrapperFunctionForButton={tooltip ? (btn: ReactElement) => <Tooltip tooltip={tooltip}>{btn}</Tooltip> : undefined}
    activateButton={activateButton}
  >
    {(onClose) => <ModalContent pageId={pageId} onClose={onClose} />}
  </Modal>
);

export default ArticleInModal;
