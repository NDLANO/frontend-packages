import { uuid } from '@ndla/util';

// Documentaries
import DirtyWars from '../images/ndla-film/documentary/Dirty-wars.jpg';
import ExitThroughTheGiftShop from '../images/ndla-film/documentary/Exit-through-the-gift-shop.jpg';
import InequalityForAll from '../images/ndla-film/documentary/Inequality-for-all.jpg';
import KonTiki from '../images/ndla-film/documentary/Kon-tiki.jpg';

// Movies
import YearsASlave from '../images/ndla-film/movies/12-Years-a-slave.jpg';
import AdjoMontebello from '../images/ndla-film/movies/Adjo-Montebello.jpg';
import Amalie from '../images/ndla-film/movies/Amalie.jpg';
import ArnTempelridderen from '../images/ndla-film/movies/Arn-Tempelridderen.jpg';
import Beatles from '../images/ndla-film/movies/Beatles.jpg';
import Borning from '../images/ndla-film/movies/Borning.jpg';
import CitizenKane from '../images/ndla-film/movies/CitizenKane.jpg';
import DieWelle from '../images/ndla-film/movies/Die-welle.jpg';
import Girlhood from '../images/ndla-film/movies/Girlhood.jpg';
import Gullkysten from '../images/ndla-film/movies/Gullkysten.jpg';

// Shortmovies
import Film1994 from '../images/ndla-film/shortmovies/1994.png';
import ColdMailman from '../images/ndla-film/shortmovies/Cold-Mailman-My-Recurring-Dream.jpg';
import IVartHus from '../images/ndla-film/shortmovies/Inn-i-vart-morke-hus.jpg';
import MannenFraIsode from '../images/ndla-film/shortmovies/Mannen-fra-isode.jpg';

// TV-series
import Halvbroren from '../images/ndla-film/tv-series/Halvbroren.jpg';
import KampenOmTungtvannet from '../images/ndla-film/tv-series/Kampen-om-tungtvannet.jpg';
import KrigensUngeHjerter from '../images/ndla-film/tv-series/Krigens-unge-hjerter.jpg';
import TorkAldriTorer from '../images/ndla-film/tv-series/Tork-aldri-torer-uten-hansker.jpg';

export const DOCUMENTARY_CONTENTTYPE_ID = 'contentTypeId:documentary';
export const MOVIE_CONTENTTYPE_ID = 'contentTypeId:movie';
export const TVSERIES_CONTENTTYPE_ID = 'contentTypeId:tvseries';
export const SHORTMOVIE_CONTENTTYPE_ID = 'contentTypeId:shortmovie';

export const mockMovieResourceTypes = [
  {
    name: 'Dokumentar',
    id: DOCUMENTARY_CONTENTTYPE_ID,
  },
  {
    name: 'Spillefilmer',
    id: MOVIE_CONTENTTYPE_ID,
  },
  {
    name: 'Tv-serier',
    id: TVSERIES_CONTENTTYPE_ID,
  },
  {
    name: 'Kortfilmer',
    id: SHORTMOVIE_CONTENTTYPE_ID,
  },
];

// helper function
const returnMovie = ({ title, image, metaDescription, movieTypes }) => ({
  title,
  id: uuid(),
  url: '#',
  metaDescription: {
    metaDescription,
  },
  metaImage: {
    url: image,
    alt: 'Image alt-text',
  },
  movieTypes,
});

export const tvSeries = [
  returnMovie({
    title: 'Tørk aldri tårer uten hansker',
    image: TorkAldriTorer,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [TVSERIES_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Krigens unge hjerter',
    image: KrigensUngeHjerter,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [TVSERIES_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Kampen om tungtvannet',
    image: KampenOmTungtvannet,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [TVSERIES_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Halvbroren',
    image: Halvbroren,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [TVSERIES_CONTENTTYPE_ID]: true,
    },
  }),
];
export const shortmovies = [
  returnMovie({
    title: 'Mannen fra isøde',
    image: MannenFraIsode,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [SHORTMOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Inn i vårt mørke hus',
    image: IVartHus,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [SHORTMOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Cold Mailman. My recurring dream',
    image: ColdMailman,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [SHORTMOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: '1994',
    image: Film1994,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [SHORTMOVIE_CONTENTTYPE_ID]: true,
    },
  }),
];

export const documentaries = [
  returnMovie({
    title: 'Dirty wars',
    image: DirtyWars,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [DOCUMENTARY_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Exit through the gift shop',
    image: ExitThroughTheGiftShop,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [DOCUMENTARY_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Kon Tiki',
    image: KonTiki,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [DOCUMENTARY_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Inequality for all',
    image: InequalityForAll,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [DOCUMENTARY_CONTENTTYPE_ID]: true,
    },
  }),
];

export const movies = [
  returnMovie({
    title: 'Gullkysten',
    image: Gullkysten,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Girlhood',
    image: Girlhood,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Die Welle',
    image: DieWelle,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Citizen Kane',
    image: CitizenKane,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Børning',
    image: Borning,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Beatles',
    image: Beatles,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Arn Tempelridderen',
    image: ArnTempelridderen,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Amalie',
    image: Amalie,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: 'Adjø Montebello',
    image: AdjoMontebello,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
  returnMovie({
    title: '12 Years a slave',
    image: YearsASlave,
    metaDescription: 'Lorem ipsum..',
    movieTypes: {
      [MOVIE_CONTENTTYPE_ID]: true,
    },
  }),
];

export const mockAllMovies = [
  ...documentaries,
  ...shortmovies,
  ...movies,
  ...tvSeries,
];

export const movieTopics = [
  {
    id: 'topicId',
    name: 'topicName',
  },
];

export const movieThemes = [
  {
    name: 'Mest sett',
    movies: [
      documentaries[0],
      tvSeries[0],
      movies[0],
      movies[1],
      tvSeries[2],
      documentaries[2],
    ],
  },
  {
    name: 'Tema eksempel',
    movies: [
      documentaries[3],
      tvSeries[1],
      movies[3],
      documentaries[1],
      movies[1],
      tvSeries[3],
      documentaries[2],
      movies[4],
      movies[5],
    ],
  },
  {
    name: 'Tema eksempel 2',
    movies: [
      movies[6],
      movies[1],
      movies[7],
      documentaries[1],
      movies[0],
      tvSeries[2],
    ],
  },
];

export const mockMovieTopics = [
  {
    name: 'Filmkunnskap',
    id: 'urn:topic:1:185592',
    path: '/subject:14/topic:1:185588/topic:1:185592',
  },
  {
    name: 'Demokrati og medborgerskap',
    id: 'urn:topic:1:185591',
    path: '/subject:14/topic:1:185588/topic:1:185591',
  },
  {
    name: 'Folkehelse og livsmestring',
    id: 'urn:topic:1:185593',
    path: '/subject:14/topic:1:185588/topic:1:185593',
  },
  {
    name: 'Bærekraftig utvikling',
    id: 'urn:topic:1:185594',
    path: '/subject:14/topic:1:185588/topic:1:185594',
  },
];

export const mockHighlightedMovies = tvSeries;
