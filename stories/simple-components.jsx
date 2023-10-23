import { storiesOf } from '@storybook/react';
import { OneColumn } from '@ndla/ui';
import SafeLink from '@ndla/safelink';
import { StoryIntro, StoryBody } from './wrappers';
import FootnotesExample from './article/FootnotesExample';
import TreeStructureExample from './molecules/TreeStructureExample';

storiesOf('Components', module)
  .add('Use of links', () => (
    <div>
      <StoryIntro title="Bruk av lenker">
        <p>
          Lenker på <a href="//ndla.no">ndla.no</a> bruker den vanlige konvensjonen med underlinje. Lenker skal i
          hovedsak åpne seg i samme vindu (det vil si at vi bruker <code>target=&quot;_self&quot;</code> eller ingen
          target-attributt). Unntaket er hvis lenken inngår i et skjema eller læringssammenhengen gjør det er nødvendig
          at brukerne beholder vinduet eller fanen de står i. Når lenker går til et annet nettsted (eksterne lenker)
          skal disse alltid åpnes i ny fane
        </p>
        <p>
          Når det finnes flere kontekster til en lenke/node skal den ta konteksten/fag til det en stod i før en klikket
          seg videre, hvis ikke den finnes i samme, skal den ta primærkoblingen til noden. Dette gjelder både for
          relaterte artikler og interne lenker.
        </p>
        <p>
          Interne lenker blir styrt av html innstilling i nettleser (samme vindu eller ny fane) avhengig av koden som
          ligger der, brukerens/browserens preferanser skal styre
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Lenke som åpnes i nytt vindu</h2>
        <p>
          <SafeLink showNewWindowIcon to="https://api.ndla.no/" target="_blank">
            https://api.ndla.no/
          </SafeLink>
        </p>
        <p>
          <SafeLink showNewWindowIcon to="https://api.ndla.no/" target="_blank">
            NDLA API
          </SafeLink>
        </p>
      </StoryBody>
    </div>
  ))
  .add('Expandable box', () => (
    <div>
      <StoryIntro title="Ekspanderbar boks" />
      <StoryBody>
        <details>
          <summary>Oppsummering av innhold</summary>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
        </details>
      </StoryBody>
    </div>
  ))
  .add('References', () => (
    <div>
      <StoryIntro title="Kildehenvisninger">
        <p>
          Kildehenvisninger benytter{' '}
          <a href="https://sokogskriv.no/kildebruk-og-referanser/referansestiler/apa-6th/">APA-stilen</a> for utlisting
          nederst på siden.
        </p>
        <p>
          I teksten brukes en enkel nummerering for å henvise til referanse. Tallet lenkes til den aktuelle referansen.
        </p>
        <p>I referanselisten nederst lenkes hver referanse igjen til hvor de opptrer i teksten.</p>
      </StoryIntro>
      <StoryBody>
        <FootnotesExample />
      </StoryBody>
    </div>
  ))
  .add('Tree structure component', () => (
    <div>
      <StoryIntro title="Trestruktur komponent">
        <p>Tree struktur</p>
      </StoryIntro>
      <OneColumn>
        <TreeStructureExample />
      </OneColumn>
    </div>
  ));
