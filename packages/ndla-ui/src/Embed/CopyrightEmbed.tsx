/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { Figure } from "@ndla/primitives";
import { CopyrightMetaData } from "@ndla/types-embed";
import { EmbedByline } from "../LicenseByline";

interface Props {
  embed: CopyrightMetaData;
  children?: ReactNode;
}

const CopyrightEmbed = ({ embed, children }: Props) => {
  return (
    <Figure>
      {children}
      <EmbedByline type="copyright" copyright={embed.embedData.copyright} />
    </Figure>
  );
};

export default CopyrightEmbed;
