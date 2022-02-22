import React from 'react';
import Button, { MultiButton, StyledButton } from '@ndla/button';
import { action } from '@storybook/addon-actions';
import { ChevronDown } from '@ndla/icons/common';
import { CloseButton } from '@ndla/ui';
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
  secondaryButtonsWithOverride: [
    {
      label: 'Lagre og ny versjon',
      value: 'lagreogny',
      enable: true,
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
          Knapper er til å klikke på for å navigere på samme side, ikke for å lenke til en annen. De skal altså brukes
          til interaktivitet på samme side. For å sende brukeren til en annen side brukes vanlig lenke.
        </p>
        <p>
          Knapp med ramme brukes for de fleste knapper, men er det behov for ekstra oppmerksomhet, kan fylt knapp
          benyttes. Som regel bør det ikke brukes mer enn 1 fylt knapp på en side.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Eksempel</h2>
        <InlineContainer>
          <Button size="xsmall" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
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
          <Button outline size="xsmall" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
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
        <h3>Lys versjon(light)</h3>
        <InlineContainer>
          <Button size="xsmall" light onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" light onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" light onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" light onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" light onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <h3>Lysere versjon(lighter)</h3>
        <InlineContainer>
          <Button size="xsmall" lighter onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
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
        <h3>Lys grå versjon(greyLighter)</h3>
        <InlineContainer>
          <Button size="xsmall" greyLighter onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" greyLighter onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" greyLighter onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" greyLighter onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" greyLighter onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <h3>Lysere grå versjon(greyLightest)</h3>
        <InlineContainer>
          <Button size="xsmall" greyLightest onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" greyLightest onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" greyLightest onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" greyLightest onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" greyLightest onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <h3>Rundet knapp</h3>
        <InlineContainer>
          <Button borderShape="rounded" size="xsmall" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" size="small" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" size="normal" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button borderShape="rounded" size="medium" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button borderShape="rounded" size="large" onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button borderShape="rounded" outline size="xsmall" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" outline size="small" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" outline size="normal" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button borderShape="rounded" outline size="medium" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button borderShape="rounded" outline size="large" onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button borderShape="rounded" light size="xsmall" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" light size="small" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" light size="normal" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button borderShape="rounded" light size="medium" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button borderShape="rounded" light size="large" onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button borderShape="rounded" lighter size="xsmall" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" lighter size="small" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" lighter size="normal" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button borderShape="rounded" lighter size="medium" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button borderShape="rounded" lighter size="large" onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button borderShape="rounded" greyLighter size="xsmall" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" greyLighter size="small" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" greyLighter size="normal" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button borderShape="rounded" greyLighter size="medium" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button borderShape="rounded" greyLighter size="large" onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <InlineContainer>
          <Button borderShape="rounded" greyLightest size="xsmall" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" greyLightest size="small" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button borderShape="rounded" greyLightest size="normal" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button borderShape="rounded" greyLightest size="medium" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button borderShape="rounded" greyLightest size="large" onClick={action('clicked')}>
            Stor knapp
          </Button>
        </InlineContainer>
        <h3>Firkantet knapp</h3>
        <InlineContainer>
          <Button size="xsmall" borderShape="sharpened" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" borderShape="sharpened" onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" borderShape="sharpened" onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" borderShape="sharpened" onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" borderShape="sharpened" onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <InlineContainer>
          <Button size="xsmall" borderShape="sharpened" outline onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" borderShape="sharpened" outline onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" borderShape="sharpened" outline onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" borderShape="sharpened" outline onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" borderShape="sharpened" outline onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <InlineContainer>
          <Button size="xsmall" borderShape="sharpened" light onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" borderShape="sharpened" light onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" borderShape="sharpened" light onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" borderShape="sharpened" light onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" borderShape="sharpened" light onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <InlineContainer>
          <Button size="xsmall" borderShape="sharpened" lighter onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" borderShape="sharpened" lighter onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" borderShape="sharpened" lighter onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" borderShape="sharpened" lighter onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" borderShape="sharpened" lighter onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <InlineContainer>
          <Button size="xsmall" borderShape="sharpened" greyLighter onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" borderShape="sharpened" greyLighter onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" borderShape="sharpened" greyLighter onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" borderShape="sharpened" greyLighter onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" borderShape="sharpened" greyLighter onClick={action('clicked')}>
            Stor knapp
          </Button>{' '}
        </InlineContainer>
        <InlineContainer>
          <Button size="xsmall" borderShape="sharpened" greyLightest onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="small" borderShape="sharpened" greyLightest onClick={action('clicked')}>
            Liten knapp
          </Button>{' '}
          <Button size="normal" borderShape="sharpened" greyLightest onClick={action('clicked')}>
            Normal knapp
          </Button>{' '}
          <Button size="medium" borderShape="sharpened" greyLightest onClick={action('clicked')}>
            Medium knapp
          </Button>{' '}
          <Button size="large" borderShape="sharpened" greyLightest onClick={action('clicked')}>
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
            onClick={() => {
              action('clicked');
            }}
            menuPosition="bottom"
            mainButton={MultiButtonData.mainButton}
            secondaryButtons={MultiButtonData.secondaryButtonsWithOverride}
          />{' '}
          <MultiButton
            disabled
            onClick={() => {
              action('clicked');
            }}
            mainButton={MultiButtonData.mainButton}
            secondaryButtons={MultiButtonData.secondaryButtonsWithOverride}
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
        <h2 className="u-heading">Lukkeknapp</h2>
        <InlineContainer>
          <CloseButton />
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
            <AnchorButton href="https://ndla.no" target="_blank" rel="noopener noreferrer">
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
