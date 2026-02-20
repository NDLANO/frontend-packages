/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";
import type { CopyrightMetaData } from "@ndla/types-embed";
import type { ReactNode } from "react";
import { EmbedByline } from "../LicenseByline/EmbedByline";

interface Props {
  embed: CopyrightMetaData;
  children?: ReactNode;
}

const StyledCopyrightContent = styled("div", {
  base: {
    marginBlockEnd: "xsmall",
  },
});

export const CopyrightEmbed = ({ embed, children }: Props) => {
  return (
    <figure data-embed-type="copyright">
      <StyledCopyrightContent data-copyright-content="">{children}</StyledCopyrightContent>
      <EmbedByline type="copyright" copyright={embed.embedData.copyright} />
    </figure>
  );
};
