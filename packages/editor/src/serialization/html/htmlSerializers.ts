/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { headingSerializer } from "../../plugins/heading/headingSerializer";
import { linkSerializer } from "../../plugins/link/linkSerializer";
import { listSerializer } from "../../plugins/list/listSerializer";
import { markSerializer } from "../../plugins/mark/markSerializer";
import { paragraphSerializer } from "../../plugins/paragraph/paragraphSerializer";
import { sectionSerializer } from "../../plugins/section/sectionSerializer";
import type { SlateSerializer } from "../../types";

export const commonSerializers = [
  // noopSerializer,
  paragraphSerializer,
  sectionSerializer,
  // breakSerializer,
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
export const extendedSerializers: SlateSerializer[] = [
  // noopSerializer,
  paragraphSerializer,
  sectionSerializer,
  // breakSerializer,
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
  // spanSerializer,
];
