import React from 'react';
import { css } from 'react-emotion';
import { colors, misc, fonts, spacing } from '@ndla/core';
import Carousel, { CarouselAutosize } from '@ndla/carousel';
import { uuid } from '@ndla/util';

import ComponentInfo from '../ComponentInfo';

const cards = [
  uuid(),
  uuid(),
  uuid(),
  uuid(),
  uuid(),
  uuid(),
  uuid(),
];

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

const wrapperCSS = css`
  border: 1px solid #ccc;
`;

const DemoExample = () => (
  <section>
    <CarouselAutosize
      breakPoints={[
        {
          until: 'mobile',
          columnsPrSlide: 2,
          distanceBetweenItems: 26,
          arrowLeftOffset: 0,
          arrowRightOffset: 0,
          margin: 92,
        },
        {
          columnsPrSlide: 3,
          distanceBetweenItems: 0,
          arrowLeftOffset: 0,
          arrowRightOffset: 0,
          margin: 92,
        }
      ]}
    >
    {autoSizedProps => (
      <Carousel
        {...autoSizedProps}
        slideBackwardsLabel="tilbake"
        slideForwardsLabel="framover"
        wrapperClass={wrapperCSS}
        items={cards.map((cardKey, index) => (
          <div
            style={{
              height: `${autoSizedProps.columnWidth}px`,
            }}
            key={cardKey}
            className={cardCSS}
          >
            <div>
              {index}
            </div>
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
      import Carousel, { CarouselAutosize } from '@ndla/carousel';

      <CarouselAutosize
        breakPoints={[
          {
            until: 'tablet',
            columnsPrSlide: 2,
            distanceBetweenItems: 26,
            arrowLeftOffset: 0,
            arrowRightOffset: 0,
          },
          {
            columnsPrSlide: 4,
            distanceBetweenItems: 26,
            arrowLeftOffset: 0,
            arrowRightOffset: 0,
          },
        ]}
      >
        {autoSizedProps => (
          <Carousel
            {...autoSizedProps}
            slideBackwardsLabel="tilbake"
            slideForwardsLabel="framover"
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
        description: 'Antall kort som skal være synlig. (Bruk feks x.5 for å vise halve neste kort for å indikere flere kort)',
      },
      {
        name: 'columnWidth',
        type: 'Number',
        default: 'Required',
        description: 'Total utregnet lengde på hele bilde karusellen. (Tips: <CarouselAutosize /> hjelper deg å finne denne)',
      },
      {
        name: 'onClose',
        type: 'Function',
        default: 'undefined',
        description: 'Callback funksjon ved lukking av modal.',
      },
      {
        name: 'narrow',
        type: 'Boolean',
        default: 'false',
        description:
          'Justerer styling på modal og innhold. Mindre heading på <h1 />, paddinger m.m.',
      },
      {
        name: 'size',
        type: 'String',
        default: 'regular',
        description: `PropTypes.oneOf([
          'regular',
          'medium',
          'large',
          'fullscreen',
          'full-width',
          'custom',
        ])`,
      },
      {
        name: 'animation',
        type: 'String',
        default: 'zoom-in',
        description: `PropTypes.oneOf(['slide-up', 'slide-down', 'zoom-in', 'subtle'])`,
      },
      {
        name: 'backgroundColor',
        type: 'String',
        default: 'blue',
        description: `PropTypes.oneOf(['blue', 'white', 'grey', 'grey-dark'])`,
      },
      {
        name: 'noBackdrop',
        type: 'Bool',
        default: 'false',
        description: 'Hindrer autorendring av gjennomsiktlig bakgrunn.',
      },
      {
        name: 'wrapperFunctionForButton',
        type: 'Function',
        default: 'undefined',
        description:
          'Wrapperfunction for activateButton. Fin å bruke når modal skal trigges av et element som også har <Tooltip />',
      },
    ]}
    status={2}
    messages={[
      'Kommer med 1 hjelpe komponent; <CarouselAutosize>',
      'Kommer mer tekst her....',
    ]}>
      <p>
        Modal som håndterer åpne/lukke states og håndterer automatisk lås av
        pagescroll, scroll på content, focus-trap samt ESC-exit. Krever at
        minst ett child-element er focusable. Animasjon inn/ut, størrelser og
        bakgrunn kan enkelt endres ved behov. Tar også onOpen og onClose som
        functions via props.
      </p>
      <h3>Enkel versjon:</h3>
      <DemoExample />
    </ComponentInfo>
);

export default CarouselExample;
