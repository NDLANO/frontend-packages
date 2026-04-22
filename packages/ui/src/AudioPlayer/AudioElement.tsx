/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ComponentProps } from "react";

interface Props extends ComponentProps<"audio"> {
  src: string;
  title: string;
}

export const AudioElement = (props: Props) => {
  // TODO: We should tie this up to the textual description somehow
  // oxlint-disable-next-line jsx-a11y/media-has-caption
  return <audio preload="metadata" {...props} />;
};
