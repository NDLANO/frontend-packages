import React from 'react';
import { css } from '@emotion/react';
import { colors, misc, fonts, spacing } from '@ndla/core';
import { Carousel, CarouselAutosize } from '@ndla/carousel';
import { uuid } from '@ndla/util';

import ComponentInfo from '../ComponentInfo';

const cards = [uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid()];

const cardCSS = css`
  div {
    background: ${colors.brand.tertiary};
    border-radius: ${misc.borderRadius};
    color: #fff;
    ${fonts.sizes(22, 1.1)};
    font-weight: ${fonts.weight.semibold};
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  padding: ${spacing.small};
  flex-basis: 100%;
`;

const DemoExample = () => (
  <section>
    <CarouselAutosize
      breakpoints={[
        {
          until: 'mobile',
          columnsPrSlide: 2,
          distanceBetweenItems: 26,
          margin: 92,
        },
        {
          columnsPrSlide: 3,
          distanceBetweenItems: 0,
          margin: 92,
        },
      ]}
    >
      {(autoSizedProps) => (
        <Carousel
          {...autoSizedProps}
          slideBackwardsLabel="tilbake"
          slideForwardsLabel="framover"
          wrapperClass="c-carousel__wrapper"
          buttonClass="c-carousel__arrow"
          items={cards.map((cardKey, index) => (
            <div
              style={{
                height: `${autoSizedProps.columnWidth}px`,
              }}
              key={cardKey}
              css={cardCSS}
            >
              <div>{index}</div>
            </div>
          ))}
        />
      )}
    </CarouselAutosize>
  </section>
);

const CarouselExample = () => (
  <ComponentInfo
    reactCode={`
      import  { Carousel, CarouselAutosize } from '@ndla/carousel';
      import { spacing, spacingUnit } from '@ndla/core';

      <CarouselAutosize
        breakpoints={[
          {
            until: 'tablet',
            columnsPrSlide: 2,
            distanceBetweenItems: spacingUnit,
            arrowOffset: spacingUnit / 2,
          },
          {
            columnsPrSlide: 4,
            distanceBetweenItems: spacingUnit,
            arrowOffset: spacingUnit / 2,
          },
        ]}
      >
        {autoSizedProps => (
          <Carousel
            {...autoSizedProps}
            slideBackwardsLabel="tilbake"
            slideForwardsLabel="framover"
            wrapperClass="c-carousel__wrapper"
            buttonClass="c-carousel__arrow"
            items={cards.map((cardKey, index) => (
              <div
                style={{
                  width: \`\${autoSizedProps.columnWidth}px\`,
                  height: \`\${autoSizedProps.columnWidth}px\`,
                }}
                key={cardKey}
              >{index}</div>
            ))}
          />
        )}
      </CarouselAutosize>

    `}
    usesPropTypes={[
      {
        name: 'items',
        type: 'Array of nodes',
        default: 'Required',
        description: 'Kortene som sendes vises i bildekarusellen. Alle må ha lik bredde (samme som columnWidth prop).',
      },
      {
        name: 'columnsPrSlide',
        type: 'Number',
        default: 'Required',
        description:
          'Antall kort som skal være synlig. (Bruk feks x.5 for å vise halve neste kort for å indikere flere kort)',
      },
      {
        name: 'columnWidth',
        type: 'Number',
        default: 'Required',
        description:
          'Total utregnet lengde på hele bildekarusellen. (Tips: <CarouselAutosize /> hjelper deg å finne denne)',
      },
      {
        name: 'distanceBetweenItems',
        type: 'Number',
        default: '0',
        description: 'Spacing in px between cards',
      },
      {
        name: 'slideBackwardsLabel',
        type: 'String',
        default: 'Required',
        description: 'Aria-label for button slide backwards',
      },
      {
        name: 'slideForwardsLabel',
        type: 'String',
        default: 'Required',
        description: 'Aria-label for button slide backwards',
      },
      {
        name: 'arrowOffset',
        type: 'Number',
        default: '0',
        description: 'Offset Arrow position in px (from left/right)',
      },
      {
        name: 'margin',
        type: 'Number',
        default: '0',
        description: 'Margin sides, good to use if you want the arrow buttons on the sides with fixed sizes.',
      },
      {
        name: 'buttonClass',
        type: 'String',
        default: 'undefined',
        description: 'Arrow button class',
      },
      {
        name: 'wrapperClass',
        type: 'String',
        default: 'undefined',
        description: 'Wrapper class (for hover button effects use with buttonClass prop)',
      },
      {
        name: 'disableScroll',
        type: 'Boolean',
        default: 'false',
        description: 'Disables scroll',
      },
    ]}
    status={2}
  >
    <p>
      Carousel med (valgfritt) tilhørende hjelpe komponent for utregning av størrelser. Har swipe funksjonalitet
      innebygget.
    </p>
    <h3>Med hjelpekomponent versjon:</h3>
    <DemoExample />
  </ComponentInfo>
);

export default CarouselExample;
