/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import ListResource from "./ListResource";
import { StoryResourceMenu, resourceTypesArr } from "./storyComponents";
import { defaultParameters } from "../../../../stories/defaults";
import { spacing } from "../../../core/src";

export default {
  title: "My NDLA/ListResource",
  component: ListResource,
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
    resourceImage: {
      src: "https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg",
      alt: "",
    },
    resourceTypes: [{ id: "urn:resourcetype:learningPath", name: "Læringssti" }],
    tags: ["tag", "tag", "tag", "tag"],
  },
} as Meta<typeof ListResource>;

export const WithImage: StoryFn<typeof ListResource> = (args) => {
  return <ListResource {...args} />;
};

export const WithoutImage: StoryObj<typeof ListResource> = {
  args: {
    resourceImage: { src: "", alt: "" },
  },
};

export const WithoutTags: StoryObj<typeof ListResource> = {
  args: { tags: [] },
};

export const WithOverflowingDescription: StoryObj<typeof ListResource> = {
  args: {
    description:
      "Beskrivelser trenger ikke å være så veldig lange. Det er ganske vanskelig å få plass til en livshistorie. Det lærte jeg da jeg var en ung utvikler og utviklet denne komponenten. Jeg husker det nærmest som om det var i går, men det var det egentlig ikke. Det var i det gode år 2022",
  },
};

export const WithMenu: StoryObj<typeof ListResource> = {
  args: {
    menu: <StoryResourceMenu />,
  },
};

export const WithUnavailableResource: StoryObj<typeof ListResource> = {
  args: {
    title: "Ressurs ikke tilgjengelig",
    isAvailable: false,
    resourceTypes: [],
    resourceImage: { src: "", alt: "" },
  },
};

export const Loading: StoryObj<typeof ListResource> = {
  args: {
    isLoading: true,
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

export const BlockView: StoryObj<typeof ListResource> = {
  args: { resourceImage: { src: "", alt: "" } },
  render: ({ ...args }) => (
    <Wrapper>
      {resourceTypesArr.map((rt) => (
        <ListResource {...args} key={rt.id} resourceTypes={[rt]} />
      ))}
    </Wrapper>
  ),
};
