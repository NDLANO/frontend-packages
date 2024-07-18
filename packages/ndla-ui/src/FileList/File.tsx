/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { Download } from "@ndla/icons/common";
import { Text } from "@ndla/primitives";
import { SafeLinkButton } from "@ndla/safelink";
import { Flex, styled } from "@ndla/styled-system/jsx";

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
    fontWeight: "light",
    color: "text.default",
    padding: "unset",
    minHeight: "unset",
    paddingInline: "3xsmall",
    textUnderlineOffset: "2px",
  },
});

const StyledText = styled(Text, {
  base: {
    paddingInline: "3xsmall",
  },
});

const TextWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "4xsmall",
  },
});

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
          <StyledText fontWeight="light" asChild consumeCss>
            <span>{title}</span>
          </StyledText>
        )}
        <Text fontWeight="light" asChild consumeCss>
          <span>({fileType?.toUpperCase()})</span>
        </Text>
      </TextWrapper>
      <Flex>
        <Text fontWeight="light" asChild consumeCss>
          <span>{fileSize}</span>
        </Text>
        {children}
      </Flex>
    </FileItem>
  );
};

export default File;
