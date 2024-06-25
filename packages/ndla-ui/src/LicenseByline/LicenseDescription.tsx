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
import { breakpoints, colors, fonts, mq, spacing } from "@ndla/core";

interface Props {
  icon?: ReactNode;
  children?: ReactNode;
  warningByline?: boolean;
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
  &[data-warning="false"] {
    ${mq.range({ until: breakpoints.mobileWide })} {
      &[data-open="true"] {
        display: inline;
      }
      width: 100%;
    }
  }
`;

const TextContent = styled.span`
  &[data-warning="false"] {
    ${mq.range({ until: breakpoints.mobileWide })} {
      white-space: nowrap;
      max-height: ${spacing.mediumlarge};
      &[data-open="true"] {
        white-space: pre-wrap;
        max-height: none;
      }

      overflow: hidden;
      text-overflow: ellipsis;
      transition: max-height 0.7s ease-in;
      margin: auto 0;
    }
  }
`;

const Button = styled(ButtonV2)`
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.semibold};
  min-width: fit-content;
  margin-left: ${spacing.small};
  ${mq.range({ from: breakpoints.mobileWide })} {
    display: none;
  }
`;

const LicenseDescription = ({ icon, children, warningByline = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledFigCaption>
      {icon}
      <StyledDescription data-open={isOpen} data-warning={warningByline}>
        <TextContent data-open={isOpen} data-warning={warningByline}>
          {children}
        </TextContent>
        {!warningByline && (
          <Button variant="link" onClick={handleToggle}>
            {isOpen ? `${t("audio.readLessDescriptionLabel")}` : `${t("audio.readMoreDescriptionLabel")}`}
          </Button>
        )}
      </StyledDescription>
    </StyledFigCaption>
  );
};

export default LicenseDescription;
