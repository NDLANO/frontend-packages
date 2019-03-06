import React from 'react';
import { css } from 'react-emotion';
import { colors, misc, fonts, spacing } from '@ndla/core';
import Carousel, { CarouselAutosize } from '@ndla/carousel';
import { uuid } from '@ndla/util';

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
  background: ${colors.brand.tertiary};
  border-radius: ${misc.borderRadius};
  color: #fff;
  ${fonts.sizes(22, 1.1)};
  font-weight: ${fonts.weight.semibold};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: ${spacing.small};
`;

const CarouselExample = () => (
  <section style={{ border: '1px solid green' }}>
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
          distanceBetweenItems: 26,
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
        items={cards.map((cardKey, index) => (
          <div
            style={{
              width: `${autoSizedProps.columnWidth}px`,
              height: `${autoSizedProps.columnWidth}px`,
            }}
            key={cardKey}
            className={cardCSS}
          >{index}</div>
        ))}
      />
    )}
    </CarouselAutosize>
  </section>
);

export default CarouselExample;
