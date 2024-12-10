/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { DefinitionList } from "./ArticleLists";

export default {
  title: "Primitives/Article Definition List",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  component: DefinitionList,
} as Meta<typeof DefinitionList>;

export const Default: StoryFn = () => (
  <DefinitionList>
    <dt>NDLA</dt>
    <dt>Nasjonal Digital Læringsarena</dt>
    <dd>
      Nasjonal digital læringsarena (NDLA) er Norges ledende produsent av digitale læringsressurser for videregående
      opplæring. På disse sidene gir vi deg muligheten til å bli bedre kjent med oss.
    </dd>
  </DefinitionList>
);
