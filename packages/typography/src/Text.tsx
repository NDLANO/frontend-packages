/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ElementType, ForwardedRef, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { breakpoints, fonts, mq, spacing } from "@ndla/core";
import { PolymorphicProps, polymorphicForwardRef } from "@ndla/util";
import { MarginVariant } from "./types";

const baseStyle = css`
  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.normal};
`;

export const elementStyle: { [key in TextVariant]: SerializedStyles } = {
  ingress: css`
    ${fonts.size.text.ingress};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes("24px", "35px")};
    }
  `,
  button: css`
    font-weight: ${fonts.weight.semibold};
    ${fonts.size.text.button};
  `,
  content: css`
    font-family: ${fonts.serif};
    ${fonts.size.text.content};
  `,
  "content-alt": css`
    ${fonts.size.text.content};
  `,
  "meta-text-xxsmall": css`
    font-weight: ${fonts.weight.semibold};
    ${fonts.size.text.metaText.xxsmall};
  `,
  "meta-text-xsmall": css`
    font-weight: ${fonts.weight.semibold};
    ${fonts.size.text.metaText.xsmall};
  `,
  "meta-text-small": css`
    ${fonts.size.text.metaText.small};
  `,
  "meta-text-medium": css`
    ${fonts.size.text.metaText.medium};
  `,
  "meta-text-large": css`
    font-weight: ${fonts.weight.bold};
    ${fonts.size.text.metaText.large};
  `,
  "label-large": css`
    font-weight: ${fonts.weight.semibold};
    ${fonts.size.text.label.large};
  `,
  "label-small": css`
    font-weight: ${fonts.weight.semibold};
    ${fonts.size.text.label.small};
  `,
};

export const elementMarginStyle: { [key in MarginVariant]: SerializedStyles } = {
  xlarge: css`
    margin: ${spacing.normal} 0 ${spacing.small} 0;
    ${mq.range({ from: breakpoints.tablet })} {
      margin-bottom: ${spacing.normal};
    }
  `,
  large: css`
    margin-top: ${spacing.large};
    margin-bottom: ${spacing.small};
  `,
  small: css`
    margin-top: ${spacing.normal};
    margin-bottom: ${spacing.small};
  `,
  none: css`
    margin: 0px;
  `,
  normal: css``,
};

export type TextVariant =
  | "ingress"
  | "button"
  | "content"
  | "content-alt"
  | "meta-text-xxsmall"
  | "meta-text-xsmall"
  | "meta-text-small"
  | "meta-text-medium"
  | "meta-text-large"
  | "label-large"
  | "label-small";

export interface TextProps {
  textStyle?: TextVariant;
  margin?: MarginVariant;
  children?: ReactNode;
}

/**
 * Text-komponent som definerer styling for alle tekst-elementer (ingress, brødtekst, metatekst, knappetekst) som brukes i ed, ndla-frontend, listing.
 */
const Text = <T extends ElementType = "p">(props: PolymorphicProps<T> & TextProps, ref: ForwardedRef<any>) => {
  const { element: Element = "p", textStyle = "content", margin = "normal", ...rest } = props;
  return <Element css={[baseStyle, elementStyle[textStyle], elementMarginStyle[margin]]} {...rest} ref={ref} />;
};

export default polymorphicForwardRef(Text);
