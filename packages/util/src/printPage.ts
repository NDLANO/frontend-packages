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
  this.contentWindow.__container__ = this;
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.focus(); // Required for IE
  setTimeout(() => this.contentWindow.print(), 2000);
}

export function printPage(url: string) {
  const iframe = document.createElement("iframe");
  iframe.onload = setPrint;
  iframe.src = url;
  document.body.appendChild(iframe);
}
