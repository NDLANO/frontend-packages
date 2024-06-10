/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, forwardRef } from "react";
import type { Assign } from "@ark-ui/react";
import { Dialog } from "@ark-ui/react";
import { RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { StyledVariantProps, SystemProperties } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Heading, Text, TextProps } from "./Text";

const dialogRecipe = sva({
  // We only use a subset of the dialog components, so we roll our own slots instead of relying on @ark/anatomy.
  slots: ["positioner", "backdrop", "content"],
  className: "dialog",
  base: {
    backdrop: {
      position: "fixed",
      height: "100vh",
      width: "100vw",
      zIndex: "overlay",
      left: "0",
      top: "0",
      // TODO: Consider if this should be a token. It's probably consistent enough between dark and light mode to be a token.
      background: "rgba(1, 1, 1, 0.3)",
      _open: {
        animation: "backdrop-in",
      },
      _closed: {
        animation: "backdrop-out",
      },
    },
    positioner: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      left: "0",
      top: "0",
      width: "100vw",
      height: "100dvh",
      zIndex: "modal",
    },
    // TODO: Let's try to fix the overflow border radius thingy in lipsum example.
    content: {
      position: "relative",
      background: "surface.default",
      boxShadow: "xlarge",
      height: "min-content",
      maxWidth: "95%",
      maxHeight: "85%",
      margin: "auto",
      overflowY: "auto",
      borderRadius: { base: "sharp", tablet: "small" },
      paddingBlockStart: "env(safe-area-inset-top)",
      paddingBlockEnd: "env(safe-area-inset-bottom)",
      paddingInlineStart: "env(safe-area-inset-left)",
      paddingInlineEnd: "env(safe-area-inset-right)",
      _open: {
        animation: "dialog-in",
      },
      _closed: {
        animation: "dialog-out",
      },
      tabletDown: {
        minWidth: "100%",
        minHeight: "100%",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      full: {
        content: {
          minHeight: "100%",
          minWidth: "100%",
          borderRadius: "sharp",
        },
      },
      xsmall: {
        content: {
          width: "300px",
        },
      },
      small: {
        content: {
          width: "500px",
        },
      },
      medium: {
        content: {
          width: "700px",
        },
      },
      large: {
        content: {
          width: "1100px",
        },
      },
    },
  },
});

const { withRootProvider, withContext } = createStyleContext(dialogRecipe);

export type DialogVariantProps = RecipeVariantProps<typeof dialogRecipe>;

export type DialogRootProps = Dialog.RootProps & DialogVariantProps;

export const InternalDialogRoot = withRootProvider<DialogRootProps>(Dialog.Root);

export const DialogRoot = ({ lazyMount = true, unmountOnExit = true, ...props }: DialogRootProps) => (
  <InternalDialogRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const DialogBackdrop = withContext<HTMLDivElement, Assign<SystemProperties, Dialog.BackdropProps>>(
  Dialog.Backdrop,
  "backdrop",
);

export const DialogStandaloneContent = withContext<HTMLDivElement, Assign<SystemProperties, Dialog.ContentProps>>(
  Dialog.Content,
  "content",
);

export const DialogPositioner = withContext<HTMLDivElement, Assign<SystemProperties, Dialog.PositionerProps>>(
  Dialog.Positioner,
  "positioner",
);

export const DialogContent = forwardRef<HTMLDivElement, ComponentProps<typeof DialogStandaloneContent>>(
  (props, ref) => (
    <>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogStandaloneContent ref={ref} {...props} />
      </DialogPositioner>
    </>
  ),
);

export const DrawerStandaloneContent = styled(DialogStandaloneContent, {
  base: {
    margin: "0",
    borderRadius: { base: "sharp", tablet: "sharp" },
  },
  variants: {
    position: {
      left: {
        marginInlineEnd: "auto",
        minHeight: "100%",
        maxHeight: "100%",
        _open: {
          animation: "drawer-in-left",
        },
        _closed: {
          animation: "drawer-out-left",
        },
      },
      right: {
        marginInlineStart: "auto",
        minHeight: "100%",
        maxHeight: "100%",
        _open: {
          animation: "drawer-in-right",
        },
        _closed: {
          animation: "drawer-out-right",
        },
      },
      top: {
        marginBlockEnd: "auto",
        width: "100%",
        maxWidth: "100%",
        minWidth: "100%",
        _open: {
          animation: "drawer-in-top",
        },
        _closed: {
          animation: "drawer-out-top",
        },
      },
      bottom: {
        marginBlockStart: "auto",
        maxWidth: "100%",
        minWidth: "100%",
        _open: {
          animation: "drawer-in-bottom",
        },
        _closed: {
          animation: "drawer-out-bottom",
        },
      },
    },
  },
});

export const DrawerContent = forwardRef<HTMLDivElement, ComponentProps<typeof DrawerStandaloneContent>>(
  (props, ref) => (
    <>
      <DialogBackdrop />
      <DialogPositioner>
        {/* @ts-expect-error  panda expects one type of css prop, whereas emotion expects another. */}
        <DrawerStandaloneContent ref={ref} {...props} />
      </DialogPositioner>
    </>
  ),
);

export type DrawerContentVariantProps = StyledVariantProps<typeof DrawerStandaloneContent>;

export const DialogDescription = ({ textStyle = "body.large", ...rest }: Dialog.DescriptionProps & TextProps) => {
  return (
    <Dialog.Description asChild>
      <Text as="p" textStyle={textStyle} {...rest}></Text>
    </Dialog.Description>
  );
};

export const DialogTitle = ({ textStyle = "title.medium", ...rest }: Dialog.TitleProps & TextProps) => (
  <Dialog.Title asChild>
    <Heading as="h1" textStyle={textStyle} {...rest}></Heading>
  </Dialog.Title>
);

export const DialogTrigger = Dialog.Trigger;

export const DialogCloseTrigger = Dialog.CloseTrigger;

export const DialogHeader = styled("div", {
  base: {
    display: "flex",
    paddingInline: "medium",
    paddingBlockStart: "medium",
    justifyContent: "space-between",
    gap: "xsmall",
  },
});

export const DialogBody = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
    paddingInline: "medium",
    paddingBlockStart: "small",
    paddingBlockEnd: "medium",
  },
});
