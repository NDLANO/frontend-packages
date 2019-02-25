const baseFontSizeUnit = 18;
const baseLineHeightUnit = 26;

/**
 * Should do the same as: https://github.com/inuitcss/inuitcss/blob/c14029caf75b7b69d7551a5e22036ec280b02e9f/tools/_tools.font-size.scss
 */
function sizes(fontSize, lineHeight) {
  const fontSizeUnit = parseInt(fontSize, 10);
  const fontSizeRem = parseInt(fontSize, 10) / baseFontSizeUnit;

  const fontSizeStyling = `font-size: ${fontSize};font-size: ${fontSizeRem}rem;`;
  if (lineHeight) {
    return `${fontSizeStyling} line-height: ${lineHeight}`;
  }

  const defaultLineHeight =
    Math.ceil(fontSizeUnit / baseLineHeightUnit) *
    (baseLineHeightUnit / fontSizeUnit);
  return `${fontSizeStyling} line-height: ${defaultLineHeight}`;
}

export default {
  sans:
    "'Source Sans Pro',Helvetica,Arial,STKaiti,'华文楷体',KaiTi,SimKai,'楷体',KaiU,DFKai-SB,'標楷體',SongTi,'宋体',sans-serif",
  serif:
    "'Source Serif Pro',Times,STKaiti,'华文楷体',KaiTi,SimKai,'楷体',KaiU,DFKai-SB,'標楷體',SongTi,'宋体',serif",
  weight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  sizes,
};
