/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { ContactBlockMetaData } from "@ndla/types-embed";
import { ContactBlock } from "@ndla/ui";
import { PluginType } from "../types";

export const contactBlockEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const embedData = JSON.parse(props["data-json"] as string) as ContactBlockMetaData;
  const { name, email, description, blob, blobColor, jobTitle, alt } = embedData.embedData;
  return (
    <ContactBlock
      image={embedData.status === "success" ? embedData.data.image : undefined}
      embedAlt={alt}
      description={description}
      email={email}
      blobColor={blobColor}
      jobTitle={jobTitle}
      name={name}
      blob={blob}
      lang={opts.articleLanguage}
      imageCanonicalUrl={opts.canonicalUrls?.image}
    />
  );
};
