/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { Portal } from "@ark-ui/react";
import { CloseLine } from "@ndla/icons";
import { styled } from "@ndla/styled-system/jsx";
import { useEffect, useState } from "react";
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
  DialogStandaloneContent,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import { Text } from "./Text";

/**
 * Dialogen har i tidligere versjoner av NDLA sitt designsystem blitt kalt Modal.
 * I denne versjonen av systemet har den blitt døpt om til Dialog, i og med at det er det det faktisk er. Modaliteten av dialogen kan styres v.h.a `modal`-propen på `DialogRoot`.
 * Komponentene som eksporteres fra Dialog er tynne wrappere rundt `ark` sine dialog-komponenter, satt sammen med våre egne primitives.
 */
const meta: Meta<typeof DialogRoot> = {
  title: "Primitives/Dialog",
  tags: ["autodocs"],
  component: DialogRoot,
  args: {
    size: "medium",
    variant: "dialog",
    position: "center",
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

export const Default: StoryFn<typeof DialogRoot> = (args) => {
  return (
    <DialogRoot {...args} lazyMount unmountOnExit>
      <DialogTrigger asChild>
        <Button>Åpne</Button>
      </DialogTrigger>
      <Portal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog-tittel er påkrevd</DialogTitle>
            <DialogCloseTrigger asChild>
              <IconButton variant="clear">
                <CloseLine />
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
        </DialogContent>
      </Portal>
    </DialogRoot>
  );
};

export const Controlled: StoryFn<typeof DialogRoot> = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 10000);
    }
  }, [isOpen]);

  return (
    <DialogRoot open={isOpen} onOpenChange={(change) => setIsOpen(change.open)}>
      <DialogTrigger asChild>
        <Button>Åpne</Button>
      </DialogTrigger>
      <Portal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Opened</DialogTitle>
            <DialogCloseTrigger asChild>
              <IconButton variant="clear">
                <CloseLine />
              </IconButton>
            </DialogCloseTrigger>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>This dialog will be closed by an external useEffect in 10 seconds</DialogDescription>
          </DialogBody>
        </DialogContent>
      </Portal>
    </DialogRoot>
  );
};

export const WithoutDialogContentHelper = () => (
  <DialogRoot>
    <DialogTrigger asChild>
      <Button>Åpne</Button>
    </DialogTrigger>
    <Portal>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogStandaloneContent>
          <DialogHeader>
            <DialogTitle>Tittel</DialogTitle>
            <DialogCloseTrigger asChild>
              <IconButton variant="clear">
                <CloseLine />
              </IconButton>
            </DialogCloseTrigger>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              <code>DialogContent</code> er bare en komponent som kombinerer{" "}
              <code>DialogBackdrop, DialogPositioner og DialogContent</code>
            </DialogDescription>
            <ButtonContainer>
              <DialogCloseTrigger asChild>
                <Button variant="secondary">Lukk</Button>
              </DialogCloseTrigger>
              <Button>Lagre</Button>
            </ButtonContainer>
          </DialogBody>
        </DialogStandaloneContent>
      </DialogPositioner>
    </Portal>
  </DialogRoot>
);

