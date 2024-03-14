/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { spacing } from "@ndla/core";
import BlockResource from "./BlockResource";
import { StoryResourceMenu, resourceTypesArr } from "./storyComponents";
import { defaultParameters } from "../../../../stories/defaults";

export default {
  title: "My NDLA/BlockResource",
  component: BlockResource,
  tags: ["autodocs"],
  parameters: {
    ...defaultParameters,
  },
  argTypes: {
    resourceImage: {
      control: false,
    },
    resourceTypes: {
      control: false,
    },
    menu: {
      control: false,
    },
  },
  args: {
    id: "1234",
    link: "",
    title: "Tittel til ressurs",
    description: "Dette er for eksempel en fagbeskrivelse! Dersom den er for lang vil den bli forkortet",
    resourceImage: {
      src: "https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg",
      alt: "",
    },
    resourceTypes: [{ id: "urn:resourcetype:learningPath", name: "Læringssti" }],
    tags: ["tag", "tag", "tag", "tag"],
  },
} as Meta<typeof BlockResource>;

export const WithImage: StoryFn<typeof BlockResource> = (args) => {
  return <BlockResource {...args} />;
};

export const WithoutImage: StoryObj<typeof BlockResource> = {
  args: { resourceImage: { src: "", alt: "" } },
};

export const WithoutTags: StoryObj<typeof BlockResource> = {
  args: { tags: [] },
};

export const WithOverflowingDescription: StoryObj<typeof BlockResource> = {
  args: {
    description:
      "Beskrivelser trenger ikke å være så veldig lange. Det er ganske vanskelig å få plass til en livshistorie. Det lærte jeg da jeg var ung",
  },
};

export const WithMenu: StoryObj<typeof BlockResource> = {
  args: {
    menu: <StoryResourceMenu />,
  },
};

export const WithUnavailableResource: StoryObj<typeof BlockResource> = {
  args: {
    title: "Ressurs ikke tilgjengelig",
    isAvailable: false,
    resourceTypes: [],
    resourceImage: { src: "", alt: "" },
  },
};

export const Loading: StoryObj<typeof BlockResource> = {
  args: {
    isLoading: true,
  },
};

const BlockWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  flex-wrap: wrap;
`;

export const BlockView: StoryObj<typeof BlockResource> = {
  args: { resourceImage: { src: "", alt: "" } },
  render: ({ ...args }) => (
    <BlockWrapper>
      {resourceTypesArr.map((rt) => (
        <BlockResource {...args} key={rt.id} resourceTypes={[rt]} />
      ))}
    </BlockWrapper>
  ),
};
