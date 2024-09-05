/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import { useTranslation } from "react-i18next";
import { ark } from "@ark-ui/react";
import { Heading } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";

interface Props extends ComponentPropsWithoutRef<"div"> {}

export const FileListWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
  },
});

export const FileListItem = styled(
  ark.li,
  {
    base: {
      listStyle: "none",
      background: "surface.infoSubtle",
      borderBlockEnd: "1px solid",
      borderColor: "stroke.default",
      display: "flex",
      justifyContent: "space-between",

      _hover: {
        backgroundColor: "surface.infoSubtle.hover",
      },
    },
  },
  { baseComponent: true },
);

export const FileListEmbed = ({ children, ...rest }: Props) => {
  const { t } = useTranslation();
  return (
    <FileListWrapper {...rest} data-embed-type="file-list">
      <Heading fontWeight="bold" textStyle="heading.small" asChild consumeCss>
        <h3>{t("files")}</h3>
      </Heading>
      <ul>{children}</ul>
    </FileListWrapper>
  );
};
