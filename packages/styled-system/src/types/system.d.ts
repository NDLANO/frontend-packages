import type { TokenValue } from './tokens';

export type Pretty<T> = { [K in keyof T]: T[K] } & {}

export type DistributiveOmit<T, K extends keyof any> = T extends unknown ? Omit<T, K> : never

export type DistributiveUnion<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] | T[K] : T[K]
} & DistributiveOmit<U, keyof T>

export type Assign<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] : T[K]
} & U

export interface Conditions {
  "_active": string
  "_after": string
  "_ariaInvalid": string
  "_atValue": string
  "_autofill": string
  "_backdrop": string
  "_before": string
  "_checked": string
  "_chinese": string
  "_closed": string
  "_complete": string
  "_current": string
  "_currentPage": string
  "_currentStep": string
  "_dark": string
  "_default": string
  "_disabled": string
  "_dragging": string
  "_empty": string
  "_enabled": string
  "_even": string
  "_expanded": string
  "_file": string
  "_first": string
  "_firstLetter": string
  "_firstLine": string
  "_firstOfType": string
  "_focus": string
  "_focusVisible": string
  "_focusWithin": string
  "_fullscreen": string
  "_grabbed": string
  "_groupActive": string
  "_groupChecked": string
  "_groupDisabled": string
  "_groupExpanded": string
  "_groupFocus": string
  "_groupFocusVisible": string
  "_groupFocusWithin": string
  "_groupHover": string
  "_groupInvalid": string
  "_hidden": string
  "_highContrast": string
  "_highlighted": string
  "_horizontal": string
  "_hover": string
  "_icon": string
  "_inRange": string
  "_incomplete": string
  "_indeterminate": string
  "_invalid": string
  "_invertedColors": string
  "_landscape": string
  "_last": string
  "_lastOfType": string
  "_lessContrast": string
  "_light": string
  "_loading": string
  "_ltr": string
  "_marker": string
  "_moreContrast": string
  "_motionReduce": string
  "_motionSafe": string
  "_noscript": string
  "_now": string
  "_odd": string
  "_on": string
  "_only": string
  "_onlyOfType": string
  "_open": string
  "_optional": string
  "_osDark": string
  "_osLight": string
  "_outOfRange": string
  "_overValue": string
  "_peerActive": string
  "_peerChecked": string
  "_peerDisabled": string
  "_peerExpanded": string
  "_peerFocus": string
  "_peerFocusVisible": string
  "_peerFocusWithin": string
  "_peerHover": string
  "_peerInvalid": string
  "_peerPlaceholderShown": string
  "_placeholder": string
  "_placeholderShown": string
  "_portrait": string
  "_pressed": string
  "_print": string
  "_rangeEnd": string
  "_rangeStart": string
  "_readOnly": string
  "_readWrite": string
  "_required": string
  "_rtl": string
  "_scrollbar": string
  "_scrollbarThumb": string
  "_scrollbarTrack": string
  "_selected": string
  "_selection": string
  "_starting": string
  "_target": string
  "_today": string
  "_topmost": string
  "_unavailable": string
  "_underValue": string
  "_valid": string
  "_vertical": string
  "_visited": string
  "base": string
  "desktop": string
  "desktopDown": string
  "desktopOnly": string
  "desktopToUltraWide": string
  "desktopToWide": string
  "mobile": string
  "mobileDown": string
  "mobileOnly": string
  "mobileToDesktop": string
  "mobileToMobileWide": string
  "mobileToTablet": string
  "mobileToTabletWide": string
  "mobileToUltraWide": string
  "mobileToWide": string
  "mobileWide": string
  "mobileWideDown": string
  "mobileWideOnly": string
  "mobileWideToDesktop": string
  "mobileWideToTablet": string
  "mobileWideToTabletWide": string
  "mobileWideToUltraWide": string
  "mobileWideToWide": string
  "tablet": string
  "tabletDown": string
  "tabletOnly": string
  "tabletToDesktop": string
  "tabletToTabletWide": string
  "tabletToUltraWide": string
  "tabletToWide": string
  "tabletWide": string
  "tabletWideDown": string
  "tabletWideOnly": string
  "tabletWideToDesktop": string
  "tabletWideToUltraWide": string
  "tabletWideToWide": string
  "ultraWide": string
  "ultraWideDown": string
  "ultraWideOnly": string
  "wide": string
  "wideDown": string
  "wideOnly": string
  "wideToUltraWide": string
}

export interface Breakpoints {
  "base": string
  "mobile": string
  "mobileWide": string
  "tablet": string
  "tabletWide": string
  "desktop": string
  "wide": string
  "ultraWide": string
}

export type ContainerName = AnyString
export type ContainerValue = ContainerName | `${ContainerName} / inline-size` | `${ContainerName} / size` | AnyString

export type Condition = keyof Conditions

export type ConditionalValue<T> =
  | T
  | Array<T | null | undefined>
  | { [K in Condition]?: ConditionalValue<T> }

export type AnyString = string & {}

export type AnyNumber = number & {}

export type CssVars = `var(--${string})`

type WithColorOpacityModifier<T> = [T] extends [string] ? `${T}/${string}` & { __colorOpacityModifier?: true } : never

type ImportantMark = "!" | "!important"
type WhitespaceImportant = ` ${ImportantMark}`
type Important = ImportantMark | WhitespaceImportant
type WithImportant<T> = [T] extends [string] ? `${T}${Important}` & { __important?: true } : never

export type WithEscapeHatch<T> = T | `[${string}]` | WithColorOpacityModifier<T> | WithImportant<T>

export type OnlyKnown<Value> = Value extends boolean ? Value : Value extends `${infer _}` ? Value : never

export type AlignContentValue = WithEscapeHatch<Globals | CssVars | OnlyKnown<"baseline" | "center" | "end" | "flex-end" | "flex-start" | "normal" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">>

export type AlignItemsValue = WithEscapeHatch<Globals | CssVars | OnlyKnown<"anchor-center" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "normal" | "self-end" | "self-start" | "start" | "stretch">>

export type AlignSelfValue = WithEscapeHatch<Globals | CssVars | OnlyKnown<"anchor-center" | "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "normal" | "self-end" | "self-start" | "start" | "stretch">>

export type AnimationCompositionValue = string | number | CssVars | AnyString

export type AnimationDirectionValue = string | number | CssVars | AnyString

export type AnimationFillModeValue = string | number | CssVars | AnyString

export type AnimationIterationCountValue = string | number | CssVars | AnyString

export type AnimationPlayStateValue = string | number | CssVars | AnyString

export type AnimationRangeEndValue = string | number | CssVars | AnyString

export type AnimationRangeStartValue = string | number | CssVars | AnyString

export type AnimationRangeValue = string | number | CssVars | AnyString

export type AnimationStateValue = string | number | CssVars | AnyString

export type AnimationTimelineValue = string | number | CssVars | AnyString

export type AnimationsValue = Globals | TokenValue<"animations"> | CssVars | AnyString | AnyNumber

export type AppearanceValue = WithEscapeHatch<PropertyValueMap["appearance"]>

export type AspectRatiosValue = AutoGlobals | TokenValue<"aspectRatios"> | CssVars | AnyString | AnyNumber

export type AssetsValue = Globals | TokenValue<"assets"> | CssVars | AnyString | AnyNumber

export type BackdropBrightnessValue = string | number | CssVars | AnyString

export type BackdropContrastValue = string | number | CssVars | AnyString

export type BackdropFilterValue = "auto" | CssVars | AnyString | AnyNumber

export type BackdropGrayscaleValue = string | number | CssVars | AnyString

export type BackdropHueRotateValue = string | number | CssVars | AnyString

export type BackdropInvertValue = string | number | CssVars | AnyString

export type BackdropOpacityValue = string | number | CssVars | AnyString

export type BackdropSaturateValue = string | number | CssVars | AnyString

export type BackdropSepiaValue = string | number | CssVars | AnyString

export type BackfaceVisibilityValue = string | number | CssVars | AnyString

export type BackgroundAttachmentValue = string | number | CssVars | AnyString

export type BackgroundBlendModeValue = string | number | CssVars | AnyString

export type BackgroundClipValue = string | number | CssVars | AnyString

export type BackgroundConicValue = string | number | CssVars | AnyString

export type BackgroundGradientValue = "to-b" | "to-bl" | "to-br" | "to-l" | "to-r" | "to-t" | "to-tl" | "to-tr" | CssVars | AnyString | AnyNumber

export type BackgroundLinearValue = "to-b" | "to-bl" | "to-br" | "to-l" | "to-r" | "to-t" | "to-tl" | "to-tr" | CssVars | AnyString | AnyNumber

export type BackgroundOriginValue = string | number | CssVars | AnyString

export type BackgroundPositionValue = string | number | CssVars | AnyString

export type BackgroundPositionXValue = string | number | CssVars | AnyString

export type BackgroundPositionYValue = string | number | CssVars | AnyString

export type BackgroundRepeatValue = string | number | CssVars | AnyString

export type BackgroundSizeValue = string | number | CssVars | AnyString

export type BlockSizeValue = DimensionGlobals | TokenValue<"sizes"> | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "2/3" | "2/4" | "2/5" | "2/6" | "3/4" | "3/5" | "3/6" | "4/5" | "4/6" | "5/6" | "auto" | "dvh" | "lvh" | "screen" | "svh" | CssVars | AnyString | AnyNumber

export type BlursValue = Globals | TokenValue<"blurs"> | CssVars | AnyString | AnyNumber

export type BorderCollapseValue = string | number | CssVars | AnyString

export type BorderStyleValue = PropertyValueMap["borderStyle"] | string | number | CssVars | AnyString

export type BorderStylesValue = Globals | TokenValue<"borderStyles"> | PropertyValueMap["outlineStyle"] | CssVars | AnyString | AnyNumber

export type BorderWidthsValue = Globals | TokenValue<"borderWidths"> | CssVars | AnyString | AnyNumber

export type BordersValue = Globals | TokenValue<"borders"> | CssVars | AnyString | AnyNumber

export type BoxDecorationBreakValue = string | number | CssVars | AnyString

export type BoxSizeValue = DimensionGlobals | TokenValue<"sizes"> | "1/12" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "10/12" | "11/12" | "2/12" | "2/3" | "2/4" | "2/5" | "2/6" | "3/12" | "3/4" | "3/5" | "3/6" | "4/12" | "4/5" | "4/6" | "5/12" | "5/6" | "6/12" | "7/12" | "8/12" | "9/12" | "auto" | "screen" | CssVars | AnyString | AnyNumber

export type BoxSizingValue = string | number | CssVars | AnyString

export type BreakpointsValue = Globals | TokenValue<"breakpoints"> | CssVars | AnyString | AnyNumber

export type BrightnessValue = string | number | CssVars | AnyString

export type ClipPathValue = string | number | CssVars | AnyString

export type ColorPaletteValue = "background" | "blue" | "green" | "grey" | "icon" | "lightGreen" | "lightYellow" | "pink" | "primary" | "purple" | "purple.alpha" | "red" | "stroke" | "surface" | "surface.action" | "surface.action.brand" | "surface.action.brand.1" | "surface.action.brand.1.hover" | "surface.action.brand.2" | "surface.action.myNdla" | "surface.actionSubtle" | "surface.actionSubtle.hover" | "surface.brand" | "surface.brand.1" | "surface.brand.2" | "surface.brand.3" | "surface.brand.4" | "surface.brand.5" | "surface.danger" | "surface.dangerSubtle" | "surface.disabled" | "surface.error" | "surface.errorSubtle" | "surface.infoSubtle" | "surface.subtle" | "surface.success" | "surface.successSubtle" | "surface.warning" | "surface.warningSubtle" | "text" | "white" | "yellow" | CssVars | AnyString | AnyNumber

export type ColorsValue = ColorGlobals | TokenValue<"colors"> | CssVars | AnyString | AnyNumber

export type ContainerNamesValue = Globals | TokenValue<"containerNames"> | CssValue | CssVars | AnyString | AnyNumber

