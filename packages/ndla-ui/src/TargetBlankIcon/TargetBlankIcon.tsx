/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { ExternalLinkLine } from "@ndla/icons";

const TargetBlankIcon = () => {
  const { t } = useTranslation();
  return <ExternalLinkLine size="small" aria-label={t("license.openLink")} />;
};

export default TargetBlankIcon;
