import React from 'react';
import BEMHelper from 'react-bem-helper';
import { Carousel } from '@ndla/carousel';
import { SafeLink } from '@ndla/ui';
import { contentCards } from '../../dummydata';

const classes = BEMHelper('c-content-card');

const CarouselExample = () => (
  <Carousel
    columnsPrSlide={3}
    columnWidth={200}
    distanceBetweenItems={26}
    slideBackwardsLabel="tilbake"
    slideForwardsLabel="framover">
    {contentCards.map(content => (
      <article {...classes()} key={content.id}>
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
                  height: `${200 * 0.5625}px`,
                  width: `${200}px`,
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
    ))}
  </Carousel>
);

export default CarouselExample;
