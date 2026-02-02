/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ContactBlockMetaData } from "@ndla/types-embed";
import { ContactBlock, contactBlockBackgrounds } from "@ndla/ui";
import { attributesToProps } from "html-react-parser";
import { type PluginType } from "../types";

export const contactBlockEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const embedData = JSON.parse(props["data-json"] as string) as ContactBlockMetaData;
  const { name, email, description, background, jobTitle, alt } = embedData.embedData;
  const validBackground = contactBlockBackgrounds.find((bg) => bg === background);

  return (
    <ContactBlock
      image={embedData.status === "success" ? embedData.data.image : undefined}
      embedAlt={alt}
      description={description}
      email={email}
      jobTitle={jobTitle}
      name={name}
      lang={opts.articleLanguage}
      backgroundColor={validBackground}
    />
  );
};
