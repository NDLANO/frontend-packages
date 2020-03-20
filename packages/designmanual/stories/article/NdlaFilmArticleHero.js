import React from 'react';
import PropTypes from 'prop-types';
import { OneColumn, NdlaFilmHero, FFHeroBadge } from '@ndla/ui';
import Breadcrumb from '../molecules/breadcrumbs';

const NdlaFilmArticleHero = ({ withBackgroundImage, article, isFFServer }) => {
  const backgroundImage = article && article.metaImage && article.metaImage.url;

  return (
    <NdlaFilmHero
      hasImage={isFFServer || (withBackgroundImage && backgroundImage)}>
      {withBackgroundImage && backgroundImage && (
        <div className="c-hero__background">
          <img src={backgroundImage} alt={article.metaImage.alt} />
        </div>
      )}
      <OneColumn>
        <div className="c-hero__content">
          <section>
            {isFFServer && <FFHeroBadge isNDLAFilm />}
            <Breadcrumb />
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
  isFFServer: PropTypes.bool,
};

export default NdlaFilmArticleHero;
