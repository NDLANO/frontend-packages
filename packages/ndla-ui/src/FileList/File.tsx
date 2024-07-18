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
import { HStack, styled } from "@ndla/styled-system/jsx";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  url: string;
  fileExists: boolean;
  fileType: string;
  fileSize?: string;
}

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

const StyledHStack = styled(HStack, {
  base: {
    width: "100%",
  },
});

const File = ({ title, url, fileExists, fileType, fileSize, children, ...rest }: Props) => {
  const { t } = useTranslation();
  const tooltip = `${t("download")} ${url.split("/").pop()}`;

  return (
    <StyledHStack justify="space-between" {...rest}>
      <HStack gap="4xsmall">
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
      </HStack>
      <HStack>
        <Text fontWeight="light" asChild consumeCss>
          <span>{fileSize}</span>
        </Text>
        {children}
      </HStack>
    </StyledHStack>
  );
};

export default File;
