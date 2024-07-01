/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Portal, Toaster, createToaster } from "@ark-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { Cross } from "@ndla/icons/action";
import { Button, IconButton } from "./Button";
import { ToastCloseTrigger, ToastDescription, ToastRoot, ToastTitle } from "./Toast";

const toaster = createToaster({
  placement: "bottom",
  overlap: true,
  gap: 8,
});

export default {
  title: "Primitives/Toast",
  tags: ["autodocs"],
  component: ToastRoot,
} as Meta<typeof ToastRoot>;

export const Default: StoryFn<typeof ToastRoot> = ({ ...args }) => (
  <div>
    <Button onClick={() => toaster.create({ title: "Hello", description: "World", duration: 1000000 })}>
      Show toast
    </Button>
    <Portal>
      <Toaster toaster={toaster}>
        {(toast) => (
          <ToastRoot {...args}>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
            <ToastCloseTrigger asChild forwardCssProp>
              <IconButton variant="clearSubtle">
                <Cross />
              </IconButton>
            </ToastCloseTrigger>
          </ToastRoot>
        )}
      </Toaster>
    </Portal>
  </div>
);
