/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B This helper is intended to be used in https://github.com/ndlano/article-converter. It is not a general soultion for using portals in SSR applications.

import { ReactNode } from "react";
import ReactDOM from "react-dom";

const canUseDOM = () => !!(typeof window !== "undefined" && window.document && !window.document.hidden); // window.document.hidden === jsdom check

export function createUniversalPortal(children: ReactNode, selector: string) {
  if (!canUseDOM()) {
    return <div data-react-universal-portal>{children}</div>;
  }
  const el = document.querySelector(selector) as Element;
  return ReactDOM.createPortal(children, el);
}
