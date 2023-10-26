import { storiesOf } from '@storybook/react';
import { OneColumn } from '@ndla/ui';
import { StoryIntro } from './wrappers';
import TreeStructureExample from './molecules/TreeStructureExample';

storiesOf('Components', module).add('Tree structure component', () => (
  <div>
    <StoryIntro title="Trestruktur komponent">
      <p>Tree struktur</p>
    </StoryIntro>
    <OneColumn>
      <TreeStructureExample />
    </OneColumn>
  </div>
));
