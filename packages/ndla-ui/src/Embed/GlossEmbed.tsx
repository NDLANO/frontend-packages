/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useRef } from "react";
import { Portal } from "@ark-ui/react";
import { Figure, PopoverContent, PopoverRoot, PopoverTrigger } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { ConceptMetaData } from "@ndla/types-embed";
import { ConceptInlineTriggerButton } from "./ConceptInlineTriggerButton";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { Gloss } from "../Gloss";

interface Props {
  embed: ConceptMetaData;
}

const StyledPopoverContent = styled(PopoverContent, {
  base: {
    width: "surface.xlarge",
  },
});

export const GlossEmbed = ({ embed }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  if (embed.status === "error" && embed.embedData.type === "inline") {
    return <span>{embed.embedData.linkText}</span>;
  }
  if (embed.status === "error" || !embed.data.concept.glossData) {
    return <EmbedErrorPlaceholder type="gloss" />;
  }

  const { concept, visualElement } = embed.data;

  const audio =
    visualElement?.status === "success" && visualElement.resource === "audio"
      ? {
          src: visualElement.data.audioFile.url,
          title: visualElement.data.title.title,
        }
      : undefined;

  if (embed.embedData.type === "inline") {
    return (
      <PopoverRoot initialFocusEl={() => contentRef.current}>
        <PopoverTrigger asChild>
          <ConceptInlineTriggerButton>{embed.embedData.linkText}</ConceptInlineTriggerButton>
        </PopoverTrigger>
        <Portal>
          <StyledPopoverContent ref={contentRef}>
            <Figure>
              <Gloss glossData={concept.glossData} title={concept.title} audio={audio} />
            </Figure>
          </StyledPopoverContent>
        </Portal>
      </PopoverRoot>
    );
  }

  return (
    <Figure data-embed-type="gloss">
      <Gloss glossData={concept.glossData} title={concept.title} audio={audio} variant="bordered" />
    </Figure>
  );
};
