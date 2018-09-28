import { rgba, darken } from 'polished';

const darkenFactor = 0.1;

const brandLight = '#ceddea';
const brandDark = '#184673';
const brandGreyLight = '#e8e3e3';
const brandGreyLightest = '#f8f8f8';

const subjectMaterialLight = '#dde9d0';
const externalLearningResourceBackground = '#d0e8de';
const sourceMaterialLight = '#dce5e0';
const assessmentResourceLight = '#f5e7e5';
const tasksAndActivitiesLight = '#fbeddc';

const red = '#d1372e';
const green = '#5cbc80';
const yellow = '#ead854';

const backgroundDefault = '#ffffff'; /* old: EFF0F2 (gray) */

export default {
  /**
   * NDLA Brand colors
   */
  brandColor: '#20588f',
  brandSecondary: '#507aa4',
  brandTertiary: '#a5bcd3',
  brandLight,
  brandLighter: '#deebf6',
  brandDark,

  /**
   * NDLA Grays
   */
  brandGrey: '#777777',
  brandGreyLight,
  brandGreyLighter: '#eff0f2',
  brandGreyLightest,
  brandGreyDark: '#4d4d4d',

  /**
   * Content type colors
   */
  subjectLight: brandLight,
  subjectDark: brandDark,

  subjectMaterialLight,
  subjectMaterialDark: '#5c6a4f',
  subjectMaterialAdditional: rgba(subjectMaterialLight, 0.4),

  externalLearningResourceBackground,
  externalLearningResourceLight: '#e6f3ed',
  externalLearningResourceDark: '#4f7d76',
  externalLearningResourceAdditional: rgba(
    externalLearningResourceBackground,
    0.4,
  ),

  sourceMaterialLight,
  sourceMaterialDark: '#636e68',
  sourceMaterialAdditional: rgba(sourceMaterialLight, 0.4),

  tasksAndActivitiesBackground: '#f8e0c4',
  tasksAndActivitiesLight,
  tasksAndActivitiesDark: '#d98229',
  tasksAndActivitiesAdditional: rgba(tasksAndActivitiesLight, 0.4),

  assessmentResourceBackground: '#efd5d5',
  assessmentResourceLight,
  assessmentResourceDark: '#c0676f',
  assessmentResourceAdditional: rgba(assessmentResourceLight, 0.4),

  learningPathBackground: '#f2efef',
  learningPathLight: brandGreyLight,
  learningPathDark: '#797979',
  learningPathBackgroundAdditional: rgba(brandGreyLight, 0.4),

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
    redLight: rgba(red, 0.3),
    green: '#5cbc80',
    greenLight: rgba(green, 0.3),
    yellow: '#ead854',
    yellowLight: rgba(yellow, 0.3),
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
    default: backgroundDefault,
    dark: darken(darkenFactor, backgroundDefault),
    darker: darken(darkenFactor * 2, backgroundDefault),
    backgroundGray: brandGreyLightest,
    grayDark: '#e4e4e4',
  },
};
