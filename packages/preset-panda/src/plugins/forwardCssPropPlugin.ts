/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CodegenPrepareHookArgs, PandaPlugin } from "@pandacss/types";

const supportedJsxFrameworks = ["react"];

export const forwardCssPropPlugin = (): PandaPlugin => {
  return {
    name: "forward-css-prop",
    hooks: {
      "config:resolved": (args) => {
        const jsxFramework = args.config.jsxFramework;
        if (!supportedJsxFrameworks.includes(jsxFramework as string)) {
          throw new Error(
            `[plugin:restrict-styled-props]: Unsupported jsxFramework: ${jsxFramework}. This Panda plugin only supports: ${supportedJsxFrameworks.join(", ")}`,
          );
        }
      },
      "codegen:prepare": (args) => {
        return transformStyledFn(args);
      },
    },
  };
};

export const transformStyledFn = (args: CodegenPrepareHookArgs) => {
  const factoryArtifact = args.artifacts.find((art) => art.id === "jsx-factory");
  const factoryJs = factoryArtifact?.files.find((f) => f.file.includes(".mjs") || f.file.includes(".js"));
  const jsxTypes = args.artifacts.find((art) => art.id === "types-jsx")?.files.find((f) => f.file.includes("jsx"));
  const systemTypes = args.artifacts
    .find((art) => art.id === "types-gen-system")
    ?.files.find((f) => f.file.includes("system-types"));

  if (!factoryJs?.code || !jsxTypes?.code || !systemTypes?.code) {
    return args.artifacts;
  }

  const propsCode = "const { as: Element = __base__, children, ...restProps } = props";

  factoryJs.code = factoryJs.code.replace(
    propsCode,
    "const { as: Element = __base__, forwardCssProp, children, ...restProps } = props",
  );

  const cvaCode = "const cvaStyles = __cvaFn__.raw(variantProps)";

  factoryJs.code = factoryJs.code.replace(
    cvaCode,
    `${cvaCode}
      if(options.forwardCssProp || forwardCssProp) {
        return css.raw(cvaStyles, propStyles, cssStyles)
      }`,
  );

  factoryJs.code = factoryJs.code.replace(
    "className: classes()",
    `...(options.forwardCssProp || forwardCssProp ? { css: classes() } : { className: classes() })`,
  );

  const shouldForwardPropCode = "shouldForwardProp?(prop: string, variantKeys: string[]): boolean";

  jsxTypes.code = jsxTypes.code.replace(
    shouldForwardPropCode,
    `${shouldForwardPropCode}
  forwardCssProp?: boolean`,
  );

  const jsxStylePropsCode = "export type JsxStyleProps =";

  systemTypes.code = systemTypes.code.replace(
    jsxStylePropsCode,
    `${jsxStylePropsCode} { forwardCssProp?: boolean } & `,
  );

  return args.artifacts;
};
