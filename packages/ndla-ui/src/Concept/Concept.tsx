/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentPropsWithRef, type ReactNode, forwardRef } from "react";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { IDraftCopyrightDTO as ConceptCopyright } from "@ndla/types-backend/concept-api";
import type { ConceptVisualElementMeta } from "@ndla/types-embed";
import BrightcoveEmbed from "../Embed/BrightcoveEmbed";
import ExternalEmbed from "../Embed/ExternalEmbed";
import H5pEmbed from "../Embed/H5pEmbed";
import IframeEmbed from "../Embed/IframeEmbed";
import ImageEmbed from "../Embed/ImageEmbed";
import { EmbedByline } from "../LicenseByline/EmbedByline";
import { licenseAttributes } from "../utils/licenseAttributes";

export interface ConceptProps extends Omit<ComponentPropsWithRef<"figure">, "title"> {
  copyright?: ConceptCopyright;
  visualElement?: ConceptVisualElementMeta;
  lang?: string;
  title?: ReactNode;
  children?: ReactNode;
  source?: string;
  previewAlt?: boolean;
}

const StyledFigure = styled(Figure, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "medium",
  },
});

const ContentWrapper = styled("div", {
  base: {
    textStyle: "body.large",
    display: "inline",
    "& p": {
      display: "inline",
    },
  },
});

export const Concept = forwardRef<HTMLElement, ConceptProps>(
  ({ copyright, visualElement, lang, children, title, source, previewAlt, ...rest }, ref) => {
    const licenseProps = licenseAttributes(copyright?.license?.license, lang, source);

    return (
      <StyledFigure ref={ref} {...rest} {...licenseProps}>
        <ContentWrapper lang={lang}>
          {!!title && (
            <>
              <b>{title}</b>
              {` – `}
            </>
          )}
          {children}
        </ContentWrapper>
        {visualElement?.resource === "image" ? (
          <ImageEmbed embed={visualElement} lang={lang} previewAlt={previewAlt} />
        ) : visualElement?.resource === "brightcove" ? (
          <BrightcoveEmbed embed={visualElement} />
        ) : visualElement?.resource === "h5p" ? (
          <H5pEmbed embed={visualElement} />
        ) : visualElement?.resource === "iframe" ? (
          <IframeEmbed embed={visualElement} />
        ) : visualElement?.resource === "external" ? (
          <ExternalEmbed embed={visualElement} />
        ) : null}
        {!!copyright && <EmbedByline copyright={copyright} type="concept" />}
      </StyledFigure>
    );
  },
);
