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
  example: string;
  language: string;
}
export interface Props {
  glossData: {
    gloss: string;
    originalLanguage: string;
    traditionalChinese?: string;
    pinyin?: string;
    glossType?: string;
    norwegianTranslation?: string;
    examples?: Example[][];
    audio: {
      title: string;
      src?: string;
    };
  };
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

const GlossSoundWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GlossContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GlossSpan = styled.span`
  font-weight: 700;
  padding-right: ${spacing.nsmall};
`;

const TraditionalSpan = styled.span`
  padding-right: ${spacing.nsmall};
`;

const PinyinSpan = styled.span`
  padding-right: ${spacing.nsmall};
`;

const GlossTypeSpan = styled.span`
  padding-right: ${spacing.nsmall};
  margin-bottom: 20px;
  font-style: italic;
`;

const ExampleHeader = styled(AccordionHeader)`
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

const TranslatedText = styled.span`
  border-bottom: 1px solid ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
`;

const Gloss = ({ glossData }: Props) => {
  return (
    <>
      <Container>
        <GlossSoundWrapper>
          <GlossContainer>
            <GlossSpan>{glossData.gloss}</GlossSpan>
            {glossData.traditionalChinese && <TraditionalSpan>( {glossData.traditionalChinese} )</TraditionalSpan>}
            {glossData.pinyin && <PinyinSpan>{glossData.pinyin}</PinyinSpan>}
            {glossData.glossType && <GlossTypeSpan>{glossData.glossType}</GlossTypeSpan>}
          </GlossContainer>
          {glossData.audio.src && (
            <SpeechControl src={glossData.audio.src} title={glossData.audio.title}></SpeechControl>
          )}
        </GlossSoundWrapper>
        {glossData.norwegianTranslation && <span>{glossData.norwegianTranslation}</span>}
      </Container>
      {glossData.examples && (
        <AccordionRoot type="single" collapsible>
          <AccordionItem value={'1'}>
            <ExampleHeader>Eksempler</ExampleHeader>
            <AccordianContainer>
              {glossData.examples.map((example) => (
                <ExampleContainer>
                  <ExampleText>{example[0].example}</ExampleText>
                  <TranslatedText>{example[1].example}</TranslatedText>
                  {example[2]?.example && <TranslatedText>{example[2].example}</TranslatedText>}
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
