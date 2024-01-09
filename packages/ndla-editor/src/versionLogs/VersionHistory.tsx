/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { spacing, colors, fonts } from "@ndla/core";
const StyledWrapper = styled.div`
  padding: ${spacing.small} 0;
  width: 100%;
`;

const StyledTable = styled.table`
  width: 100%;
  margin: 0;
  th {
    ${fonts.sizes(16, 1.1)}
    font-weight: ${fonts.weight.semibold};
    border-bottom: 2px solid ${colors.brand.tertiary};
    padding: ${spacing.xsmall};
  }
  td {
    padding: ${spacing.xsmall};
    ${fonts.sizes(14, 1.3)}
  }
  tbody tr {
    &:nth-child(odd) {
      background: ${colors.brand.greyLighter};
    }
  }
`;

const StyleLine = styled.hr`
  height: 2px;
  border: 0;
  background: ${colors.brand.greyLight};
  margin: ${spacing.normal} 0 ${spacing.small};
  &:before {
    content: normal;
  }
`;

type Props = {
  notes: {
    author: string;
    date: string;
    note: string;
    status?: string;
    id: number;
  }[];
  children?: ReactNode;
};

const VersionHistory = ({ notes, children }: Props) => {
  const { t } = useTranslation();
  const hasStatus = notes.some((n) => n.status !== undefined);
  return (
    <StyledWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>{t("editor.versionHistory.who")}</th>
            <th>{t("editor.versionHistory.when")}</th>
            <th>{t("editor.versionHistory.message")}</th>
            {hasStatus && <th>{t("editor.versionHistory.status")}</th>}
          </tr>
        </thead>
        <tbody>
          {notes.map(({ author, date, note, status, id }) => (
            <tr key={id}>
              <td>{author}</td>
              <td>{date}</td>
              <td>{note}</td>
              {hasStatus && <td>{status}</td>}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyleLine aria-hidden={true} />
      {children}
    </StyledWrapper>
  );
};

export default VersionHistory;
