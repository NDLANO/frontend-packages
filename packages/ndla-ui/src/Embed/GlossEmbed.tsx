/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Figure, PopoverContent, PopoverRoot, PopoverTrigger } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { ConceptMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { InlineTriggerButton } from "./InlineTriggerButton";
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
      <PopoverRoot>
        <PopoverTrigger asChild>
          <InlineTriggerButton>{embed.embedData.linkText}</InlineTriggerButton>
        </PopoverTrigger>
        <StyledPopoverContent>
          <Figure>
            <Gloss glossData={concept.glossData} title={concept.title} audio={audio} />
          </Figure>
        </StyledPopoverContent>
      </PopoverRoot>
    );
  }

  return (
    <Figure>
      <Gloss glossData={concept.glossData} title={concept.title} audio={audio} variant="bordered" />
    </Figure>
  );
};
