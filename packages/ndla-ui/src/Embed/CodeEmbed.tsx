/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FileCopyLine, CheckLine } from "@ndla/icons";
import { Button, Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { CodeMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { CodeBlock, codeLanguageOptions } from "../CodeBlock";
import type { ICodeLangugeOption } from "../CodeBlock/codeLanguageOptions";

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
    clear: "both",
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

  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type="code" />;
  }

  return (
    <StyledFigure data-embed-type="code-block">
      <StyledFigCaption>{embed.embedData.title || getTitleFromFormat(embed.embedData.codeFormat)}</StyledFigCaption>
      <CodeBlock
        highlightedCode={embed.status === "success" ? embed.data.highlightedCode : ""}
        format={embed.embedData.codeFormat}
      />
      <Button
        variant="secondary"
        onClick={async () => {
          if (embed.status === "success") {
            try {
              await navigator.clipboard.writeText(embed.data.decodedContent);
              setIsCopied(true);
            } catch {
              // do nothing
            }
          }
        }}
      >
        {isCopied ? <CheckLine /> : <FileCopyLine />}
        {isCopied ? t("codeBlock.copiedCode") : t("codeBlock.copyCode")}
      </Button>
    </StyledFigure>
  );
};

export default CodeEmbed;
