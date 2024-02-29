/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { Trigger } from "@radix-ui/react-accordion";
import { AccordionRoot, AccordionItem, AccordionContent } from "@ndla/accordion";
import { colors, spacing, misc, fonts } from "@ndla/core";
import { ChevronDown } from "@ndla/icons/common";
import { IGlossData, IGlossExample } from "@ndla/types-backend/concept-api";
import GlossExample from "./GlossExample";
import SpeechControl from "../AudioPlayer/SpeechControl";

export interface Props {
  title: {
    title: string;
    language: string;
  };
  glossData?: IGlossData;
  audio?: {
    title: string;
    src?: string;
  };
  exampleIds?: string;
  exampleLangs?: string;
}

const StyledAccordionItem = styled(AccordionItem)`
  background-color: ${colors.background.lightBlue};
  border: 1px solid ${colors.brand.light};
  border-radius: ${misc.borderRadius};
  span {
    ${fonts.size.text.content}
    font-family: ${fonts.sans};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${spacing.nsmall} ${spacing.normal} 0 ${spacing.normal};
`;

const GlossContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing.nsmall};
  span[data-pinyin] {
    font-style: italic;
  }
`;

const GlossSpan = styled.span`
  font-weight: ${fonts.weight.bold};
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacing.normal} ${spacing.nsmall} ${spacing.normal};
  background-color: ${colors.background.lightBlue};
  border-radius: ${misc.borderRadius};
`;

const StyledAccordionContent = styled(AccordionContent)`
  padding: 0;
`;

const StyledTrigger = styled(Trigger)`
  background-color: transparent;
  cursor: pointer;
  border: none;
  padding: ${spacing.xsmall};
  border-radius: ${misc.borderRadiusLarge};
  color: ${colors.brand.primary};
  &:hover,
  &:focus-visible {
    color: ${colors.white};
    background-color: ${colors.brand.primary};
  }
  &[data-state="open"] {
    background-color: ${colors.brand.lighter};
    &:hover,
    &:focus-visible {
      background-color: ${colors.brand.primary};
    }
  }
`;

const StyledChevron = styled(ChevronDown)`
  transition: all 200ms ease-in-out;
  [data-styled-trigger][data-state="open"] > & {
    transform: rotate(180deg);
  }
  min-width: ${spacing.normal};
  min-height: ${spacing.normal};
`;

const getFilteredExamples = (
  glossData: IGlossData | undefined,
  exampleIds: string | undefined,
  exampleLangs: string | undefined,
): IGlossExample[][] => {
  if (exampleIds !== undefined || exampleLangs !== undefined) {
    const exampleIdsList = exampleIds?.toString()?.split(",") ?? [];
    const exampleLangsList = exampleLangs?.split(",") ?? [];

    const filteredExamples =
      glossData?.examples?.map((examples, i) => {
        if (exampleIdsList.includes(i.toString())) {
          return examples.filter((e) => exampleLangsList.includes(e.language));
        } else return [];
      }) ?? [];
    const examplesWithoutEmpty = filteredExamples.filter((el) => !!el.length);
    return examplesWithoutEmpty;
  } else return glossData?.examples ?? [];
};

const Gloss = ({ title, glossData, audio, exampleIds, exampleLangs }: Props) => {
  const { t } = useTranslation();

  const filteredExamples = useMemo(
    () => getFilteredExamples(glossData, exampleIds, exampleLangs),
    [exampleIds, exampleLangs, glossData],
  );

  return (
    <>
      {glossData && (
        <AccordionRoot type="single" collapsible>
          <StyledAccordionItem value="1">
            <Wrapper>
              <GlossContainer>
                <GlossSpan lang={glossData.originalLanguage}>{glossData.gloss}</GlossSpan>
                {glossData.transcriptions.traditional && (
                  <span
                    key={t("gloss.transcriptions.traditional")}
                    aria-label={t("gloss.transcriptions.traditional")}
                    lang={glossData.originalLanguage}
                  >
                    {glossData.transcriptions.traditional}
                  </span>
                )}
                {glossData.transcriptions.pinyin && (
                  <span
                    data-pinyin=""
                    key={t("gloss.transcriptions.pinyin")}
                    aria-label={t("gloss.transcriptions.pinyin")}
                    lang={glossData.originalLanguage}
                  >
                    {glossData.transcriptions.pinyin}
                  </span>
                )}
                {glossData.wordClass && (
                  <span aria-label={t("gloss.wordClass")}>{t(`wordClass.${glossData.wordClass}`).toLowerCase()}</span>
                )}
              </GlossContainer>
              {audio?.src && <SpeechControl src={audio.src} title={audio.title}></SpeechControl>}
            </Wrapper>
            {filteredExamples.length > 0 ? (
              <>
                <StyledWrapper>
                  <span lang={title.language}>{title.title}</span>
                  <StyledTrigger data-styled-trigger aria-label={t("gloss.examples")}>
                    <StyledChevron />
                  </StyledTrigger>
                </StyledWrapper>
                <StyledAccordionContent>
                  {filteredExamples.map((examples, index) => (
                    <div key={`gloss-example-${index}`}>
                      {examples.map((example, innerIndex) => (
                        <GlossExample
                          key={`gloss-example-${index}-${innerIndex}`}
                          example={example}
                          originalLanguage={glossData.originalLanguage}
                          index={innerIndex}
                        />
                      ))}
                    </div>
                  ))}
                </StyledAccordionContent>
              </>
            ) : (
              <StyledWrapper>
                <span lang={title.language}>{title.title}</span>
              </StyledWrapper>
            )}
          </StyledAccordionItem>
        </AccordionRoot>
      )}
    </>
  );
};

export default Gloss;
