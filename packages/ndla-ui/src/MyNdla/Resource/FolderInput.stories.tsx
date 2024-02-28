/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import FolderInput from "./FolderInput";
import { defaultParameters } from "../../../../../stories/defaults";

export default {
  title: "My NDLA/FolderInput",
  tags: ["autodocs"],
  component: FolderInput,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    labelHidden: false,
    loading: false,
    label: "Create new folder",
    name: "folder",
  },
} as Meta<typeof FolderInput>;

export const Default: StoryObj = {};