export const LongModal: StoryFn<typeof DialogRoot> = (args) => {
  return (
    <DialogRoot {...args}>
      <DialogTrigger asChild>
        <Button>Åpne</Button>
      </DialogTrigger>
      <Portal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog-tittel er påkrevd</DialogTitle>
            <DialogCloseTrigger asChild>
              <IconButton variant="clear">
                <CloseLine />
              </IconButton>
            </DialogCloseTrigger>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              Både dialog-beskrivelser og dialog-titler blir en del av aria-informasjonen til dialog-elementet.
            </DialogDescription>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus commodo consequat.
              Pellentesque eu scelerisque lectus. Curabitur facilisis molestie mattis. Proin turpis libero, congue eget
              porttitor in, vestibulum in lectus. Sed est nulla, porttitor et libero fermentum, malesuada rhoncus neque.
              Aenean a enim vel urna tristique interdum eu ut diam. Quisque gravida tincidunt mauris, ac vulputate orci
              tempus ac. Curabitur sit amet ligula vulputate, volutpat ipsum eu, semper velit. In quis consectetur
              turpis, nec facilisis nunc. Pellentesque luctus nunc orci, ac bibendum tortor blandit id.
            </Text>
            <Text>
              Proin tempor dolor dui, eget fermentum eros ultrices vitae. Morbi sit amet metus eget libero pretium
              commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
              vehicula, metus pharetra vestibulum ullamcorper, augue ipsum laoreet felis, non efficitur mi urna ut
              dolor. Maecenas feugiat, nibh a consectetur luctus, ante eros hendrerit sapien, sed euismod nunc ipsum in
              urna. Praesent ultricies nec nisl at imperdiet. Proin vel dapibus ipsum, eu interdum quam. Donec in tellus
              accumsan, suscipit odio ac, porta lorem. Ut sapien tortor, consectetur et mi sit amet, ornare fermentum
              metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </Text>
            <Text>
              Maecenas tempus nulla nisl, non ullamcorper eros lobortis quis. Nullam eu massa eleifend, fermentum ipsum
              in, vestibulum arcu. Phasellus ullamcorper pellentesque turpis, eu sollicitudin turpis suscipit at. Ut
              suscipit sem eget ligula rutrum, ut volutpat lorem condimentum. Morbi bibendum ante ac justo varius, at
              ultrices orci euismod. Sed egestas tellus elit, eget scelerisque nunc auctor id. Nam commodo urna quis
              velit dictum ullamcorper. Praesent rhoncus mi sit amet quam porta posuere. Quisque pretium elementum diam,
              ut consequat turpis ultricies ut. Fusce accumsan urna id turpis pretium, id cursus magna vehicula.
            </Text>
            <Text>
              Quisque ultricies nulla quam, id varius mi elementum at. Phasellus semper fermentum volutpat. Curabitur
              bibendum hendrerit libero vel volutpat. Donec lobortis malesuada nibh, nec ullamcorper nisi commodo eget.
              Nam nec fermentum urna. Aliquam ut dolor eget tortor feugiat venenatis sit amet ac erat. Phasellus in nunc
              in nisl interdum iaculis. Donec vel turpis quis mauris malesuada iaculis ut eget nulla. Etiam viverra
              lectus et turpis interdum luctus. Pellentesque ut ipsum quis enim tincidunt sagittis. In aliquet ligula
              turpis, eget commodo urna tempus tempus. Pellentesque accumsan euismod blandit. Etiam nisl tellus, aliquam
              vitae consectetur sit amet, fringilla aliquet sapien. Sed vehicula justo id sem scelerisque facilisis.
            </Text>
            <Text>
              Quisque eleifend, massa non ultricies euismod, neque leo pellentesque eros, et aliquam nulla tortor non
              sapien. Vestibulum dictum pretium augue vitae hendrerit. Ut tempor lectus sit amet sagittis sodales. Donec
              dignissim, metus eget semper aliquet, lorem nibh eleifend dolor, vitae rutrum nulla mauris vel arcu.
              Suspendisse viverra felis vitae massa lobortis dignissim. Maecenas eget erat malesuada, placerat ligula
              ac, scelerisque diam. Suspendisse fringilla, odio a posuere ullamcorper, quam elit dapibus purus, eu
              porttitor ante purus et nulla. Phasellus eleifend quis arcu eget egestas. Curabitur bibendum, ligula nec
              pretium elementum, erat eros finibus nisi, a commodo dolor justo quis dui. Praesent euismod risus quis
              dictum luctus. Quisque gravida ultricies sapien quis faucibus. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nulla porttitor sed nulla ut ornare. Ut eleifend egestas turpis a posuere.
            </Text>
            <ButtonContainer>
              <DialogCloseTrigger asChild>
                <Button variant="secondary">Lukk</Button>
              </DialogCloseTrigger>
              <Button>Lagre</Button>
            </ButtonContainer>
          </DialogBody>
        </DialogContent>
      </Portal>
    </DialogRoot>
  );
};
