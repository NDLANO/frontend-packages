/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { CSSProperties, ReactNode, Ref, forwardRef, useMemo } from "react";
import styled from "@emotion/styled";
import { Content, DialogProps, DialogTriggerProps, Overlay, Portal, Root, Trigger } from "@radix-ui/react-dialog";
import { breakpoints, colors, mq, spacing } from "@ndla/core";
import { modalAnimations, overlayAnimations, positionStyles, sizeStyles } from "./modalStyles";
import { ModalContentProps } from "./types";

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(1, 1, 1, 0.3);
  z-index: 100;
  ${overlayAnimations};
  animation-duration: var(--duration);
  animation-timing-function: ease-in-out;
  &[data-state="open"] {
    animation-name: overlayFadeIn;
  }
  &[data-state="closed"] {
    animation-name: overlayFadeOut;
  }
`;

const DialogContent = styled(Content)`
  --margin: 0px;
  position: fixed;
  inset: 0;
  margin: auto;
  z-index: 100;
  height: min-content;
  max-height: 85%;
  max-width: 95%;
  overflow-y: auto;
  background-color: ${colors.white};
  ${mq.range({ from: breakpoints.tablet })} {
    &[data-margin="small"] {
      --margin: ${spacing.normal};
    }
  }
  padding-bottom: env(safe-area-inset-bottom);
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  ${modalAnimations};
  animation-duration: var(--duration);
  animation-timing-function: ease-in-out;

  ${positionStyles};
  ${sizeStyles};
  &[data-expands="true"] {
    width: min-content;
    height: min-content;
    max-width: 100%;
    max-height: 100%;
  }
  &[data-animation-name="fade"] {
    &[data-state="open"] {
      animation-name: modalFadeIn;
    }
    &[data-state="closed"] {
      animation-name: modalFadeOut;
    }
  }
  &[data-animation-name="zoom"] {
    &[data-state="open"] {
      animation-name: modalZoomIn;
    }
    &[data-state="closed"] {
      animation-name: modalZoomOut;
    }
  }
  &[data-animation-name="subtle"] {
    &[data-state="open"] {
      animation-name: modalSubtleIn;
    }
    &[data-state="closed"] {
      animation-name: modalSubtleOut;
    }
  }
  &[data-animation-name="slideIn"][data-position="top"] {
    &[data-state="open"] {
      animation-name: modalSlideTopIn;
    }
    &[data-state="closed"] {
      animation-name: modalSlideTopOut;
    }
  }
  &[data-animation-name="slideIn"][data-position="right"] {
    &[data-state="open"] {
      animation-name: modalSlideRightIn;
    }
    &[data-state="closed"] {
      animation-name: modalSlideRightOut;
    }
  }
  &[data-animation-name="slideIn"][data-position="bottom"] {
    &[data-state="open"] {
      animation-name: modalSlideBottomIn;
    }
    &[data-state="closed"] {
      animation-name: modalSlideBottomOut;
    }
  }
  &[data-animation-name="slideIn"][data-position="left"] {
    &[data-state="open"] {
      animation-name: modalSlideLeftIn;
    }
    &[data-state="closed"] {
      animation-name: modalSlideLeftOut;
    }
  }
  ${mq.range({ until: breakpoints.tablet })} {
    min-width: 100%;
    min-height: 100%;
  }
`;

const StyledDialog = styled(Root)`
  position: fixed;
  inset: 0;
  width: 100vw;
  z-index: 100;
`;

export const Modal = ({ children, ...rest }: DialogProps) => {
  return <StyledDialog {...rest}>{children}</StyledDialog>;
};

interface ModalTriggerProps extends DialogTriggerProps {
  children: ReactNode;
}

export const ModalTrigger = forwardRef(({ children, ...rest }: ModalTriggerProps, ref: Ref<HTMLButtonElement>) => {
  return (
    <Trigger asChild ref={ref} {...rest}>
      {children}
    </Trigger>
  );
});

export const ModalContent = ({
  children,
  modalMargin = "small",
  position = "center",
  size: sizeProp = "normal",
  animationDuration = 400,
  animation = "zoom",
  expands,
  forceOverlay,
  ...rest
}: ModalContentProps) => {
  const styledVars = useMemo(
    () => ({ "--duration": `${animationDuration}ms` }) as unknown as CSSProperties,
    [animationDuration],
  );
  const { size, height, width }: Record<string, string> = useMemo(() => {
    return typeof sizeProp === "string" ? { size: sizeProp } : sizeProp;
  }, [sizeProp]);

  return (
    <Portal>
      {forceOverlay ? (
        <StyledOverlay aria-hidden key="modal-backdrop" style={styledVars} />
      ) : (
        <Overlay asChild>
          <StyledOverlay aria-hidden key="modal-backdrop" style={styledVars} />
        </Overlay>
      )}
      <DialogContent
        data-animation-name={animation}
        data-position={position}
        data-height={height}
        data-width={width}
        data-size={size}
        data-expands={expands}
        data-margin={modalMargin}
        style={styledVars}
        {...rest}
      >
        {children}
      </DialogContent>
    </Portal>
  );
};
