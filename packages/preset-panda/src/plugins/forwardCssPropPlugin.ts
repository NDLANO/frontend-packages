/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { CodegenPrepareHookArgs, PandaPlugin } from "@pandacss/types";

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

  const baseCode = "const __base__ = Dynamic.__base__ || Dynamic";

  factoryJs.code = factoryJs.code.replace(
    baseCode,
    `${baseCode}
  const contextConsume = options.baseComponent || Dynamic.__base__ || typeof Dynamic === "string"`,
  );

  const propsCode = "const { as: Element = __base__, unstyled, children, ...restProps } = props";

  factoryJs.code = factoryJs.code.replace(
    propsCode,
    `const { as: Element = __base__, unstyled, consumeCss, children, ...restProps } = props

    const consume = props.asChild
      ? consumeCss && (options.baseComponent || Dynamic.__baseComponent__)
      : consumeCss || contextConsume`,
  );

  const cvaCode = "const cvaStyles = __cvaFn__.raw(variantProps)";

  factoryJs.code = factoryJs.code.replace(
    cvaCode,
    `${cvaCode}
      if(!consume) {
        return css.raw(cvaStyles, propStyles, cssStyles)
      }`,
  );

  factoryJs.code = factoryJs.code.replace(
    "className: classes()",
    `...(consume ? { className: classes() } : { css: classes(), consumeCss } )`,
  );

  const styledComponentForwardPropDeclaration = `StyledComponent.__shouldForwardProps__ = shouldForwardProp`;

  factoryJs.code = factoryJs.code.replace(
    styledComponentForwardPropDeclaration,
    `${styledComponentForwardPropDeclaration}
  StyledComponent.__baseComponent__ = options.baseComponent || Dynamic.__baseComponent__`,
  );

  const shouldForwardPropCode = "shouldForwardProp?: (prop: string, variantKeys: string[]) => boolean";

  jsxTypes.code = jsxTypes.code.replace(
    shouldForwardPropCode,
    `${shouldForwardPropCode}
  /**
  * Used when creating styled components from React components that do not support the css prop. If true, the css prop will be consumed and converted to \`className\` 
  * @example
  * import { ark } from "@ark-ui/react"
  * import { styled } from "@ndla/styled-system/jsx"
  * const Button = styled(ark.button, { baseComponent: true })
  */
  baseComponent?: boolean`,
  );

  const jsxStylePropsCode = "export type JsxStyleProps =";

  systemTypes.code = systemTypes.code.replace(
    jsxStylePropsCode,
    `${jsxStylePropsCode} { 
  /**
  * Tells a component to consume the \`css\` prop and turn it into a \`className\` prop. This is only used in conjunction with the \`baseComponent\` prop in the \`styled\` function to ensure that components that are \`asChild\`-ed onto non-panda components can consume their css before being merged with their child.
  * @example
  * import { ark } from "@ark-ui/react"
  * import { styled } from "@ndla/styled-system/jsx"
  * const Button = styled('button', { baseComponent: true })
  *
  * return (
  *   <Button asChild consumeCss>
  *     <div>Click me</div>
  *   </Button>
  * )
  */
  consumeCss?: boolean 
  } & `,
  );

  return args.artifacts;
};
