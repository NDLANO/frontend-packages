/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";
import type { Meta, StoryFn } from "@storybook/react";
import { Hero, HeroBackground, HeroContent } from "./Hero";
import { PageContent } from "./Layout/PageContent";
import { Heading, Text } from "./Text";

export default {
  title: "Primitives/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    inlineStories: "true",
    layout: "fullscreen",
  },
  args: {
    variant: "primary",
  },
} satisfies Meta<typeof Hero>;

export const Default: StoryFn<typeof Hero> = ({ ...args }) => (
  <Hero {...args}>
    <HeroBackground />
    <PageContent>
      <HeroContent>
        <Heading>Fargen på innholdet i Hero endrer seg automatisk basert på varianten som velges</Heading>
      </HeroContent>
      <styled.div css={{ background: "surface.default", padding: "medium" }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut orci a lectus pellentesque porta. Integer
          tellus nunc, lobortis non enim quis, interdum porttitor orci. Suspendisse sit amet sapien at dolor venenatis
          malesuada ut ac turpis. Quisque bibendum ultrices urna, nec sodales dui feugiat vel. Proin dapibus dolor ut
          metus dignissim euismod. Aliquam erat volutpat. Donec vestibulum lectus a accumsan aliquet. Maecenas suscipit
          urna vel neque viverra, sit amet viverra orci fermentum. Pellentesque ac lacus malesuada, imperdiet nisi et,
          scelerisque nulla. Phasellus commodo justo et purus fermentum, eu vulputate mauris auctor.
        </Text>
        <Text>
          Nunc sodales placerat ex ac accumsan. Phasellus a mollis lorem. Maecenas in dictum nisl, ut auctor massa. Sed
          vitae ipsum eget mi sodales tristique non sed est. Praesent nec hendrerit massa. In egestas venenatis
          pharetra. Vivamus rutrum magna vel elit malesuada imperdiet. Nunc cursus, metus a tempor auctor, ante nunc
          ornare mauris, ut blandit eros lacus ut massa. Ut eu velit at arcu vestibulum commodo. Pellentesque ac quam
          facilisis, scelerisque augue fermentum, commodo magna. Ut mauris est, fermentum sit amet pretium a, tempor
          mattis dolor. In vitae finibus nibh. In sit amet vestibulum quam. Etiam sed venenatis eros. Fusce massa
          tellus, pharetra ut dui a, vulputate suscipit felis. Phasellus id velit at purus tristique lobortis.
        </Text>
        <Text>
          Duis non tempus tortor, non aliquet turpis. Sed aliquet et tellus non viverra. Nam luctus eros orci, porttitor
          sollicitudin neque placerat sed. Quisque laoreet lorem et augue commodo, nec maximus justo dapibus. Nullam
          condimentum ex leo. Morbi rhoncus tortor quis ex volutpat, id aliquam arcu eleifend. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Pellentesque neque justo, rhoncus a nisi in, pretium dapibus felis. Ut
          convallis est et dui placerat, vitae ultricies eros gravida.
        </Text>
        <Text>
          In metus ex, iaculis ac feugiat eget, dignissim in augue. Proin nec ultricies nisi, id elementum ex. Aenean id
          massa quis turpis cursus vulputate. Nam eget turpis iaculis, molestie libero vel, commodo purus. Phasellus
          luctus ipsum in libero venenatis, quis auctor justo fringilla. Donec vel mauris non justo feugiat sodales in
          in orci. Vestibulum fringilla consequat erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Morbi condimentum, justo a dictum venenatis, ante libero gravida enim, et blandit tellus urna ac purus. Nunc
          sed orci sit amet lorem malesuada tincidunt. Duis non dictum leo. Suspendisse eget dui vel risus dictum
          faucibus ac ut mauris. Fusce facilisis at erat a dignissim.
        </Text>
      </styled.div>
    </PageContent>
  </Hero>
);

export const WithBackgroundImage: StoryFn<typeof Hero> = ({ ...args }) => (
  <div>
    <Hero {...args} absolute={false}>
      <HeroBackground css={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="https://api.test.ndla.no/image-api/raw/o2oDiH0R.png?width=800&ts=1721320165888" alt="" />
      </HeroBackground>
      <HeroContent></HeroContent>
    </Hero>
    <PageContent>
      <styled.div css={{ background: "surface.default", padding: "medium" }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut orci a lectus pellentesque porta. Integer
          tellus nunc, lobortis non enim quis, interdum porttitor orci. Suspendisse sit amet sapien at dolor venenatis
          malesuada ut ac turpis. Quisque bibendum ultrices urna, nec sodales dui feugiat vel. Proin dapibus dolor ut
          metus dignissim euismod. Aliquam erat volutpat. Donec vestibulum lectus a accumsan aliquet. Maecenas suscipit
          urna vel neque viverra, sit amet viverra orci fermentum. Pellentesque ac lacus malesuada, imperdiet nisi et,
          scelerisque nulla. Phasellus commodo justo et purus fermentum, eu vulputate mauris auctor.
        </Text>
        <Text>
          Nunc sodales placerat ex ac accumsan. Phasellus a mollis lorem. Maecenas in dictum nisl, ut auctor massa. Sed
          vitae ipsum eget mi sodales tristique non sed est. Praesent nec hendrerit massa. In egestas venenatis
          pharetra. Vivamus rutrum magna vel elit malesuada imperdiet. Nunc cursus, metus a tempor auctor, ante nunc
          ornare mauris, ut blandit eros lacus ut massa. Ut eu velit at arcu vestibulum commodo. Pellentesque ac quam
          facilisis, scelerisque augue fermentum, commodo magna. Ut mauris est, fermentum sit amet pretium a, tempor
          mattis dolor. In vitae finibus nibh. In sit amet vestibulum quam. Etiam sed venenatis eros. Fusce massa
          tellus, pharetra ut dui a, vulputate suscipit felis. Phasellus id velit at purus tristique lobortis.
        </Text>
        <Text>
          Duis non tempus tortor, non aliquet turpis. Sed aliquet et tellus non viverra. Nam luctus eros orci, porttitor
          sollicitudin neque placerat sed. Quisque laoreet lorem et augue commodo, nec maximus justo dapibus. Nullam
          condimentum ex leo. Morbi rhoncus tortor quis ex volutpat, id aliquam arcu eleifend. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Pellentesque neque justo, rhoncus a nisi in, pretium dapibus felis. Ut
          convallis est et dui placerat, vitae ultricies eros gravida.
        </Text>
        <Text>
          In metus ex, iaculis ac feugiat eget, dignissim in augue. Proin nec ultricies nisi, id elementum ex. Aenean id
          massa quis turpis cursus vulputate. Nam eget turpis iaculis, molestie libero vel, commodo purus. Phasellus
          luctus ipsum in libero venenatis, quis auctor justo fringilla. Donec vel mauris non justo feugiat sodales in
          in orci. Vestibulum fringilla consequat erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Morbi condimentum, justo a dictum venenatis, ante libero gravida enim, et blandit tellus urna ac purus. Nunc
          sed orci sit amet lorem malesuada tincidunt. Duis non dictum leo. Suspendisse eget dui vel risus dictum
          faucibus ac ut mauris. Fusce facilisis at erat a dignissim.
        </Text>
      </styled.div>
    </PageContent>
  </div>
);
