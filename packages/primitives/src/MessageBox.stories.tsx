/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { InformationOutline } from "@ndla/icons/common";
import { css } from "@ndla/styled-system/css";
import { MessageBox } from "./MessageBox";
import { Text } from "./Text";

export default {
  title: "Primitives/MessageBox",
  component: MessageBox,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    variant: "info",
    children: (
      <>
        <InformationOutline size="normal" className={css({ marginBlockStart: "4xsmall" })} />
        <Text>
          Dette er en melding. Fermentum lobortis tincidunt lectus aliquet. Tincidunt mi proin lectus at duis turpis
          nullam nisl.
        </Text>
      </>
    ),
  },
} as Meta<typeof MessageBox>;

export const Info: StoryObj<typeof MessageBox> = {
  args: {
    variant: "info",
  },
};

export const Warning: StoryObj<typeof MessageBox> = {
  args: {
    variant: "warning",
  },
};

export const Success: StoryObj<typeof MessageBox> = {
  args: {
    variant: "success",
  },
};

export const Error: StoryObj<typeof MessageBox> = {
  args: {
    variant: "error",
  },
};
