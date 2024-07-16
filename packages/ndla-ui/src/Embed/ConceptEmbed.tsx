/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { forwardRef, useMemo } from "react";
import { Figure, PopoverContent, PopoverRoot, PopoverTrigger } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { ConceptMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { GlossEmbed } from "./GlossEmbed";
import { InlineTriggerButton } from "./InlineTriggerButton";
import { RenderContext } from "./types";
import { Concept, ConceptProps } from "../Concept/Concept";

interface BaseProps {
  renderContext?: RenderContext;
  lang?: string;
}

interface Props extends BaseProps {
  embed: ConceptMetaData;
}

const StyledPopoverContent = styled(PopoverContent, {
  base: {
    width: "surface.xlarge",
  },
});

export const ConceptEmbed = ({ embed, renderContext, lang }: Props) => {
  const parsedContent = useMemo(() => {
    if (embed.status === "error" || !embed.data.concept.content) return undefined;
    return parse(embed.data.concept.content.htmlContent);
  }, [embed]);

  if (embed.status === "error" && embed.embedData.type === "inline") {
    return <span>{embed.embedData.linkText}</span>;
  }
  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type="gloss" />;
  }

  const { concept, visualElement } = embed.data;

  // TODO: Consider whether we should do this in article-converter instead.
  if (embed.data.concept.glossData) {
    return <GlossEmbed embed={embed} />;
  }

  if (embed.embedData.type === "inline") {
    return (
      <InlineConcept
        linkText={embed.embedData.linkText}
        copyright={concept.copyright}
        visualElement={visualElement}
        lang={lang}
        title={concept.title.title}
      >
        {parsedContent}
      </InlineConcept>
    );
  }

  return (
    <BlockConcept
      copyright={concept.copyright}
      visualElement={visualElement}
      lang={lang}
      title={renderContext === "embed" ? undefined : concept.title.title}
    >
      {parsedContent}
    </BlockConcept>
  );
};

export interface InlineConceptProps extends ConceptProps, BaseProps {
  linkText?: string;
}

// TODO: Consider if we should make this act like the old concept popover.
// Should it take up the entire screen height on mobile? I don't think we need to.
// Should it always stay directly underneath the trigger?

export const InlineConcept = forwardRef<HTMLSpanElement, InlineConceptProps>(
  ({ linkText, copyright, visualElement, lang, children, title, ...rest }, ref) => (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <InlineTriggerButton {...rest} ref={ref}>
          {linkText}
        </InlineTriggerButton>
      </PopoverTrigger>
      <StyledPopoverContent>
        <Figure>
          <Concept copyright={copyright} visualElement={visualElement} lang={lang} title={title}>
            {children}
          </Concept>
        </Figure>
      </StyledPopoverContent>
    </PopoverRoot>
  ),
);

export interface BlockConceptProps extends ConceptProps {}

export const BlockConcept = forwardRef<HTMLElement, BlockConceptProps>((props, ref) => (
  <Concept {...props} ref={ref} />
));
