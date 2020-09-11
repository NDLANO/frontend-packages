/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const copyTextToClipboard = async (copyPageUrlLink: string) => {
  if (navigator) {
    // @ts-ignore
    const permission = await navigator.permissions.query({
      name: 'clipboard-write',
    });
    if (
      permission &&
      (permission.state === 'granted' || permission.state === 'prompt')
    ) {
      // @ts-ignore
      return await navigator.clipboard.writeText(copyPageUrlLink);
    }
  }
  throw Error('Error copying to clipboard');
};
