/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PauseLine, PlayFill } from "@ndla/icons";
import { IconButton, type IconButtonProps } from "@ndla/primitives";
import { useTranslation } from "react-i18next";

interface Props extends IconButtonProps {
  playing?: boolean;
}

export const PlayButton = ({ playing, children, ...rest }: Props) => {
  const { t } = useTranslation();
  return (
    <IconButton aria-label={playing ? t("audio.pause") : t("audio.play")} {...rest}>
      {children ?? (playing ? <PauseLine /> : <PlayFill />)}
    </IconButton>
  );
};
