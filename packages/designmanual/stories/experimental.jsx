import React from 'react';
import 'lazysizes';

import { storiesOf } from '@storybook/react';
import { Image, ContentLoader } from '@ndla/ui';

import { StoryIntro, StoryBody } from './wrappers';
import ResourceStats from './molecules/ResourceStats';

storiesOf('Eksperimentelle komponenter', module)
  .add('Lazyload bilder', () => (
    <div>
      <StoryIntro title="Lazyload">
        <p>Test av lazy loading</p>
      </StoryIntro>
      <StoryBody>
        <h2>Lazy load bilde</h2>
        <div>
          <Image
            alt="Lyspære"
            src="https://api.staging.ndla.no/image-api/raw/Ide.jpg"
            lazyLoad
            lazyLoadSrc={`data:image/svg+xml;utf8,
      <svg xmlns="http://www.w3.org/2000/svg" height="400" width="100%">
        <rect x="0" y="0" width="100%" height="100%" style="fill:#EFF0F2;">
          <animate attributeType="XML" attributeName="fill" values="#EFF0F2;#E8E3E3;#EFF0F2;" dur="3s" repeatCount="indefinite"/>
        </rect>
      </svg>
            `}
          />
        </div>
      </StoryBody>
    </div>
  ))
  .add('Innholdlaster', () => (
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
  ))
  .add('Statistikk', () => (
    <div>
      <StoryIntro title="Statistikk">
        <p>
          Hent ut csv-fil med data for i hvilke fag ressursene er brukt. Kommer på formatet:
          <br /> "Artikkel", "Fag", "Artikkel-id", "Fag-id"
        </p>
        <p>Kun fag og artikler som er synlig blir eksportert.</p>
      </StoryIntro>
      <StoryBody>
        <ResourceStats />
      </StoryBody>
    </div>
  ));
