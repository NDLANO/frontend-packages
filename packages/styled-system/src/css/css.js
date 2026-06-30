import { createCssRuntime, hypenateProperty, isObject, withoutSpace } from '../helpers';
import { breakpointKeys, finalizeConditions, sortConditions } from './conditions';

const utilities = "WebkitTextFillColor:wktf-c,accentColor:ac-c,alignContent:ac,alignItems:ai,alignSelf:as,animation:anim,animationComposition:anim-comp,animationDelay:anim-dly,animationDirection:anim-dir,animationDuration:anim-dur,animationFillMode:anim-fm,animationIterationCount:anim-ic,animationName:anim-n,animationPlayState:anim-ps,animationRange:anim-r,animationRangeEnd:anim-re,animationRangeStart:anim-rs,animationState:anim-s,animationTimeline:anim-tl,animationTimingFunction:anim-tmf,appearance:ap,aspectRatio:asp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropFilter:bkdp,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,backfaceVisibility:bfv,background:bg,backgroundAttachment:bg-a,backgroundBlendMode:bg-bm,backgroundClip:bg-cp,backgroundColor:bg-c,backgroundConic:bg-conic,backgroundGradient:bg-grad,backgroundImage:bg-i,backgroundLinear:bg-linear,backgroundOrigin:bg-o,backgroundPosition:bg-p,backgroundPositionX:bg-p-x,backgroundPositionY:bg-p-y,backgroundRadial:bg-radial,backgroundRepeat:bg-r,backgroundSize:bg-s,blockSize:h-bs,border:bd,borderBlock:bd-y,borderBlockColor:bd-y-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockEndWidth:bd-be-w,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,borderBlockStartWidth:bd-bs-w,borderBlockWidth:bd-y-w,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBottomLeftRadius:bdr-bl,borderBottomRadius:bdr-b,borderBottomRightRadius:bdr-br,borderBottomWidth:bd-b-w,borderCollapse:bd-cl,borderColor:bd-c,borderEndEndRadius:bdr-ee,borderEndRadius:bdr-e,borderEndStartRadius:bdr-es,borderInline:bd-x,borderInlineColor:bd-x-c,borderInlineEnd:bd-e,borderInlineEndColor:bd-e-c,borderInlineEndWidth:bd-e-w,borderInlineStart:bd-s,borderInlineStartColor:bd-s-c,borderInlineStartWidth:bd-s-w,borderInlineWidth:bd-x-w,borderLeft:bd-l,borderLeftColor:bd-l-c,borderLeftRadius:bdr-l,borderLeftWidth:bd-l-w,borderRadius:bdr,borderRight:bd-r,borderRightColor:bd-r-c,borderRightRadius:bdr-r,borderRightWidth:bd-r-w,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,borderStartEndRadius:bdr-se,borderStartRadius:bdr-s,borderStartStartRadius:bdr-ss,borderTop:bd-t,borderTopColor:bd-t-c,borderTopLeftRadius:bdr-tl,borderTopRadius:bdr-t,borderTopRightRadius:bdr-tr,borderTopWidth:bd-t-w,borderWidth:bd-w,boxDecorationBreak:bx-db,boxShadow:bx-sh,boxShadowColor:bx-sh-c,boxSize:size,boxSizing:bx-s,caretColor:ca-c,clipPath:cp-path,color:c,columnGap:cg,container:cq,containerName:cq-n,containerType:cq-t,display:d,divideColor:dvd-c,divideStyle:dvd-s,divideX:dvd-x,divideY:dvd-y,flexBasis:flex-b,flexDirection:flex-d,flexGrow:flex-g,flexShrink:flex-sh,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingStyle:focus-ring-s,focusRingWidth:focus-ring-w,focusVisibleRing:focus-v-ring,fontFamily:ff,fontFeatureSettings:ff-s,fontKerning:fk,fontPalette:fp,fontSize:fs,fontSizeAdjust:fs-a,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariantNumeric:fv-num,fontVariationSettings:fv-s,fontWeight:fw,gradientFrom:grad-from,gradientFromPosition:grad-from-pos,gradientTo:grad-to,gradientToPosition:grad-to-pos,gradientVia:grad-via,gradientViaPosition:grad-via-pos,gridAutoColumns:grid-ac,gridAutoFlow:grid-af,gridAutoRows:grid-ar,gridColumn:grid-c,gridColumnEnd:grid-ce,gridColumnGap:grid-cg,gridColumnStart:grid-cs,gridGap:grid-g,gridRow:grid-r,gridRowGap:grid-rg,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,height:h,hideBelow:show,hideFrom:hide,hyphens:hy,inlineSize:w-is,insetBlock:inset-y,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInline:inset-x,insetInlineEnd:inset-e,insetInlineStart:inset-s,justifyContent:jc,letterSpacing:ls,lineClamp:lc,lineHeight:lh,listStyle:li-s,listStyleImage:li-img,listStylePosition:li-pos,listStyleType:li-t,margin:m,marginBlock:my,marginBlockEnd:mbe,marginBlockStart:mbs,marginBottom:mb,marginInline:mx,marginInlineEnd:me,marginInlineStart:ms,marginLeft:ml,marginRight:mr,marginTop:mt,mask:msk,maskImage:msk-i,maskSize:msk-s,maxBlockSize:max-b,maxHeight:max-h,maxInlineSize:max-w-is,maxWidth:max-w,minBlockSize:min-h-bs,minHeight:min-h,minInlineSize:min-w-is,minWidth:min-w,mixBlendMode:mix-bm,objectFit:obj-f,objectPosition:obj-p,opacity:op,outline:ring,outlineColor:ring-c,outlineOffset:ring-o,outlineWidth:ring-w,overflow:ov,overflowAnchor:ov-a,overflowBlock:ov-b,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overflowInline:ov-i,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overscrollBehavior:ovs-b,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,padding:p,paddingBlock:py,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingBottom:pb,paddingInline:px,paddingInlineEnd:pe,paddingInlineStart:ps,paddingLeft:pl,paddingRight:pr,paddingTop:pt,position:pos,rowGap:rg,scrollBehavior:scr-bhv,scrollMargin:scr-m,scrollMarginBlock:scr-my,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginBottom:scr-mb,scrollMarginInline:scr-mx,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollPadding:scr-p,scrollPaddingBlock:scr-py,scrollPaddingBlockEnd:scr-pbe,scrollPaddingBlockStart:scr-pbs,scrollPaddingBottom:scr-pb,scrollPaddingInline:scr-px,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollSnapAlign:scr-sa,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapMargin:scrs-m,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapMarginTop:scrs-mt,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapStop:scrs-s,scrollSnapStrictness:scrs-strt,scrollSnapType:scrs-t,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,spaceX:sx,spaceY:sy,srOnly:sr,stroke:stk,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,strokeWidth:stk-w,tableLayout:tbl,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textEmphasisColor:te-c,textGradient:txt-grad,textIndent:ti,textOverflow:tov,textShadow:tsh,textShadowColor:tsh-c,textSizeAdjust:txt-adj,textStyle:textStyle,textTransform:tt,textUnderlineOffset:tu-o,textWrap:tw,touchAction:tch-a,transform:trf,transformBox:trf-b,transformOrigin:trf-o,transformStyle:trf-s,transition:trs,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transitionTimingFunction:trs-tmf,truncate:trunc,userSelect:us,verticalAlign:va,visibility:vis,width:w,wordBreak:wb,zIndex:z"

