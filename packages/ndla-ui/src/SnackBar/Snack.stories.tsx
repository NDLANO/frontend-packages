/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { ButtonV2 } from "@ndla/button";
import { PersonOutlined } from "@ndla/icons/common";
import { Snack, SnackbarProvider, useSnack } from ".";

const SnackComponent = ({ ...args }: Snack) => {
  const { addSnack } = useSnack();
  const onClick = () => {
    addSnack({ ...args });
  };

  return (
    <ButtonV2 variant="outline" onClick={onClick}>
      Show snack
    </ButtonV2>
  );
};

export default {
  title: "Components/Snack",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    content: <span>This is a snack</span>,
    duration: 5000,
    render: undefined,
    id: "default",
    icon: undefined,
    closable: true,
  },
  argTypes: {
    content: {
      control: false,
      description: "Any JSX component, but usually a span-like element",
    },
    render: {
      control: false,
      description: "Replaces the entire snack with a custom render",
    },
    icon: {
      control: false,
      description: "An additional icon to be shown on the left-hand side of the snack",
    },
  },
  decorators: [
    (Story) => (
      <SnackbarProvider>
        <Story />
      </SnackbarProvider>
    ),
  ],
  render: ({ ...args }) => <SnackComponent {...args} />,
} as Meta<Snack>;

export const Default: StoryObj<Snack> = {};

const CustomSnack = (snack: Snack) => {
  const { closeSnack } = useSnack();
  return (
    <div
      style={{
        backgroundColor: "gray",
        zIndex: 1000,
        display: "flex",
        pointerEvents: "all",
      }}
    >
      <p>Custom render!</p>
      <ButtonV2 onClick={() => closeSnack(snack)}>Close</ButtonV2>
    </div>
  );
};

export const WithCustomRender: StoryObj<Snack> = {
  args: {
    id: "customRender",
    content: undefined,
    duration: 2000000,
    render: (id) => <CustomSnack id={id} />,
  },
};

export const NotClosable: StoryObj<Snack> = {
  args: {
    id: "nonClosable",
    closable: false,
  },
};

export const WithIcon: StoryObj<Snack> = {
  args: {
    id: "customIcon",
    icon: <PersonOutlined />,
  },
};
