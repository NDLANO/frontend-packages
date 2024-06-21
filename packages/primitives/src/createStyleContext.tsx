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
import { cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";

type Props = Record<string, unknown>;
type Recipe = {
  (props?: Props): Props;
  splitVariantProps: (props: Props) => [Props, Props];
};
type Slot<R extends Recipe> = keyof ReturnType<R>;

/**
 * A utility for creating a style context for a recipe, allowing one to change the styles of all parts of a component from the root component. Credit: https://github.com/cschroeter/park-ui/blob/main/website/src/lib/create-style-context.tsx.
 */
export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<Record<Slot<R>, string> | null>(null);

  const withRootProvider = <P extends {}>(Component: ElementType) => {
    const StyledComponent = (props: P) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

      return (
        <StyleContext.Provider value={slotStyles}>
          <Component {...otherProps} />
        </StyleContext.Provider>
      );
    };
    return StyledComponent;
  };

  const withProvider = <T, P extends { className?: string }>(
    Component: ElementType,
    slot: Slot<R>,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(Component);
    return forwardRef<T, P>((props, ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

      return (
        <StyleContext.Provider value={slotStyles}>
          <StyledComponent {...otherProps} ref={ref} className={cx(slotStyles?.[slot], props.className)} />
        </StyleContext.Provider>
      );
    });
  };

  const withContext = <T, P extends { className?: string }>(
    Component: ElementType,
    slot: Slot<R>,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(Component);
    return forwardRef<T, P>((props, ref) => {
      const slotStyles = useContext(StyleContext);
      return <StyledComponent {...props} ref={ref} className={cx(slotStyles?.[slot], props.className)} />;
    });
  };

  return {
    withRootProvider,
    withProvider,
    withContext,
  };
};
