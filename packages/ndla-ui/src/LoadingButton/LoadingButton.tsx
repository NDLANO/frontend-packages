/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, useMemo, type ReactNode } from "react";
import { type HTMLArkProps } from "@ark-ui/react";
import { Button, Spinner, type ButtonVariantProps, type IconButtonVariantProps } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { JsxStyleProps } from "@ndla/styled-system/types";

const StyledButton = styled(Button, {}, { baseComponent: true, defaultProps: { type: "button" } });

export interface BaseButtonProps extends HTMLArkProps<"button">, JsxStyleProps {
  loading?: boolean;
  loadingContent?: ReactNode;
  replaceContent?: boolean;
}

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ loading, loadingContent: loadingContentProp, replaceContent, onClick: _onClick, children, ...props }, ref) => {
    const ariaDisabled = loading ? { "aria-disabled": true } : {};

    const onClick = useMemo(() => (loading ? undefined : _onClick), [_onClick, loading]);

    const loadingContent = useMemo(() => {
      return replaceContent ? (
        loadingContentProp
      ) : (
        <>
          {loadingContentProp}
          {children}
        </>
      );
    }, [children, loadingContentProp, replaceContent]);

    return (
      <StyledButton onClick={onClick} {...ariaDisabled} {...props} ref={ref}>
        {loading ? loadingContent : children}
      </StyledButton>
    );
  },
);
interface LoadingButtonProps extends BaseButtonProps, ButtonVariantProps {
  "aria-label": string;
}

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loadingContent, "aria-label": ariaLabel, ...props }, ref) => (
    <BaseButton
      {...props}
      loadingContent={loadingContent ?? <Spinner size="small" aria-label={ariaLabel} />}
      ref={ref}
    />
  ),
);

interface LoadingIconButtonProps extends BaseButtonProps, IconButtonVariantProps {
  "aria-label": string;
}

export const LoadingIconButton = forwardRef<HTMLButtonElement, LoadingIconButtonProps>(
  ({ loadingContent, replaceContent = true, "aria-label": ariaLabel, ...props }, ref) => (
    <BaseButton
      {...props}
      loadingContent={loadingContent ?? <Spinner size="small" aria-label={ariaLabel} />}
      replaceContent={replaceContent}
      ref={ref}
    />
  ),
);
