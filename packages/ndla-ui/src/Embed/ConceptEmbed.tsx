/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { ComponentPropsWithRef, forwardRef, useMemo, useRef } from "react";
import { Portal } from "@ark-ui/react";
import { PopoverContent, PopoverRoot, PopoverTrigger } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { ConceptMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder, { ErrorPlaceholder } from "./EmbedErrorPlaceholder";
import { GlossEmbed } from "./GlossEmbed";
import { InlineTriggerButton } from "./InlineTriggerButton";
import { RenderContext } from "./types";
import { Concept, ConceptProps } from "../Concept/Concept";

interface BaseProps {
  renderContext?: RenderContext;
  lang?: string;
  previewAlt?: boolean;
}

interface Props extends BaseProps, ComponentPropsWithRef<"figure"> {
  embed: ConceptMetaData;
}

const StyledPopoverContent = styled(PopoverContent, {
  base: {
    width: "surface.xlarge",
    maxHeight: "50vh",
    overflowY: "auto",
  },
});

export const ConceptEmbed = forwardRef<HTMLElement, Props>(
  ({ embed, renderContext, lang, previewAlt, children, ...rest }, ref) => {
    const parsedContent = useMemo(() => {
      if (embed.status === "error" || !embed.data.concept.content) return undefined;
      return parse(embed.data.concept.content.htmlContent);
    }, [embed]);

    if (embed.status === "error" && embed.embedData.type === "inline") {
      return (
        <span {...rest} ref={ref}>
          {children}
          {embed.embedData.linkText}
        </span>
      );
    }
    if (embed.status === "error") {
      // TODO: This could be either concept or gloss. We don't know if it errors out. :)
      return (
        <EmbedErrorPlaceholder type="gloss" {...rest} ref={ref}>
          {children}
          <ErrorPlaceholder type="gloss" />
        </EmbedErrorPlaceholder>
      );
    }

    const { concept, visualElement } = embed.data;

    // TODO: Consider whether we should do this in article-converter instead.
    if (embed.data.concept.glossData) {
      return (
        <GlossEmbed embed={embed} {...rest} ref={ref}>
          {children}
        </GlossEmbed>
      );
    }

    if (embed.embedData.type === "inline") {
      return (
        <InlineConcept
          {...rest}
          previewAlt={previewAlt}
          linkText={embed.embedData.linkText}
          copyright={concept.copyright}
          visualElement={visualElement}
          lang={lang}
          title={concept.title.title}
          source={concept.source}
          ref={ref}
        >
          {children}
          {parsedContent}
        </InlineConcept>
      );
    }

    return (
      <BlockConcept
        {...rest}
        previewAlt={previewAlt}
        copyright={concept.copyright}
        visualElement={visualElement}
        lang={lang}
        title={renderContext === "embed" ? undefined : concept.title.title}
        source={concept.source}
        ref={ref}
      >
        {children}
        {parsedContent}
      </BlockConcept>
    );
  },
);

export interface InlineConceptProps extends ConceptProps, BaseProps {
  linkText?: string;
  source?: string;
}

export const InlineConcept = forwardRef<HTMLSpanElement, InlineConceptProps>(
  ({ linkText, copyright, visualElement, previewAlt, lang, children, title, source, ...rest }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    return (
      <PopoverRoot initialFocusEl={() => contentRef.current}>
        {/* @ts-expect-error placing ref and rest on popover trigger somehow removes a bug where the popover target becomes a bit bigger */}
        <PopoverTrigger asChild ref={ref} {...rest}>
          <InlineTriggerButton>{linkText}</InlineTriggerButton>
        </PopoverTrigger>
        <Portal>
          <StyledPopoverContent ref={contentRef}>
            <Concept
              copyright={copyright}
              visualElement={visualElement}
              title={title}
              lang={lang}
              source={source}
              previewAlt={previewAlt}
            >
              {children}
            </Concept>
          </StyledPopoverContent>
        </Portal>
      </PopoverRoot>
    );
  },
);

export interface BlockConceptProps extends ConceptProps {}

export const BlockConcept = forwardRef<HTMLElement, BlockConceptProps>((props, ref) => (
  <Concept {...props} data-embed-type="concept" ref={ref} />
));
