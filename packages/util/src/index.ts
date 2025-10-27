/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export { uuid } from "./uuid";
export { setCookie, getCookie, deleteCookie, isValidCookie } from "./cookieHandler";
export { printPage } from "./printPage";
export { validateTranslationFiles } from "./translationValidation";
export { NoSSR } from "./nossr/NoSSR";
export { usePrevious } from "./usePrevious";
export { composeRefs } from "./composeRefs";
export { contains } from "./contains";
export { humanFileSize } from "./humanFileSize";

export { groupBy, uniq, uniqBy, partition, keyBy, sortBy } from "./arrayHelpers";
