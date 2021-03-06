import React from 'react';
import PropTypes from 'prop-types';
import { ArticleByline } from '@ndla/ui';
import LicenseBox from '../article/LicenseBox';

import cecilie from '../../images/cecilie.png';

export const authorSimple = {
  role: '[Rolle]',
  name: 'Ola nordmann',
  shortName: 'Ola',
  urlContributions: '#',
  urlAuthor: '#',
  title: '[Tittel]',
  phone: '[Telefon nr]',
  email: '[Epost]',
  image: cecilie,
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
    image: cecilie,
    introduction:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    licenses: 'CC BY-NC-SA',
  },
  {
    role: 'Illustratør',
    name: 'Siv Mundal',
    shortName: 'Siv',
    urlContributions: '#',
    urlAuthor: '#',
    title: 'Stilling',
    phone: '+47 123 45 678',
    email: 'siv.mundal@keyteq.no',
    image: cecilie,
    introduction:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    licenses: 'CC BY-NC-SA',
  },
  {
    role: 'Manusforfatter',
    name: 'Pål Frønsdal',
    shortName: 'Pål',
    urlContributions: '#',
    urlAuthor: '#',
    title: 'Stilling',
    phone: '+47 123 45 678',
    email: 'paal.fronsdal@ndla.no',
    image: cecilie,
    introduction:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    licenses: 'CC BY-NC-SA',
  },
];

const authors = {
  simple: [authorSimple, authorSimple, authorSimple],
  real: authorRealText,
};

const suppliers = [{ name: 'Riksarkivet' }];

const ArticleBylineExample = ({ multipleAuthors, useRealText, additional, copyPageUrlLink }) => {
  const useAuthors = authors[useRealText ? 'real' : 'simple'];
  return (
    <ArticleByline
      authors={multipleAuthors ? useAuthors : [useAuthors[0]]}
      published={useRealText ? '24.04.2018' : '[dato]'}
      license={useRealText ? 'CC BY-SA' : '[lisens]'}
      licenseBox={<LicenseBox />}
      additional={additional}
      copyPageUrlLink={copyPageUrlLink}
      suppliers={suppliers}
    />
  );
};

ArticleBylineExample.propTypes = {
  useRealText: PropTypes.bool,
  multipleAuthors: PropTypes.bool,
  additional: PropTypes.bool,
  copyPageUrlLink: PropTypes.string,
};

ArticleBylineExample.defaultProps = {
  multipleAuthors: false,
  useRealText: false,
  additional: false,
};

export default ArticleBylineExample;
