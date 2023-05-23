/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, misc } from '@ndla/core';
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionContent } from '@ndla/accordion';
import SpeechControl from '../AudioPlayer/SpeechControl';

interface Example {
  example: string;
  language: string;
}

interface Alternative {
  alternative: string;
  language: string;
}
export interface Props {
  title: {
    title: string;
    language: string;
  };
  glossData: {
    glossType?: string;
    alternatives?: Alternative[];
    originalLanguage: string;
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
`;

const GlossSpan = styled.span`
  font-weight: 700;
  padding-right: ${spacing.nsmall};
`;

const AlternativeSpan = styled.span`
  padding-right: ${spacing.nsmall};
`;

const GlossTypeSpan = styled.span`
  padding-right: ${spacing.nsmall};
  margin-bottom: 20px;
  font-style: italic;
`;

const ExampleHeader = styled(AccordionHeader)`
  background-color: ${colors.background.lightBlue};
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
  background-color: ${colors.background.lightBlue};
  border-bottom: 1px solid ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
`;

const TranslatedText = styled.span`
  border-bottom: 1px solid ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
`;

const Gloss = ({ title, glossData, audio }: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <GlossContainer>
            <GlossSpan>{title.title}</GlossSpan>
            {glossData.alternatives &&
              glossData.alternatives.map((alternative, index) => (
                <AlternativeSpan key={index}>{alternative.alternative}</AlternativeSpan>
              ))}
            {glossData.glossType && <GlossTypeSpan>{glossData.glossType}</GlossTypeSpan>}
          </GlossContainer>
          {audio.src && <SpeechControl src={audio.src} title={audio.title}></SpeechControl>}
        </Wrapper>
        <span>Translation here</span>
      </Container>
      {glossData.examples && (
        <AccordionRoot type="single" collapsible>
          <AccordionItem value={'1'}>
            <ExampleHeader>Eksempler</ExampleHeader>
            <AccordianContainer>
              {glossData.examples.map((example, index) => (
                <ExampleContainer key={index}>
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
