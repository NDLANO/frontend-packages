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

export const contentTypes = [
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

export const tvSeries = [
  {
    name: 'Tørk aldri tårer uten hansker',
    id: 'TorkAldriTorer',
    path: '#',
    contentType: TVSERIES_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: TorkAldriTorer,
      },
    },
  },
  {
    name: 'Krigens unge hjerter',
    id: 'KrigensUngeHjerter',
    path: '#',
    contentType: TVSERIES_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: KrigensUngeHjerter,
      },
    },
  },
  {
    name: 'Kampen om tungtvannet',
    id: 'KampenOmTungtvannet',
    path: '#',
    contentType: TVSERIES_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: KampenOmTungtvannet,
      },
    },
  },
  {
    name: 'Halvbroren',
    id: 'Halvbroren',
    path: '#',
    contentType: TVSERIES_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: Halvbroren,
      },
    },
  },
];
export const shortmovies = [
  {
    name: 'Mannen fra isøde',
    id: 'Mann',
    path: '#',
    contentType: SHORTMOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: MannenFraIsode,
      },
    },
  },
  {
    name: 'Inn i vårt mørke hus',
    id: 'innI',
    path: '#',
    contentType: SHORTMOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: IVartHus,
      },
    },
  },
  {
    name: 'Cold Mailman. My recurring dream',
    id: 'coldmail',
    path: '#',
    contentType: SHORTMOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: ColdMailman,
      },
    },
  },
  {
    name: '1994',
    id: '1994',
    path: '#',
    contentType: SHORTMOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: Film1994,
      },
    },
  },
];
export const documentaries = [
  {
    name: 'Dirty wars',
    id: 'dirtywars',
    path: '#',
    contentType: DOCUMENTARY_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: DirtyWars,
      },
    },
  },
  {
    name: 'Exit through the gift shop',
    id: 'film2',
    path: '#',
    contentType: DOCUMENTARY_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: ExitThroughTheGiftShop,
      },
    },
  },
  {
    name: 'Kon Tiki',
    id: 'film3',
    path: '#',
    contentType: DOCUMENTARY_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: KonTiki,
      },
    },
  },
  {
    name: 'Inequality for all',
    id: 'film4',
    path: '#',
    contentType: DOCUMENTARY_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: InequalityForAll,
      },
    },
  },
];
export const movies = [
  {
    name: 'Gullkysten',
    id: 'gullkysten',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: Gullkysten,
      },
    },
  },
  {
    name: 'Girlhood',
    id: 'girlhood',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: Girlhood,
      },
    },
  },
  {
    name: 'Die Welle',
    id: 'diewelle',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: DieWelle,
      },
    },
  },
  {
    name: 'Citizen Kane',
    id: 'citizenKane',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: CitizenKane,
      },
    },
  },
  {
    name: 'Børning',
    id: 'borning',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: Borning,
      },
    },
  },
  {
    name: 'Beatles',
    id: 'beatles',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: Beatles,
      },
    },
  },
  {
    name: 'Arn Tempelridderen',
    id: 'arn',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: ArnTempelridderen,
      },
    },
  },
  {
    name: 'Amalie',
    id: 'amalie',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: Amalie,
      },
    },
  },
  {
    name: 'Adjø Montebello',
    id: 'adjo',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: AdjoMontebello,
      },
    },
  },
  {
    name: '12 Years a slave',
    id: '12ye',
    path: '#',
    contentType: MOVIE_CONTENTTYPE_ID,
    metaData: {
      description: 'Fin film..',
      image: {
        alt: 'alt',
        img: YearsASlave,
      },
    },
  },
];

export const allMovies = [
  ...documentaries,
  ...shortmovies,
  ...movies,
  ...tvSeries,
];
