import { storiesOf } from '@storybook/react';
import { OneColumn } from '@ndla/ui';
import { StoryIntro, StoryBody } from './wrappers';
import FootnotesExample from './article/FootnotesExample';
import TreeStructureExample from './molecules/TreeStructureExample';

storiesOf('Components', module)
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
