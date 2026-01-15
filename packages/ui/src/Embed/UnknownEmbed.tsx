/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { Text } from "@ndla/primitives";
import type { MetaData } from "@ndla/types-embed";

interface Props {
  embed: MetaData<any, any>;
}

export const UnknownEmbed = ({ embed }: Props) => {
  const { t } = useTranslation();
  return (
    <Text color="text.error" asChild consumeCss data-embed-type="unknown">
      <span>{t("embed.unsupported", { type: embed.resource })}</span>
    </Text>
  );
};
