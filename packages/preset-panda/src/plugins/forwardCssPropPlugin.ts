/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { CodegenPrepareHookArgs, PandaPlugin } from "@pandacss/types";

const supportedJsxFrameworks = ["react"];

export const forwardCssPropPlugin = (): PandaPlugin => ({
  name: "forward-css-prop",
  hooks: {
    "config:resolved": ({ config }) => {
      if (!supportedJsxFrameworks.includes(config.jsxFramework as string)) {
        throw new Error(
          `[forward-css-prop] Unsupported jsxFramework: ${config.jsxFramework}. Supported: ${supportedJsxFrameworks.join(", ")}`,
        );
      }
    },
    "codegen:prepare": transformStyledFn,
  },
});

// This plugin patches panda's generated factory.js and type files to implement two features:
//
// 1. `baseComponent` option on `styled()`: marks a React component (e.g. ark.div) that does not
//    accept panda's `css` prop. When set, styles are converted to `className` instead of being
//    passed as a raw css object. This flag propagates through styled chains via `__baseComponent__`.
//
// 2. `consumeCss` prop: when combined with `asChild`, forces a baseComponent to produce a
//    `className` instead of passing raw css down. Used when composing onto non-panda elements
//    (e.g. `<span>`). Has no effect outside of an asChild context.
//
// The core mechanism: when a styled component should NOT consume its css (i.e. it wraps a React
// component that itself accepts and forwards the panda css prop), it returns early with
// `{ css: rawStylesObject }` instead of `{ className: "..." }`. The child component then receives
// the parent's raw styles via its own `css` prop, merges them with its own recipe, and produces the
// final className. This preserves correct panda override semantics (last-write-wins on style objects)
// compared to naive className concatenation.
//
// NOTE: This plugin relies on panda's internal generated code structure and will need to be updated
// if panda changes its codegen output format. The `patch()` helper throws immediately if any anchor
// string is not found, so breakage surfaces as a clear error rather than a silent no-op.

// Throws if the anchor isn't found, so panda codegen changes surface as a clear error
// rather than silently reverting to vanilla panda behavior.
const patch = (code: string, from: string, to: string): string => {
  if (!code.includes(from)) {
    throw new Error(`[forward-css-prop] patch anchor not found in generated code:\n\n${from}`);
  }
  return code.replace(from, to);
};