const classNameByProp = new Map()
const shorthands = new Map()
if (utilities) {
  utilities.split(",").forEach((utility) => {
    const [prop, meta] = utility.split(":")
    const [className, ...shorthandList] = meta.split("/")
    if (className) classNameByProp.set(prop, className)
    shorthandList.forEach((shorthand) => {
      const key = shorthand === "1" ? className : shorthand
      shorthands.set(key, prop)
    })
  })
}

const resolveShorthand = (prop) => shorthands.get(prop) || prop

const { serializeCss, mergeCss, assignCss } = createCssRuntime({
  hash: false,
  conditions: {
    shift: sortConditions,
    finalize: finalizeConditions,
    breakpoints: { keys: breakpointKeys },
  },
  utility: {
    prefix: null,
    hasShorthand: false,
    toHash(path, hashFn) {
      return hashFn(path.join(":"))
    },
    transform(prop, value) {
      const key = resolveShorthand(prop)
      const propKey = classNameByProp.get(key) || hypenateProperty(key)
      return { className: `${propKey}_${withoutSpace(value)}` }
    },
    resolveShorthand,
  },
})

export const css = /* @__PURE__ */ Object.assign(
  function css(...styles) {
    if (styles.length === 1 && isObject(styles[0])) return serializeCss(styles[0])
    return serializeCss(mergeCss(...styles))
  },
  {
    raw: function cssRaw(...styles) {
      return mergeCss(...styles)
    },
  },
)

export { mergeCss, assignCss }