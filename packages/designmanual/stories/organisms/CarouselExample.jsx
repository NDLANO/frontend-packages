import React from 'react';
import BEMHelper from 'react-bem-helper';
import Carousel from '@ndla/carousel';
import { SafeLink } from '@ndla/ui';
import { contentCards } from '../../dummydata';

const classes = BEMHelper('c-content-card');

const CarouselExample = () => (
  <Carousel
    columnsPrSlide={3}
    columnWidth={200}
    distanceBetweenItems={26}
    slideBackwardsLabel="tilbake"
    slideForwardsLabel="framover"
    imageFormat={0.5625}
    items={contentCards.map(content => ({
      children: ({ imageHeight, imageWidth }) => (
        <article {...classes()}>
          <SafeLink
            {...content.toLinkProps()}
            title={content.title}
            {...classes('link')}>
            <header>
              <div {...classes('image-wrapper')}>
                <div
                  {...classes('background-image')}
                  role="img"
                  aria-label="some label"
                  style={{
                    height: `${imageHeight}px`,
                    width: `${imageWidth}px`,
                    backgroundImage: `url(${content.image})`,
                  }}
                />
                <p {...classes('type')}>{content.type}</p>
              </div>
              <h1 {...classes('heading')}>{content.title}</h1>
            </header>
            <p {...classes('description')}>{content.text}</p>
          </SafeLink>
        </article>
      ),
      ...content,
    }))}
  />
);

export default CarouselExample;
