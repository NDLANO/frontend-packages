/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { t } from "i18next";
import { ReactNode, useState } from "react";
import { Button } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";

interface Props {
  icon?: ReactNode;
  children?: ReactNode;
  warningByline?: boolean;
}

const DescriptionWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "xsmall",
    alignItems: "center",
  },
});

// const StyledFigCaption = styled.div`
//   display: flex;
//   gap: ${spacing.small};
//   align-items: center;
//   background: unset;
//   padding: unset;
//   font-size: unset;
//   color: unset;
//   p {
//     margin: 0;
//   }
// `;

const Description = styled("div", {
  base: {
    display: "inline-flex",
    whiteSpace: "pre-wrap",
    "& [data-warning='false']": {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      overflow: "hidden",
    },
    "& [data-warning='false'][data-open='true']": {
      display: "inline",
    },
  },
});

// const StyledDescription = styled.div`
//   display: inline-flex;
//   white-space: pre-wrap;
//   &[data-warning="false"] {
//     ${mq.range({ until: breakpoints.mobileWide })} {
//       &[data-open="true"] {
//         display: inline;
//       }
//       display: grid;
//       grid-template-columns: 1fr auto;
//       overflow: hidden;
//     }
//   }
// `;

const TextContent = styled("span", {
  base: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    transitionProperty: "max-height",
    transitionDuration: "normal",
    transitionTimingFunction: "ease-in",
    mobileWideDown: {
      whiteSpace: "nowrap",
      maxHeight: "large",
      "& [data-open='true']": {
        whiteSpace: "pre-wrap",
        maxHeight: "none",
      },
    },
  },
});

// const TextContent = styled.span`
//   &[data-warning="false"] {
//     ${mq.range({ until: breakpoints.mobileWide })} {
//       white-space: nowrap;
//       max-height: ${spacing.medium};
//       &[data-open="true"] {
//         white-space: pre-wrap;
//         max-height: none;
//       }
//       overflow: hidden;
//       text-overflow: ellipsis;
//       transition: max-height 0.7s ease-in;
//       margin: auto 0;
//     }
//   }
// `;

const StyledButton = styled(Button, {
  base: {
    mobileWide: {
      display: "none",
    },
  },
});

// const Button = styled(ButtonV2)`
//   color: ${colors.brand.primary};
//   font-weight: ${fonts.weight.semibold};
//   min-width: fit-content;
//   margin-left: ${spacing.small};
//   ${mq.range({ from: breakpoints.mobileWide })} {
//     display: none;
//   }
// `;

const LicenseDescription = ({ icon, children, warningByline = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DescriptionWrapper>
      {icon}
      <Description data-open={isOpen} data-warning={warningByline}>
        <TextContent data-open={isOpen} data-warning={warningByline}>
          {children}
        </TextContent>
        {!warningByline && (
          <StyledButton variant="link" onClick={handleToggle}>
            {isOpen ? `${t("audio.readLessDescriptionLabel")}` : `${t("audio.readMoreDescriptionLabel")}`}
          </StyledButton>
        )}
      </Description>
    </DescriptionWrapper>
  );
};

export default LicenseDescription;
