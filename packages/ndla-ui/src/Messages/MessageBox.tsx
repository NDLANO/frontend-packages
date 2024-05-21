/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { IconButtonV2 } from "@ndla/button";
import { breakpoints, colors, fonts, mq, spacing } from "@ndla/core";
import { Cross } from "@ndla/icons/action";
import { Forward } from "@ndla/icons/common";

type MessageBoxType = "ghost" | "danger" | "info";

interface LinkProps {
  href?: string;
  text?: string;
}

interface MessageBoxProps {
  type?: MessageBoxType;
  children?: ReactNode;
  links?: LinkProps[];
  showCloseButton?: boolean;
  onClose?: () => void;
  contentEditable?: boolean;
}

const MessageBoxWrapper = styled.div`
  position: relative;
  display: flex;
  padding: ${spacing.small};
  font-family: ${fonts.sans};
  border-radius: 5px;
  background: ${colors.support.yellowLight};
  color: ${colors.brand.greyDark};

  ${fonts.sizes("18px")};
  ${mq.range({ until: breakpoints.tabletWide })} {
    ${fonts.sizes("16px")};
  }
  &[data-type="ghost"] {
    background: transparent;
    color: ${colors.brand.greyDark};
  }
  &[data-type="danger"] {
    background: ${colors.support.redLightest};
    color: ${colors.text.primary};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: ${spacing.small};
`;

const ChildrenWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  svg {
    min-width: 24px;
    min-height: 24px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.normal};
  padding-top: ${spacing.nsmall};
  padding-left: ${spacing.mediumlarge};
  svg {
    flex-shrink: 0;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.brand.primary};
  gap: ${spacing.xxsmall};
  font-weight: ${fonts.weight.semibold};
`;

const StyledCloseButton = styled(IconButtonV2)`
  position: absolute;
  top: ${spacing.xsmall};
  right: ${spacing.xsmall};
`;

export const MessageBox = ({ type, children, links, showCloseButton, onClose, contentEditable }: MessageBoxProps) => {
  const { t } = useTranslation();
  return (
    <MessageBoxWrapper data-type={type} contentEditable={contentEditable ?? undefined}>
      <InfoWrapper>
        <div>
          <ChildrenWrapper>{children}</ChildrenWrapper>
          {links && (
            <LinkWrapper>
              {links.map((x) => (
                <Link href={x.href} key={x.href}>
                  <span>{x.text}</span>
                  <Forward />
                </Link>
              ))}
            </LinkWrapper>
          )}
        </div>
      </InfoWrapper>
      {showCloseButton && (
        <StyledCloseButton variant="ghost" aria-label={t("close")} title={t("close")} onClick={onClose}>
          <Cross />
        </StyledCloseButton>
      )}
    </MessageBoxWrapper>
  );
};

export default MessageBox;
