/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, useState } from "react";
import { Button, type ButtonProps } from "@ndla/primitives";

// TODO: Let's consider abandoning `disabled` on the button here. It should instead just open/close the widget based on its current state.

export interface ZendeskButtonProps extends ButtonProps {
  widgetKey: string;
  locale: string;
}

declare global {
  interface Window {
    zE: (modifier: string, action: string, callback?: (() => void) | string) => void;
  }
}

export const ZendeskButton = forwardRef<HTMLButtonElement, ZendeskButtonProps>(
  ({ locale, variant = "secondary", widgetKey, children, ...rest }, ref) => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
      if (window && !window.zE) {
        setLoading(true);
        // Asynchronously load zendesk scripts for better performance
        const script = document.createElement("script");
        script.id = "ze-snippet";
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => {
          if (window.zE) {
            window.zE("webWidget", "setLocale", locale);
            window.zE("webWidget:on", "close", () => {
              setLoading(false);
            });
            window.zE("webWidget", "open");
          }
        };
        script.src = `https://static.zdassets.com/ekr/snippet.js?key=${widgetKey}`;
        document.body.appendChild(script);
      } else if (window?.zE) {
        window.zE("webWidget", "open");
      }
    };

    return (
      <Button onClick={handleClick} variant={variant} id="zendeskButton" disabled={loading} {...rest} ref={ref}>
        {children}
      </Button>
    );
  },
);
