/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const FileListRoot = styled("div", {});

export const FileList = styled("ul", {
  base: {
    listStyle: "none",
    paddingInlineStart: "none",
  },
});

export const FileListHeader = styled(Heading, {
  base: {
    paddingBlockEnd: "small",
  },
});

export const FileListItem = styled("li", {
  base: {
    background: "surface.infoSubtle",
    borderBlockEnd: "1px solid",
    borderColor: "stroke.default",
    display: "flex",
    justifyContent: "space-between",
    paddingBlock: "small",
    paddingInlineEnd: "medium",
    paddingInlineStart: "small",
    _hover: {
      backgroundColor: "surface.infoSubtle.hover",
    },
  },
});

export const FileListEmbed = ({ children, ...rest }: Props) => {
  const { t } = useTranslation();
  return (
    <FileListRoot {...rest}>
      <FileListHeader fontWeight="bold" textStyle="heading.small" asChild consumeCss>
        <h3>{t("files")}</h3>
      </FileListHeader>
      <FileList>{children}</FileList>
    </FileListRoot>
  );
};