export type ContainerTypeValue = string | number | CssVars | AnyString

export type ContainerValue = string | number | CssVars | AnyString

export type ContrastValue = string | number | CssVars | AnyString

export type CursorValue = Globals | TokenValue<"cursor"> | CssVars | AnyString | AnyNumber

export type DebugValue = boolean | CssVars | AnyString | AnyNumber

export type DisplayValue = WithEscapeHatch<Globals | CssVars | OnlyKnown<"-ms-flexbox" | "-ms-grid" | "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-flex" | "-webkit-inline-flex" | "block" | "contents" | "flex" | "flow" | "flow-root" | "grid" | "inline" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table" | "list-item" | "none" | "ruby" | "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group">>

export type DropShadowsValue = Globals | TokenValue<"dropShadows"> | CssVars | AnyString | AnyNumber

export type DurationsValue = Globals | TokenValue<"durations"> | CssVars | AnyString | AnyNumber

export type EasingsValue = Globals | TokenValue<"easings"> | CssVars | AnyString | AnyNumber

export type FilterValue = "auto" | CssVars | AnyString | AnyNumber

export type FlexBasisValue = DimensionGlobals | TokenValue<"sizes"> | "1/12" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "10/12" | "11/12" | "2/12" | "2/3" | "2/4" | "2/5" | "2/6" | "3/12" | "3/4" | "3/5" | "3/6" | "4/12" | "4/5" | "4/6" | "5/12" | "5/6" | "6/12" | "7/12" | "8/12" | "9/12" | "full" | CssVars | AnyString | AnyNumber

export type FlexDirectionValue = string | number | CssVars | AnyString

export type FlexGrowValue = string | number | CssVars | AnyString

export type FlexShrinkValue = string | number | CssVars | AnyString

export type FlexValue = "1" | "auto" | "initial" | "none" | CssVars | AnyString | AnyNumber

export type FloatValue = WithEscapeHatch<Globals | CssVars | OnlyKnown<"end" | "start" | PropertyValueMap["float"]>>

export type FocusRingValue = "inside" | "mixed" | "none" | "outside" | CssVars | AnyString | AnyNumber

export type FocusVisibleRingValue = "inside" | "mixed" | "none" | "outside" | CssVars | AnyString | AnyNumber

export type FontFeatureSettingsValue = string | number | CssVars | AnyString

export type FontKerningValue = string | number | CssVars | AnyString

export type FontPaletteValue = string | number | CssVars | AnyString

export type FontSizeAdjustValue = string | number | CssVars | AnyString

export type FontSizesValue = Globals | TokenValue<"fontSizes"> | CssVars | AnyString | AnyNumber

export type FontSmoothingValue = "antialiased" | "subpixel-antialiased" | CssVars | AnyString | AnyNumber

export type FontVariantAlternatesValue = string | number | CssVars | AnyString

export type FontVariantCapsValue = string | number | CssVars | AnyString

export type FontVariantNumericValue = string | number | CssVars | AnyString

export type FontVariantValue = string | number | CssVars | AnyString

export type FontVariationSettingsValue = string | number | CssVars | AnyString

export type FontWeightsValue = Globals | TokenValue<"fontWeights"> | CssVars | AnyString | AnyNumber

export type FontsValue = Globals | TokenValue<"fonts"> | CssVars | AnyString | AnyNumber

export type GradientFromPositionValue = string | number | CssVars | AnyString

export type GradientToPositionValue = string | number | CssVars | AnyString

export type GradientViaPositionValue = string | number | CssVars | AnyString

export type GradientsValue = Globals | TokenValue<"gradients"> | CssVars | AnyString | AnyNumber

export type GrayscaleValue = string | number | CssVars | AnyString

export type GridAutoColumnsValue = "fr" | "max" | "min" | CssVars | AnyString | AnyNumber

export type GridAutoFlowValue = string | number | CssVars | AnyString

export type GridAutoRowsValue = "fr" | "max" | "min" | CssVars | AnyString | AnyNumber

export type GridColumnEndValue = string | number | CssVars | AnyString

export type GridColumnStartValue = string | number | CssVars | AnyString

export type GridColumnValue = string | number | CssVars | AnyString

export type GridRowValue = string | number | CssVars | AnyString

export type GridTemplateColumnsValue = string | number | CssVars | AnyString

export type GridTemplateRowsValue = string | number | CssVars | AnyString

export type HeightValue = DimensionGlobals | TokenValue<"sizes"> | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "2/3" | "2/4" | "2/5" | "2/6" | "3/4" | "3/5" | "3/6" | "4/5" | "4/6" | "5/6" | "auto" | "dvh" | "lvh" | "screen" | "svh" | CssVars | AnyString | AnyNumber

export type HueRotateValue = string | number | CssVars | AnyString

export type HyphensValue = string | number | CssVars | AnyString

export type InlineSizeValue = DimensionGlobals | TokenValue<"sizes"> | "1/12" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "10/12" | "11/12" | "2/12" | "2/3" | "2/4" | "2/5" | "2/6" | "3/12" | "3/4" | "3/5" | "3/6" | "4/12" | "4/5" | "4/6" | "5/12" | "5/6" | "6/12" | "7/12" | "8/12" | "9/12" | "auto" | "screen" | CssVars | AnyString | AnyNumber

export type InvertValue = string | number | CssVars | AnyString

export type JustifyContentValue = string | number | CssVars | AnyString

export type KeyframesValue = Globals | TokenValue<"keyframes"> | CssVars | AnyString | AnyNumber

export type LetterSpacingsValue = Globals | TokenValue<"letterSpacings"> | CssVars | AnyString | AnyNumber

export type LineClampValue = string | number | CssVars | AnyString

export type LineHeightsValue = Globals | TokenValue<"lineHeights"> | CssVars | AnyString | AnyNumber

export type ListStylePositionValue = string | number | CssVars | AnyString

export type ListStyleTypeValue = string | number | CssVars | AnyString

export type ListStyleValue = string | number | CssVars | AnyString

export type MaskImageValue = string | number | CssVars | AnyString

export type MaskSizeValue = string | number | CssVars | AnyString

export type MaskValue = string | number | CssVars | AnyString

export type MaxBlockSizeValue = DimensionGlobals | TokenValue<"sizes"> | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "2/3" | "2/4" | "2/5" | "2/6" | "3/4" | "3/5" | "3/6" | "4/5" | "4/6" | "5/6" | "auto" | "dvh" | "lvh" | "screen" | "svh" | CssVars | AnyString | AnyNumber

export type MaxHeightValue = DimensionGlobals | TokenValue<"sizes"> | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "2/3" | "2/4" | "2/5" | "2/6" | "3/4" | "3/5" | "3/6" | "4/5" | "4/6" | "5/6" | "auto" | "dvh" | "lvh" | "screen" | "svh" | CssVars | AnyString | AnyNumber

export type MaxInlineSizeValue = DimensionGlobals | TokenValue<"sizes"> | "1/12" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "10/12" | "11/12" | "2/12" | "2/3" | "2/4" | "2/5" | "2/6" | "3/12" | "3/4" | "3/5" | "3/6" | "4/12" | "4/5" | "4/6" | "5/12" | "5/6" | "6/12" | "7/12" | "8/12" | "9/12" | "auto" | "screen" | CssVars | AnyString | AnyNumber

export type MaxWidthValue = DimensionGlobals | TokenValue<"sizes"> | "1/12" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "10/12" | "11/12" | "2/12" | "2/3" | "2/4" | "2/5" | "2/6" | "3/12" | "3/4" | "3/5" | "3/6" | "4/12" | "4/5" | "4/6" | "5/12" | "5/6" | "6/12" | "7/12" | "8/12" | "9/12" | "auto" | "screen" | CssVars | AnyString | AnyNumber

export type MinBlockSizeValue = DimensionGlobals | TokenValue<"sizes"> | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "2/3" | "2/4" | "2/5" | "2/6" | "3/4" | "3/5" | "3/6" | "4/5" | "4/6" | "5/6" | "auto" | "dvh" | "lvh" | "screen" | "svh" | CssVars | AnyString | AnyNumber

export type MinHeightValue = DimensionGlobals | TokenValue<"sizes"> | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "2/3" | "2/4" | "2/5" | "2/6" | "3/4" | "3/5" | "3/6" | "4/5" | "4/6" | "5/6" | "auto" | "dvh" | "lvh" | "screen" | "svh" | CssVars | AnyString | AnyNumber

export type MinInlineSizeValue = DimensionGlobals | TokenValue<"sizes"> | "1/12" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "10/12" | "11/12" | "2/12" | "2/3" | "2/4" | "2/5" | "2/6" | "3/12" | "3/4" | "3/5" | "3/6" | "4/12" | "4/5" | "4/6" | "5/12" | "5/6" | "6/12" | "7/12" | "8/12" | "9/12" | "auto" | "screen" | CssVars | AnyString | AnyNumber

export type MinWidthValue = DimensionGlobals | TokenValue<"sizes"> | "1/12" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "10/12" | "11/12" | "2/12" | "2/3" | "2/4" | "2/5" | "2/6" | "3/12" | "3/4" | "3/5" | "3/6" | "4/12" | "4/5" | "4/6" | "5/12" | "5/6" | "6/12" | "7/12" | "8/12" | "9/12" | "auto" | "screen" | CssVars | AnyString | AnyNumber

export type MixBlendModeValue = WithEscapeHatch<PropertyValueMap["mixBlendMode"]>

export type ObjectFitValue = WithEscapeHatch<PropertyValueMap["objectFit"]>

export type ObjectPositionValue = string | number | CssVars | AnyString

export type OpacityValue = Globals | TokenValue<"opacity"> | CssVars | AnyString | AnyNumber

export type OverflowAnchorValue = string | number | CssVars | AnyString

export type OverflowBlockValue = string | number | CssVars | AnyString

export type OverflowClipBoxValue = string | number | CssVars | AnyString

export type OverflowClipMarginValue = string | number | CssVars | AnyString

export type OverflowInlineValue = string | number | CssVars | AnyString

export type OverflowValue = WithEscapeHatch<PropertyValueMap["overflow"]>

export type OverflowWrapValue = string | number | CssVars | AnyString

export type OverflowXValue = string | number | CssVars | AnyString

export type OverflowYValue = string | number | CssVars | AnyString

export type OverscrollBehaviorBlockValue = string | number | CssVars | AnyString

export type OverscrollBehaviorInlineValue = string | number | CssVars | AnyString

export type OverscrollBehaviorValue = string | number | CssVars | AnyString

export type OverscrollBehaviorXValue = string | number | CssVars | AnyString

export type OverscrollBehaviorYValue = string | number | CssVars | AnyString

export type PositionValue = WithEscapeHatch<PropertyValueMap["position"]>

export type RadiiValue = Globals | TokenValue<"radii"> | CssVars | AnyString | AnyNumber

export type RotateValue = CssValue | "auto" | "auto-3d" | CssVars | AnyString | AnyNumber

export type SaturateValue = string | number | CssVars | AnyString

export type ScaleValue = CssValue | "auto" | CssVars | AnyString | AnyNumber

export type ScaleXValue = string | number | CssVars | AnyString

export type ScaleYValue = string | number | CssVars | AnyString

export type ScrollBehaviorValue = string | number | CssVars | AnyString

export type ScrollSnapAlignValue = string | number | CssVars | AnyString

export type ScrollSnapCoordinateValue = string | number | CssVars | AnyString

export type ScrollSnapDestinationValue = string | number | CssVars | AnyString

export type ScrollSnapPointsXValue = string | number | CssVars | AnyString

export type ScrollSnapPointsYValue = string | number | CssVars | AnyString

export type ScrollSnapStopValue = string | number | CssVars | AnyString

export type ScrollSnapStrictnessValue = "mandatory" | "proximity" | CssVars | AnyString | AnyNumber

export type ScrollSnapTypeValue = "both" | "none" | "x" | "y" | CssVars | AnyString | AnyNumber

export type ScrollSnapTypeXValue = string | number | CssVars | AnyString

