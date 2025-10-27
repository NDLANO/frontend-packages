/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Fragment } from "react";
import { Text } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { IGlossExampleDTO } from "@ndla/types-backend/concept-api";

interface Props {
  examples: IGlossExampleDTO[];
  originalLanguage: string | undefined;
}

const StyledGlossExample = styled("div", {
  base: {
    borderTop: "1px solid",
    borderColor: "stroke.subtle",
    paddingBlock: "xsmall",
    paddingInline: "medium",
    _first: {
      background: "surface.brand.1.subtle",
      borderColor: "stroke.default",
      "& p": {
        fontWeight: "bold",
      },
    },
  },
});

const PinyinText = styled(Text, {
  base: {
    fontStyle: "italic",
  },
});

export const GlossExample = ({ examples, originalLanguage }: Props) => {
  return (
    <div>
      {examples.map((examples, index) => (
        <Fragment key={index}>
          <StyledGlossExample lang={examples.language}>
            <Text textStyle="label.medium" lang={examples.language}>
              {examples.example}
            </Text>
          </StyledGlossExample>
          {!!examples.transcriptions.pinyin && (
            <StyledGlossExample>
              <PinyinText data-pinyin="" lang={originalLanguage} textStyle="label.medium">
                {examples.transcriptions?.pinyin}
              </PinyinText>
            </StyledGlossExample>
          )}
          {!!examples.transcriptions?.traditional && (
            <StyledGlossExample>
              <Text textStyle="label.medium" lang={originalLanguage}>
                {examples.transcriptions.traditional}
              </Text>
            </StyledGlossExample>
          )}
        </Fragment>
      ))}
    </div>
  );
};
