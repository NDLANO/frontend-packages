import React from 'react';
import PropTypes from 'prop-types';
import { ArticleByline } from 'ndla-ui';
import LicenseBox from '../article/LicenseBox';

export const authorSimple = {
  role: '[Rolle]',
  name: 'Ola nordmann',
  shortName: 'Ola',
  urlContributions: '#',
  urlAuthor: '#',
  title: '[Tittel]',
  phone: '[Telefon nr]',
  email: '[Epost]',
  image: 'http://via.placeholder.com/200x200',
  introduction: '[Introduksjonstekst]',
};

export const authorRealText = [
  {
    role: 'Forfatter',
    name: 'Cecilie Isaksen Eftedal',
    shortName: 'Cecilie',
    urlContributions: '#',
    urlAuthor: '#',
    title: 'Stilling',
    phone: '+47 123 45 678',
    email: 'cecilie@ndla.no',
    image: 'http://via.placeholder.com/200x200',
    introduction: 'Er fagleder for bla bla..',
    licenses: 'CC BY-NC-SA',
  },
  {
    role: 'Fotograf',
    name: 'Siv Mundal',
    shortName: 'Siv',
    urlContributions: '#',
    urlAuthor: '#',
    title: 'Stilling',
    phone: '+47 123 45 678',
    email: 'siv.mundal@keyteq.no',
    image: 'http://via.placeholder.com/200x200',
    introduction: 'Er fagleder for bla bla..',
    licenses: 'CC BY-NC-SA',
  },
  {
    role: 'Fagansvarlig',
    name: 'Pål Frønsdal',
    shortName: 'Pål',
    urlContributions: '#',
    urlAuthor: '#',
    title: 'Stilling',
    phone: '+47 123 45 678',
    email: 'paal.fronsdal@ndla.no',
    image: 'http://via.placeholder.com/200x200',
    introduction: 'Er fagleder for bla bla..',
    licenses: 'CC BY-NC-SA',
  },
];

const authors = {
  simple: [authorSimple, authorSimple, authorSimple],
  real: authorRealText,
};

const ArticleBylineExample = ({ multipleAuthors, useRealText, additional }) => {
  const useAuthors = authors[useRealText ? 'real' : 'simple'];
  return (
    <ArticleByline
      authors={multipleAuthors ? useAuthors : [useAuthors[0]]}
      updated={useRealText ? '24.04.2018' : '[dato]'}
      license={useRealText ? 'CC BY-SA' : '[lisens]'}
      licenseBox={<LicenseBox />}
      additional={additional}
    />
  );
};

ArticleBylineExample.propTypes = {
  useRealText: PropTypes.bool,
  multipleAuthors: PropTypes.bool,
  additional: PropTypes.bool,
};

ArticleBylineExample.defaultProps = {
  multipleAuthors: false,
  useRealText: false,
  additional: false,
};

export default ArticleBylineExample;
