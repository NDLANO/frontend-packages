/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { ark } from "@ark-ui/react";
import { Heading } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";

interface Props extends ComponentPropsWithRef<"div"> {}

const StyledFileListWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
  },
});

export const FileListWrapper = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>((props, ref) => (
  <StyledFileListWrapper ref={ref} {...props} data-embed-type="file-list" />
));

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

export const FileListEmbed = forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
  const { t } = useTranslation();
  return (
    <FileListWrapper {...rest} ref={ref}>
      <Heading fontWeight="bold" textStyle="heading.small" asChild consumeCss>
        <h3>{t("files")}</h3>
      </Heading>
      <ul>{children}</ul>
    </FileListWrapper>
  );
});
