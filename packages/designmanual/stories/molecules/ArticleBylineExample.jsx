import React from 'react';
import PropTypes from 'prop-types';
import { ArticleByline } from 'ndla-ui';
import LicenseBox from '../article/LicenseBox';

const authorSimple = {
	role: '[Rolle]',
  name: '[Ola nordmann]',
  urlContributions: '#',
  urlAuthor: '#',
  title: '[Tittel]',
  phone: '[Telefon nr]',
  email: '[Epost]',
  image: 'http://via.placeholder.com/350x150',
  introduction: '[Introduksjonstekst]',
}

const authorRealText = {
	role: 'rolle',
  name: 'Cecilie Isaksen Eftedal',
  urlContributions: '#',
  urlAuthor: '#',
  title: 'Stilling',
  phone: '+47 123 45 678',
  email: 'cecilie@ndla.no',
  image: 'http://via.placeholder.com/200x200',
  introduction: 'Er fagleder for bla bla..',
}

const authors = {
	simple: [authorSimple, authorSimple, authorSimple],
	real: [authorRealText, authorRealText, authorRealText],
};

const ArticleBylineExample = ({ multipleAuthors, useRealText, additional }) => {
	const useAuthors = authors[useRealText ? 'real' : 'simple'];
	return (
		<ArticleByline
		  authors={multipleAuthors ? useAuthors : [useAuthors[0]]}
		  updated={useRealText ? '24.04.2018' : '[dato]'}
		  license={useRealText ? 'CC BY-SA' : '[lisens]'}
		  licenseBox={<LicenseBox headingId="article-license-box-heading-id" />}
		  messages={{
		    writtenBy: '',
		    lastUpdated: 'Publisert',
		    authorLabel: 'Opphavsmann',
		    authorDescription:
		      'Denne artikkelen er laget av flere opphavsmenn',
		    close: 'Lukk',
		  }}
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
