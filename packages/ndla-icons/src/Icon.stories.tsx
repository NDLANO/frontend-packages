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
import { copyTextToClipboard } from "@ndla/util";

import { Icon } from ".";
import * as actionIcons from "./action";
import { FileCopyLine } from "./action";
import * as commonIcons from "./common";
import { UserFill } from "./common";
import * as contentTypeIcons from "./contentType";
import * as editorIcons from "./editor";

interface IconItemProps {
  icon: (props: ComponentProps<typeof Icon>) => ReactElement<ComponentProps<typeof Icon>>;
  folder: string;
  name: string;
}

const IconItem = ({ icon, folder, name }: IconItemProps) => {
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
          onClick={() => copyTextToClipboard(`import { ${name} } from '@ndla/icons/${folder}';`)}
          title="Kopier import-kode"
          aria-label="Kopier import-kode"
        >
          <FileCopyLine />
        </IconButton>
      </div>
    </li>
  );
};

interface Props {
  icons: Record<string, (props: ComponentProps<typeof Icon>) => ReactElement<ComponentProps<typeof Icon>>>;
  folder: string;
}

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

const IconList = ({ icons, folder }: Props) => (
  <StyledList>
    {Object.keys(icons).map((key) => (
      <IconItem key={key} name={key} icon={icons[key]} folder={folder} />
    ))}
  </StyledList>
);

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

export const CommonIcons: StoryObj<typeof Icon> = {
  render: () => <IconList icons={commonIcons} folder="common" />,
};

/** Hver innholdstype i NDLA-systemet har et ikon knyttet til seg. Ikonene er visuelle representasjoner av innholdstypen og skal sammen med innholdstypefargen skape en gjenkjennelseseffekt for brukerne.
 *
 * Hvis det skal lages nye innholdstypeikoner er det viktig at de kommuniserer innholdstypens kjernefunksjon og hensikt. De må også ha lik visuell utførelse og fremtoning som de eksisterende. Alle innholdstypeikonene er bygget ut fra Material Design sine ikoner; https://material.io/icons/
 **/
export const ContentTypes: StoryObj<typeof Icon> = {
  render: () => <IconList icons={contentTypeIcons} folder="contentType" />,
};

export const Action: StoryObj<typeof Icon> = {
  render: () => <IconList icons={actionIcons} folder="action" />,
};

export const Editor: StoryObj<typeof Icon> = {
  render: () => <IconList icons={editorIcons} folder="editor" />,
};
