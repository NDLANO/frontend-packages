import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from '@ndla/icons/common';
import { injectT } from '@ndla/i18n';

import SectionHeading from '../SectionHeading';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-frontpage-film');

const FrontpageFilm = ({ url, imageUrl, t }) => (
  <section {...classes('')}>
    <SectionHeading large>{t('welcomePage.film.header')}</SectionHeading>
    <div {...classes('image')} style={{ backgroundImage: `url(${imageUrl})` }}>
      <span {...classes('film-text', 'wide')}>
        {t('welcomePage.film.text')}
      </span>
      <span {...classes('film-text', 'narrow')}>
        {t('welcomePage.film.textShort')}
      </span>
    </div>
    <div className="o-text-link__wrapper o-text-link__wrapper--right">
      <SafeLink className="o-text-link" to={url}>
        {t('welcomePage.film.linkLabel')}
        <Forward />
      </SafeLink>
    </div>
  </section>
);

FrontpageFilm.propTypes = {
  t: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

FrontpageFilm.defaultProps = {};

export default injectT(FrontpageFilm);
