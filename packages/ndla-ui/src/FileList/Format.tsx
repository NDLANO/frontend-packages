/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors, spacing } from "@ndla/core";
import { Download } from "@ndla/icons/common";
import { SafeLink } from "@ndla/safelink";
import { Text } from "@ndla/typography";
import { FileFormat } from "./File";

const StyledText = styled(Text)`
  box-shadow: inset 0 -1px;

  &:hover,
  &:focus,
  &:active {
    box-shadow: none;
  }
`;
const StyledDeadLinkWrapper = styled.span`
  display: flex;
  align-items: center;
`;
const StyledDeadLinkText = styled(Text)`
  overflow-wrap: anywhere;
`;

const FileLink = styled(SafeLink)`
  box-shadow: none;
  position: relative;
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  overflow-wrap: anywhere;
`;

const StyledDownload = styled(Download)`
  margin-top: 3px;
  flex-shrink: 0;
  margin-right: ${spacing.small};
  height: 18px;
  width: 18px;
`;

interface FormatProps {
  format: FileFormat;
  title: string;
  isPrimary: boolean;
  isDeadLink: boolean;
}

const Format = ({ format, title, isPrimary, isDeadLink }: FormatProps) => {
  const titleWithFormat = `${title} (${format.fileType.toUpperCase()})`;

  if (isDeadLink) {
    return (
      <StyledDeadLinkWrapper key={format.url}>
        <StyledDownload />
        <StyledDeadLinkText element="span" textStyle="label-small" margin="none">
          {isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}
        </StyledDeadLinkText>
      </StyledDeadLinkWrapper>
    );
  }

  return (
    <FileLink key={format.url} to={format.url} target="_blank" aria-label={titleWithFormat}>
      <StyledDownload />
      <div aria-label={format.tooltip}>
        <StyledText element="span" textStyle="label-small" margin="none">
          {isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}
        </StyledText>
      </div>
    </FileLink>
  );
};

export default Format;
