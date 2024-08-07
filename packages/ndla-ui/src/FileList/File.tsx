/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { DownloadLine } from "@ndla/icons/common";
import { Text } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { HStack, styled } from "@ndla/styled-system/jsx";
import { FileListItem } from ".";

export interface FileProps extends ComponentPropsWithRef<"div"> {
  title: string;
  url: string;
  fileExists: boolean;
  fileType: string;
  fileSize?: string;
}

export interface FileType {
  title: string;
  formats: FileFormat[];
  fileExists?: boolean;
}

export interface FileFormat {
  url: string;
  fileType: string;
  tooltip: string;
}

const StyledSafeLink = styled(SafeLink, {
  base: {
    fontWeight: "light",
    color: "text.default",
    padding: "unset",
    minHeight: "unset",
    paddingInline: "3xsmall",
    textUnderlineOffset: "2px",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
  },
});

const StyledHStack = styled(HStack, {
  base: {
    width: "100%",
  },
});

const File = forwardRef<HTMLDivElement, FileProps>(
  ({ title, url, fileExists, fileType, fileSize, children, ...rest }, ref) => {
    const { t } = useTranslation();
    const tooltip = `${t("download")} ${url.split("/").pop()}`;

    return (
      <StyledHStack justify="space-between" ref={ref} {...rest}>
        <HStack gap="4xsmall">
          <DownloadLine />
          {fileExists ? (
            <StyledSafeLink to={url} title={tooltip}>
              {title}
            </StyledSafeLink>
          ) : (
            <Text fontWeight="light" asChild consumeCss>
              <span>{title}</span>
            </Text>
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
  },
);

export const FileListElement = ({ title, url, fileExists, fileType, fileSize }: FileProps) => (
  <FileListItem>
    <File title={title} url={url} fileExists={fileExists} fileType={fileType} fileSize={fileSize} />
  </FileListItem>
);

export default File;
