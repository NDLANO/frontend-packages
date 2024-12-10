/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
  createContext,
  forwardRef,
  useContext,
} from "react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledComponent, SystemStyleObject, WithCss } from "@ndla/styled-system/types";

type Props = Record<string, unknown>;
type Recipe = {
  (props?: Props): Props;
  raw: (props?: Props) => Props;
  splitVariantProps: (props: Props) => [Props, Props];
};
type Slot<R extends Recipe> = keyof ReturnType<R>;

/**
 * A utility for creating a style context for a recipe, allowing one to change the styles of all parts of a component from the root component. Credit: https://github.com/cschroeter/park-ui/blob/main/website/src/lib/create-style-context.tsx.
 */

interface BaseStyleContextProps {
  asChild?: boolean;
  consumeCss?: boolean;
}

interface CreateStyleContextOptions {
  baseComponent?: boolean;
}

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<Record<Slot<R>, SystemStyleObject> | null>(null);

  const withRootProvider = <P extends {}>(Component: ElementType) => {
    const StyledComponent = (props: P) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe.raw(variantProps) as Record<Slot<R>, SystemStyleObject>;

      return (
        <StyleContext.Provider value={slotStyles}>
          <Component {...otherProps} />
        </StyleContext.Provider>
      );
    };
    return StyledComponent;
  };

  const withProvider = <T, P extends BaseStyleContextProps & WithCss>(
    Component: ElementType,
    slot: Slot<R>,
    options?: CreateStyleContextOptions,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(Component, {}, options) as StyledComponent<ElementType, {}>;
    return forwardRef<T, P>(({ css: cssProp, ...props }, ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);

      const slotStyles = recipe.raw(variantProps) as Record<Slot<R>, SystemStyleObject>;

      return (
        <StyleContext.Provider value={slotStyles}>
          <StyledComponent {...otherProps} ref={ref} css={css.raw(slotStyles?.[slot], cssProp)} />
        </StyleContext.Provider>
      );
    });
  };

  const withContext = <T, P extends BaseStyleContextProps & WithCss>(
    Component: ElementType,
    slot: Slot<R>,
    options?: CreateStyleContextOptions,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(Component, {}, options) as StyledComponent<ElementType, {}>;
    return forwardRef<T, P>(({ css: cssProp, ...props }, ref) => {
      const slotStyles = useContext(StyleContext);
      return <StyledComponent {...props} ref={ref} css={css.raw(slotStyles?.[slot], cssProp)} />;
    });
  };

  return {
    withRootProvider,
    withProvider,
    withContext,
  };
};
