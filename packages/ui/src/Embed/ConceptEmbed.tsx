/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Portal } from "@ark-ui/react";
import { PopoverContent, PopoverRoot, PopoverTrigger } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { ConceptMetaData } from "@ndla/types-embed";
import parse from "html-react-parser";
import { forwardRef, useMemo, useRef, type ReactNode } from "react";
import { Concept, type ConceptProps } from "../Concept/Concept";
import { ConceptInlineTriggerButton } from "./ConceptInlineTriggerButton";
import { EmbedErrorPlaceholder } from "./EmbedErrorPlaceholder";
import { GlossEmbed } from "./GlossEmbed";
import type { RenderContext } from "./types";

interface BaseProps {
  renderContext?: RenderContext;
  lang?: string;
  previewAlt?: boolean;
}

interface Props extends BaseProps {
  embed: ConceptMetaData;
  children?: ReactNode;
}

const StyledPopoverContent = styled(PopoverContent, {
  base: {
    width: "surface.xlarge",
    maxHeight: "50vh",
    overflowY: "auto",
  },
});

export const ConceptEmbed = ({ embed, renderContext, lang, previewAlt, children }: Props) => {
  const parsedContent = useMemo(() => {
    if (embed.status === "error" || !embed.data.concept.content) return undefined;
    return parse(embed.data.concept.content.htmlContent);
  }, [embed]);

  const parsedTitle = useMemo(
    () => (embed.status === "success" ? parse(embed.data.concept.title.htmlTitle) : undefined),
    [embed],
  );

  if (embed.status === "error" && embed.embedData.type === "inline") {
    return <span>{children}</span>;
  }
  if (embed.status === "error") {
    // TODO: This could be either concept or gloss. We don't know if it errors out. :)
    return <EmbedErrorPlaceholder type="gloss" />;
  }

  const { concept, visualElement } = embed.data;

  // TODO: Consider whether we should do this in article-converter instead.
  if (embed.data.concept.glossData) {
    return <GlossEmbed embed={embed}>{children}</GlossEmbed>;
  }

  if (embed.embedData.type === "inline") {
    return (
      <InlineConcept
        previewAlt={previewAlt}
        linkContent={children}
        copyright={concept.copyright}
        visualElement={visualElement}
        lang={lang}
        title={parsedTitle}
        source={concept.source}
      >
        {parsedContent}
      </InlineConcept>
    );
  }

  return (
    <BlockConcept
      previewAlt={previewAlt}
      copyright={concept.copyright}
      visualElement={visualElement}
      lang={lang}
      title={renderContext === "embed" ? undefined : parsedTitle}
      source={concept.source}
    >
      {parsedContent}
    </BlockConcept>
  );
};

export interface InlineConceptProps extends ConceptProps, BaseProps {
  linkContent?: ReactNode;
  source?: string;
}

export const InlineConcept = forwardRef<HTMLSpanElement, InlineConceptProps>(
  ({ linkContent, copyright, visualElement, previewAlt, lang, children, title, source, ...rest }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    return (
      <PopoverRoot initialFocusEl={() => contentRef.current}>
        {/* @ts-expect-error placing ref and rest on popover trigger somehow removes a bug where the popover target becomes a bit bigger */}
        <PopoverTrigger asChild ref={ref} {...rest}>
          <ConceptInlineTriggerButton>{linkContent}</ConceptInlineTriggerButton>
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
