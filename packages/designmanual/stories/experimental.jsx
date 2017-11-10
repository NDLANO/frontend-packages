import React from 'react';
import 'lazysizes';

import { storiesOf } from '@storybook/react';
import { Image } from 'ndla-ui';

import { StoryIntro, StoryBody } from './wrappers';

if (process.env.NODE_ENV === 'development') {
  storiesOf('Eksperimentelle komponenter', module).add(
    'Lazyload bilder',
    () => (
      <div>
        <StoryIntro title="Lazyload">
          <p>Test av lazy loading</p>
        </StoryIntro>
        <StoryBody>
          <h2>Lazy load bilde</h2>
          <div>
            <Image
              src="https://staging.api.ndla.no/image-api/raw/Ide.jpg"
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
    ),
  );
}
