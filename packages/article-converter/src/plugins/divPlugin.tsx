/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { domToReact, attributesToProps, Element, DOMNode } from "html-react-parser";
import { FramedContent } from "@ndla/primitives";
import { FileListEmbed, RelatedArticleList, Grid, GridType, GridParallaxItem } from "@ndla/ui";
import { PluginType } from "./types";

export const divPlugin: PluginType = (node, opts) => {
  if (node.attribs["data-type"] === "framed-content" || node.attribs.class === "c-bodybox") {
    return <FramedContent>{domToReact(node.children as DOMNode[], opts)}</FramedContent>;
  }
  if (node.attribs["data-type"] === "related-content" && node.children.length) {
    const props = attributesToProps(node.attribs);

    return (
      <RelatedArticleList {...props}>
        {/* @ts-ignore */}
        {domToReact(node.children, opts)}
      </RelatedArticleList>
    );
  }
  if (node.attribs["data-type"] === "file" && node.childNodes.length) {
    const elements = node.childNodes.filter(
      (c): c is Element => c.type === "tag" && c.name === "ndlaembed" && c.attribs["data-resource"] === "file",
    );
    const [pdfs, files] = elements.reduce<[Element[], Element[]]>(
      (acc, el) => {
        const arr = el.attribs["data-type"] === "pdf" && el.attribs["data-display"] === "block" ? acc[0] : acc[1];
        arr.push(el);
        return acc;
      },
      [[], []],
    );

    return (
      <>
        {files.length ? <FileListEmbed>{domToReact(files, opts)}</FileListEmbed> : undefined}
        {domToReact(pdfs, opts)}
      </>
    );
  }
  if (node.attribs["data-type"] === "grid" && node.children.length > 0) {
    const props = attributesToProps(node.attribs);
    const columns = props["data-columns"] as GridType["columns"];
    const border = props["data-border"] as GridType["border"];
    const background = props["data-background"] as GridType["background"];
    return (
      <Grid border={border} columns={columns} background={background} {...props}>
        {/* @ts-ignore */}
        {domToReact(node.children, opts)}
      </Grid>
    );
  }
  if (node.attribs["data-parallax-cell"] === "true" && node.children.length) {
    return <GridParallaxItem>{domToReact(node.children as DOMNode[], opts)}</GridParallaxItem>;
  }
  return null;
};
