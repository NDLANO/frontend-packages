/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { colors, spacing, misc, fonts } from '@ndla/core';
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionContent } from '@ndla/accordion';
import { WordClass, WordClassChinese } from '../model/WordClass';
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
    wordClass?: WordClass | WordClassChinese;
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

const AudioExample = styled.div`
  max-height: 20px;
`;

const StyledAccordionHeader = styled(AccordionHeader)`
  font-family: ${fonts.sans};
  font-size: ${fonts.sizes('16px', 1.3)};
  font-weight: ${fonts.weight.semibold};
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
  font-family: ${fonts.sans};
  font-size: ${fonts.sizes('18px', 1.3)};
  :first-child {
    color: ${colors.brand.dark};
    font-weight: ${fonts.weight.bold};
    background-color: ${colors.background.lightBlue};
  }
`;

const ExampleFunction = (ex: Example) => {
  return (
    <>
      <TranslatedText>{ex.example}</TranslatedText>
      {Object.keys(ex.transcriptions).map((key, i) => (
        <TranslatedText key={key + i}>{(ex.transcriptions as any)[key]}</TranslatedText>
      ))}
    </>
  );
};

const Gloss = ({ title, glossData, audio }: Props) => {
  const { t } = useTranslation();
  let wordClassKey = '';

  glossData.originalLanguage === 'zh'
    ? (wordClassKey = `wordClassChinese.${glossData.wordClass}`)
    : (wordClassKey = `wordClass.${glossData.wordClass}`);

  return (
    <>
      <Container>
        <Wrapper>
          <GlossContainer>
            <GlossSpan>{glossData.gloss}</GlossSpan>
            {glossData.transcriptions &&
              Object.keys(glossData.transcriptions).map((keyName, i) => (
                <span key={keyName + i}>{(glossData.transcriptions as any)[keyName]}</span>
              ))}
            {glossData.wordClass && <TypeSpan>{t(wordClassKey)}</TypeSpan>}
          </GlossContainer>
          {audio.src && (
            <AudioExample>
              {audio.src && <SpeechControl src={audio.src} title={audio.title}></SpeechControl>}
            </AudioExample>
          )}
        </Wrapper>
        <span>{title.title}</span>
      </Container>
      {glossData.examples && (
        <AccordionRoot type="single" collapsible>
          <AccordionItem value={'1'}>
            <StyledAccordionHeader>{t('gloss.examples')}</StyledAccordionHeader>
            <StyledAccordionContent>
              {glossData.examples.map((example, index) => (
                <ExampleContainer key={index}>{example.map((ex) => ExampleFunction(ex))}</ExampleContainer>
              ))}
            </StyledAccordionContent>
          </AccordionItem>
        </AccordionRoot>
      )}
    </>
  );
};

export default Gloss;
