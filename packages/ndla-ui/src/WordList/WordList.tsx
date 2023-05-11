/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import AccordionRoot from '../../../ndla-accordion';
import AccordionItem from '../../../ndla-accordion';
import AccordionHeader from '../../../ndla-accordion';
import AccordionContent from '../../../ndla-accordion';
import { breakpoints, colors, fonts, spacing, mq, misc } from '@ndla/core';

interface Props {
  sourceWord: {
    word: string;
    language: string;
  };
  args: {
    type: 'single';
    collapsible: true;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7fafd; //Denne må byttes, ny farge er ikke i color variablene
  padding: ${spacing.nsmall} ${spacing.normal};
  border: 1px solid ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
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

const SampleButton = styled.button`
  height: 26px;
  margin-bottom: 20px;
`;

const WordList = ({ sourceWord }: Props) => {
  return (
    <>
      <Container>
        <WordSoundWrapper>
          <WordContainer>
            <SourceSpan>{sourceWord.word}</SourceSpan>
            <TraditionalSpan>( Trad )</TraditionalSpan>
            <PinyinSpan>Pinyin</PinyinSpan>
            <WordClassSpan>Ordklasse</WordClassSpan>
          </WordContainer>
          <SampleButton>Spill av lyd</SampleButton>
        </WordSoundWrapper>
        <span>etternavn + fornavn</span>
      </Container>
    </>
  );
};

export default WordList;
