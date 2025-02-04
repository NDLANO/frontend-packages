/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { MappedConfigurationOption } from ".";
import mergeWith from "lodash.mergewith";

export const mergeOptions = <TOptions extends object | undefined = undefined>(
  options: TOptions,
  configuration: MappedConfigurationOption<TOptions>,
): TOptions => {
  if (!options && !configuration) return options;
  return mergeWith(options, configuration, (objValue, srcValue) => {
    if (typeof srcValue === "object" && "override" in srcValue) {
      return srcValue.override ? srcValue.value : objValue;
    } else if (Array.isArray(srcValue) || Array.isArray(objValue)) {
      return (objValue ?? []).concat(srcValue ?? []);
    }
  });
};
