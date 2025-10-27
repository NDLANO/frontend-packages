/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { LinkMedium } from "@ndla/icons";
import { IconButton } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";

const ContainerDiv = styled("div", {
  base: {
    position: "relative",
    _hover: {
      "& [data-copy-button]": {
        opacity: "1",
        cursor: "pointer",
      },
    },
  },
});

const StyledIconButton = styled(IconButton, {
  base: {
    position: "absolute",
    left: "-xxlarge",
    top: "-4xsmall",
    opacity: "0",
    cursor: "pointer",
    "&:focus, &:focus-visible, &:active": {
      opacity: "1",
    },
  },
});

interface Props {
  // What to render within the h2
  children: ReactNode;
  copyText: string;
  lang?: string;
}
export const CopyParagraphButton = ({ children, copyText, lang }: Props) => {
  const [hasCopied, setHasCopied] = useState(false);
  const { t } = useTranslation();
  const sanitizedTitle = useMemo(() => encodeURIComponent(copyText.replace(/ /g, "-")), [copyText]);

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => setHasCopied(false), 3000);
    }
  }, [hasCopied]);

  const onCopyClick = useCallback(async () => {
    const { location } = window;
    const newHash = `#${sanitizedTitle}`;
    const port = location.port ? `:${location.port}` : "";
    const urlToCopy = `${location.protocol}//${location.hostname}${port}${location.pathname}${location.search}${newHash}`;
    try {
      await navigator.clipboard.writeText(urlToCopy);
      setHasCopied(true);
    } catch {
      // do nothing
    }
  }, [sanitizedTitle]);

  const tooltip = hasCopied ? t("article.copyPageLinkCopied") : t("article.copyHeaderLink");
  return (
    <ContainerDiv data-embed-type="copy-heading">
      <StyledIconButton
        variant="clear"
        data-copy-button=""
        onClick={onCopyClick}
        title={tooltip}
        aria-label={`${tooltip}: ${copyText}`}
      >
        <LinkMedium />
      </StyledIconButton>
      <h2 id={sanitizedTitle} tabIndex={-1} lang={lang}>
        {children}
      </h2>
    </ContainerDiv>
  );
};
