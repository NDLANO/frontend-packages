/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentProps, type ReactElement, createElement, useMemo } from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { IconButton } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";

import { FileCopyLine, Icon, UserFill } from ".";
import * as icons from "./icons";

interface IconItemProps {
  icon: (props: ComponentProps<typeof Icon>) => ReactElement<ComponentProps<typeof Icon>>;
  name: string;
}

const IconItem = ({ icon, name }: IconItemProps) => {
  const iconProps = useMemo(() => icon({}).props as Record<string, any>, [icon]);

  return (
    <li>
      <div>
        {createElement(icon, { size: "medium" })}
        <strong>{name}</strong>
      </div>
      <div title={`Kilde: ${iconProps["data-source"]}`}>
        {iconProps["data-license"]}
        <IconButton
          variant="tertiary"
          onClick={async () => await navigator.clipboard.writeText(`import { ${name} } from '@ndla/icons';`)}
          title="Kopier import-kode"
          aria-label="Kopier import-kode"
        >
          <FileCopyLine />
        </IconButton>
      </div>
    </li>
  );
};

const StyledList = styled("ul", {
  base: {
    display: "flex",
    flexWrap: "wrap",
    "& li": {
      listStyle: "none",
      backgroundColor: "#eff0f2",
      width: "275px",
      padding: "xsmall",
      margin: "xsmall",
      wordBreak: "break-all",
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
      "& > div": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
  },
});

/**
 * Systemikonene identifiserer handlinger en bruker kan ta på en gitt skjerm, de kan også representere objekter og områder.
 *
 * Systemikonene er hentet fra RemixIcon som er open source og fritt tilgjengelig for alle, lisensiert basert på Apache License Version 2.0. Hvis det er behov for flere eller nye systemikoner skal disse hentes her: https://remixicon.com.
 **/
export default {
  title: "Components/Icons",
  component: UserFill,
  tags: ["autodocs"],
  args: {
    size: "medium",
  },
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof UserFill>;

export const IconStory: StoryFn<typeof UserFill> = (args) => {
  return <UserFill {...args} />;
};

IconStory.storyName = "Icon";

export const AllIcons: StoryObj<typeof Icon> = {
  render: () => (
    <StyledList>
      {Object.keys(icons).map((key) => (
        // @ts-expect-error - this is just a test
        <IconItem key={key} name={key} icon={icons[key]} />
      ))}
    </StyledList>
  ),
};