export type ScrollSnapTypeYValue = string | number | CssVars | AnyString

export type ScrollTimelineAxisValue = string | number | CssVars | AnyString

export type ScrollTimelineNameValue = string | number | CssVars | AnyString

export type ScrollTimelineValue = string | number | CssVars | AnyString

export type ScrollbarGutterValue = string | number | CssVars | AnyString

export type ScrollbarValue = "hidden" | "visible" | CssVars | AnyString | AnyNumber

export type SepiaValue = string | number | CssVars | AnyString

export type ShadowsValue = Globals | TokenValue<"shadows"> | CssVars | AnyString | AnyNumber

export type SizesValue = DimensionGlobals | TokenValue<"sizes"> | CssVars | AnyString | AnyNumber

export type SpacingValue = AutoGlobals | TokenValue<"spacing"> | "auto" | CssVars | AnyString | AnyNumber

export type SrOnlyValue = boolean | CssVars | AnyString | AnyNumber

export type StrokeDasharrayValue = string | number | CssVars | AnyString

export type StrokeDashoffsetValue = string | number | CssVars | AnyString

export type StrokeLinecapValue = string | number | CssVars | AnyString

export type StrokeLinejoinValue = string | number | CssVars | AnyString

export type StrokeMiterlimitValue = string | number | CssVars | AnyString

export type StrokeOpacityValue = string | number | CssVars | AnyString

export type TableLayoutValue = string | number | CssVars | AnyString

export type TextAlignValue = string | number | CssVars | AnyString

export type TextDecorationStyleValue = string | number | CssVars | AnyString

export type TextDecorationThicknessValue = string | number | CssVars | AnyString

export type TextDecorationValue = string | number | CssVars | AnyString

export type TextGradientValue = "to-b" | "to-bl" | "to-br" | "to-l" | "to-r" | "to-t" | "to-tl" | "to-tr" | CssVars | AnyString | AnyNumber

export type TextOverflowValue = string | number | CssVars | AnyString

export type TextSizeAdjustValue = string | number | CssVars | AnyString

export type TextStyleValue = "body.article" | "body.articleLink" | "body.large" | "body.link" | "body.medium" | "body.small" | "body.xlarge" | "heading.large" | "heading.medium" | "heading.small" | "label.large" | "label.medium" | "label.small" | "label.xsmall" | "title.large" | "title.medium" | "title.small" | CssVars | AnyString | AnyNumber

export type TextTransformValue = string | number | CssVars | AnyString

export type TextUnderlineOffsetValue = string | number | CssVars | AnyString

export type TextWrapValue = "balance" | "nowrap" | "wrap" | CssVars | AnyString | AnyNumber

export type TouchActionValue = WithEscapeHatch<Globals | CssVars | OnlyKnown<"-ms-manipulation" | "-ms-none" | "-ms-pan-x" | "-ms-pan-y" | "-ms-pinch-zoom" | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom">>

export type TransformBoxValue = WithEscapeHatch<PropertyValueMap["transformBox"]>

export type TransformOriginValue = string | number | CssVars | AnyString

export type TransformStyleValue = string | number | CssVars | AnyString

export type TransformValue = string | number | CssVars | AnyString

export type TransitionPropertyValue = "background" | "colors" | "common" | "position" | "size" | CssVars | AnyString | AnyNumber

export type TransitionValue = "all" | "background" | "colors" | "common" | "opacity" | "position" | "shadow" | "size" | "transform" | CssVars | AnyString | AnyNumber

export type TranslateValue = CssValue | "auto" | "auto-3d" | CssVars | AnyString | AnyNumber

export type TranslateXValue = AutoGlobals | TokenValue<"spacing"> | "-1/2" | "-1/3" | "-1/4" | "-2/3" | "-2/4" | "-3/4" | "-full" | "1/2" | "1/3" | "1/4" | "2/3" | "2/4" | "3/4" | "full" | CssVars | AnyString | AnyNumber

export type TranslateYValue = AutoGlobals | TokenValue<"spacing"> | "-1/2" | "-1/3" | "-1/4" | "-2/3" | "-2/4" | "-3/4" | "-full" | "1/2" | "1/3" | "1/4" | "2/3" | "2/4" | "3/4" | "full" | CssVars | AnyString | AnyNumber

export type TranslateZValue = AutoGlobals | TokenValue<"spacing"> | "-1/2" | "-1/3" | "-1/4" | "-2/3" | "-2/4" | "-3/4" | "-full" | "1/2" | "1/3" | "1/4" | "2/3" | "2/4" | "3/4" | "full" | CssVars | AnyString | AnyNumber

export type TruncateValue = boolean | CssVars | AnyString | AnyNumber

export type UserSelectValue = WithEscapeHatch<PropertyValueMap["userSelect"]>

export type VerticalAlignValue = string | number | CssVars | AnyString

export type VisibilityValue = string | number | CssVars | AnyString

export type WidthValue = DimensionGlobals | TokenValue<"sizes"> | "1/12" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "10/12" | "11/12" | "2/12" | "2/3" | "2/4" | "2/5" | "2/6" | "3/12" | "3/4" | "3/5" | "3/6" | "4/12" | "4/5" | "4/6" | "5/12" | "5/6" | "6/12" | "7/12" | "8/12" | "9/12" | "auto" | "screen" | CssVars | AnyString | AnyNumber

export type WordBreakValue = WithEscapeHatch<PropertyValueMap["wordBreak"]>

export type ZIndexValue = AutoGlobals | TokenValue<"zIndex"> | CssVars | AnyString | AnyNumber

export type AtRuleType = "media" | "layer" | "container" | "supports" | "page" | "scope" | "starting-style"

export type Selector = `${string}&` | `&${string}` | `@${AtRuleType}${string}`

export type AnySelector = Selector | string

export type Nested<P> = P & {
  [K in Selector]?: Nested<P>
} & {
  [K in AnySelector]?: Nested<P>
} & {
  [K in Condition]?: Nested<P>
}

export type Globals = "inherit" | "initial" | "revert" | "revert-layer" | "unset"

export type ColorGlobals = Globals | "currentColor" | "transparent"

export type DimensionGlobals = Globals | "auto" | "fit-content" | "max-content" | "min-content"

export type AutoGlobals = Globals | "auto"

export type LengthValue = DimensionGlobals | (string & {}) | number

export type NamedColor = "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen"

export type SystemColor = "AccentColor" | "AccentColorText" | "ActiveText" | "ButtonBorder" | "ButtonFace" | "ButtonText" | "Canvas" | "CanvasText" | "Field" | "FieldText" | "GrayText" | "Highlight" | "HighlightText" | "LinkText" | "Mark" | "MarkText" | "SelectedItem" | "SelectedItemText" | "VisitedText"

export type ColorCssValue = ColorGlobals | NamedColor | SystemColor | (string & {})

export type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large"

export type BgSizeValue = LengthValue | "auto" | "contain" | "cover"

export type FontSizeValue = LengthValue | AbsoluteSize | "larger" | "smaller" | "math"

export type FontWeightValue = Globals | "bold" | "normal" | (string & {}) | number

export type LineWidthValue = LengthValue | "medium" | "thick" | "thin"

export type LineStyleValue = Globals | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid"

export type OpenLineStyleValue = LineStyleValue | (string & {})

export type RepeatStyleValue = Globals | "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | (string & {})

export type FontStretchValue = Globals | "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded" | (string & {})

export type OverflowCssValue = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "overlay" | "scroll" | "visible"

export type OpenOverflowCssValue = OverflowCssValue | (string & {})

export type OverflowShortCssValue = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible"

export type OverscrollBehaviorCssValue = Globals | "auto" | "contain" | "none"

export type OpenOverscrollBehaviorCssValue = OverscrollBehaviorCssValue | (string & {})

export type PositionValue = LengthValue | "bottom" | "center" | "left" | "right" | "top"

export type GenericFamily = "-apple-system" | "cursive" | "emoji" | "fangsong" | "fantasy" | "math" | "monospace" | "sans-serif" | "serif" | "system-ui" | "ui-monospace" | "ui-rounded" | "ui-sans-serif" | "ui-serif"

export type FontFamilyValue = Globals | GenericFamily | (string & {})

export type NumericCssValue = Globals | (string & {}) | number

export type ZIndexValue = AutoGlobals | (string & {}) | number

export type CssValue = Globals | (string & {}) | number

