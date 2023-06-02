/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, misc, fonts } from '@ndla/core';
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionContent } from '@ndla/accordion';
import SpeechControl from '../AudioPlayer/SpeechControl';

interface Example {
  example: string;
  language: string;
  transcriptions: Transcription;
}

interface Transcription {
  trad?: string;
  pinyin?: string;
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
  audio: {
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
  margin-bottom: ${spacing.nsmall};
  font-style: italic;
`;

const AudioExample = styled.div`
  padding-bottom: ${spacing.normal};
`;

const StyledAccordionHeader = styled(AccordionHeader)`
  background-color: ${colors.background.lightBlue};
`;

const StyledAccordionContent = styled(AccordionContent)`
  padding: 0;
`;

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TranslatedText = styled.span`
  border-bottom: 1px solid ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
  :first-child {
    color: ${colors.brand.dark};
    font-weight: ${fonts.weight.bold};
    background-color: ${colors.background.lightBlue};
  }
`;

const Gloss = ({ title, glossData, audio }: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <GlossContainer>
            <GlossSpan>{glossData.gloss}</GlossSpan>
            {glossData.transcriptions.trad && <span>{glossData.transcriptions.trad}</span>}
            {glossData.transcriptions.pinyin && <span>{glossData.transcriptions.pinyin}</span>}
            {glossData.wordClass && <TypeSpan>{glossData.wordClass}</TypeSpan>}
          </GlossContainer>
          <AudioExample>
            {audio.src && <SpeechControl src={audio.src} title={audio.title}></SpeechControl>}
          </AudioExample>
        </Wrapper>
        <span>{title.title}</span>
      </Container>
      {glossData.examples && (
        <AccordionRoot type="single" collapsible>
          <AccordionItem value={'1'}>
            <StyledAccordionHeader>Eksempler</StyledAccordionHeader>
            <StyledAccordionContent>
              {glossData.examples.map((example, index) => (
                <ExampleContainer key={index}>
                  <TranslatedText>{example[0].example}</TranslatedText>
                  {example[0].transcriptions.trad && <TranslatedText>{example[0].transcriptions.trad}</TranslatedText>}
                  {example[0].transcriptions.pinyin && (
                    <TranslatedText>{example[0].transcriptions.pinyin}</TranslatedText>
                  )}
                  <TranslatedText>{example[1].example}</TranslatedText>
                </ExampleContainer>
              ))}
            </StyledAccordionContent>
          </AccordionItem>
        </AccordionRoot>
      )}
    </>
  );
};

export default Gloss;
