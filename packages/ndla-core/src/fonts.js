export default {
  sans:
    "'Source Sans Pro',Helvetica,Arial,STKaiti,'华文楷体',KaiTi,SimKai,'楷体',KaiU,DFKai-SB,'標楷體',SongTi,'宋体',sans-serif",
  serif:
    "'Source Serif Pro',Georgia,STKaiti,'华文楷体',KaiTi,SimKai,'楷体',KaiU,DFKai-SB,'標楷體',SongTi,'宋体',serif",
  weight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  sizes: (fontSize, lineHeightFactor) =>
    lineHeightFactor
      ? `font-size: ${parseFloat(fontSize)}px;
        line-height: ${parseFloat(lineHeightFactor) * parseFloat(fontSize)}px;`
      : `font-size: ${parseFloat(fontSize)}px;`,
};