export type PropertyValueMap = {
  accentColor: ColorCssValue
  alignContent: Globals | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "normal" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | (string & {})
  alignItems: Globals | "anchor-center" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "normal" | "self-end" | "self-start" | "start" | "stretch" | (string & {})
  alignSelf: Globals | "anchor-center" | "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "normal" | "self-end" | "self-start" | "start" | "stretch" | (string & {})
  alignmentBaseline: Globals | "alphabetic" | "baseline" | "central" | "ideographic" | "mathematical" | "middle" | "text-after-edge" | "text-before-edge"
  appearance: Globals | "auto" | "button" | "checkbox" | "listbox" | "menulist" | "menulist-button" | "meter" | "none" | "progress-bar" | "radio" | "searchfield" | "textarea" | "textfield"
  backgroundColor: ColorCssValue
  backgroundPosition: PositionValue
  backgroundRepeat: RepeatStyleValue
  backgroundSize: BgSizeValue
  baselineShift: LengthValue
  blockSize: LengthValue
  borderBlockColor: ColorCssValue
  borderBlockEndColor: ColorCssValue
  borderBlockEndStyle: LineStyleValue
  borderBlockEndWidth: LineWidthValue
  borderBlockStartColor: ColorCssValue
  borderBlockStartStyle: LineStyleValue
  borderBlockStartWidth: LineWidthValue
  borderBlockStyle: OpenLineStyleValue
  borderBlockWidth: LineWidthValue
  borderBottomColor: ColorCssValue
  borderBottomLeftRadius: LengthValue
  borderBottomRightRadius: LengthValue
  borderBottomStyle: LineStyleValue
  borderBottomWidth: LineWidthValue
  borderColor: ColorCssValue
  borderEndEndRadius: LengthValue
  borderEndStartRadius: LengthValue
  borderImage: Globals | "none" | "repeat" | "round" | "space" | "stretch" | (string & {})
  borderImageWidth: LengthValue
  borderInlineColor: ColorCssValue
  borderInlineEndColor: ColorCssValue
  borderInlineEndStyle: LineStyleValue
  borderInlineEndWidth: LineWidthValue
  borderInlineStartColor: ColorCssValue
  borderInlineStartStyle: LineStyleValue
  borderInlineStartWidth: LineWidthValue
  borderInlineStyle: OpenLineStyleValue
  borderInlineWidth: LineWidthValue
  borderLeftColor: ColorCssValue
  borderLeftStyle: LineStyleValue
  borderLeftWidth: LineWidthValue
  borderRadius: LengthValue
  borderRightColor: ColorCssValue
  borderRightStyle: LineStyleValue
  borderRightWidth: LineWidthValue
  borderSpacing: LengthValue
  borderStartEndRadius: LengthValue
  borderStartStartRadius: LengthValue
  borderStyle: OpenLineStyleValue
  borderTopColor: ColorCssValue
  borderTopLeftRadius: LengthValue
  borderTopRightRadius: LengthValue
  borderTopStyle: LineStyleValue
  borderTopWidth: LineWidthValue
  borderWidth: LineWidthValue
  bottom: LengthValue
  boxAlign: Globals | "baseline" | "center" | "end" | "start" | "stretch"
  breakAfter: Globals | "all" | "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso"
  breakBefore: PropertyValueMap["breakAfter"]
  breakInside: Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region"
  caret: Globals | "auto" | "bar" | "block" | "currentColor" | "underscore" | (string & {})
  caretColor: ColorCssValue
  clear: Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right"
  clipPath: Globals | "fill-box" | "margin-box" | "none" | "stroke-box" | "view-box" | (string & {})
  color: ColorCssValue
  colorScheme: Globals | "dark" | "light" | "normal" | (string & {})
  columnGap: LengthValue
  columnRuleColor: ColorCssValue
  columnRuleStyle: OpenLineStyleValue
  columnRuleWidth: LineWidthValue
  columnWidth: LengthValue
  contain: Globals | "content" | "inline-size" | "layout" | "none" | "paint" | "size" | "strict" | "style" | (string & {})
  containIntrinsicBlockSize: LengthValue
  containIntrinsicHeight: LengthValue
  containIntrinsicInlineSize: LengthValue
  containIntrinsicSize: LengthValue
  containIntrinsicWidth: LengthValue
  containerType: Globals | "inline-size" | "normal" | "scroll-state" | "size" | (string & {})
  content: Globals | "close-quote" | "no-close-quote" | "no-open-quote" | "none" | "normal" | "open-quote" | (string & {})
  cursor: Globals | "-moz-grab" | "-moz-zoom-in" | "-moz-zoom-out" | "-webkit-grab" | "-webkit-grabbing" | "-webkit-zoom-in" | "-webkit-zoom-out" | "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "vertical-text" | "w-resize" | "wait" | "zoom-in" | "zoom-out" | (string & {})
  display: Globals | "-ms-flexbox" | "-ms-grid" | "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-flex" | "-webkit-inline-flex" | "block" | "contents" | "flex" | "flow" | "flow-root" | "grid" | "inline" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table" | "list-item" | "none" | "ruby" | "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | (string & {})
  dominantBaseline: Globals | "alphabetic" | "auto" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "text-bottom" | "text-top"
  fieldSizing: Globals | "content" | "fixed"
  flexBasis: LengthValue
  flexFlow: Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | (string & {})
  flexGrow: NumericCssValue
  flexShrink: NumericCssValue
  float: Globals | "inline-end" | "inline-start" | "left" | "none" | "right"
  floodColor: ColorCssValue
  font: Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | (string & {})
  fontFamily: FontFamilyValue
  fontSize: FontSizeValue
  fontSizeAdjust: LengthValue
  fontStretch: FontStretchValue
  fontStyle: Globals | "italic" | "normal" | "oblique" | (string & {})
  fontSynthesis: Globals | "none" | "position" | "small-caps" | "style" | "weight" | (string & {})
  fontVariantCaps: Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase"
  fontVariantEastAsian: Globals | "full-width" | "jis04" | "jis78" | "jis83" | "jis90" | "normal" | "proportional-width" | "ruby" | "simplified" | "traditional" | (string & {})
  fontVariantLigatures: Globals | "common-ligatures" | "contextual" | "discretionary-ligatures" | "historical-ligatures" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | (string & {})
  fontVariantNumeric: Globals | "diagonal-fractions" | "lining-nums" | "normal" | "oldstyle-nums" | "ordinal" | "proportional-nums" | "slashed-zero" | "stacked-fractions" | "tabular-nums" | (string & {})
  fontWeight: FontWeightValue
  fontWidth: FontStretchValue
  gap: LengthValue
  gridAutoFlow: Globals | "column" | "dense" | "row" | (string & {})
  gridColumnGap: LengthValue
  gridGap: LengthValue
  gridRowGap: LengthValue
  hangingPunctuation: Globals | "allow-end" | "first" | "force-end" | "last" | "none" | (string & {})
  height: LengthValue
  hyphens: Globals | "auto" | "manual" | "none"
  imageRendering: Globals | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated" | "smooth"
  imeMode: Globals | "active" | "auto" | "disabled" | "inactive" | "normal"
  inlineSize: LengthValue
  inset: LengthValue
  justifyContent: Globals | "center" | "end" | "flex-end" | "flex-start" | "left" | "normal" | "right" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | (string & {})
  justifyItems: Globals | "anchor-center" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "left" | "legacy" | "normal" | "right" | "self-end" | "self-start" | "start" | "stretch" | (string & {})
  justifySelf: Globals | "anchor-center" | "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "left" | "normal" | "right" | "self-end" | "self-start" | "start" | "stretch" | (string & {})
  left: LengthValue
  letterSpacing: LengthValue
  lightingColor: ColorCssValue
  lineBreak: Globals | "anywhere" | "auto" | "loose" | "normal" | "strict"
  lineHeight: NumericCssValue
  lineHeightStep: LengthValue
  listStyleImage: Globals | "none" | (string & {})
  listStylePosition: Globals | "inside" | "outside"
  listStyleType: PropertyValueMap["listStyleImage"]
  margin: LengthValue
  marginBottom: LengthValue
  marginLeft: LengthValue
  marginRight: LengthValue
  marginTop: LengthValue
  maskBorder: Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | (string & {})
  maskBorderWidth: LengthValue
  maskPosition: PositionValue
  maskRepeat: RepeatStyleValue
  maskSize: LengthValue
  maxBlockSize: LengthValue
  maxHeight: LengthValue
  maxInlineSize: LengthValue
  maxWidth: LengthValue
  minBlockSize: LengthValue
  minHeight: LengthValue
  minInlineSize: LengthValue
  minWidth: LengthValue
  mixBlendMode: Globals | "color" | "color-burn" | "color-dodge" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "plus-darker" | "plus-lighter" | "saturation" | "screen" | "soft-light"
  objectFit: Globals | "contain" | "cover" | "fill" | "none" | "scale-down"
  objectPosition: PositionValue
  offsetAnchor: PositionValue
  offsetPosition: PositionValue
  opacity: NumericCssValue
  order: NumericCssValue
  orphans: NumericCssValue
  outlineColor: ColorCssValue
  outlineOffset: LengthValue
  outlineStyle: Globals | "auto" | "dashed" | "dotted" | "double" | "groove" | "inset" | "none" | "outset" | "ridge" | "solid"
  outlineWidth: LineWidthValue
  overflow: OpenOverflowCssValue
  overflowBlock: OverflowShortCssValue
  overflowClipMargin: LengthValue
  overflowInline: OverflowShortCssValue
  overflowX: OverflowCssValue
  overflowY: OverflowCssValue
  overscrollBehavior: OpenOverscrollBehaviorCssValue
  overscrollBehaviorX: OverscrollBehaviorCssValue
  overscrollBehaviorY: OverscrollBehaviorCssValue
  padding: LengthValue
  paddingBottom: LengthValue
  paddingLeft: LengthValue
  paddingRight: LengthValue
  paddingTop: LengthValue
  pageBreakAfter: Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso"
  pageBreakBefore: PropertyValueMap["pageBreakAfter"]
  perspective: LengthValue
  perspectiveOrigin: PositionValue
  placeContent: PropertyValueMap["alignContent"]
  placeItems: PropertyValueMap["alignItems"]
  placeSelf: PropertyValueMap["alignSelf"]
  pointerEvents: Globals | "all" | "auto" | "fill" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke"
  position: Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky"
  positionTryOrder: Globals | "most-block-size" | "most-height" | "most-inline-size" | "most-width" | "normal"
  resize: Globals | "block" | "both" | "horizontal" | "inline" | "none" | "vertical"
  right: LengthValue
  rowGap: LengthValue
  scrollMarginBlock: LengthValue
  scrollMarginBlockEnd: LengthValue
  scrollMarginBlockStart: LengthValue
  scrollMarginBottom: LengthValue
  scrollMarginInline: LengthValue
  scrollMarginInlineEnd: LengthValue
  scrollMarginInlineStart: LengthValue
  scrollMarginLeft: LengthValue
  scrollMarginRight: LengthValue
  scrollMarginTop: LengthValue
  scrollPaddingBlock: LengthValue
  scrollPaddingBlockEnd: LengthValue
  scrollPaddingBlockStart: LengthValue
  scrollPaddingBottom: LengthValue
  scrollPaddingInline: LengthValue
  scrollPaddingInlineEnd: LengthValue
  scrollPaddingInlineStart: LengthValue
  scrollPaddingLeft: LengthValue
  scrollPaddingRight: LengthValue
  scrollPaddingTop: LengthValue
  scrollSnapAlign: Globals | "center" | "end" | "none" | "start" | (string & {})
  scrollSnapDestination: PositionValue
  scrollSnapStop: Globals | "always" | "normal"
  scrollSnapType: Globals | "block" | "both" | "inline" | "none" | "x" | "y" | (string & {})
  shapeMargin: LengthValue
  shapeOutside: Globals | "border-box" | "content-box" | "margin-box" | "none" | "padding-box" | (string & {})
  speakAs: Globals | "digits" | "literal-punctuation" | "no-punctuation" | "normal" | "spell-out" | (string & {})
  stopColor: ColorCssValue
  strokeColor: ColorCssValue
  strokeLinejoin: Globals | "arcs" | "bevel" | "miter" | "miter-clip" | "round"
  strokeWidth: LengthValue
  tabSize: LengthValue
  tableLayout: Globals | "auto" | "fixed"
  textAlign: Globals | "-khtml-center" | "-khtml-left" | "-khtml-right" | "-moz-center" | "-moz-left" | "-moz-right" | "-webkit-center" | "-webkit-left" | "-webkit-match-parent" | "-webkit-right" | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start"
  textAlignLast: Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start"
  textAutospace: Globals | "auto" | "ideograph-alpha" | "ideograph-numeric" | "insert" | "no-autospace" | "normal" | "punctuation" | "replace" | (string & {})
  textBox: Globals | "auto" | "cap" | "ex" | "ideographic" | "ideographic-ink" | "none" | "normal" | "text" | "trim-both" | "trim-end" | "trim-start" | (string & {})
  textBoxEdge: Globals | "auto" | "cap" | "ex" | "ideographic" | "ideographic-ink" | "text" | (string & {})
  textDecorationColor: ColorCssValue
  textDecorationLine: Globals | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | (string & {})
  textDecorationSkip: Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | (string & {})
  textDecorationSkipInk: Globals | "all" | "auto" | "none"
  textDecorationStyle: Globals | "dashed" | "dotted" | "double" | "solid" | "wavy"
  textDecorationThickness: LengthValue
  textEmphasis: Globals | "circle" | "currentColor" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {})
  textEmphasisColor: ColorCssValue
  textEmphasisPosition: Globals | "auto" | "over" | "under" | (string & {})
  textEmphasisStyle: Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {})
  textIndent: LengthValue
  textJustify: Globals | "auto" | "distribute" | "inter-character" | "inter-word" | "none"
  textOrientation: Globals | "mixed" | "sideways" | "sideways-right" | "upright"
  textOverflow: Globals | "clip" | "ellipsis" | (string & {})
  textRendering: Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed"
  textSizeAdjust: LengthValue
  textTransform: Globals | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "math-auto" | "none" | "uppercase" | (string & {})
  textUnderlineOffset: LengthValue
  textUnderlinePosition: Globals | "auto" | "from-font" | "left" | "right" | "under" | (string & {})
  textWrap: Globals | "auto" | "balance" | "nowrap" | "pretty" | "stable" | "wrap" | (string & {})
  textWrapMode: Globals | "nowrap" | "wrap"
  textWrapStyle: Globals | "auto" | "balance" | "pretty" | "stable"
  top: LengthValue
  touchAction: Globals | "-ms-manipulation" | "-ms-none" | "-ms-pan-x" | "-ms-pan-y" | "-ms-pinch-zoom" | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | (string & {})
  transformBox: Globals | "border-box" | "content-box" | "fill-box" | "stroke-box" | "view-box"
  transitionBehavior: Globals | "allow-discrete" | "normal" | (string & {})
  transitionProperty: Globals | "all" | "none" | (string & {})
  unicodeBidi: Globals | "-moz-isolate" | "-moz-isolate-override" | "-moz-plaintext" | "-webkit-isolate" | "-webkit-isolate-override" | "-webkit-plaintext" | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext"
  userSelect: Globals | "-moz-none" | "all" | "auto" | "none" | "text"
  vectorEffect: Globals | "fixed-position" | "non-rotation" | "non-scaling-size" | "non-scaling-stroke" | "none"
  verticalAlign: Globals | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | (string & {})
  viewTimelineInset: LengthValue
  whiteSpace: Globals | "-moz-pre-wrap" | "break-spaces" | "collapse" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | "preserve" | "preserve-breaks" | "preserve-spaces" | "wrap" | (string & {})
  whiteSpaceCollapse: Globals | "break-spaces" | "collapse" | "preserve" | "preserve-breaks" | "preserve-spaces"
  widows: NumericCssValue
  width: LengthValue
  wordBreak: Globals | "auto-phrase" | "break-all" | "break-word" | "keep-all" | "normal"
  wordSpacing: LengthValue
  wordWrap: Globals | "break-word" | "normal"
  writingMode: Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl"
  zIndex: ZIndexValue
  zoom: NumericCssValue
}

