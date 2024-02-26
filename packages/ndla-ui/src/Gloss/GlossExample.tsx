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
  isStandalone?: boolean;
}

const StyledGlossExampleWrapper = styled.div`
  &[data-is-standalone="true"] {
    &:first-of-type {
      border-top: 1px solid ${colors.brand.lighter};
    }
  }

  &:first-of-type&:not([data-is-standalone="true"]) {
    border-top: 1px solid ${colors.brand.primary};
  }

  &[data-is-standalone="false"] {
    &:not(:last-child) {
      div {
        border-bottom: 1px solid ${colors.brand.lighter};
        border-radius: 0;
      }
    }
  }
`;

const StyledGlossExample = styled.div`
  padding: ${spacing.small} ${spacing.normal};
  background-color: ${colors.background.default};
  border: 1px solid ${colors.brand.lighter};
  border-top: none;

  &[data-is-first="true"] {
    background-color: ${colors.background.lightBlue};
  }
  &[data-is-standalone="false"] {
    border: none;
    border-radius: ${misc.borderRadius};
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

const GlossExample = ({ example, originalLanguage, index, isStandalone = false }: Props) => {
  return (
    <StyledGlossExampleWrapper data-is-standalone={isStandalone}>
      <StyledGlossExample data-is-first={index === 0} lang={example.language} data-is-standalone={isStandalone}>
        <StyledText data-is-first={index === 0} textStyle="meta-text-medium" margin="none">
          {example.example}
        </StyledText>
      </StyledGlossExample>
      {example.transcriptions.pinyin && (
        <StyledGlossExample
          lang={originalLanguage}
          data-is-standalone={isStandalone}
          data-is-last={example.transcriptions.traditional?.length === 0}
        >
          <StyledText data-pinyin textStyle="meta-text-medium" margin="none">
            {example.transcriptions?.pinyin}
          </StyledText>
        </StyledGlossExample>
      )}
      {example.transcriptions.traditional && (
        <StyledGlossExample lang={originalLanguage} data-is-standalone={isStandalone} data-is-last>
          <StyledText textStyle="meta-text-medium" margin="none">
            {example.transcriptions?.traditional}
          </StyledText>
        </StyledGlossExample>
      )}
    </StyledGlossExampleWrapper>
  );
};

export default GlossExample;
