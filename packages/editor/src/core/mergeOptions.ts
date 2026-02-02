/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cloneDeep from "lodash.clonedeep";
import mergeWith from "lodash.mergewith";
import type { MappedConfigurationOption } from ".";

export const mergeOptions = <TOptions extends object | undefined = undefined>(
  options: TOptions,
  configuration: MappedConfigurationOption<TOptions>,
): TOptions => {
  if (!options && !configuration) return options;
  // Beware: mergeWith mutates the first argument.
  return mergeWith(cloneDeep(options), configuration, (objValue, srcValue) => {
    if (typeof srcValue === "object" && "override" in srcValue) {
      return srcValue.override ? srcValue.value : objValue;
    } else if (Array.isArray(srcValue) || Array.isArray(objValue)) {
      return (objValue ?? []).concat(srcValue ?? []);
    }
  });
};