export interface SystemProperties {
  WebkitAppearance?: ConditionalValue<CssValue>
  WebkitBorderBefore?: ConditionalValue<CssValue>
  WebkitBorderBeforeColor?: ConditionalValue<CssValue>
  WebkitBorderBeforeStyle?: ConditionalValue<CssValue>
  WebkitBorderBeforeWidth?: ConditionalValue<CssValue>
  WebkitBoxReflect?: ConditionalValue<CssValue>
  WebkitLineClamp?: ConditionalValue<CssValue>
  WebkitMask?: ConditionalValue<CssValue>
  WebkitMaskAttachment?: ConditionalValue<CssValue>
  WebkitMaskClip?: ConditionalValue<CssValue>
  WebkitMaskComposite?: ConditionalValue<CssValue>
  WebkitMaskImage?: ConditionalValue<CssValue>
  WebkitMaskOrigin?: ConditionalValue<CssValue>
  WebkitMaskPosition?: ConditionalValue<CssValue>
  WebkitMaskPositionX?: ConditionalValue<CssValue>
  WebkitMaskPositionY?: ConditionalValue<CssValue>
  WebkitMaskRepeat?: ConditionalValue<CssValue>
  WebkitMaskRepeatX?: ConditionalValue<CssValue>
  WebkitMaskRepeatY?: ConditionalValue<CssValue>
  WebkitMaskSize?: ConditionalValue<CssValue>
  WebkitOverflowScrolling?: ConditionalValue<CssValue>
  WebkitTapHighlightColor?: ConditionalValue<CssValue>
  WebkitTextFillColor?: ConditionalValue<ColorsValue | CssValue>
  WebkitTextStroke?: ConditionalValue<CssValue>
  WebkitTextStrokeColor?: ConditionalValue<CssValue>
  WebkitTextStrokeWidth?: ConditionalValue<CssValue>
  WebkitTouchCallout?: ConditionalValue<CssValue>
  WebkitUserModify?: ConditionalValue<CssValue>
  WebkitUserSelect?: ConditionalValue<CssValue>
  accentColor?: ConditionalValue<ColorsValue | PropertyValueMap["accentColor"]>
  alignContent?: ConditionalValue<AlignContentValue>
  alignItems?: ConditionalValue<AlignItemsValue>
  alignSelf?: ConditionalValue<AlignSelfValue>
  alignTracks?: ConditionalValue<CssValue>
  alignmentBaseline?: ConditionalValue<PropertyValueMap["alignmentBaseline"] | AnyString>
  all?: ConditionalValue<CssValue>
  anchorName?: ConditionalValue<CssValue>
  anchorScope?: ConditionalValue<CssValue>
  animation?: ConditionalValue<AnimationsValue | CssValue>
  animationComposition?: ConditionalValue<AnimationCompositionValue | CssValue>
  animationDelay?: ConditionalValue<DurationsValue | CssValue>
  animationDirection?: ConditionalValue<AnimationDirectionValue | CssValue>
  animationDuration?: ConditionalValue<DurationsValue | CssValue>
  animationFillMode?: ConditionalValue<AnimationFillModeValue | CssValue>
  animationIterationCount?: ConditionalValue<AnimationIterationCountValue | CssValue>
  animationName?: ConditionalValue<KeyframesValue | CssValue>
  animationPlayState?: ConditionalValue<AnimationPlayStateValue | CssValue>
  animationRange?: ConditionalValue<AnimationRangeValue | CssValue>
  animationRangeEnd?: ConditionalValue<AnimationRangeEndValue | CssValue>
  animationRangeStart?: ConditionalValue<AnimationRangeStartValue | CssValue>
  animationTimeline?: ConditionalValue<AnimationTimelineValue | CssValue>
  animationTimingFunction?: ConditionalValue<EasingsValue | CssValue>
  appearance?: ConditionalValue<AppearanceValue>
  aspectRatio?: ConditionalValue<AspectRatiosValue | CssValue>
  backdropFilter?: ConditionalValue<BackdropFilterValue | CssValue>
  backfaceVisibility?: ConditionalValue<BackfaceVisibilityValue | CssValue>
  background?: ConditionalValue<ColorsValue | CssValue>
  backgroundAttachment?: ConditionalValue<BackgroundAttachmentValue | CssValue>
  backgroundBlendMode?: ConditionalValue<BackgroundBlendModeValue | CssValue>
  backgroundClip?: ConditionalValue<BackgroundClipValue | CssValue>
  backgroundColor?: ConditionalValue<ColorsValue | PropertyValueMap["backgroundColor"]>
  backgroundImage?: ConditionalValue<AssetsValue | CssValue>
  backgroundOrigin?: ConditionalValue<BackgroundOriginValue | CssValue>
  backgroundPosition?: ConditionalValue<BackgroundPositionValue>
  backgroundPositionX?: ConditionalValue<BackgroundPositionXValue | CssValue>
  backgroundPositionY?: ConditionalValue<BackgroundPositionYValue | CssValue>
  backgroundRepeat?: ConditionalValue<BackgroundRepeatValue>
  backgroundSize?: ConditionalValue<BackgroundSizeValue>
  baselineShift?: ConditionalValue<PropertyValueMap["baselineShift"]>
  blockSize?: ConditionalValue<BlockSizeValue | PropertyValueMap["blockSize"]>
  border?: ConditionalValue<BordersValue | CssValue>
  borderBlock?: ConditionalValue<BordersValue | CssValue>
  borderBlockColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderBlockColor"]>
  borderBlockEnd?: ConditionalValue<BordersValue | CssValue>
  borderBlockEndColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderBlockEndColor"]>
  borderBlockEndStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderBlockEndStyle"]>>
  borderBlockEndWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderBlockEndWidth"]>
  borderBlockStart?: ConditionalValue<BordersValue | CssValue>
  borderBlockStartColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderBlockStartColor"]>
  borderBlockStartStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderBlockStartStyle"]>>
  borderBlockStartWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderBlockStartWidth"]>
  borderBlockStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderBlockStyle"]>>
  borderBlockWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderBlockWidth"]>
  borderBottom?: ConditionalValue<BordersValue | CssValue>
  borderBottomColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderBottomColor"]>
  borderBottomLeftRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderBottomLeftRadius"]>
  borderBottomRightRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderBottomRightRadius"]>
  borderBottomStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderBottomStyle"]>>
  borderBottomWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderBottomWidth"]>
  borderCollapse?: ConditionalValue<BorderCollapseValue | CssValue>
  borderColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderColor"]>
  borderEndEndRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderEndEndRadius"]>
  borderEndStartRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderEndStartRadius"]>
  borderImage?: ConditionalValue<PropertyValueMap["borderImage"]>
  borderImageOutset?: ConditionalValue<CssValue>
  borderImageRepeat?: ConditionalValue<CssValue>
  borderImageSlice?: ConditionalValue<CssValue>
  borderImageSource?: ConditionalValue<CssValue>
  borderImageWidth?: ConditionalValue<PropertyValueMap["borderImageWidth"]>
  borderInline?: ConditionalValue<BordersValue | CssValue>
  borderInlineColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderInlineColor"]>
  borderInlineEnd?: ConditionalValue<BordersValue | CssValue>
  borderInlineEndColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderInlineEndColor"]>
  borderInlineEndStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderInlineEndStyle"]>>
  borderInlineEndWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderInlineEndWidth"]>
  borderInlineStart?: ConditionalValue<BordersValue | CssValue>
  borderInlineStartColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderInlineStartColor"]>
  borderInlineStartStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderInlineStartStyle"]>>
  borderInlineStartWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderInlineStartWidth"]>
  borderInlineStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderInlineStyle"]>>
  borderInlineWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderInlineWidth"]>
  borderLeft?: ConditionalValue<BordersValue | CssValue>
  borderLeftColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderLeftColor"]>
  borderLeftStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderLeftStyle"]>>
  borderLeftWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderLeftWidth"]>
  borderRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderRadius"]>
  borderRight?: ConditionalValue<BordersValue | CssValue>
  borderRightColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderRightColor"]>
  borderRightStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderRightStyle"]>>
  borderRightWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderRightWidth"]>
  borderSpacing?: ConditionalValue<SpacingValue | PropertyValueMap["borderSpacing"]>
  borderStartEndRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderStartEndRadius"]>
  borderStartStartRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderStartStartRadius"]>
  borderStyle?: ConditionalValue<PropertyValueMap["borderStyle"]>
  borderTop?: ConditionalValue<BordersValue | CssValue>
  borderTopColor?: ConditionalValue<ColorsValue | PropertyValueMap["borderTopColor"]>
  borderTopLeftRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderTopLeftRadius"]>
  borderTopRightRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderTopRightRadius"]>
  borderTopStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["borderTopStyle"]>>
  borderTopWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderTopWidth"]>
  borderWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["borderWidth"]>
  bottom?: ConditionalValue<SpacingValue | PropertyValueMap["bottom"]>
  boxAlign?: ConditionalValue<PropertyValueMap["boxAlign"] | AnyString>
  boxDecorationBreak?: ConditionalValue<BoxDecorationBreakValue | CssValue>
  boxDirection?: ConditionalValue<CssValue>
  boxFlex?: ConditionalValue<CssValue>
  boxFlexGroup?: ConditionalValue<CssValue>
  boxLines?: ConditionalValue<CssValue>
  boxOrdinalGroup?: ConditionalValue<CssValue>
  boxOrient?: ConditionalValue<CssValue>
  boxPack?: ConditionalValue<CssValue>
  boxShadow?: ConditionalValue<ShadowsValue | CssValue>
  boxSizing?: ConditionalValue<BoxSizingValue | CssValue>
  breakAfter?: ConditionalValue<WithEscapeHatch<PropertyValueMap["breakAfter"]>>
  breakBefore?: ConditionalValue<WithEscapeHatch<PropertyValueMap["breakBefore"]>>
  breakInside?: ConditionalValue<WithEscapeHatch<PropertyValueMap["breakInside"]>>
  captionSide?: ConditionalValue<CssValue>
  caret?: ConditionalValue<PropertyValueMap["caret"]>
  caretColor?: ConditionalValue<ColorsValue | PropertyValueMap["caretColor"]>
  caretShape?: ConditionalValue<CssValue>
  clear?: ConditionalValue<WithEscapeHatch<PropertyValueMap["clear"]>>
  clip?: ConditionalValue<CssValue>
  clipPath?: ConditionalValue<ClipPathValue>
  clipRule?: ConditionalValue<CssValue>
  color?: ConditionalValue<ColorsValue | PropertyValueMap["color"]>
  colorInterpolation?: ConditionalValue<CssValue>
  colorInterpolationFilters?: ConditionalValue<CssValue>
  colorRendering?: ConditionalValue<CssValue>
  colorScheme?: ConditionalValue<PropertyValueMap["colorScheme"]>
  columnCount?: ConditionalValue<CssValue>
  columnFill?: ConditionalValue<CssValue>
  columnGap?: ConditionalValue<SpacingValue | PropertyValueMap["columnGap"]>
  columnRule?: ConditionalValue<CssValue>
  columnRuleColor?: ConditionalValue<PropertyValueMap["columnRuleColor"]>
  columnRuleStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["columnRuleStyle"]>>
  columnRuleWidth?: ConditionalValue<PropertyValueMap["columnRuleWidth"]>
  columnSpan?: ConditionalValue<CssValue>
  columnWidth?: ConditionalValue<PropertyValueMap["columnWidth"]>
  columns?: ConditionalValue<CssValue>
  contain?: ConditionalValue<PropertyValueMap["contain"]>
  containIntrinsicBlockSize?: ConditionalValue<PropertyValueMap["containIntrinsicBlockSize"]>
  containIntrinsicHeight?: ConditionalValue<PropertyValueMap["containIntrinsicHeight"]>
  containIntrinsicInlineSize?: ConditionalValue<PropertyValueMap["containIntrinsicInlineSize"]>
  containIntrinsicSize?: ConditionalValue<PropertyValueMap["containIntrinsicSize"]>
  containIntrinsicWidth?: ConditionalValue<PropertyValueMap["containIntrinsicWidth"]>
  container?: ConditionalValue<ContainerValue>
  containerName?: ConditionalValue<ContainerName>
  containerType?: ConditionalValue<ContainerTypeValue>
  content?: ConditionalValue<PropertyValueMap["content"]>
  contentVisibility?: ConditionalValue<CssValue>
  counterIncrement?: ConditionalValue<CssValue>
  counterReset?: ConditionalValue<CssValue>
  counterSet?: ConditionalValue<CssValue>
  cursor?: ConditionalValue<CursorValue | PropertyValueMap["cursor"]>
  cx?: ConditionalValue<CssValue>
  cy?: ConditionalValue<CssValue>
  d?: ConditionalValue<CssValue>
  direction?: ConditionalValue<CssValue>
  display?: ConditionalValue<DisplayValue>
  dominantBaseline?: ConditionalValue<PropertyValueMap["dominantBaseline"] | AnyString>
  emptyCells?: ConditionalValue<CssValue>
  fieldSizing?: ConditionalValue<PropertyValueMap["fieldSizing"] | AnyString>
  fill?: ConditionalValue<ColorsValue | CssValue>
  fillOpacity?: ConditionalValue<CssValue>
  fillRule?: ConditionalValue<CssValue>
  filter?: ConditionalValue<FilterValue | CssValue>
  flex?: ConditionalValue<FlexValue | CssValue>
  flexBasis?: ConditionalValue<FlexBasisValue | PropertyValueMap["flexBasis"]>
  flexDirection?: ConditionalValue<FlexDirectionValue | CssValue>
  flexFlow?: ConditionalValue<PropertyValueMap["flexFlow"]>
  flexGrow?: ConditionalValue<FlexGrowValue>
  flexShrink?: ConditionalValue<FlexShrinkValue>
  flexWrap?: ConditionalValue<CssValue>
  float?: ConditionalValue<FloatValue>
  floodColor?: ConditionalValue<PropertyValueMap["floodColor"]>
  floodOpacity?: ConditionalValue<CssValue>
  font?: ConditionalValue<PropertyValueMap["font"]>
  fontFamily?: ConditionalValue<FontsValue | PropertyValueMap["fontFamily"]>
  fontFeatureSettings?: ConditionalValue<FontFeatureSettingsValue | CssValue>
  fontKerning?: ConditionalValue<FontKerningValue | CssValue>
  fontLanguageOverride?: ConditionalValue<CssValue>
  fontOpticalSizing?: ConditionalValue<CssValue>
  fontPalette?: ConditionalValue<FontPaletteValue | CssValue>
  fontSize?: ConditionalValue<FontSizesValue | PropertyValueMap["fontSize"]>
  fontSizeAdjust?: ConditionalValue<FontSizeAdjustValue>
  fontSmooth?: ConditionalValue<CssValue>
  fontStretch?: ConditionalValue<PropertyValueMap["fontStretch"]>
  fontStyle?: ConditionalValue<PropertyValueMap["fontStyle"]>
  fontSynthesis?: ConditionalValue<PropertyValueMap["fontSynthesis"]>
  fontSynthesisPosition?: ConditionalValue<CssValue>
  fontSynthesisSmallCaps?: ConditionalValue<CssValue>
  fontSynthesisStyle?: ConditionalValue<CssValue>
  fontSynthesisWeight?: ConditionalValue<CssValue>
  fontVariant?: ConditionalValue<FontVariantValue | CssValue>
  fontVariantAlternates?: ConditionalValue<FontVariantAlternatesValue | CssValue>
  fontVariantCaps?: ConditionalValue<FontVariantCapsValue>
  fontVariantEastAsian?: ConditionalValue<PropertyValueMap["fontVariantEastAsian"]>
  fontVariantEmoji?: ConditionalValue<CssValue>
  fontVariantLigatures?: ConditionalValue<PropertyValueMap["fontVariantLigatures"]>
  fontVariantNumeric?: ConditionalValue<FontVariantNumericValue>
  fontVariantPosition?: ConditionalValue<CssValue>
  fontVariationSettings?: ConditionalValue<FontVariationSettingsValue | CssValue>
  fontWeight?: ConditionalValue<FontWeightsValue | PropertyValueMap["fontWeight"]>
  fontWidth?: ConditionalValue<PropertyValueMap["fontWidth"]>
  forcedColorAdjust?: ConditionalValue<CssValue>
  gap?: ConditionalValue<SpacingValue | PropertyValueMap["gap"]>
  glyphOrientationVertical?: ConditionalValue<CssValue>
  grid?: ConditionalValue<CssValue>
  gridArea?: ConditionalValue<CssValue>
  gridAutoColumns?: ConditionalValue<GridAutoColumnsValue | CssValue>
  gridAutoFlow?: ConditionalValue<GridAutoFlowValue>
  gridAutoRows?: ConditionalValue<GridAutoRowsValue | CssValue>
  gridColumn?: ConditionalValue<GridColumnValue | CssValue>
  gridColumnEnd?: ConditionalValue<GridColumnEndValue | CssValue>
  gridColumnGap?: ConditionalValue<SpacingValue | PropertyValueMap["gridColumnGap"]>
  gridColumnStart?: ConditionalValue<GridColumnStartValue | CssValue>
  gridGap?: ConditionalValue<SpacingValue | PropertyValueMap["gridGap"]>
  gridRow?: ConditionalValue<GridRowValue | CssValue>
  gridRowEnd?: ConditionalValue<CssValue>
  gridRowGap?: ConditionalValue<SpacingValue | PropertyValueMap["gridRowGap"]>
  gridRowStart?: ConditionalValue<CssValue>
  gridTemplate?: ConditionalValue<CssValue>
  gridTemplateAreas?: ConditionalValue<CssValue>
  gridTemplateColumns?: ConditionalValue<GridTemplateColumnsValue | CssValue>
  gridTemplateRows?: ConditionalValue<GridTemplateRowsValue | CssValue>
  hangingPunctuation?: ConditionalValue<PropertyValueMap["hangingPunctuation"]>
  height?: ConditionalValue<HeightValue | PropertyValueMap["height"]>
  hyphenateCharacter?: ConditionalValue<CssValue>
  hyphenateLimitChars?: ConditionalValue<CssValue>
  hyphens?: ConditionalValue<HyphensValue>
  imageOrientation?: ConditionalValue<CssValue>
  imageRendering?: ConditionalValue<PropertyValueMap["imageRendering"] | AnyString>
  imageResolution?: ConditionalValue<CssValue>
  imeMode?: ConditionalValue<PropertyValueMap["imeMode"] | AnyString>
  initialLetter?: ConditionalValue<CssValue>
  initialLetterAlign?: ConditionalValue<CssValue>
  inlineSize?: ConditionalValue<InlineSizeValue | PropertyValueMap["inlineSize"]>
  inset?: ConditionalValue<SpacingValue | PropertyValueMap["inset"]>
  insetBlock?: ConditionalValue<SpacingValue | CssValue>
  insetBlockEnd?: ConditionalValue<SpacingValue | CssValue>
  insetBlockStart?: ConditionalValue<SpacingValue | CssValue>
  insetInline?: ConditionalValue<SpacingValue | CssValue>
  insetInlineEnd?: ConditionalValue<SpacingValue | CssValue>
  insetInlineStart?: ConditionalValue<SpacingValue | CssValue>
  interpolateSize?: ConditionalValue<CssValue>
  isolation?: ConditionalValue<CssValue>
  justifyContent?: ConditionalValue<JustifyContentValue>
  justifyItems?: ConditionalValue<PropertyValueMap["justifyItems"]>
  justifySelf?: ConditionalValue<PropertyValueMap["justifySelf"]>
  justifyTracks?: ConditionalValue<CssValue>
  left?: ConditionalValue<SpacingValue | PropertyValueMap["left"]>
  letterSpacing?: ConditionalValue<LetterSpacingsValue | PropertyValueMap["letterSpacing"]>
  lightingColor?: ConditionalValue<PropertyValueMap["lightingColor"]>
  lineBreak?: ConditionalValue<WithEscapeHatch<PropertyValueMap["lineBreak"]>>
  lineClamp?: ConditionalValue<LineClampValue | CssValue>
  lineHeight?: ConditionalValue<LineHeightsValue | PropertyValueMap["lineHeight"]>
  lineHeightStep?: ConditionalValue<PropertyValueMap["lineHeightStep"]>
  listStyle?: ConditionalValue<ListStyleValue | CssValue>
  listStyleImage?: ConditionalValue<AssetsValue | PropertyValueMap["listStyleImage"]>
  listStylePosition?: ConditionalValue<ListStylePositionValue>
  listStyleType?: ConditionalValue<ListStyleTypeValue>
  margin?: ConditionalValue<SpacingValue | PropertyValueMap["margin"]>
  marginBlock?: ConditionalValue<SpacingValue | CssValue>
  marginBlockEnd?: ConditionalValue<SpacingValue | CssValue>
  marginBlockStart?: ConditionalValue<SpacingValue | CssValue>
  marginBottom?: ConditionalValue<SpacingValue | PropertyValueMap["marginBottom"]>
  marginInline?: ConditionalValue<SpacingValue | CssValue>
  marginInlineEnd?: ConditionalValue<SpacingValue | CssValue>
  marginInlineStart?: ConditionalValue<SpacingValue | CssValue>
  marginLeft?: ConditionalValue<SpacingValue | PropertyValueMap["marginLeft"]>
  marginRight?: ConditionalValue<SpacingValue | PropertyValueMap["marginRight"]>
  marginTop?: ConditionalValue<SpacingValue | PropertyValueMap["marginTop"]>
  marginTrim?: ConditionalValue<CssValue>
  marker?: ConditionalValue<CssValue>
  markerEnd?: ConditionalValue<CssValue>
  markerMid?: ConditionalValue<CssValue>
  markerStart?: ConditionalValue<CssValue>
  mask?: ConditionalValue<MaskValue | CssValue>
  maskBorder?: ConditionalValue<PropertyValueMap["maskBorder"]>
  maskBorderMode?: ConditionalValue<CssValue>
  maskBorderOutset?: ConditionalValue<CssValue>
  maskBorderRepeat?: ConditionalValue<CssValue>
  maskBorderSlice?: ConditionalValue<CssValue>
  maskBorderSource?: ConditionalValue<CssValue>
  maskBorderWidth?: ConditionalValue<PropertyValueMap["maskBorderWidth"]>
  maskClip?: ConditionalValue<CssValue>
  maskComposite?: ConditionalValue<CssValue>
  maskImage?: ConditionalValue<MaskImageValue | CssValue>
  maskMode?: ConditionalValue<CssValue>
  maskOrigin?: ConditionalValue<CssValue>
  maskPosition?: ConditionalValue<PropertyValueMap["maskPosition"]>
  maskRepeat?: ConditionalValue<PropertyValueMap["maskRepeat"]>
  maskSize?: ConditionalValue<MaskSizeValue>
  maskType?: ConditionalValue<CssValue>
  masonryAutoFlow?: ConditionalValue<CssValue>
  mathDepth?: ConditionalValue<CssValue>
  mathShift?: ConditionalValue<CssValue>
  mathStyle?: ConditionalValue<CssValue>
  maxBlockSize?: ConditionalValue<MaxBlockSizeValue | PropertyValueMap["maxBlockSize"]>
  maxHeight?: ConditionalValue<MaxHeightValue | PropertyValueMap["maxHeight"]>
  maxInlineSize?: ConditionalValue<MaxInlineSizeValue | PropertyValueMap["maxInlineSize"]>
  maxLines?: ConditionalValue<CssValue>
  maxWidth?: ConditionalValue<MaxWidthValue | PropertyValueMap["maxWidth"]>
  minBlockSize?: ConditionalValue<MinBlockSizeValue | PropertyValueMap["minBlockSize"]>
  minHeight?: ConditionalValue<MinHeightValue | PropertyValueMap["minHeight"]>
  minInlineSize?: ConditionalValue<MinInlineSizeValue | PropertyValueMap["minInlineSize"]>
  minWidth?: ConditionalValue<MinWidthValue | PropertyValueMap["minWidth"]>
  mixBlendMode?: ConditionalValue<MixBlendModeValue>
  objectFit?: ConditionalValue<ObjectFitValue>
  objectPosition?: ConditionalValue<ObjectPositionValue>
  objectViewBox?: ConditionalValue<CssValue>
  offset?: ConditionalValue<CssValue>
  offsetAnchor?: ConditionalValue<PropertyValueMap["offsetAnchor"]>
  offsetDistance?: ConditionalValue<CssValue>
  offsetPath?: ConditionalValue<CssValue>
  offsetPosition?: ConditionalValue<PropertyValueMap["offsetPosition"]>
  offsetRotate?: ConditionalValue<CssValue>
  opacity?: ConditionalValue<OpacityValue | PropertyValueMap["opacity"]>
  order?: ConditionalValue<PropertyValueMap["order"]>
  orphans?: ConditionalValue<PropertyValueMap["orphans"]>
  outline?: ConditionalValue<BordersValue | CssValue>
  outlineColor?: ConditionalValue<ColorsValue | PropertyValueMap["outlineColor"]>
  outlineOffset?: ConditionalValue<SpacingValue | PropertyValueMap["outlineOffset"]>
  outlineStyle?: ConditionalValue<WithEscapeHatch<PropertyValueMap["outlineStyle"]>>
  outlineWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["outlineWidth"]>
  overflow?: ConditionalValue<OverflowValue>
  overflowAnchor?: ConditionalValue<OverflowAnchorValue | CssValue>
  overflowBlock?: ConditionalValue<OverflowBlockValue>
  overflowClipBox?: ConditionalValue<OverflowClipBoxValue | CssValue>
  overflowClipMargin?: ConditionalValue<OverflowClipMarginValue>
  overflowInline?: ConditionalValue<OverflowInlineValue>
  overflowWrap?: ConditionalValue<OverflowWrapValue | CssValue>
  overflowX?: ConditionalValue<OverflowXValue>
  overflowY?: ConditionalValue<OverflowYValue>
  overlay?: ConditionalValue<CssValue>
  overscrollBehavior?: ConditionalValue<OverscrollBehaviorValue>
  overscrollBehaviorBlock?: ConditionalValue<OverscrollBehaviorBlockValue | CssValue>
  overscrollBehaviorInline?: ConditionalValue<OverscrollBehaviorInlineValue | CssValue>
  overscrollBehaviorX?: ConditionalValue<OverscrollBehaviorXValue>
  overscrollBehaviorY?: ConditionalValue<OverscrollBehaviorYValue>
  padding?: ConditionalValue<SpacingValue | PropertyValueMap["padding"]>
  paddingBlock?: ConditionalValue<SpacingValue | CssValue>
  paddingBlockEnd?: ConditionalValue<SpacingValue | CssValue>
  paddingBlockStart?: ConditionalValue<SpacingValue | CssValue>
  paddingBottom?: ConditionalValue<SpacingValue | PropertyValueMap["paddingBottom"]>
  paddingInline?: ConditionalValue<SpacingValue | CssValue>
  paddingInlineEnd?: ConditionalValue<SpacingValue | CssValue>
  paddingInlineStart?: ConditionalValue<SpacingValue | CssValue>
  paddingLeft?: ConditionalValue<SpacingValue | PropertyValueMap["paddingLeft"]>
  paddingRight?: ConditionalValue<SpacingValue | PropertyValueMap["paddingRight"]>
  paddingTop?: ConditionalValue<SpacingValue | PropertyValueMap["paddingTop"]>
  page?: ConditionalValue<CssValue>
  pageBreakAfter?: ConditionalValue<PropertyValueMap["pageBreakAfter"] | AnyString>
  pageBreakBefore?: ConditionalValue<PropertyValueMap["pageBreakBefore"] | AnyString>
  pageBreakInside?: ConditionalValue<CssValue>
  paintOrder?: ConditionalValue<CssValue>
  perspective?: ConditionalValue<PropertyValueMap["perspective"]>
  perspectiveOrigin?: ConditionalValue<PropertyValueMap["perspectiveOrigin"]>
  placeContent?: ConditionalValue<PropertyValueMap["placeContent"]>
  placeItems?: ConditionalValue<PropertyValueMap["placeItems"]>
  placeSelf?: ConditionalValue<PropertyValueMap["placeSelf"]>
  pointerEvents?: ConditionalValue<WithEscapeHatch<PropertyValueMap["pointerEvents"]>>
  position?: ConditionalValue<PositionValue>
  positionAnchor?: ConditionalValue<CssValue>
  positionArea?: ConditionalValue<CssValue>
  positionTry?: ConditionalValue<CssValue>
  positionTryFallbacks?: ConditionalValue<CssValue>
  positionTryOrder?: ConditionalValue<PropertyValueMap["positionTryOrder"] | AnyString>
  positionVisibility?: ConditionalValue<CssValue>
  printColorAdjust?: ConditionalValue<CssValue>
  quotes?: ConditionalValue<CssValue>
  r?: ConditionalValue<CssValue>
  resize?: ConditionalValue<WithEscapeHatch<PropertyValueMap["resize"]>>
  right?: ConditionalValue<SpacingValue | PropertyValueMap["right"]>
  rotate?: ConditionalValue<RotateValue | CssValue>
  rowGap?: ConditionalValue<SpacingValue | PropertyValueMap["rowGap"]>
  rubyAlign?: ConditionalValue<CssValue>
  rubyMerge?: ConditionalValue<CssValue>
  rubyOverhang?: ConditionalValue<CssValue>
  rubyPosition?: ConditionalValue<CssValue>
  rx?: ConditionalValue<CssValue>
  ry?: ConditionalValue<CssValue>
  scale?: ConditionalValue<ScaleValue | CssValue>
  scrollBehavior?: ConditionalValue<ScrollBehaviorValue | CssValue>
  scrollInitialTarget?: ConditionalValue<CssValue>
  scrollMargin?: ConditionalValue<SpacingValue | CssValue>
  scrollMarginBlock?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginBlock"]>
  scrollMarginBlockEnd?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginBlockEnd"]>
  scrollMarginBlockStart?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginBlockStart"]>
  scrollMarginBottom?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginBottom"]>
  scrollMarginInline?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginInline"]>
  scrollMarginInlineEnd?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginInlineEnd"]>
  scrollMarginInlineStart?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginInlineStart"]>
  scrollMarginLeft?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginLeft"]>
  scrollMarginRight?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginRight"]>
  scrollMarginTop?: ConditionalValue<SpacingValue | PropertyValueMap["scrollMarginTop"]>
  scrollPadding?: ConditionalValue<SpacingValue | CssValue>
  scrollPaddingBlock?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingBlock"]>
  scrollPaddingBlockEnd?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingBlockEnd"]>
  scrollPaddingBlockStart?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingBlockStart"]>
  scrollPaddingBottom?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingBottom"]>
  scrollPaddingInline?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingInline"]>
  scrollPaddingInlineEnd?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingInlineEnd"]>
  scrollPaddingInlineStart?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingInlineStart"]>
  scrollPaddingLeft?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingLeft"]>
  scrollPaddingRight?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingRight"]>
  scrollPaddingTop?: ConditionalValue<SpacingValue | PropertyValueMap["scrollPaddingTop"]>
  scrollSnapAlign?: ConditionalValue<ScrollSnapAlignValue>
  scrollSnapCoordinate?: ConditionalValue<ScrollSnapCoordinateValue | CssValue>
  scrollSnapDestination?: ConditionalValue<ScrollSnapDestinationValue>
  scrollSnapPointsX?: ConditionalValue<ScrollSnapPointsXValue | CssValue>
  scrollSnapPointsY?: ConditionalValue<ScrollSnapPointsYValue | CssValue>
  scrollSnapStop?: ConditionalValue<ScrollSnapStopValue>
  scrollSnapType?: ConditionalValue<ScrollSnapTypeValue>
  scrollSnapTypeX?: ConditionalValue<ScrollSnapTypeXValue | CssValue>
  scrollSnapTypeY?: ConditionalValue<ScrollSnapTypeYValue | CssValue>
  scrollTimeline?: ConditionalValue<ScrollTimelineValue | CssValue>
  scrollTimelineAxis?: ConditionalValue<ScrollTimelineAxisValue | CssValue>
  scrollTimelineName?: ConditionalValue<ScrollTimelineNameValue | CssValue>
  scrollbarColor?: ConditionalValue<ColorsValue | CssValue>
  scrollbarGutter?: ConditionalValue<ScrollbarGutterValue | CssValue>
  scrollbarWidth?: ConditionalValue<SizesValue | CssValue>
  shapeImageThreshold?: ConditionalValue<CssValue>
  shapeMargin?: ConditionalValue<PropertyValueMap["shapeMargin"]>
  shapeOutside?: ConditionalValue<PropertyValueMap["shapeOutside"]>
  shapeRendering?: ConditionalValue<CssValue>
  speakAs?: ConditionalValue<PropertyValueMap["speakAs"]>
  stopColor?: ConditionalValue<PropertyValueMap["stopColor"]>
  stopOpacity?: ConditionalValue<CssValue>
  stroke?: ConditionalValue<ColorsValue | CssValue>
  strokeColor?: ConditionalValue<PropertyValueMap["strokeColor"]>
  strokeDasharray?: ConditionalValue<StrokeDasharrayValue | CssValue>
  strokeDashoffset?: ConditionalValue<StrokeDashoffsetValue | CssValue>
  strokeLinecap?: ConditionalValue<StrokeLinecapValue | CssValue>
  strokeLinejoin?: ConditionalValue<StrokeLinejoinValue>
  strokeMiterlimit?: ConditionalValue<StrokeMiterlimitValue | CssValue>
  strokeOpacity?: ConditionalValue<StrokeOpacityValue | CssValue>
  strokeWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["strokeWidth"]>
  tabSize?: ConditionalValue<PropertyValueMap["tabSize"]>
  tableLayout?: ConditionalValue<TableLayoutValue>
  textAlign?: ConditionalValue<TextAlignValue>
  textAlignLast?: ConditionalValue<PropertyValueMap["textAlignLast"] | AnyString>
  textAnchor?: ConditionalValue<CssValue>
  textAutospace?: ConditionalValue<PropertyValueMap["textAutospace"]>
  textBox?: ConditionalValue<PropertyValueMap["textBox"]>
  textBoxEdge?: ConditionalValue<PropertyValueMap["textBoxEdge"]>
  textBoxTrim?: ConditionalValue<CssValue>
  textCombineUpright?: ConditionalValue<CssValue>
  textDecoration?: ConditionalValue<TextDecorationValue | CssValue>
  textDecorationColor?: ConditionalValue<ColorsValue | PropertyValueMap["textDecorationColor"]>
  textDecorationLine?: ConditionalValue<PropertyValueMap["textDecorationLine"]>
  textDecorationSkip?: ConditionalValue<PropertyValueMap["textDecorationSkip"]>
  textDecorationSkipInk?: ConditionalValue<PropertyValueMap["textDecorationSkipInk"] | AnyString>
  textDecorationStyle?: ConditionalValue<TextDecorationStyleValue>
  textDecorationThickness?: ConditionalValue<TextDecorationThicknessValue>
  textEmphasis?: ConditionalValue<PropertyValueMap["textEmphasis"]>
  textEmphasisColor?: ConditionalValue<ColorsValue | PropertyValueMap["textEmphasisColor"]>
  textEmphasisPosition?: ConditionalValue<PropertyValueMap["textEmphasisPosition"]>
  textEmphasisStyle?: ConditionalValue<PropertyValueMap["textEmphasisStyle"]>
  textIndent?: ConditionalValue<SpacingValue | PropertyValueMap["textIndent"]>
  textJustify?: ConditionalValue<PropertyValueMap["textJustify"] | AnyString>
  textOrientation?: ConditionalValue<PropertyValueMap["textOrientation"] | AnyString>
  textOverflow?: ConditionalValue<TextOverflowValue>
  textRendering?: ConditionalValue<PropertyValueMap["textRendering"] | AnyString>
  textShadow?: ConditionalValue<ShadowsValue | CssValue>
  textSizeAdjust?: ConditionalValue<TextSizeAdjustValue>
  textSpacingTrim?: ConditionalValue<CssValue>
  textTransform?: ConditionalValue<TextTransformValue>
  textUnderlineOffset?: ConditionalValue<TextUnderlineOffsetValue>
  textUnderlinePosition?: ConditionalValue<PropertyValueMap["textUnderlinePosition"]>
  textWrap?: ConditionalValue<TextWrapValue>
  textWrapMode?: ConditionalValue<PropertyValueMap["textWrapMode"] | AnyString>
  textWrapStyle?: ConditionalValue<PropertyValueMap["textWrapStyle"] | AnyString>
  timelineScope?: ConditionalValue<CssValue>
  top?: ConditionalValue<SpacingValue | PropertyValueMap["top"]>
  touchAction?: ConditionalValue<TouchActionValue>
  transform?: ConditionalValue<TransformValue | CssValue>
  transformBox?: ConditionalValue<TransformBoxValue>
  transformOrigin?: ConditionalValue<TransformOriginValue | CssValue>
  transformStyle?: ConditionalValue<TransformStyleValue | CssValue>
  transition?: ConditionalValue<TransitionValue | CssValue>
  transitionBehavior?: ConditionalValue<PropertyValueMap["transitionBehavior"]>
  transitionDelay?: ConditionalValue<DurationsValue | CssValue>
  transitionDuration?: ConditionalValue<DurationsValue | CssValue>
  transitionProperty?: ConditionalValue<TransitionPropertyValue>
  transitionTimingFunction?: ConditionalValue<EasingsValue | CssValue>
  translate?: ConditionalValue<TranslateValue | CssValue>
  unicodeBidi?: ConditionalValue<PropertyValueMap["unicodeBidi"] | AnyString>
  userSelect?: ConditionalValue<UserSelectValue>
  vectorEffect?: ConditionalValue<PropertyValueMap["vectorEffect"] | AnyString>
  verticalAlign?: ConditionalValue<VerticalAlignValue>
  viewTimeline?: ConditionalValue<CssValue>
  viewTimelineAxis?: ConditionalValue<CssValue>
  viewTimelineInset?: ConditionalValue<PropertyValueMap["viewTimelineInset"]>
  viewTimelineName?: ConditionalValue<CssValue>
  viewTransitionClass?: ConditionalValue<CssValue>
  viewTransitionName?: ConditionalValue<CssValue>
  visibility?: ConditionalValue<VisibilityValue | CssValue>
  whiteSpace?: ConditionalValue<PropertyValueMap["whiteSpace"]>
  whiteSpaceCollapse?: ConditionalValue<PropertyValueMap["whiteSpaceCollapse"] | AnyString>
  widows?: ConditionalValue<PropertyValueMap["widows"]>
  width?: ConditionalValue<WidthValue | PropertyValueMap["width"]>
  willChange?: ConditionalValue<CssValue>
  wordBreak?: ConditionalValue<WordBreakValue>
  wordSpacing?: ConditionalValue<PropertyValueMap["wordSpacing"]>
  wordWrap?: ConditionalValue<PropertyValueMap["wordWrap"] | AnyString>
  writingMode?: ConditionalValue<WithEscapeHatch<PropertyValueMap["writingMode"]>>
  x?: ConditionalValue<CssValue>
  y?: ConditionalValue<CssValue>
  zIndex?: ConditionalValue<ZIndexValue | PropertyValueMap["zIndex"]>
  zoom?: ConditionalValue<PropertyValueMap["zoom"]>
  animationState?: ConditionalValue<AnimationStateValue | CssValue>
  backdropBlur?: ConditionalValue<BlursValue>
  backdropBrightness?: ConditionalValue<BackdropBrightnessValue | CssValue>
  backdropContrast?: ConditionalValue<BackdropContrastValue | CssValue>
  backdropGrayscale?: ConditionalValue<BackdropGrayscaleValue | CssValue>
  backdropHueRotate?: ConditionalValue<BackdropHueRotateValue | CssValue>
  backdropInvert?: ConditionalValue<BackdropInvertValue | CssValue>
  backdropOpacity?: ConditionalValue<BackdropOpacityValue | CssValue>
  backdropSaturate?: ConditionalValue<BackdropSaturateValue | CssValue>
  backdropSepia?: ConditionalValue<BackdropSepiaValue | CssValue>
  backgroundConic?: ConditionalValue<BackgroundConicValue | CssValue>
  backgroundGradient?: ConditionalValue<BackgroundGradientValue | CssValue>
  backgroundLinear?: ConditionalValue<BackgroundLinearValue | CssValue>
  backgroundRadial?: ConditionalValue<GradientsValue>
  blur?: ConditionalValue<BlursValue>
  borderBottomRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderRadius"]>
  borderEndRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderRadius"]>
  borderLeftRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderRadius"]>
  borderRightRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderRadius"]>
  borderSpacingX?: ConditionalValue<SpacingValue>
  borderSpacingY?: ConditionalValue<SpacingValue>
  borderStartRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderRadius"]>
  borderTopRadius?: ConditionalValue<RadiiValue | PropertyValueMap["borderRadius"]>
  boxShadowColor?: ConditionalValue<ColorsValue>
  boxSize?: ConditionalValue<BoxSizeValue>
  brightness?: ConditionalValue<BrightnessValue | CssValue>
  colorPalette?: ConditionalValue<ColorPaletteValue | CssValue>
  contrast?: ConditionalValue<ContrastValue | CssValue>
  debug?: ConditionalValue<DebugValue | CssValue>
  divideColor?: ConditionalValue<ColorsValue>
  divideStyle?: ConditionalValue<BorderStyleValue>
  divideX?: ConditionalValue<BorderWidthsValue>
  divideY?: ConditionalValue<BorderWidthsValue>
  dropShadow?: ConditionalValue<DropShadowsValue>
  focusRing?: ConditionalValue<FocusRingValue | CssValue>
  focusRingColor?: ConditionalValue<ColorsValue>
  focusRingOffset?: ConditionalValue<SpacingValue>
  focusRingStyle?: ConditionalValue<BorderStylesValue | PropertyValueMap["outlineStyle"]>
  focusRingWidth?: ConditionalValue<BorderWidthsValue | PropertyValueMap["outlineWidth"]>
  focusVisibleRing?: ConditionalValue<FocusVisibleRingValue | CssValue>
  fontSmoothing?: ConditionalValue<FontSmoothingValue | CssValue>
  gradientFrom?: ConditionalValue<ColorsValue>
  gradientFromPosition?: ConditionalValue<GradientFromPositionValue | CssValue>
  gradientTo?: ConditionalValue<ColorsValue>
  gradientToPosition?: ConditionalValue<GradientToPositionValue | CssValue>
  gradientVia?: ConditionalValue<ColorsValue>
  gradientViaPosition?: ConditionalValue<GradientViaPositionValue | CssValue>
  grayscale?: ConditionalValue<GrayscaleValue | CssValue>
  hideBelow?: ConditionalValue<BreakpointsValue>
  hideFrom?: ConditionalValue<BreakpointsValue>
  hueRotate?: ConditionalValue<HueRotateValue | CssValue>
  invert?: ConditionalValue<InvertValue | CssValue>
  rotateX?: ConditionalValue<RotateValue | CssValue>
  rotateY?: ConditionalValue<RotateValue | CssValue>
  rotateZ?: ConditionalValue<RotateValue | CssValue>
  saturate?: ConditionalValue<SaturateValue | CssValue>
  scaleX?: ConditionalValue<ScaleXValue | CssValue>
  scaleY?: ConditionalValue<ScaleYValue | CssValue>
  scrollSnapMargin?: ConditionalValue<SpacingValue>
  scrollSnapMarginBottom?: ConditionalValue<SpacingValue>
  scrollSnapMarginLeft?: ConditionalValue<SpacingValue>
  scrollSnapMarginRight?: ConditionalValue<SpacingValue>
  scrollSnapMarginTop?: ConditionalValue<SpacingValue>
  scrollSnapStrictness?: ConditionalValue<ScrollSnapStrictnessValue | CssValue>
  scrollbar?: ConditionalValue<ScrollbarValue | CssValue>
  sepia?: ConditionalValue<SepiaValue | CssValue>
  spaceX?: ConditionalValue<SpacingValue | CssValue>
  spaceY?: ConditionalValue<SpacingValue | CssValue>
  srOnly?: ConditionalValue<SrOnlyValue | CssValue>
  textGradient?: ConditionalValue<TextGradientValue | CssValue>
  textShadowColor?: ConditionalValue<ColorsValue>
  textStyle?: ConditionalValue<TextStyleValue | CssValue>
  translateX?: ConditionalValue<TranslateXValue>
  translateY?: ConditionalValue<TranslateYValue>
  translateZ?: ConditionalValue<TranslateZValue>
  truncate?: ConditionalValue<TruncateValue | CssValue>
}