export const transformStyledFn = (args: CodegenPrepareHookArgs) => {
  const factoryArtifact = args.artifacts.find((art) => art.id === "jsx-factory");
  const factoryJs = factoryArtifact?.files.find((f) => f.path.endsWith(".js") && !f.path.endsWith(".d.ts"));

  const typesArtifact = args.artifacts.find((art) => art.id === "types");
  const jsxTypes = typesArtifact?.files.find((f) => f.path.endsWith("jsx.d.ts"));
  const systemTypes = typesArtifact?.files.find((f) => f.path.endsWith("system.d.ts"));

  const jsxIndex = args.artifacts
    .find((art) => art.id === "jsx-index")
    ?.files.find((file) => file.path.endsWith("index.d.ts"));

  if (!factoryJs?.code || !jsxTypes?.code || !systemTypes?.code || !jsxIndex?.code) {
    throw new Error("[forward-css-prop] expected artifacts not found — has panda changed its codegen output?");
  }

  // ── factory.js patches ────────────────────────────────────────────────────

  factoryJs.code = patch(
    factoryJs.code,
    "import { cx, cva } from '../css/index';",
    "import { cx, cva, css } from '../css/index';",
  );

  // Precompute contextConsume and isBaseComponent once per styled() call (outside the render closure).
  // contextConsume: true when the element produces className directly (string, panda-styled, or baseComponent).
  // isBaseComponent: true when asChild+consumeCss should force className production; propagates through chains.
  // Note: `void 0` is used throughout to match panda's codegen output style. Anchor strings must match exactly, so we mirror that convention.
  factoryJs.code = patch(
    factoryJs.code,
    "const DefaultElement = BaseComponent.__base__ || BaseComponent",
    `const DefaultElement = BaseComponent.__base__ || BaseComponent
  const contextConsume = options.baseComponent || BaseComponent.__base__ !== void 0 || typeof BaseComponent === "string"
  const isBaseComponent = options.baseComponent || BaseComponent.__baseComponent__`,
  );

  // Extract consumeCss from forwardedProps (so it doesn't leak to the DOM), then decide per render
  // whether to produce a className or pass raw css down to the child component.
  // consumeCss only takes effect in the asChild branch; in the non-asChild branch contextConsume wins.
  factoryJs.code = patch(
    factoryJs.code,
    "const hasStyles = propStyles || cssStyles !== void 0",
    `const consumeCss = forwardedProps?.consumeCss
    if (forwardedProps) delete forwardedProps.consumeCss
    const consume = forwardedProps?.asChild ? consumeCss && isBaseComponent : contextConsume
    const hasStyles = propStyles || cssStyles !== void 0`,
  );

  // When !consume: return early with raw css styles instead of a computed className.
  // The child component receives these styles via its css prop and merges them with its own recipe,
  // so last-write-wins semantics are preserved before serializing to className.
  factoryJs.code = patch(
    factoryJs.code,
    `    } else {
      className = cx(
        hasStyles ? serializeSplitStyles(propStyles, cssStyles, composedRecipeFn.raw(variantProps)) : composedRecipeFn(variantProps),
        combinedProps.className,
      )
    }`,
    `    } else if (!consume) {
      return createElement(Element, {
        ref,
        ...forwardedProps,
        ...elementProps,
        ...htmlProps,
        css: hasStyles ? css.raw(composedRecipeFn.raw(variantProps), propStyles, cssStyles) : composedRecipeFn.raw(variantProps),
        // propagate consumeCss so downstream asChild components inherit the override:
        // true propagates so the first baseComponent in the chain produces className;
        // false propagates so the entire chain stays in raw-css-forwarding mode.
        ...(consumeCss !== void 0 && { consumeCss }),
      }, children ?? combinedProps.children)
    } else {
      className = cx(
        hasStyles ? serializeSplitStyles(propStyles, cssStyles, composedRecipeFn.raw(variantProps)) : composedRecipeFn(variantProps),
        combinedProps.className,
      )
    }`,
  );

  // Propagate isBaseComponent through styled chains so nested components inherit the flag.
  factoryJs.code = patch(
    factoryJs.code,
    "StyledComponent.__shouldForwardProps__ = shouldForwardProp",
    `StyledComponent.__shouldForwardProps__ = shouldForwardProp
  StyledComponent.__baseComponent__ = isBaseComponent`,
  );

  // Add baseComponent option to JsxFactoryOptions
  jsxTypes.code = patch(
    jsxTypes.code,
    "shouldForwardProp?: (prop: string, variantKeys: string[]) => boolean",
    `shouldForwardProp?: (prop: string, variantKeys: string[]) => boolean
  /**
  * Used when creating styled components from React components that do not support the panda css prop natively (e.g. ark components).
  * When true, styles are always converted to \`className\` instead of being passed as a raw css object.
  * @example
  * import { ark } from "@ark-ui/react/factory"
  * import { styled } from "@ndla/styled-system/jsx"
  * const Button = styled(ark.button, {}, { baseComponent: true })
  */
  baseComponent?: boolean`,
  );

  // Add StyledProps as a convenience type for components that accept the panda css prop manually
  jsxTypes.code = patch(
    jsxTypes.code,
    "export type HTMLStyledProps<T extends ElementType> = JsxHTMLProps<BaseComponentProps<T>, JsxStyleProps>",
    `export type HTMLStyledProps<T extends ElementType> = JsxHTMLProps<BaseComponentProps<T>, JsxStyleProps>
export interface StyledProps extends UnstyledProps, AsProps, JsxStyleProps {}`,
  );

  // Export StyledProps from jsx/index.d.ts
  jsxIndex.code = patch(
    jsxIndex.code,
    "export { HTMLStyledProps, StyledComponent, Styled, StyledVariantProps, JsxFactoryOptions, ComponentProps, DataAttrs, AsProps } from '../types/jsx';",
    "export { HTMLStyledProps, StyledComponent, Styled, StyledVariantProps, JsxFactoryOptions, ComponentProps, DataAttrs, AsProps, StyledProps } from '../types/jsx';",
  );

  // Export WithCss so consumers can type components that accept the panda css prop manually
  systemTypes.code = patch(systemTypes.code, "interface WithCss {", "export interface WithCss {");

  // Add consumeCss to JsxStyleProps so it's available on all styled component props
  systemTypes.code = patch(
    systemTypes.code,
    "export type JsxStyleProps = WithCss",
    `export type JsxStyleProps = WithCss & {
  /**
  * Forces a baseComponent to produce a \`className\` when used with \`asChild\`, instead of passing
  * raw css down. Use when composing onto non-panda elements (e.g. \`<span>\`).
  * @example
  * const Button = styled(ark.button, {}, { baseComponent: true })
  * return (
  *   <Button asChild consumeCss>
  *     <span>Click me</span>
  *   </Button>
  * )
  */
  consumeCss?: boolean
}`,
  );

  return args.artifacts;
};
