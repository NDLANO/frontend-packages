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
  glossData: {
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
  flex-wrap: wrap;
  gap: ${spacing.nsmall};
`;

const GlossSpan = styled.span`
  font-weight: ${fonts.weight.bold};
`;

const TypeSpan = styled.span`
  font-style: italic;
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
`;

const Gloss = ({ title, glossData, audio }: Props) => {
  const { t } = useTranslation();

  return (
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
                key={t('gloss.transcriptions.pinyin')}
                aria-label={t('gloss.transcriptions.pinyin')}
                lang={glossData.originalLanguage}
              >
                {glossData.transcriptions.pinyin}
              </span>
            )}
            {glossData.wordClass && (
              <TypeSpan aria-label={t('gloss.wordClass')}>{t(`wordClass.${glossData.wordClass}`)}</TypeSpan>
            )}
          </GlossContainer>
          {audio?.src && <SpeechControl src={audio.src} title={audio.title}></SpeechControl>}
        </Wrapper>
        <span>{title.title}</span>
      </Container>
      {glossData.examples && (
        <AccordionRoot type="single" collapsible>
          <AccordionItem value="1">
            <StyledAccordionHeader>{t('gloss.examples')}</StyledAccordionHeader>
            <StyledAccordionContent>
              {glossData.examples.map((example, index) => (
                <div key={index}>
                  {example.map((translation, innerIndex) => (
                    <div key={`${index}_${innerIndex}`}>
                      <TranslatedText data-first={innerIndex === 0}>{translation.example}</TranslatedText>
                      {translation.transcriptions.pinyin && (
                        <TranslatedText key={t('gloss.transcriptions.pinyin')} lang={glossData.originalLanguage}>
                          {translation.transcriptions?.pinyin}
                        </TranslatedText>
                      )}
                      {translation.transcriptions.traditional && (
                        <TranslatedText key={t('gloss.transcriptions.traditional')} lang={glossData.originalLanguage}>
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
  );
};

export default Gloss;
