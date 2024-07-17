/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { styled } from "@ndla/styled-system/jsx";
import { Download } from "@ndla/icons/common";
import { SafeLinkButton } from "@ndla/safelink";
import { Text } from "@ndla/primitives";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLLIElement> {
  title: string;
  url: string;
  fileExists: boolean;
  fileType: string;
  fileSize?: string;
}

const FileItem = styled("li", {
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

const StyledSafeLink = styled(SafeLinkButton, {
  base: {
    width: "100%",
    fontWeight: "light",
    color: "text.default",
    padding: "unset",
    minHeight: "unset",
  },
});

const TextWrapper = styled("div", { base: { display: "flex", gap: "xxsmall" } });

const File = ({ title, url, fileExists, fileType, fileSize, children, ...rest }: Props) => {
  const { t } = useTranslation();
  const tooltip = `${t("download")} ${url.split("/").pop()}`;

  return (
    <FileItem {...rest}>
      <TextWrapper>
        <Download />
        {fileExists ? (
          <StyledSafeLink variant="link" to={url} title={tooltip}>
            {title}
          </StyledSafeLink>
        ) : (
          <Text fontWeight="light" asChild consumeCss>
            <span>{title}</span>
          </Text>
        )}
        <Text fontWeight="light">({fileType?.toUpperCase()})</Text>
      </TextWrapper>
      <Text fontWeight="light" asChild consumeCss>
        <span>{fileSize}</span>
      </Text>
      {children}
    </FileItem>
  );
};

export default File;
