import React from 'react';
import Button, { StyledButton } from '@ndla/button';
import { action } from '@storybook/addon-actions';
import { ChevronDown } from '@ndla/icons/common';
import { InlineContainer } from '../helpers';
import { StoryIntro, StoryBody } from '../wrappers';

const AnchorButton = StyledButton.withComponent('a');

const ButtonExample = () => {
  return (
    <div>
      <StoryIntro title="Knapper">
        <p>
          Knapper er til å klikke på for å navigere på samme side, ikke for å
          lenke til en annen. De skal altså brukes til interaktivitet på samme
          side. For å sende brukeren til en annen side brukes vanlig lenke.
        </p>
        <p>
          Knapp med ramme brukes for de fleste knapper, men er det behov for
          ekstra oppmerksomhet, kan fylt knapp benyttes.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Eksempel</h2>
        <InlineContainer>
          <Button outline onClick={action('clicked')}>
            Knapp med ramme
          </Button>{' '}
          <Button outline disabled onClick={action('clicked')}>
            Deaktivert knapp med ramme
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button onClick={action('clicked')}>Fylt knapp</Button>{' '}
          <Button disabled onClick={action('clicked')}>
            Knapp deaktivert
          </Button>
        </InlineContainer>
        <h2 key="pill-heading" className="u-heading">
          Ghost pill knapp (hover)
        </h2>
        <InlineContainer>
          <Button ghostPill onClick={action('clicked')}>
            <span>Velg språk(language): Bokmål</span>
            <ChevronDown />
          </Button>
        </InlineContainer>
        {process.env.NODE_ENV === 'development' && [
          <h2 key="alternative-button-heading" className="u-heading">
            Alternativer når UU krever en knapp
          </h2>,
          <InlineContainer key="buttons">
            <Button link onClick={action('clicked')}>
              Knapp stylet som link
            </Button>{' '}
            <p>
              Ser{' '}
              <Button stripped onClick={action('clicked')}>
                dette
              </Button>{' '}
              ut som en knapp
            </p>
          </InlineContainer>,
          <h2 key="alternative-link-heading" className="u-heading">
            Alternativer når UU krever en link
          </h2>,
          <InlineContainer key="buttons-2">
            <AnchorButton
              href="https://ndla.no"
              target="_blank"
              rel="noopener noreferrer">
              Link stylet som knapp
            </AnchorButton>{' '}
            <AnchorButton
              style={{ width: '250px' }}
              appearance="outline"
              href="https://ndla.no"
              target="_blank"
              rel="noopener noreferrer">
              Link stylet som knapp
            </AnchorButton>
          </InlineContainer>,
        ]}
      </StoryBody>
    </div>
  );
};

export default ButtonExample;
