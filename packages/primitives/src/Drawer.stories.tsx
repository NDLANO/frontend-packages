/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState } from "react";
import { Portal } from "@ark-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { Cross } from "@ndla/icons/action";
import { styled } from "@ndla/styled-system/jsx";
import { Button, IconButton } from "./Button";
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogRootProps,
  DialogStandaloneContent,
  DialogTitle,
  DialogTrigger,
  DrawerContent,
  DrawerContentVariantProps,
} from "./Dialog";
import { Text } from "./Text";

type StoryProps = DialogRootProps & DrawerContentVariantProps;

/**
 * En Drawer er en stylet versjon av `DialogContent`. På samme måte som `DialogContent` tilbys `DrawerContent` som en helper-komponent som kombinerer `DialogPositioner`, `DialogBackdrop` og `DialogContentStandalone`.
 */
const meta: Meta<StoryProps> = {
  title: "Primitives/Drawer",
  tags: ["autodocs"],
  component: DialogRoot,
  args: {
    size: "medium",
    position: "left",
  },
};

export default meta;

const ButtonContainer = styled("div", {
  base: {
    alignSelf: "flex-end",
    display: "flex",
    gap: "xsmall",
  },
});

export const Default: StoryFn<StoryProps> = ({ position, ...args }) => {
  return (
    <DialogRoot {...args} lazyMount unmountOnExit>
      <DialogTrigger asChild>
        <Button>Åpne</Button>
      </DialogTrigger>
      <Portal>
        <DrawerContent position={position}>
          <DialogHeader>
            <DialogTitle>Dialog-tittel er påkrevd</DialogTitle>
            <DialogCloseTrigger asChild>
              <IconButton variant="clear">
                <Cross />
              </IconButton>
            </DialogCloseTrigger>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              Både dialog-beskrivelser og dialog-titler blir en del av aria-informasjonen til dialog-elementet.
            </DialogDescription>
            <ButtonContainer>
              <DialogCloseTrigger asChild>
                <Button variant="secondary">Lukk</Button>
              </DialogCloseTrigger>
              <Button>Lagre</Button>
            </ButtonContainer>
          </DialogBody>
        </DrawerContent>
      </Portal>
    </DialogRoot>
  );
};
