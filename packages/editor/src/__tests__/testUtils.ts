/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import type { SlateSerializer } from "../core";
import { breakSerializer } from "../plugins/break/breakSerializer";
import { headingSerializer } from "../plugins/heading/headingSerializer";
import { linkSerializer } from "../plugins/link/linkSerializer";
import { LINK_ELEMENT_TYPE } from "../plugins/link/linkTypes";
import { listSerializer } from "../plugins/list/listSerializer";
import { markSerializer } from "../plugins/mark/markSerializer";
import { paragraphSerializer } from "../plugins/paragraph/paragraphSerializer";
import { sectionSerializer } from "../plugins/section/sectionSerializer";
import { spanSerializer } from "../plugins/span/spanSerializer";
import { SPAN_ELEMENT_TYPE } from "../plugins/span/spanTypes";
import { deserializeFromHtml } from "../serialization/html/deserializeFromHtml";
import { serializeToHtml } from "../serialization/html/serializeToHtml";

export const inlines = [
  // TYPE_CONCEPT_INLINE,
  // TYPE_FOOTNOTE,
  LINK_ELEMENT_TYPE,
  // TYPE_CONTENT_LINK,
  // TYPE_MATHML,
  SPAN_ELEMENT_TYPE,
  // TYPE_COMMENT_INLINE,
];

export const blocks = [
  // TYPE_ASIDE,
  // TYPE_FRAMED_CONTENT,
  // TYPE_CODEBLOCK,
  // TYPE_DETAILS,
  // TYPE_AUDIO,
  // TYPE_EMBED_BRIGHTCOVE,
  // TYPE_EMBED_ERROR,
  // TYPE_EXTERNAL,
  // TYPE_H5P,
  // TYPE_IMAGE,
  // TYPE_FILE,
  // TYPE_RELATED,
  // TYPE_TABLE,
  // TYPE_PITCH,
  // TYPE_GRID,
  // TYPE_KEY_FIGURE,
  // TYPE_CAMPAIGN_BLOCK,
];

export const commonSerializers: SlateSerializer<any>[] = [
  // noopSerializer,
  paragraphSerializer,
  sectionSerializer,
  breakSerializer,
  markSerializer,
  linkSerializer,
  // blockQuoteSerializer,
  headingSerializer,
  listSerializer,
  // definitionListSerializer,
  // footnoteSerializer,
  // mathmlSerializer,
  // inlineConceptSerializer,
  // commentInlineSerializer,
  // noEmbedSerializer,
  // divSerializer,
  // spanSerializer,
];

// Rules are checked from first to last
export const extendedSerializers: SlateSerializer<any>[] = [
  // noopSerializer,
  paragraphSerializer,
  sectionSerializer,
  breakSerializer,
  markSerializer,
  linkSerializer,
  // blockQuoteSerializer,
  headingSerializer,
  listSerializer,
  // definitionListSerializer,
  // footnoteSerializer,
  // mathmlSerializer,
  // inlineConceptSerializer,
  // blockConceptSerializer,
  // commentInlineSerializer,
  // commentBlockSerializer,
  // asideSerializer,
  // disclaimerSerializer,
  // fileSerializer,
  // detailsSerializer,
  // tableSerializer,
  // relatedSerializer,
  // gridSerializer,
  // pitchSerializer,
  // codeblockSerializer,
  // keyFigureSerializer,
  // contactBlockSerializer,
  // campaignBlockSerializer,
  // linkBlockListSerializer,
  // audioSerializer,
  // imageSerializer,
  // brightcoveSerializer,
  // h5pSerializer,
  // externalSerializer,
  // copyrightSerializer,
  // embedSerializer,
  // framedContentSerializer,
  // divSerializer,
  spanSerializer,
];

export const testBlockContentToEditorValue = (content: string, noop?: boolean) => {
  return deserializeFromHtml(content, extendedSerializers, { inlines: inlines, blocks: blocks, noop });
};

export const testInlineContentToEditorValue = (content: string, noop?: boolean) => {
  return deserializeFromHtml(content, commonSerializers, { inlines: inlines, blocks: blocks, noop });
};

export const testInlineContentToHTML = (value: Descendant[]): string => {
  return serializeToHtml(value, commonSerializers);
};

export const testBlockContentToHTML = (value: Descendant[]): string => {
  return serializeToHtml(value, extendedSerializers);
};
