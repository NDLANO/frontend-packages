/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, ReactElement, createElement, useMemo } from "react";
import styled from "@emotion/styled";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { IconButtonV2 } from "@ndla/button";
import { spacing } from "@ndla/core";
import { copyTextToClipboard } from "@ndla/util";

import { Icon } from ".";
import * as actionIcons from "./action";
import { Copy } from "./action";
import * as commonIcons from "./common";
import { Person } from "./common";
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
        {createElement(icon, { size: "large" })}
        <strong>{name}</strong>
      </div>
      <div title={`Kilde: ${iconProps["data-source"]}`}>
        {iconProps["data-license"]}
        <IconButtonV2
          variant="ghost"
          onClick={() => copyTextToClipboard(`import { ${name} } from '@ndla/icons/${folder}';`)}
          title="Kopier import-kode"
          aria-label="Kopier import-kode"
        >
          <Copy />
        </IconButtonV2>
      </div>
    </li>
  );
};

interface Props {
  icons: Record<string, (props: ComponentProps<typeof Icon>) => ReactElement<ComponentProps<typeof Icon>>>;
  folder: string;
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    list-style: none;
    background-color: #eff0f2;
    width: 275px;
    padding: ${spacing.small};
    margin: ${spacing.small};
    word-break: break-all;
    display: flex;
    flex-direction: column;
    gap: ${spacing.small};
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

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
 * Systemikonene er hentet fra Google sitt Material Design som er open source og tilgjengelig med Apache License Version 2.0. Hvis det er behov for flere eller nye systemikoner skal disse hentes her: https://material.io/icons/ og hvis det ikke finnes et passende ikon i denne pakken kan man lage nye ikoner ved å bruke disse retningslinjene: https://material.io/guidelines/. Ikoner kan i nød også hentes fra: https://materialdesignicons.com, som også er Apache License Version 2.0.
 **/
export default {
  title: "Components/Icons",
  component: Person,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof Person>;

export const IconStory: StoryFn<typeof Person> = (args) => {
  return <Person {...args} />;
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
