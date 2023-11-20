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
import { Transcription } from '../model/Transcriptions';
import SpeechControl from '../AudioPlayer/SpeechControl';

interface Example {
  example: string;
  language: string;
  transcriptions: Transcription;
}

export interface Props {
  title: {
    title: string;
    language: string;
  };
  glossData?: {
    gloss: string;
    wordClass?: string;
    originalLanguage: string;
    transcriptions: Transcription;
    examples?: Example[][];
  };
  audio?: {
    title: string;
    src?: string;
  };
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

const TranslatedText = styled.span`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
  font-family: ${fonts.sans};
  ${fonts.sizes('18px', '24px')};
  &[data-first='true'] {
    color: ${colors.brand.dark};
    font-weight: ${fonts.weight.bold};
    background-color: ${colors.background.lightBlue};
  }
  &[data-pinyin] {
    font-style: italic;
  }
`;

const Gloss = ({ title, glossData, audio }: Props) => {
  const { t } = useTranslation();

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
          {glossData.examples && glossData.examples.length > 0 && (
            <AccordionRoot type="single" collapsible>
              <AccordionItem value="1">
                <StyledAccordionHeader headingLevel="span">{t('gloss.examples')}</StyledAccordionHeader>
                <StyledAccordionContent>
                  {glossData.examples.map((example, index) => (
                    <div key={index}>
                      {example.map((translation, innerIndex) => (
                        <div key={`${index}_${innerIndex}`}>
                          <TranslatedText data-first={innerIndex === 0} lang={translation.language}>
                            {translation.example}
                          </TranslatedText>
                          {translation.transcriptions.pinyin && (
                            <TranslatedText
                              key={t('gloss.transcriptions.pinyin')}
                              data-pinyin=""
                              lang={glossData.originalLanguage}
                            >
                              {translation.transcriptions?.pinyin}
                            </TranslatedText>
                          )}
                          {translation.transcriptions.traditional && (
                            <TranslatedText
                              key={t('gloss.transcriptions.traditional')}
                              lang={glossData.originalLanguage}
                            >
                              {translation.transcriptions?.traditional}
                            </TranslatedText>
                          )}
                        </div>
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
