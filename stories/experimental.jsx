import 'lazysizes';

import { storiesOf } from '@storybook/react';
import { ContentLoader } from '@ndla/ui';

import { StoryIntro, StoryBody } from './wrappers';

storiesOf('Other/Experimental components', module).add('Content loader', () => (
  <div>
    <StoryIntro title="Innholdlaster">
      <p>Placeholder som kan brukes inntil et bilde/video/artikkel er lastet.</p>
    </StoryIntro>
    <StoryBody>
      <h2>Bilde/Video eksempel</h2>
      <ContentLoader width={1000} height={750}>
        <rect x="0" y="0" rx="3" ry="3" width="800" height="600" />
        <rect x="20" y="610" rx="3" ry="3" width="600" height="30" />
        <rect x="20" y="650" rx="3" ry="3" width="400" height="30" />
        <circle cx="30" cy="700" r="15" fill="purple" />
        <circle cx="70" cy="700" r="15" fill="purple" />
        <circle cx="110" cy="700" r="15" fill="purple" />
      </ContentLoader>

      <h2>Artikkel eksempel</h2>
      <ContentLoader width={1000} height={1050}>
        <rect x="100" y="0" rx="3" ry="3" width="800" height="60" />
        <rect x="100" y="100" rx="3" ry="3" width="800" height="25" />
        <rect x="100" y="140" rx="3" ry="3" width="800" height="25" />
        <rect x="100" y="180" rx="3" ry="3" width="400" height="25" />
        <rect x="0" y="260" rx="3" ry="3" width="1000" height="600" />
        <rect x="100" y="900" rx="3" ry="3" width="800" height="20" />
        <rect x="100" y="930" rx="3" ry="3" width="800" height="20" />
        <rect x="100" y="970" rx="3" ry="3" width="800" height="20" />
        <rect x="100" y="1000" rx="3" ry="3" width="600" height="20" />
      </ContentLoader>
    </StoryBody>
  </div>
));
