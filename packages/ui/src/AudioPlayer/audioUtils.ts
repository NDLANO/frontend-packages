/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const currentSeconds = seconds % 60;

  const formattedSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
  return `${minutes}:${formattedSeconds}`;
};
