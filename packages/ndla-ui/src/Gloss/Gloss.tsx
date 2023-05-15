/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import SpeechControl from '../AudioPlayer/SpeechControl';
import { colors, spacing, misc } from '@ndla/core';
import AccordionRoot from '@ndla/accordion/src/AccordionRoot';
import AccordionItem from '@ndla/accordion/src/AccordionItem';
import AccordionHeader from '@ndla/accordion/src/AccordionHeader';
import AccordionContent from '@ndla/accordion/src/AccordionContent';

interface Example {
  exampleSentence: string;
  exampleSentencePinyin?: string;
  translation: string;
}
export interface Props {
  sourceWord: {
    word: string;
    language: string;
    traditionalChinese?: string;
    pinyin?: string;
    wordClass?: string;
    norwegianTranslation?: string;
  };
  audio: {
    title: string;
    src?: string;
  };
  examples?: Example[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7fafd; //Denne må byttes, ny farge er ikke i color variablene
  padding: ${spacing.nsmall} ${spacing.normal};
  border: 1px solid ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
  margin-bottom: ${spacing.xsmall};
`;

const WordSoundWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SourceSpan = styled.span`
  font-weight: 700;
  padding-right: ${spacing.nsmall};
`;

const TraditionalSpan = styled.span`
  padding-right: ${spacing.nsmall};
`;

const PinyinSpan = styled.span`
  padding-right: ${spacing.nsmall};
`;

const WordClassSpan = styled.span`
  padding-right: ${spacing.nsmall};
  margin-bottom: 20px;
  font-style: italic;
`;

const ExampleAccordianHeader = styled(AccordionHeader)`
  background-color: #f7fafd;
`;

const AccordianContainer = styled(AccordionContent)`
  padding: 0;
`;

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExampleText = styled.span`
  color: ${colors.brand.dark};
  font-weight: 700;
  background-color: #f7fafd;
  border-bottom: 1px solid ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
`;

const ExampleTextTranslated = styled.span`
  border-bottom: 1px solid ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
`;

const Gloss = ({ sourceWord, audio, examples }: Props) => {
  return (
    <>
      <Container>
        <WordSoundWrapper>
          <WordContainer>
            <SourceSpan>{sourceWord.word}</SourceSpan>
            {sourceWord.traditionalChinese && <TraditionalSpan>( {sourceWord.traditionalChinese} )</TraditionalSpan>}
            {sourceWord.pinyin && <PinyinSpan>{sourceWord.pinyin}</PinyinSpan>}
            {sourceWord.wordClass && <WordClassSpan>{sourceWord.wordClass}</WordClassSpan>}
          </WordContainer>
          {audio.src && <SpeechControl src={audio.src} title={audio.title}></SpeechControl>}
        </WordSoundWrapper>
        {sourceWord.norwegianTranslation && <span>{sourceWord.norwegianTranslation}</span>}
      </Container>
      {examples && (
        <AccordionRoot type="single" collapsible>
          <AccordionItem value={'1'}>
            <ExampleAccordianHeader>Eksempler</ExampleAccordianHeader>
            <AccordianContainer>
              {examples.map((example) => (
                <ExampleContainer>
                  <ExampleText>{example.exampleSentence}</ExampleText>
                  {example.exampleSentencePinyin && (
                    <ExampleTextTranslated>{example.exampleSentencePinyin}</ExampleTextTranslated>
                  )}
                  <ExampleTextTranslated>{example.translation}</ExampleTextTranslated>
                </ExampleContainer>
              ))}
            </AccordianContainer>
          </AccordionItem>
        </AccordionRoot>
      )}
    </>
  );
};

export default Gloss;
