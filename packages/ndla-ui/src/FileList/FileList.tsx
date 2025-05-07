/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentPropsWithoutRef } from "react";
import { ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";

interface Props extends ComponentPropsWithoutRef<"ul"> {}

export const FileListWrapper = styled(
  ark.ul,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
      clear: "both",
    },
  },
  { baseComponent: true },
);

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
  return (
    <FileListWrapper {...rest} data-embed-type="file-list">
      {children}
    </FileListWrapper>
  );
};
