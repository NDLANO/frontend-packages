/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors, fonts, spacing } from "@ndla/core";
import { Heading } from "@ndla/typography";
interface Props extends ComponentProps<"section"> {
  children: ReactNode;
  headingButtons?: ReactNode;
}

const FileListSection = styled.section`
  margin: ${spacing.large} 0;
  padding: 0 0 ${spacing.normal} ${spacing.normal};
  border-left: 2px solid ${colors.brand.greyLightest};
  font-family: ${fonts.sans};
`;

const FileListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 ${spacing.xsmall} 0;
  padding-bottom: ${spacing.xsmall};
  border-bottom: 2px solid ${colors.brand.greyLight};
`;

const FilesList = styled.ul`
  margin: 0;
  padding: 0;
`;

const FileList = ({ children, headingButtons, ...rest }: Props) => {
  const { t } = useTranslation();
  return (
    <FileListSection {...rest}>
      <FileListHeaderWrapper>
        <Heading element="h3" headingStyle="list-title" margin="none">
          {t("files")}
        </Heading>
        <div>{headingButtons}</div>
      </FileListHeaderWrapper>
      <FilesList>{children}</FilesList>
    </FileListSection>
  );
};

export default FileList;
