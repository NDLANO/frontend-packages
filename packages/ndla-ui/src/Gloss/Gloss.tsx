/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { colors, spacing, misc, fonts } from '@ndla/core';
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionContent } from '@ndla/accordion';
import { IGlossData, IGlossExample } from '@ndla/types-backend/concept-api';
import { useMemo } from 'react';
import SpeechControl from '../AudioPlayer/SpeechControl';
import GlossExample from './GlossExample';

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

const Container = styled.div`
  font-family: ${fonts.sans};
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.lightBlue};
  padding: ${spacing.nsmall} ${spacing.normal};
  border: 1px solid ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
  margin-bottom: ${spacing.xsmall};
  gap: ${spacing.nsmall};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GlossContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing.nsmall};
  span {
    ${fonts.sizes('16px', '24px')};
  }
  span[data-pinyin] {
    font-style: italic;
  }
`;

const GlossSpan = styled.span`
  font-weight: ${fonts.weight.bold};
`;

const StyledAccordionHeader = styled(AccordionHeader)`
  font-family: ${fonts.sans};
  ${fonts.sizes('16px', '24px')};
  font-weight: ${fonts.weight.semibold};
  background-color: ${colors.background.lightBlue};
`;

const StyledAccordionContent = styled(AccordionContent)`
  padding: 0;
`;

const getFilteredExamples = (
  glossData: IGlossData | undefined,
  exampleIds: string | undefined,
  exampleLangs: string | undefined,
): IGlossExample[][] => {
  if (exampleIds !== undefined || exampleLangs !== undefined) {
    const exampleIdsList = exampleIds?.toString()?.split(',') ?? [];
    const exampleLangsList = exampleLangs?.split(',') ?? [];

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
        <>
          <Container>
            <Wrapper>
              <GlossContainer>
                <GlossSpan lang={glossData.originalLanguage}>{glossData.gloss}</GlossSpan>
                {glossData.transcriptions.traditional && (
                  <span
                    key={t('gloss.transcriptions.traditional')}
                    aria-label={t('gloss.transcriptions.traditional')}
                    lang={glossData.originalLanguage}
                  >
                    {glossData.transcriptions.traditional}
                  </span>
                )}
                {glossData.transcriptions.pinyin && (
                  <span
                    data-pinyin=""
                    key={t('gloss.transcriptions.pinyin')}
                    aria-label={t('gloss.transcriptions.pinyin')}
                    lang={glossData.originalLanguage}
                  >
                    {glossData.transcriptions.pinyin}
                  </span>
                )}
                {glossData.wordClass && (
                  <span aria-label={t('gloss.wordClass')}>{t(`wordClass.${glossData.wordClass}`).toLowerCase()}</span>
                )}
              </GlossContainer>
              {audio?.src && <SpeechControl src={audio.src} title={audio.title}></SpeechControl>}
            </Wrapper>
            <span lang={title.language}>{title.title}</span>
          </Container>
          {filteredExamples.length > 0 && (
            <AccordionRoot type="single" collapsible>
              <AccordionItem value="1">
                <StyledAccordionHeader headingLevel="span">{t('gloss.examples')}</StyledAccordionHeader>
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
              </AccordionItem>
            </AccordionRoot>
          )}
        </>
      )}
    </>
  );
};

export default Gloss;
