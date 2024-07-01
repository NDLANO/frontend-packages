/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export { default as uuid } from "./uuid";
export { default as getComponentName } from "./getComponentName";
export { copyTextToClipboard } from "./copyTextToClipboard";
export { default as noScroll } from "./noScroll";
export { default as getCurrentBreakpoint, breakpoints } from "./getCurrentBreakpoint";
export { createUniversalPortal } from "./createUniversalPortal";
export { isFunction } from "./isFunction";
export { resizeObserver } from "./resizeObserver";
export { setCookie, getCookie, deleteCookie, isValidCookie } from "./cookieHandler";
export { printPage } from "./printPage";
export { default as joinArrayWithConjunction } from "./joinArrayWithConjunction";
export { validateTranslationFiles } from "./translationValidation";
export { default as useForwardedRef } from "./useForwardedRef";
export { default as NoSSR } from "./nossr/NoSSR";
export { default as withNoSSR } from "./nossr/withNoSSR";
export { default as usePrevious } from "./usePrevious";
export { composeRefs } from "./composeRefs";
export { polymorphicForwardRef } from "./polymorphicForwardRef";
export { contains } from "./contains";
export type { PolymorphicProps } from "./polymorphicForwardRef";
