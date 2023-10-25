import { storiesOf } from '@storybook/react';
import { OneColumn } from '@ndla/ui';
import { StoryIntro, StoryBody } from './wrappers';
import FootnotesExample from './article/FootnotesExample';
import TreeStructureExample from './molecules/TreeStructureExample';

storiesOf('Components', module)
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