export type CssVarValue = ConditionalValue<CssVars | AnyString | AnyNumber>

export type CssVarProperties = {
  [K in `--${string}`]?: CssVarValue
}

export type NestedStyles = {
  [K in Selector | Condition]?: SystemStyleObject
}

export interface SystemStyleObject extends SystemProperties, CssVarProperties, NestedStyles {}

export interface GlobalStyleObject {
  [selector: string]: SystemStyleObject
}

export interface CssKeyframes {
  [name: string]: {
    [time: string]: SystemStyleObject
  }
}

export interface GlobalFontfaceRule {
  fontFamily: string
  src: string
  fontStyle?: string
  fontWeight?: string | number
  fontDisplay?: "auto" | "block" | "swap" | "fallback" | "optional"
  unicodeRange?: string
  fontFeatureSettings?: string
  fontVariationSettings?: string
  fontStretch?: string
  ascentOverride?: string
  descentOverride?: string
  lineGapOverride?: string
  sizeAdjust?: string
}

export type FontfaceRule = Omit<GlobalFontfaceRule, "fontFamily">

export interface GlobalFontface {
  [name: string]: FontfaceRule | FontfaceRule[]
}

export interface WithCss {
  css?: SystemStyleObject | SystemStyleObject[]
}

export type JsxStyleProps = WithCss & {
  /**
  * Forces a baseComponent to produce a `className` when used with `asChild`, instead of passing
  * raw css down. Use when composing onto non-panda elements (e.g. `<span>`).
  * @example
  * const Button = styled(ark.button, {}, { baseComponent: true })
  * return (
  *   <Button asChild consumeCss>
  *     <span>Click me</span>
  *   </Button>
  * )
  */
  consumeCss?: boolean
}

export interface PatchedHTMLProps {
  htmlWidth?: string | number
  htmlHeight?: string | number
  htmlTranslate?: "yes" | "no" | undefined
  htmlContent?: string
}

export type OmittedHTMLProps = "color" | "translate" | "transition" | "width" | "height" | "content"

type WithHTMLProps<T> = DistributiveOmit<T, OmittedHTMLProps> & PatchedHTMLProps

export type JsxHTMLProps<T extends Record<string, any>, P extends Record<string, any> = {}> = Omit<T, keyof P> & P