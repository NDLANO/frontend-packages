/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Dialog, dialogAnatomy } from "@ark-ui/react";
import { RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Heading, Text, TextProps } from "./Text";

const dialogRecipe = sva({
  slots: dialogAnatomy.keys(),
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
    content: {
      "--margin": "token(sizes.medium)",
      position: "relative",
      background: "surface.default",
      boxShadow: "xlarge",
      height: "min-content",
      maxWidth: "95%",
      maxHeight: "95%",
      margin: "auto",
      overflowY: "auto",
      borderRadius: { base: "sharp", tablet: "small" },
      paddingBlockStart: "env(safe-area-inset-top)",
      paddingBlockEnd: "env(safe-area-inset-bottom)",
      paddingInlineStart: "env(safe-area-inset-left)",
      paddingInlineEnd: "env(safe-area-inset-right)",
      tabletDown: {
        "--margin": "0px",
        minWidth: "100%",
        minHeight: "100%",
      },
    },
  },
  defaultVariants: {
    size: "medium",
    position: "center",
    variant: "dialog",
  },
  compoundVariants: [
    {
      variant: "drawer",
      position: "left",
      css: {
        content: {
          minHeight: "100%",
          maxHeight: "100%",
          width: "var(--size)",
          _open: {
            animation: "drawer-in-left",
          },
          _closed: {
            animation: "drawer-out-left",
          },
        },
      },
    },
    {
      variant: "drawer",
      position: "right",
      css: {
        content: {
          minHeight: "100%",
          maxHeight: "100%",
          width: "var(--size)",
          _open: {
            animation: "drawer-in-right",
          },
          _closed: {
            animation: "drawer-out-right",
          },
        },
      },
    },
    {
      variant: "drawer",
      position: "top",
      css: {
        content: {
          minWidth: "100%",
          maxWidth: "100%",
          height: "var(--size)",
          _open: {
            animation: "drawer-in-top",
          },
          _closed: {
            animation: "drawer-out-top",
          },
        },
      },
    },
    {
      variant: "drawer",
      position: "bottom",
      css: {
        content: {
          minWidth: "100%",
          maxWidth: "100%",
          height: "var(--size)",
          _open: {
            animation: "drawer-in-bottom",
          },
          _closed: {
            animation: "drawer-out-bottom",
          },
        },
      },
    },
    {
      variant: "drawer",
      size: "xsmall",
      css: {
        content: {
          "--size": "sizes.surface.3xsmall",
        },
      },
    },
    {
      variant: "drawer",
      size: "small",
      css: {
        content: {
          "--size": "sizes.surface.xsmall",
        },
      },
    },
    {
      variant: "drawer",
      size: "medium",
      css: {
        content: {
          "--size": "sizes.surface.medium",
        },
      },
    },
    {
      variant: "drawer",
      size: "large",
      css: {
        content: {
          "--size": "sizes.surface.xlarge",
        },
      },
    },
  ],
  variants: {
    variant: {
      drawer: {
        content: {
          "--margin": "0px",
          borderRadius: { base: "sharp", tablet: "sharp" },
        },
      },
      dialog: {
        content: {
          width: "var(--size)",
          _open: {
            animation: "dialog-in",
          },
          _closed: {
            animation: "dialog-out",
          },
        },
      },
    },
    position: {
      left: {
        content: {
          marginInlineStart: "var(--margin)",
        },
      },
      center: {},
      right: {
        content: {
          marginInlineEnd: "var(--margin)",
        },
      },
      bottom: {
        content: {
          marginBlockEnd: "var(--margin)",
        },
      },
      top: {
        content: {
          marginBlockStart: "var(--margin)",
        },
      },
    },
    size: {
      full: {
        content: {
          "--margin": "0px",
          minHeight: "100%",
          minWidth: "100%",
          borderRadius: "sharp",
        },
      },
      xsmall: {
        content: {
          "--size": "sizes.surface.xsmall",
        },
      },
      small: {
        content: {
          "--size": "sizes.surface.medium",
        },
      },
      medium: {
        content: {
          "--size": "sizes.surface.xlarge",
        },
      },
      large: {
        content: {
          "--size": "sizes.surface.4xlarge",
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

export const DialogBackdrop = withContext<HTMLDivElement, JsxStyleProps & Dialog.BackdropProps>(
  Dialog.Backdrop,
  "backdrop",
  { baseComponent: true },
);

export const DialogStandaloneContent = withContext<HTMLDivElement, JsxStyleProps & Dialog.ContentProps>(
  Dialog.Content,
  "content",
  { baseComponent: true },
);

export const DialogPositioner = withContext<HTMLDivElement, JsxStyleProps & Dialog.PositionerProps>(
  Dialog.Positioner,
  "positioner",
  { baseComponent: true },
);

export const DialogContent = forwardRef<HTMLDivElement, Dialog.ContentProps & JsxStyleProps>((props, ref) => (
  <>
    <DialogBackdrop />
    <DialogPositioner>
      <DialogStandaloneContent ref={ref} {...props} />
    </DialogPositioner>
  </>
));

const InternalDialogDescription = withContext<HTMLParagraphElement, JsxStyleProps & Dialog.DescriptionProps>(
  Dialog.Description,
  "description",
);

export const DialogDescription = ({
  textStyle = "body.large",
  children,
  ...rest
}: Dialog.DescriptionProps & TextProps & JsxStyleProps) => {
  return (
    <InternalDialogDescription asChild>
      <Text textStyle={textStyle} {...rest}>
        {children}
      </Text>
    </InternalDialogDescription>
  );
};

const InternalDialogTitle = withContext<HTMLHeadingElement, JsxStyleProps & Dialog.TitleProps>(Dialog.Title, "title");

export const DialogTitle = ({
  textStyle = "title.medium",
  children,
  ...rest
}: Dialog.TitleProps & TextProps & JsxStyleProps) => (
  <InternalDialogTitle asChild>
    <Heading textStyle={textStyle} {...rest}>
      {children}
    </Heading>
  </InternalDialogTitle>
);

export const DialogTrigger = withContext<HTMLButtonElement, JsxStyleProps & Dialog.TriggerProps>(
  Dialog.Trigger,
  "trigger",
  { baseComponent: true },
);

export const DialogCloseTrigger = withContext<HTMLButtonElement, JsxStyleProps & Dialog.CloseTriggerProps>(
  Dialog.CloseTrigger,
  "closeTrigger",
  { baseComponent: true },
);

export const DialogHeader = styled("div", {
  base: {
    display: "flex",
    paddingInline: "medium",
    paddingBlockStart: "medium",
    justifyContent: "space-between",
    alignItems: "center",
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
