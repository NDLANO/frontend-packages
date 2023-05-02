import React from 'react';
import PropTypes from 'prop-types';
import { OneColumn, NdlaFilmHero } from '@ndla/ui';
import { BreadcrumbWhiteWithHome } from '../molecules/breadcrumbs';

const NdlaFilmArticleHero = ({ withBackgroundImage, article }) => {
  const backgroundImage = article && article.metaImage && article.metaImage.url;

  return (
    <NdlaFilmHero hasImage={withBackgroundImage && backgroundImage}>
      {withBackgroundImage && backgroundImage && (
        <div className="c-hero__background">
          <img src={backgroundImage} alt={article.metaImage.alt} />
        </div>
      )}
      <OneColumn>
        <div className="c-hero__content">
          <section>
            <BreadcrumbWhiteWithHome />
          </section>
        </div>
      </OneColumn>
    </NdlaFilmHero>
  );
};

NdlaFilmArticleHero.propTypes = {
  withBackgroundImage: PropTypes.bool,
  article: PropTypes.shape({
    metaImage: PropTypes.object,
  }),
};

export default NdlaFilmArticleHero;
