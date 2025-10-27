/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { AccordionItemTrigger } from "@ark-ui/react";
import { ArrowDownShortLine } from "@ndla/icons";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionRoot,
  IconButton,
  Text,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledVariantProps } from "@ndla/styled-system/types";
import type { ConceptTitleDTO, IGlossDataDTO, IGlossExampleDTO } from "@ndla/types-backend/concept-api";
import { GlossExample } from "./GlossExample";
import { SpeechControl } from "../AudioPlayer/SpeechControl";

// TODO: Figure out padding between bordered and simple variant.
// The design says that the content above the accordion content should have enough padding to align with the accordion content.
// When a gloss is bordered there's way too much padding.

const getFilteredExamples = (
  glossData: IGlossDataDTO | undefined,
  exampleIds: string | undefined,
  exampleLangs: string | undefined,
): IGlossExampleDTO[][] => {
  if (exampleIds !== undefined || exampleLangs !== undefined) {
    const exampleIdsList = exampleIds?.toString()?.split(",") ?? [];
    const exampleLangsList = exampleLangs?.split(",") ?? [];

    const filteredExamples =
      glossData?.examples?.map((examples, i) => {
        if (exampleIdsList.includes(i.toString())) {
          return examples.filter((e) => exampleLangsList.includes(e.language));
        }
        return [];
      }) ?? [];
    const examplesWithoutEmpty = filteredExamples.filter((el) => !!el.length);
    return examplesWithoutEmpty;
  }
  return glossData?.examples ?? [];
};

const Container = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const TextWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "small",
  },
});

const StyledAccordionItemContent = styled(AccordionItemContent, {
  base: {
    paddingInline: "0",
  },
});

const StyledContainer = styled(Container, {
  base: {
    marginBlockStart: "3xsmall",
  },
});

const StyledAccordionItem = styled(AccordionItem, {
  base: {
    paddingBlock: "small",
    paddingInline: "medium",
  },
  defaultVariants: {
    variant: "simple",
  },
  variants: {
    variant: {
      simple: {},
      bordered: {
        border: "1px solid",
        borderColor: "stroke.subtle",
        borderRadius: "xsmall",
      },
    },
  },
});

type GlossVariantProps = StyledVariantProps<typeof StyledAccordionItem>;

export interface Props {
  title: ConceptTitleDTO;
  glossData?: IGlossDataDTO;
  audio?: {
    title: string;
    src?: string;
  };
  exampleIds?: string;
  exampleLangs?: string;
}

export const Gloss = ({ title, glossData, audio, exampleIds, exampleLangs, variant }: Props & GlossVariantProps) => {
  const { t } = useTranslation();

  const parsedTitle = useMemo(() => parse(title.htmlTitle), [title.htmlTitle]);

  const filteredExamples = useMemo(
    () => getFilteredExamples(glossData, exampleIds, exampleLangs),
    [exampleIds, exampleLangs, glossData],
  );

  if (!glossData) return null;

  return (
    <AccordionRoot multiple variant="clean">
      <StyledAccordionItem value="gloss" variant={variant}>
        <Container>
          <TextWrapper>
            <Text textStyle="label.medium" fontWeight="bold" asChild consumeCss lang={glossData.originalLanguage}>
              <span>{glossData.gloss}</span>
            </Text>
            {!!glossData.transcriptions.traditional && (
              <Text textStyle="label.medium" asChild consumeCss>
                <span
                  key={t("gloss.transcriptions.traditional")}
                  aria-label={t("gloss.transcriptions.traditional")}
                  lang={glossData.originalLanguage}
                >
                  {glossData.transcriptions.traditional}
                </span>
              </Text>
            )}
            {!!glossData.transcriptions.pinyin && (
              <Text textStyle="label.medium" asChild consumeCss>
                <span
                  data-pinyin=""
                  key={t("gloss.transcriptions.pinyin")}
                  aria-label={t("gloss.transcriptions.pinyin")}
                  lang={glossData.originalLanguage}
                >
                  {glossData.transcriptions.pinyin}
                </span>
              </Text>
            )}
            {!!glossData.wordClass && (
              <Text textStyle="label.medium" asChild consumeCss>
                <span aria-label={t("gloss.wordClass")}>{t(`wordClass.${glossData.wordClass}`).toLowerCase()}</span>
              </Text>
            )}
          </TextWrapper>
          {!!audio?.src && <SpeechControl src={audio.src} title={audio.title} type="gloss" />}
        </Container>
        <StyledContainer>
          <Text textStyle="label.medium" asChild consumeCss>
            <span lang={title.language}>{parsedTitle}</span>
          </Text>
          {!!filteredExamples.length && (
            <AccordionItemTrigger asChild>
              <IconButton variant="tertiary" aria-label={t("gloss.showExamples")} title={t("gloss.showExamples")}>
                <AccordionItemIndicator asChild>
                  <ArrowDownShortLine size="medium" />
                </AccordionItemIndicator>
              </IconButton>
            </AccordionItemTrigger>
          )}
        </StyledContainer>
        <StyledAccordionItemContent>
          {filteredExamples.map((examples, index) => (
            <GlossExample
              key={`gloss-example-${index}`}
              examples={examples}
              originalLanguage={glossData.originalLanguage}
            />
          ))}
        </StyledAccordionItemContent>
      </StyledAccordionItem>
    </AccordionRoot>
  );
};
