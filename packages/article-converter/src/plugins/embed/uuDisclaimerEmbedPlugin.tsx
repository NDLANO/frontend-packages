/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { type UuDisclaimerMetaData } from "@ndla/types-embed";
import { UuDisclaimerEmbed } from "@ndla/ui";
import { transform } from "../../transform";
import { type PluginType } from "../types";

export const uuDisclaimerEmbedPlugin: PluginType = (element, opts, transformOpts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as UuDisclaimerMetaData;
  if (data.status === "error") {
    return <>{domToReact(element.children as DOMNode[], opts)}</>;
  }
  const transformedDisclaimer = transform(data.data.transformedContent, transformOpts);
  return (
    <UuDisclaimerEmbed embed={data} transformedDisclaimer={transformedDisclaimer}>
      {domToReact(element.children as DOMNode[], opts)}
    </UuDisclaimerEmbed>
  );
};
