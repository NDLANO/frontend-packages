/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";
import { IconButton, IconButtonProps } from "@ndla/primitives";
import { HStack, styled } from "@ndla/styled-system/jsx";
import { StyledVariantProps } from "@ndla/styled-system/types";

const StyledIconButton = styled(IconButton, {
  base: {
    _selected: {
      backgroundColor: "surface.actionSubtle.active",
      borderColor: "stroke.default",
      border: "1px solid",
    },
  },
});

const StyledHStack = styled(HStack, {
  base: {
    padding: "3xsmall",
  },
  defaultVariants: {
    color: "subtle",
  },
  variants: {
    color: {
      subtle: {
        background: "surface.infoSubtle",
        borderTopRadius: "xsmall",
        borderColor: "stroke.subtle",
        border: "1px solid",
      },
      white: {
        background: "surface.default",
      },
    },
  },
});

type StyledHStackProps = StyledVariantProps<typeof StyledHStack>;

export interface ToggleItem {
  icon: ReactNode;
  variant?: IconButtonProps["variant"];
  size?: IconButtonProps["size"];
  label: string;
  onClick: () => void;
  id: string;
  selected?: boolean;
}

export interface ToggleGroupProps extends ComponentPropsWithRef<"div"> {
  items: ToggleItem[];
}

export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps & StyledHStackProps>(
  ({ items, color, ...rest }, ref) => {
    return (
      <StyledHStack color={color} gap="xxsmall" ref={ref} {...rest}>
        {items.map(({ icon, variant, size, label, onClick, id, selected }) => (
          <StyledIconButton
            key={id}
            id={id}
            variant={variant ?? "tertiary"}
            size={size ?? "small"}
            aria-label={label}
            title={label}
            onClick={onClick}
            aria-selected={selected}
          >
            {icon}
          </StyledIconButton>
        ))}
      </StyledHStack>
    );
  },
);
