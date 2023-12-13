/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useState } from 'react';
import { css, Global } from '@emotion/react';
import { ButtonV2, ButtonProps } from '@ndla/button';
import { misc } from '@ndla/core';

const styling = css`
  border-radius: ${misc.borderRadius};
  background-color: white;
`;

interface Props extends ButtonProps {
  children: ReactNode;
  locale: string;
  widgetKey: string;
}

declare global {
  interface Window {
    zE: (modifier: string, action: string, callback?: (() => void) | string) => void;
  }
}

const ZendeskButton = ({ children, locale, widgetKey, ...rest }: Props) => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if (window && !window.zE) {
      setLoading(true);
      // Asynchronously load zendesk scripts for better performance
      const script = document.createElement('script');
      script.id = 'ze-snippet';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = function () {
        if (window.zE) {
          window.zE('webWidget', 'setLocale', locale);
          window.zE('webWidget:on', 'close', () => {
            setLoading(false);
          });
          window.zE('webWidget', 'open');
        }
      };
      script.src = `https://static.zdassets.com/ekr/snippet.js?key=${widgetKey}`;
      document.body.appendChild(script);
    } else if (window?.zE) {
      window.zE('webWidget', 'open');
    }
  };

  return (
    <>
      <Global
        styles={css`
          /* Hide default launcher so that we can provide our own. */
          iframe#launcher {
            display: none;
          }
        `}
      />
      <ButtonV2
        type="button"
        css={styling}
        onClick={handleClick}
        variant="outline"
        id="zendeskButton"
        disabled={loading}
        {...rest}
      >
        {children}
      </ButtonV2>
    </>
  );
};

export default ZendeskButton;
