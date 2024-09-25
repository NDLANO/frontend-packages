/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { CopyrightMetaData } from "@ndla/types-embed";
import { EmbedByline } from "../LicenseByline";

interface Props extends ComponentPropsWithRef<"figure"> {
  embed: CopyrightMetaData;
  children?: ReactNode;
}

const CopyrightEmbed = forwardRef<HTMLElement, Props>(({ embed, children, ...rest }, ref) => {
  return (
    <figure data-embed-type="copyright" {...rest} ref={ref}>
      {children}
      <EmbedByline type="copyright" copyright={embed.embedData.copyright} />
    </figure>
  );
});

export default CopyrightEmbed;
