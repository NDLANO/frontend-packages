/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentPropsWithRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { DownloadLine } from "@ndla/icons";
import { Text } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { linkOverlay } from "@ndla/styled-system/patterns";
import { FileListItem } from "./FileList";

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
    textUnderlineOffset: "2px",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
  },
});

const FileContainer = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    paddingBlock: "small",
    paddingInlineEnd: "medium",
    paddingInlineStart: "small",
    width: "100%",
  },
});

const InfoContainer = styled("div", {
  base: {
    display: "flex",
    gap: "xxsmall",
    alignItems: "center",
  },
});

export const File = forwardRef<HTMLDivElement, FileProps>(
  ({ title, url, fileExists, fileType, fileSize, ...rest }, ref) => {
    const { t } = useTranslation();
    const filename = `${title}-${url.split("/").pop() ?? ""}`;
    const downloadUrl = `${url}?download=${filename}`;
    const tooltip = `${t("download")} ${filename}`;

    return (
      <FileContainer ref={ref} {...rest}>
        <InfoContainer>
          <DownloadLine />
          {fileExists ? (
            <StyledSafeLink unstyled css={linkOverlay.raw()} to={downloadUrl} title={tooltip}>
              {title}
            </StyledSafeLink>
          ) : (
            <Text textStyle="label.medium">{title}</Text>
          )}
          <Text textStyle="label.large" asChild consumeCss>
            <span>({fileType?.toUpperCase()})</span>
          </Text>
        </InfoContainer>
        <Text textStyle="label.large" asChild consumeCss>
          <span>{fileSize}</span>
        </Text>
      </FileContainer>
    );
  },
);

export const FileListElement = ({ title, url, fileExists, fileType, fileSize }: FileProps) => (
  <FileListItem>
    <File title={title} url={url} fileExists={fileExists} fileType={fileType} fileSize={fileSize} />
  </FileListItem>
);
