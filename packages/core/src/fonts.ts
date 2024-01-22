/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const baseFontSizeUnit = 18;
const baseLineHeightUnit = 24;

/**
 * Should do the same as: https://github.com/inuitcss/inuitcss/blob/c14029caf75b7b69d7551a5e22036ec280b02e9f/tools/_tools.font-size.scss
 */
function sizes(fontSize: string | number, lineHeight?: string | number) {
  const fontSizeUnit = parseInt(fontSize as string, 10);
  const fontSizeRem = parseInt(fontSize as string, 10) / baseFontSizeUnit;
  const _lineHeight = lineHeight ?? Math.ceil(fontSizeUnit / baseLineHeightUnit) * (baseLineHeightUnit / fontSizeUnit);

  const fontSizeStyling = `font-size: ${fontSize};font-size: ${fontSizeRem}rem;`;
  const chineseStyling = `&:where([lang='zh'], &[lang='zh-Hans'], &[lang='zh-Hant']):not([data-pinyin]) {font-size: calc(${fontSize} * 1.11); font-size: calc(${fontSizeRem}rem * 1.11)}`;
  return `${fontSizeStyling} line-height: ${_lineHeight}; ${chineseStyling}`;
}

const fonts = {
  sans: "'Source Sans Pro',Helvetica,Arial,STKaiti,'华文楷体',KaiTi,SimKai,'楷体',KaiU,DFKai-SB,'標楷體',SongTi,'宋体',sans-serif",
  serif: "'Source Serif Pro',Times,STKaiti,'华文楷体',KaiTi,SimKai,'楷体',KaiU,DFKai-SB,'標楷體',SongTi,'宋体',serif",
  weight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  sizes,
  size: {
    text: {
      ingress: sizes("20px", "31px"),
      button: sizes("16px", "24px"),
      content: sizes("18px", "29px"),
      metaText: {
        xxsmall: sizes("10px", "12px"),
        xsmall: sizes("12px", "20px"),
        small: sizes("16px", "24px"),
        medium: sizes("18px", "24px"),
        large: sizes("22px", "30px"),
      },
      label: {
        large: sizes("24px", "36px"),
        small: sizes("18px", "32px"),
      },
    },
  },
};

export default fonts;
