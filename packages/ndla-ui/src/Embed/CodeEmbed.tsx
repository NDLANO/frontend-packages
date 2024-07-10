/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Copy } from "@ndla/icons/action";
import { Done } from "@ndla/icons/editor";
import { Button, Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { CodeMetaData } from "@ndla/types-embed";
import { copyTextToClipboard } from "@ndla/util";
import { CodeBlock, codeLanguageOptions } from "../CodeBlock";
import { ICodeLangugeOption } from "../CodeBlock/codeLanguageOptions";

// TODO: We need an error state for this

interface Props {
  embed: CodeMetaData;
}

const StyledFigCaption = styled("figcaption", {
  base: {
    textStyle: "label.large",
    fontWeight: "bold",
  },
});

const StyledFigure = styled(Figure, {
  base: {
    // We apply margin here to allow for the float and size props on figure to work as intended.
    "& > *:not(:where(:first-child))": {
      marginBlockStart: "xsmall",
    },
  },
});

const getTitleFromFormat = (format: string) => {
  const selectedLanguage = codeLanguageOptions.find((item: ICodeLangugeOption) => item.format === format);
  if (selectedLanguage) {
    return selectedLanguage.title;
  }
  return;
};

const CodeEmbed = ({ embed }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isCopied) {
      const timer = setInterval(() => setIsCopied(false), 3000);
      // ensure interval is cleared - also if unmounted
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCopied]);

  return (
    <StyledFigure>
      <StyledFigCaption>{embed.embedData.title || getTitleFromFormat(embed.embedData.codeFormat)}</StyledFigCaption>
      <CodeBlock
        highlightedCode={embed.status === "success" ? embed.data.highlightedCode : ""}
        format={embed.embedData.codeFormat}
      />
      <Button
        variant="secondary"
        onClick={() => {
          copyTextToClipboard(embed.status === "success" ? embed.data.decodedContent : "");
          setIsCopied(true);
        }}
      >
        {isCopied ? <Done /> : <Copy />}
        {isCopied ? t("codeBlock.copiedCode") : t("codeBlock.copyCode")}
      </Button>
    </StyledFigure>
  );
};

export default CodeEmbed;
