import { ReactElement } from 'react';
import { InformationOutline } from '@ndla/icons/common';
import { ModalCloseButton, Modal, ModalTrigger, ModalContent } from '@ndla/modal';

import { StoryType, stories } from './StaticInfoComponents';
import { Wrapper, InModalHeader, Heading, Lead, ImageWrapper, PushGrid } from './Styles';

interface ModalContentProps {
  pageId: StoryType;
}

const headingId = 'popupModalHeader';

const Content = ({ pageId }: ModalContentProps) => {
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
          <ModalCloseButton />
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
}

const ArticleInModal = ({ pageId, activateButton }: Props) => (
  <Modal aria-labelledby={headingId}>
    <ModalTrigger>{activateButton}</ModalTrigger>
    <ModalContent>
      <Content pageId={pageId as StoryType} />
    </ModalContent>
  </Modal>
);

export default ArticleInModal;
