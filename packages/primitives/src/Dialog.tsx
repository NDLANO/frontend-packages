/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type RefAttributes } from "react";
import { Dialog, dialogAnatomy, useDialog as _useDialog } from "@ark-ui/react";
import { type RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { createStyleContext, styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { Heading, Text, type TextProps } from "./Text";

const dialogRecipe = sva({
  slots: dialogAnatomy.keys(),
  base: {
    backdrop: {
      position: "fixed",
      height: "100vh",
      width: "100vw",
      left: "0",
      top: "0",
      // TODO: Consider if this should be a token. It's probably consistent enough between dark and light mode to be a token.
      background: "rgba(1, 1, 1, 0.3)",
      _open: {
        animation: "backdrop-in",
        _motionReduce: {
          animation: "none",
        },
      },
      _closed: {
        animation: "backdrop-out",
        _motionReduce: {
          animation: "none",
        },
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
    context: "dialog",
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
            _motionReduce: {
              animation: "none",
            },
          },
          _closed: {
            animation: "drawer-out-left",
            _motionReduce: {
              animation: "none",
            },
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
            _motionReduce: {
              animation: "none",
            },
          },
          _closed: {
            animation: "drawer-out-right",
            _motionReduce: {
              animation: "none",
            },
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
            _motionReduce: {
              animation: "none",
            },
          },
          _closed: {
            animation: "drawer-out-top",
            _motionReduce: {
              animation: "none",
            },
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
            _motionReduce: {
              animation: "none",
            },
          },
          _closed: {
            animation: "drawer-out-bottom",
            _motionReduce: {
              animation: "none",
            },
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
    context: {
      dialog: {
        positioner: {
          zIndex: "modal",
        },
        backdrop: {
          zIndex: "overlay",
        },
      },
      alert: {
        positioner: {
          zIndex: "alertModal",
        },
        backdrop: {
          zIndex: "alertModalOverlay",
        },
      },
    },
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
            _motionReduce: {
              animation: "none",
            },
          },
          _closed: {
            animation: "dialog-out",
            _motionReduce: {
              animation: "none",
            },
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

export type DialogVariantProps = NonNullable<RecipeVariantProps<typeof dialogRecipe>>;

export interface DialogRootProps extends Dialog.RootProps, DialogVariantProps {}

export const InternalDialogRoot = withRootProvider(Dialog.Root);

export const DialogRoot = ({ lazyMount = true, unmountOnExit = true, ...props }: DialogRootProps) => (
  <InternalDialogRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const DialogBackdrop = withContext(Dialog.Backdrop, "backdrop", { baseComponent: true });

export const DialogStandaloneContent = withContext(Dialog.Content, "content", { baseComponent: true });

export const DialogPositioner = withContext(Dialog.Positioner, "positioner", { baseComponent: true });

interface DialogContentProps extends Dialog.ContentProps, StyledProps {}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => (
  <>
    <DialogBackdrop />
    <DialogPositioner>
      <DialogStandaloneContent ref={ref} {...props} />
    </DialogPositioner>
  </>
));

const InternalDialogDescription = withContext(Dialog.Description, "description");

interface DialogDescriptionProps
  extends Omit<Dialog.DescriptionProps, "color">, TextProps, StyledProps, RefAttributes<HTMLParagraphElement> {}

export const DialogDescription = ({ textStyle = "body.large", children, ...rest }: DialogDescriptionProps) => {
  return (
    <InternalDialogDescription asChild>
      <Text textStyle={textStyle} {...rest}>
        {children}
      </Text>
    </InternalDialogDescription>
  );
};

const InternalDialogTitle = withContext(Dialog.Title, "title");

interface DialogTitleProps
  extends Omit<Dialog.TitleProps, "color">, TextProps, StyledProps, RefAttributes<HTMLHeadingElement> {}

export const DialogTitle = ({ textStyle = "title.medium", children, ...rest }: DialogTitleProps) => (
  <InternalDialogTitle asChild>
    <Heading textStyle={textStyle} {...rest}>
      {children}
    </Heading>
  </InternalDialogTitle>
);

export const DialogTrigger = withContext(Dialog.Trigger, "trigger", { baseComponent: true });

export const DialogCloseTrigger = withContext(Dialog.CloseTrigger, "closeTrigger", { baseComponent: true });

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

export const DialogFooter = styled("div", {
  base: {
    display: "flex",
    gap: "3xsmall",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingInline: "medium",
    paddingBlockStart: "small",
    paddingBlockEnd: "medium",
  },
});

export const DialogRootProvider = withRootProvider(Dialog.RootProvider);

export const useDialog = _useDialog;
