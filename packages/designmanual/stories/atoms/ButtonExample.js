import React from 'react';
import Button, { MultiButton, StyledButton } from '@ndla/button';
import { action } from '@storybook/addon-actions';
import { ChevronDown } from '@ndla/icons/common';
import { InlineContainer } from '../helpers';
import { StoryIntro, StoryBody } from '../wrappers';

const AnchorButton = StyledButton.withComponent('a');

const MultiButtonData = {
  mainButton: {
    label: 'Lagre',
    value: 'lagre',
  },
  secondaryButtons: [
    {
      label: 'Lagre og ny versjon',
      value: 'lagreogny',
    },
    {
      label: 'Lagre og avslutt',
      value: 'lagreogavslutt',
    },
  ],
};

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
          ekstra oppmerksomhet, kan fylt knapp benyttes. Som regel bør det ikke
          brukes mer enn 1 fylt knapp på en side.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Eksempel</h2>
        <InlineContainer>
          <Button size="small" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <h3>Knapp med ramme(outline)</h3>
        <InlineContainer>
          <Button outline size="small" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button outline size="normal" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button outline size="medium" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button outline size="large" onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <h3>Lys versjon(lighter)</h3>
        <InlineContainer>
          <Button size="small" lighter onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" lighter onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" lighter onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" lighter onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <h3>Lys grå versjon(lighterGrey)</h3>
        <InlineContainer>
          <Button size="small" lighterGrey onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" lighterGrey onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" lighterGrey onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" lighterGrey onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <h3>Rundet knapp</h3>
        <InlineContainer>
          <Button
            borderShape="rounded"
            size="small"
            onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            size="normal"
            onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            size="medium"
            onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            size="large"
            onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button
            borderShape="rounded"
            outline
            size="small"
            onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            outline
            size="normal"
            onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            outline
            size="medium"
            onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            outline
            size="large"
            onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button
            borderShape="rounded"
            lighter
            size="small"
            onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            lighter
            size="normal"
            onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            lighter
            size="medium"
            onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            lighter
            size="large"
            onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button
            borderShape="rounded"
            lighterGrey
            size="small"
            onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            lighterGrey
            size="normal"
            onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            lighterGrey
            size="medium"
            onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button
            borderShape="rounded"
            lighterGrey
            size="large"
            onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <h3>Firkantet knapp</h3>
        <InlineContainer>
          <Button
            size="small"
            borderShape="sharpened"
            onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button
            size="normal"
            borderShape="sharpened"
            onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button
            size="medium"
            borderShape="sharpened"
            onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button
            size="large"
            borderShape="sharpened"
            onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <InlineContainer>
          <Button
            size="small"
            borderShape="sharpened"
            outline
            onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button
            size="normal"
            borderShape="sharpened"
            outline
            onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button
            size="medium"
            borderShape="sharpened"
            outline
            onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button
            size="large"
            borderShape="sharpened"
            outline
            onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <InlineContainer>
          <Button
            size="small"
            borderShape="sharpened"
            lighter
            onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button
            size="normal"
            borderShape="sharpened"
            lighter
            onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button
            size="medium"
            borderShape="sharpened"
            lighter
            onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button
            size="large"
            borderShape="sharpened"
            lighter
            onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <InlineContainer>
          <Button
            size="small"
            borderShape="sharpened"
            lighterGrey
            onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button
            size="normal"
            borderShape="sharpened"
            lighterGrey
            onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button
            size="medium"
            borderShape="sharpened"
            lighterGrey
            onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button
            size="large"
            borderShape="sharpened"
            lighterGrey
            onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <h3>Deaktiverte knapper</h3>
        <InlineContainer>
          <Button disabled onClick={action('clicked')}>
            Knapp deaktivert
          </Button>{' '}
          <Button disabled size="medium" onClick={action('clicked')}>
            Knapp deaktivert
          </Button>{' '}
          <Button disabled size="large" onClick={action('clicked')}>
            Knapp deaktivert
          </Button>
        </InlineContainer>
        <h2 className="u-heading">Multiknapper</h2>
        <p>Undermeny kan vises over eller under hovedknappen</p>
        <InlineContainer>
          <MultiButton
            outline
            onClick={() => {
              action('clicked');
            }}
            mainButton={MultiButtonData.mainButton}
            secondaryButtons={MultiButtonData.secondaryButtons}
          />{' '}
          <MultiButton
            outline
            disabled
            onClick={() => {
              action('clicked');
            }}
            mainButton={MultiButtonData.mainButton}
            secondaryButtons={MultiButtonData.secondaryButtons}
          />
        </InlineContainer>
        <InlineContainer>
          <MultiButton
            onClick={() => {
              action('clicked');
            }}
            menuPosition="bottom"
            mainButton={MultiButtonData.mainButton}
            secondaryButtons={MultiButtonData.secondaryButtons}
          />{' '}
          <MultiButton
            disabled
            onClick={() => {
              action('clicked');
            }}
            mainButton={MultiButtonData.mainButton}
            secondaryButtons={MultiButtonData.secondaryButtons}
          />
        </InlineContainer>
        <InlineContainer>
          <MultiButton
            large
            onClick={() => {
              action('clicked');
            }}
            mainButton={MultiButtonData.mainButton}
            secondaryButtons={MultiButtonData.secondaryButtons}
          />{' '}
          <MultiButton
            large
            outline
            onClick={() => {
              action('clicked');
            }}
            mainButton={MultiButtonData.mainButton}
            secondaryButtons={MultiButtonData.secondaryButtons}
          />
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
