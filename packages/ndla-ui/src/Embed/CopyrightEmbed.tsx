/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { CopyrightMetaData } from "@ndla/types-embed";
import { EmbedByline } from "../LicenseByline";

interface Props {
  embed: CopyrightMetaData;
  children?: ReactNode;
}

const StyledFigCaption = styled.figcaption`
  background: unset;
  font-size: unset;
  padding: unset;
  color: unset;
`;

const CopyrightEmbed = ({ embed, children }: Props) => {
  return (
    <figure>
      {children}
      <StyledFigCaption>
        <EmbedByline type="copyright" copyright={embed.embedData.copyright} bottomRounded />
      </StyledFigCaption>
    </figure>
  );
};

export default CopyrightEmbed;
