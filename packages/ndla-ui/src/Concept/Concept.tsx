/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, ReactNode, forwardRef } from "react";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IDraftCopyright as ConceptCopyright } from "@ndla/types-backend/concept-api";
import { ConceptVisualElementMeta } from "@ndla/types-embed";
import { BrightcoveEmbed, ExternalEmbed, H5pEmbed, IframeEmbed, ImageEmbed } from "../Embed";
import { EmbedByline, LicenseContainerContent } from "../LicenseByline/EmbedByline";

export interface ConceptProps extends ComponentPropsWithRef<"figure"> {
  copyright?: ConceptCopyright;
  visualElement?: ConceptVisualElementMeta;
  lang?: string;
  title?: string;
  children?: ReactNode;
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

// TODO: Figure out if we need to support tags, subjects and headerButtons.

export const Concept = forwardRef<HTMLElement, ConceptProps>(
  ({ copyright, visualElement, lang, children, title, ...rest }, ref) => {
    return (
      <StyledFigure ref={ref} {...rest}>
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
          <ImageEmbed embed={visualElement} lang={lang} />
        ) : visualElement?.resource === "brightcove" ? (
          <BrightcoveEmbed embed={visualElement} />
        ) : visualElement?.resource === "h5p" ? (
          <H5pEmbed embed={visualElement} />
        ) : visualElement?.resource === "iframe" ? (
          <IframeEmbed embed={visualElement} />
        ) : visualElement?.resource === "external" ? (
          <ExternalEmbed embed={visualElement} />
        ) : null}
        {copyright && <EmbedByline copyright={copyright} type="concept" />}
      </StyledFigure>
    );
  },
);
