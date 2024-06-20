/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { t } from "i18next";
import { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { breakpoints, colors, fonts, spacing } from "@ndla/core";

interface Props {
  description: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
}

const StyledFigCaption = styled.figcaption`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
  background: unset;
  padding: unset;
  font-size: unset;
  color: unset;
  p {
    margin: 0;
  }
`;

const StyledDescription = styled.div`
  display: inline-flex;
  white-space: pre-wrap;
  @media (max-width: ${breakpoints.mobileWide}) {
    &[data-open="true"] {
      display: inline;
    }
    width: calc(100%);
  }
`;

const TextContent = styled.span`
  @media (max-width: ${breakpoints.mobileWide}) {
    white-space: nowrap;
    /* maxHeight is set to 40 pixels to hide the rest of the text */
    max-height: 40px;
    &[data-open="true"] {
      white-space: pre-wrap;
      max-height: none;
    }

    overflow: hidden;
    text-overflow: ellipsis;
    transition: max-height 0.7s ease-in;
    margin: auto 0;
  }
`;

const Button = styled(ButtonV2)`
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.semibold};
  min-width: fit-content;
  margin-left: ${spacing.small};
  @media (min-width: ${breakpoints.mobileWide}) {
    display: none;
  }
`;

const LicenseDescription = ({ description, icon, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledFigCaption>
      {icon}
      <StyledDescription data-open={isOpen}>
        <TextContent data-open={isOpen}>
          {description}
          {children}
        </TextContent>
        <Button variant="link" onClick={handleToggle}>
          {isOpen ? `${t("audio.readLessDescriptionLabel")}` : `${t("audio.readMoreDescriptionLabel")}`}
        </Button>
      </StyledDescription>
    </StyledFigCaption>
  );
};

export default LicenseDescription;
