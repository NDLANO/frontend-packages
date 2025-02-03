/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ConfigurableSlateSerializer, MappedConfigurationOption, SlateSerializer } from ".";
import { mergeOptions } from "./mergeOptions";

export const createSerializer = <TOptions extends {} | undefined = undefined>(
  params: SlateSerializer<TOptions>,
): ConfigurableSlateSerializer<TOptions> => {
  const serializer = new Proxy(params, {
    get(target, prop, receiver) {
      if (prop === "configure") {
        return (options: MappedConfigurationOption<TOptions>) => {
          const mergedOptions = mergeOptions(params.options, options);
          return {
            serialize: params.serialize,
            deserialize: params.deserialize,
            options: mergedOptions,
          };
        };
      }
      return Reflect.get(target, prop, receiver);
    },
  });

  return serializer as ConfigurableSlateSerializer<TOptions>;
};
