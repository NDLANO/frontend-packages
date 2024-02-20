/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors, spacing, fonts, misc } from "@ndla/core";
import { IGlossExample } from "@ndla/types-backend/concept-api";
import { Text } from "@ndla/typography";

export interface Props {
  example: IGlossExample;
  originalLanguage: string | undefined;
  index: number;
  lastExampleIndex: number;
}

const StyledGlossExampleWrapper = styled.div`
  &:first-of-type {
    border-top: 1px solid ${colors.brand.primary};
  }
  &:last-of-type {
    border-radius: ${misc.borderRadius};
  }
  background-color: ${colors.background.default};
`;

const StyledGlossExample = styled.div`
  padding: ${spacing.small} ${spacing.normal};
  border-bottom: 1px solid ${colors.brand.lighter};
  background-color: ${colors.background.default};
  &[data-is-first="true"] {
    background-color: ${colors.background.lightBlue};
    border-radius: 0px;
  }
  &[data-is-last="true"] {
    border-radius: ${misc.borderRadius};
    border-bottom: none;
  }
`;

const StyledText = styled(Text)`
  &[data-is-first="true"] {
    font-weight: ${fonts.weight.bold};
    color: ${colors.text.primary};
  }
  &[data-pinyin] {
    font-style: italic;
  }
`;

const GlossExample = ({ example, originalLanguage, index, lastExampleIndex }: Props) => {
  return (
    <StyledGlossExampleWrapper>
      <StyledGlossExample data-is-first={index === 0} data-is-last={index === lastExampleIndex} lang={example.language}>
        <StyledText data-is-first={index === 0} textStyle="meta-text-medium" margin="none">
          {example.example}
        </StyledText>
      </StyledGlossExample>
      {example.transcriptions.pinyin && (
        <StyledGlossExample lang={originalLanguage}>
          <StyledText data-pinyin textStyle="meta-text-medium" margin="none">
            {example.transcriptions?.pinyin}
          </StyledText>
        </StyledGlossExample>
      )}
      {example.transcriptions.traditional && (
        <StyledGlossExample lang={originalLanguage}>
          <StyledText textStyle="meta-text-medium" margin="none">
            {example.transcriptions?.traditional}
          </StyledText>
        </StyledGlossExample>
      )}
    </StyledGlossExampleWrapper>
  );
};

export default GlossExample;
