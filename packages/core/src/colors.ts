const brandLight = '#ceddea';
const brandLightest = '#F0F6FB';
const brandDark = '#184673';
const brandGreyLight = '#e8e3e3';
const brandGreyLightest = '#f8f8f8';
const brandYellow = '#fde74c';

const colors = {
  /**
   * NDLA Brand colors
   */
  brand: {
    primary: '#20588f',
    secondary: '#507aa4',
    tertiary: '#a5bcd3',
    light: brandLight,
    lighter: '#deebf6',
    lightest: brandLightest,
    dark: brandDark,
    accent: brandYellow,
    /**
     * NDLA Grays
     */
    grey: '#777777',
    greyMedium: '#9b9b9b',
    greyLight: brandGreyLight,
    greyLighter: '#eff0f2',
    greyLightest: brandGreyLightest,
    greyDark: '#4d4d4d',
    neutral7: '#D1D6DB',
  },

  /**
   * Content type colors
   */

  ndlaFilm: {
    filmColor: '#091a2a',
    filmColorDark: '#03172B',
    filmColorBright: '#20588f',
    filmColorLight: '#0f263b',
  },

  ndlaToolBox: {
    boxColor: '#e8e3c3',
  },

  subject: {
    light: brandLight,
    dark: brandDark,
  },

  subjectMaterial: {
    light: '#dde9d0',
    dark: '#5c6a4f',
    additional: 'rgba(221,233,208,0.4)',
  },

  externalLearningResource: {
    background: '#d0e8de',
    light: '#e6f3ed',
    dark: '#4f7d76',
    additional: 'rgba(208,232,222,0.4)',
  },

  sourceMaterial: {
    light: '#dce5e0',
    dark: '#636e68',
    additional: 'rgba(220,229,224,0.4)',
  },

  notion: {
    light: '#DEF1ED',
    dark: '#3E5860',
  },

  tasksAndActivities: {
    background: '#f8e0c4',
    light: '#fbeddc',
    dark: '#c77632',
    additional: 'rgba(251,237,220,0.4)',
  },

  assessmentResource: {
    background: '#efd5d5',
    light: '#f5e7e5',
    dark: '#c0676f',
    additional: 'rgba(245,231,229,0.4)',
  },

  learningPath: {
    background: '#f2efef',
    light: '#e8e3e3',
    dark: '#797979',
    backgroundAdditional: 'rgba(232,227,227,0.4)',
  },

  /**
   * Supplementary colors,
   */
  text: {
    primary: '#444',
    light: '#757575',
  },
  white: '#fff',
  black: '#272728',
  markColor: '#da788d',
  support: {
    red: '#d1372e',
    redLight: '#f1c3c0',
    redLightest: '#f8e1df',
    green: '#5cbc80',
    greenLight: '#ceead8',
    greenLightest: '#e6f4eb',
    yellow: '#ead854',
    yellowLight: '#f8f3cb',
    yellowLightest: '#fbf9e5',
  },
  tableBg: '#f9fafb',
  favoriteColor: '#fcba03',

  /**
   * Link colors
   */

  link: 'inset 0 -1px',
  linkHover: 'none',
  linkVisited: '#444',

  /**
   * Background colors
   * */
  background: {
    default: '#ffffff' /* old: EFF0F2 (gray) */,
    dark: '#e6e6e6',
    darker: '#ccc',
    backgroundGray: brandGreyLightest,
    grayDark: '#e4e4e4',
    lightBlue: '#f7fafd',
    frontpageArticle: '#f7fafd',
  },
};

export default colors;
