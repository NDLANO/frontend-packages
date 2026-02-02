/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type FileMetaData } from "@ndla/types-embed";
import { PdfFile, FileListElement } from "@ndla/ui";
import { attributesToProps } from "html-react-parser";
import { type PluginType } from "../types";

export const fileEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as FileMetaData;
  const { type, title, url, display } = data.embedData;
  if (type === "pdf" && display === "block") {
    return <PdfFile title={title} url={url} />;
  }
  return (
    <FileListElement
      url={url}
      title={title}
      fileExists={data.status === "success" ? !!data.data.exists : false}
      fileType={type}
    />
  );
};
