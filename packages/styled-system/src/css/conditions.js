import { withoutSpace } from '../helpers';

const conditions = new Set("_active,_after,_ariaInvalid,_atValue,_autofill,_backdrop,_before,_checked,_chinese,_closed,_complete,_current,_currentPage,_currentStep,_dark,_default,_disabled,_dragging,_empty,_enabled,_even,_expanded,_file,_first,_firstLetter,_firstLine,_firstOfType,_focus,_focusVisible,_focusWithin,_fullscreen,_grabbed,_groupActive,_groupChecked,_groupDisabled,_groupExpanded,_groupFocus,_groupFocusVisible,_groupFocusWithin,_groupHover,_groupInvalid,_hidden,_highContrast,_highlighted,_horizontal,_hover,_icon,_inRange,_incomplete,_indeterminate,_invalid,_invertedColors,_landscape,_last,_lastOfType,_lessContrast,_light,_loading,_ltr,_marker,_moreContrast,_motionReduce,_motionSafe,_noscript,_now,_odd,_on,_only,_onlyOfType,_open,_optional,_osDark,_osLight,_outOfRange,_overValue,_peerActive,_peerChecked,_peerDisabled,_peerExpanded,_peerFocus,_peerFocusVisible,_peerFocusWithin,_peerHover,_peerInvalid,_peerPlaceholderShown,_placeholder,_placeholderShown,_portrait,_pressed,_print,_rangeEnd,_rangeStart,_readOnly,_readWrite,_required,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_selected,_selection,_starting,_target,_today,_topmost,_unavailable,_underValue,_valid,_vertical,_visited,base,desktop,desktopDown,desktopOnly,desktopToUltraWide,desktopToWide,mobile,mobileDown,mobileOnly,mobileToDesktop,mobileToMobileWide,mobileToTablet,mobileToTabletWide,mobileToUltraWide,mobileToWide,mobileWide,mobileWideDown,mobileWideOnly,mobileWideToDesktop,mobileWideToTablet,mobileWideToTabletWide,mobileWideToUltraWide,mobileWideToWide,tablet,tabletDown,tabletOnly,tabletToDesktop,tabletToTabletWide,tabletToUltraWide,tabletToWide,tabletWide,tabletWideDown,tabletWideOnly,tabletWideToDesktop,tabletWideToUltraWide,tabletWideToWide,ultraWide,ultraWideDown,ultraWideOnly,wide,wideDown,wideOnly,wideToUltraWide".split(','))
const conditionRe = /^@|&/
const underscoreRe = /^_/
const selectorRe = /&|@/

export const breakpointKeys = ["base","mobile","mobileWide","tablet","tabletWide","desktop","wide","ultraWide"]

export function isCondition(v) {
  return conditions.has(v) || conditionRe.test(v)
}

export function finalizeConditions(paths) {
  return paths.map((p) => {
    if (conditions.has(p)) {
      return p.replace(underscoreRe, '')
    }
    if (selectorRe.test(p)) {
      return `[${withoutSpace(p.trim())}]`
    }
    return p
  })
}

export function sortConditions(paths) {
  return [...paths].sort((a, b) => {
    const aa = isCondition(a)
    const bb = isCondition(b)
    return aa && !bb ? 1 : !aa && bb ? -1 : 0
  })
}