/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Circle, Stack } from "@ndla/styled-system/jsx";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Skeleton } from "./Skeleton";
import { Spinner } from "./Spinner";
import { Text } from "./Text";

export default {
  title: "Primitives/Skeleton",
  tags: ["autodocs"],
  component: Skeleton,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof Spinner>;

export const Default: StoryObj = {
  args: {
    children: <Text>Hello</Text>,
  },
};

export const Composite: StoryFn = () => (
  <Stack direction="row" gap="medium">
    <Skeleton asChild>
      <Circle size="3xlarge" />
    </Skeleton>
    <Stack gap="small" css={{ width: "100%" }}>
      <Skeleton>
        <Text textStyle="heading.large">Hello</Text>
      </Skeleton>
      <Skeleton>
        <Text textStyle="body.large">Hello</Text>
      </Skeleton>
      <Skeleton>
        <Text>Hello</Text>
      </Skeleton>
    </Stack>
  </Stack>
);

export const AfterLoaded: StoryFn = () => {
  const [loaded, setLoaded] = useState(false);
  const [timeoutSet, setTimeoutSet] = useState(false);

  useEffect(() => {
    if (!loaded && !timeoutSet) {
      setTimeoutSet(true);
      setTimeout(() => setLoaded(true), 2000);
    }
  }, [loaded, timeoutSet]);

  const onReset = () => {
    setLoaded(false);
    setTimeoutSet(false);
  };

  if (!loaded) {
    return (
      <Stack direction="row" gap="medium">
        <Skeleton asChild>
          <Circle size="3xlarge" />
        </Skeleton>
        <Stack gap="small" css={{ width: "100%" }}>
          <Skeleton>
            <Text textStyle="heading.large">Hello</Text>
          </Skeleton>
          <Skeleton>
            <Text textStyle="body.large">Hello</Text>
          </Skeleton>
          <Skeleton>
            <Text>Hello</Text>
          </Skeleton>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack gap="medium" css={{ animation: "fade-shift-in 0.25s ease-out" }}>
      <Stack direction="row" gap="medium">
        <Circle size="3xlarge" css={{ background: "surface.action" }} />
        <Stack gap="xsmall" css={{ width: "100%" }}>
          <Text textStyle="heading.large">Hello</Text>
          <Text textStyle="body.large">Hello</Text>
          <Text>Hello</Text>
        </Stack>
      </Stack>
      <Button onClick={onReset}>Reset</Button>
    </Stack>
  );
};
