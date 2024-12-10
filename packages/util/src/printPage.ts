/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function closePrint(this: any) {
  document.body.removeChild(this.__container__);
}

function setPrint(this: any) {
  const iframeWindow = this.contentWindow;
  iframeWindow.__container__ = this;
  iframeWindow.onbeforeunload = closePrint;
  iframeWindow.onafterprint = closePrint;

  // Wait until the content is fully ready to print
  if (isContentReady(iframeWindow.document)) {
    iframeWindow.focus();
    iframeWindow.print();
  } else {
    // If content isn't ready, use MutationObserver to wait for it
    const observer = new MutationObserver((_, obs) => {
      if (isContentReady(iframeWindow.document)) {
        obs.disconnect(); // Stop observing
        iframeWindow.focus();
        iframeWindow.print();
      }
    });

    observer.observe(iframeWindow.document, { childList: true, subtree: true });
  }
}

function isContentReady(doc: Document): boolean {
  // Logic to determine if the iframe's content is ready
  return doc.readyState === "complete";
}

export function printPage(url: string) {
  const iframe = document.createElement("iframe");
  iframe.onload = setPrint;
  iframe.src = url;
  iframe.style.visibility = "hidden";
  document.body.appendChild(iframe);
}
