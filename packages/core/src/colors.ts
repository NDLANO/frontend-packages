import darken from 'polished/lib/color/darken';
import rgba from 'polished/lib/color/rgba';

const brandLight = '#ceddea';
const brandDark = '#184673';
const brandGreyLight = '#e8e3e3';
const brandGreyLightest = '#f8f8f8';

export default {
  /**
   * NDLA Brand colors
   */
  brand: {
    primary: '#20588f',
    secondary: '#507aa4',
    tertiary: '#a5bcd3',
    light: brandLight,
    lighter: '#deebf6',
    dark: brandDark,
    /**
     * NDLA Grays
     */
    grey: '#777777',
    greyLight: brandGreyLight,
    greyLighter: '#eff0f2',
    greyLightest: brandGreyLightest,
    greyDark: '#4d4d4d',
  },

  /**
   * Content type colors
   */

  ndlaFilm: {
    filmColor: '#091a2a',
    filmColorBright: '#20588f',
  },

  subject: {
    light: brandLight,
    dark: brandDark,
  },

  subjectMaterial: {
    light: '#dde9d0',
    dark: '#5c6a4f',
    additional: rgba('#dde9d0', 0.4),
  },

  externalLearningResource: {
    background: '#d0e8de',
    light: '#e6f3ed',
    dark: '#4f7d76',
    additional: rgba('#d0e8de', 0.4),
  },

  sourceMaterial: {
    light: '#dce5e0',
    dark: '#636e68',
    additional: rgba('#dce5e0', 0.4),
  },

  tasksAndActivities: {
    background: '#f8e0c4',
    light: '#fbeddc',
    dark: '#d98229',
    additional: rgba('#fbeddc', 0.4),
  },

  assessmentResource: {
    background: '#efd5d5',
    light: '#f5e7e5',
    dark: '#c0676f',
    additional: rgba('#f5e7e5', 0.4),
  },

  learningPath: {
    background: '#f2efef',
    light: '#e8e3e3',
    dark: '#797979',
    backgroundAdditional: rgba('#e8e3e3', 0.4),
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
    redLight: rgba('#d1372e', 0.3),
    green: '#5cbc80',
    greenLight: rgba('#5cbc80', 0.3),
    yellow: '#ead854',
    yellowLight: rgba('#ead854', 0.3),
  },
  tableBg: '#f9fafb',

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
    dark: darken(0.1, '#ffffff'),
    darker: darken(0.2, '#ffffff'),
    backgroundGray: brandGreyLightest,
    grayDark: '#e4e4e4',
  },
};
