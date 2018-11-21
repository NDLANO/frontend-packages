const DOCUMENTARY_CONTENTTYPE_ID = 'contentTypeId:documentary';
const MOVIE_CONTENTTYPE_ID = 'contentTypeId:movie';
const TVSERIES_CONTENTTYPE_ID = 'contentTypeId:tvseries';
const SHORTMOVIE_CONTENTTYPE_ID = 'contentTypeId:shortmovie';

const contentTypes = [
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

const movies = [
  {
    name: 'Dirty wars',
    id: '1',
    resourceType: [
      {
        id: DOCUMENTARY_CONTENTTYPE_ID,
      },
    ],
  },
];
