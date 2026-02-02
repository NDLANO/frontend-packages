/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { Portal, Toaster, createToaster } from "@ark-ui/react";
import { CloseLine } from "@ndla/icons";
import { styled } from "@ndla/styled-system/jsx";
import { Button, IconButton } from "./Button";
import { ToastCloseTrigger, ToastDescription, ToastRoot, ToastTitle } from "./Toast";

const toaster = createToaster({
  placement: "bottom",
  overlap: true,
  gap: 8,
});

const ToastWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "medium",
  },
});

export default {
  title: "Primitives/Toast",
  tags: ["autodocs"],
  component: ToastRoot,
} as Meta<typeof ToastRoot>;

export const Default: StoryFn<typeof ToastRoot> = ({ ...args }) => (
  <div>
    <ToastWrapper>
      <Button
        onClick={() =>
          toaster.create({
            title: "Navn vist",
            description: "Navnet ditt vises nå på alle dine delte mapper",
            duration: 1000000,
          })
        }
      >
        Show toast
      </Button>
      <Button
        onClick={() =>
          toaster.create({
            title: "Navn skjult",
            description:
              "Navnet ditt vises nå ikke lenger på alle dine delte mapper. Navnet ditt vises nå ikke lenger på alle dine delte mapper. Navnet ditt vises nå ikke lenger på alle dine delte mapper",
            duration: 1000000,
          })
        }
      >
        Show longer toast
      </Button>
    </ToastWrapper>
    <Portal>
      <Toaster toaster={toaster}>
        {(toast) => (
          <ToastRoot {...args}>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
            <ToastCloseTrigger asChild>
              <IconButton variant="clear">
                <CloseLine />
              </IconButton>
            </ToastCloseTrigger>
          </ToastRoot>
        )}
      </Toaster>
    </Portal>
  </div>
);
