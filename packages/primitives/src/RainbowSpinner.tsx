/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { HTMLProps } from "@ark-ui/react/factory";
import { css, cva, type RecipeVariantProps } from "@ndla/styled-system/css";
import { styled, type StyledProps } from "@ndla/styled-system/jsx";
import { forwardRef } from "react";

const rainbowRecipe = cva({
  base: {
    "--line-width": "token(sizes.4xsmall)",
    "--line-spacing": "token(sizes.xxsmall)",
    position: "relative",
    width: "3xlarge",
    height: "3xlarge",
    "& > :nth-child(1)": { "--i": "0" },
    "& > :nth-child(2)": { "--i": "1" },
    "& > :nth-child(3)": { "--i": "2" },
    "& > :nth-child(4)": { "--i": "3" },
    "& > :nth-child(5)": { "--i": "4" },
  },
  variants: {
    variant: {
      page: {
        paddingBlockStart: "4xlarge",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      default: {},
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const BaseLine = styled("div", {
  base: {
    position: "absolute",
    animation: "rainbow-spin",
    transformOrigin: "50% 100%",
    width: "calc(100% - (var(--i) * (var(--line-spacing) + var(--line-width))))",
    height: "calc(50% - (var(--i) * (var(--line-spacing) + var(--line-width)) / 2))",
    top: "calc(var(--i) * (var(--line-spacing) + var(--line-width)) / 2)",
    insetInline: "calc(var(--i) * (var(--line-spacing) + var(--line-width)) / 2)",
    animationDelay: "calc(var(--i) * -50ms)",
    borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
    borderWidth: "var(--line-width)",
    borderBottom: "0",
  },
});

const Line1 = styled(BaseLine, {
  base: {
    borderColor: "surface.brand.5",
  },
});

const Line2 = styled(BaseLine, {
  base: {
    borderColor: "surface.brand.4",
  },
});

const Line3 = styled(BaseLine, {
  base: {
    borderColor: "surface.brand.3",
  },
});

const Line4 = styled(BaseLine, {
  base: {
    borderColor: "surface.brand.2",
  },
});

const Line5 = styled(BaseLine, {
  base: {
    borderColor: "surface.brand.1",
  },
});

const RainbowRoot = styled("div", {}, { baseComponent: true });

export type RainbowSpinnerVariantProps = NonNullable<RecipeVariantProps<typeof rainbowRecipe>>;

interface Props extends HTMLProps<"div">, StyledProps, RainbowSpinnerVariantProps {}

export const RainbowSpinner = forwardRef<HTMLDivElement, Props>(({ css: cssProp, variant, ...props }, ref) => {
  return (
    <RainbowRoot css={css.raw(rainbowRecipe.raw({ variant }), cssProp)} {...props} ref={ref}>
      <Line1 />
      <Line2 />
      <Line3 />
      <Line4 />
      <Line5 />
    </RainbowRoot>
  );
});
