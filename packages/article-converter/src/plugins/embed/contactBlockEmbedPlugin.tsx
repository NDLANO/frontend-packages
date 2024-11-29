/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { type ContactBlockMetaData } from "@ndla/types-embed";
import { ContactBlock, contactBlockBackgrounds, type ContactBlockBackground } from "@ndla/ui";
import { type PluginType } from "../types";

export function isBackground(background?: string): background is ContactBlockBackground {
  return (contactBlockBackgrounds as readonly string[]).includes(background ?? "");
}
const parseBackground = (background: string | undefined): ContactBlockBackground | undefined => {
  if (isBackground(background)) return background;
};

export const contactBlockEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const embedData = JSON.parse(props["data-json"] as string) as ContactBlockMetaData;
  const { name, email, description, background, jobTitle, alt } = embedData.embedData;
  const parsedBackground = parseBackground(background);

  return (
    <ContactBlock
      image={embedData.status === "success" ? embedData.data.image : undefined}
      embedAlt={alt}
      description={description}
      email={email}
      jobTitle={jobTitle}
      name={name}
      lang={opts.articleLanguage}
      backgroundColor={parsedBackground}
    />
  );
};
