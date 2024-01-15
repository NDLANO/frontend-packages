/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const mq = {
  range: ({ from, until }: { from?: string; until?: string }) =>
    `${from ? `@media (min-width: ${from})` : ""}${from && until ? " and " : ""}${!from && until ? "@media " : ""}${
      until ? `(max-width: ${until})` : ""
    }`,
};

export default mq;
