/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { ConceptListMetaData } from "@ndla/types-embed";
import { BlockConcept } from "./ConceptEmbed";

interface Props {
  embed: ConceptListMetaData;
  lang?: string;
}

// TODO: Find out if we're actually still going to use this.
// If we are, we need to re-add some margin between the list items. We should also probably parse the concept content to HTML, like we do in ConceptEmbed.

const ConceptList = styled("div", {
  base: {
    "& li": {
      display: "block",
    },
  },
});

const StyledSpan = styled("span", {
  base: {
    color: "text.error",
  },
});

const ConceptListEmbed = ({ embed, lang }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return <StyledSpan>{t("embed.conceptListError")}</StyledSpan>;
  }
  const { embedData, data } = embed;
  return (
    <div data-embed-type="concept-list">
      <Figure>
        {embedData.title && <h2 lang={lang}>{embedData.title}</h2>}
        <ConceptList>
          <ul lang={lang}>
            {data.concepts.map(({ concept, visualElement }) => (
              <li key={concept.id}>
                <BlockConcept
                  title={concept.title.title}
                  content={concept.content.content}
                  copyright={concept.copyright}
                  visualElement={visualElement}
                  lang={lang}
                />
              </li>
            ))}
          </ul>
        </ConceptList>
      </Figure>
    </div>
  );
};

export default ConceptListEmbed;
