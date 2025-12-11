/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import type { ConceptData } from "@ndla/types-embed";
import { Concept } from "./Concept";

const visualElementData: ConceptData["visualElement"] = {
  resource: "image",
  status: "success",
  embedData: {
    resource: "image",
    resourceId: "61181",
    size: "full",
    align: "",
    alt: "Tenåringsjente med lyse fletter slenger på håret. Foto. ",
    caption:
      "Den østerrikske tronfølgeren Franz Ferdinand og hans hustru Sophie var på besøk i Sarajevo i 1914. Begge ble skutt og drept av nasjonalisten Gavrilo Princip i det som er kjent som <em>skuddene i Sarajevo</em>. Denne hendelsen var den utløsende årsaken til første verdenskrig.",
    url: "https://api.test.ndla.no/image-api/v2/images/61181",
  },
  data: {
    id: "61181",
    inactive: false,
    metaUrl: "https://api.test.ndla.no/image-api/v3/images/61181",
    title: {
      title: "\nHigh angle view of teenage girl with tousled dyed hair dancing at skateboard park\n",
      language: "nb",
    },
    alttext: {
      alttext: "Tenåringsjente med lyse fletter slenger på håret. Foto. ",
      language: "nb",
    },
    copyright: {
      license: {
        license: "CC-BY-NC-4.0",
        description: "Creative Commons Attribution-NonCommercial 4.0 International",
        url: "https://creativecommons.org/licenses/by-nc/4.0/",
      },
      origin: "https://bilder.ntb.no/r/preview/creative/EXuziiZGWno",
      creators: [
        {
          type: "photographer",
          name: "Maskot",
        },
      ],
      processors: [],
      rightsholders: [
        {
          type: "rightsholder",
          name: "NTB",
        },
      ],
      processed: false,
    },
    tags: {
      tags: ["danser", "kultur", "identitet"],
      language: "nb",
    },
    caption: {
      caption: "Modellklarert.",
      language: "nb",
    },
    supportedLanguages: ["nb"],
    created: "2022-01-07T08:26:01Z",
    createdBy: "lA2KgVfhY-fpmgHCYAy5W1DX",
    modelRelease: "yes",
    image: {
      variants: [],
      fileName: "S81WiNgl.jpg",
      size: 1685455,
      contentType: "image/jpeg",
      imageUrl: "https://api.test.ndla.no/image-api/raw/S81WiNgl.jpg",
      dimensions: {
        width: 2000,
        height: 1333,
      },
      language: "nb",
    },
  },
};

export default {
  title: "Components/Concept",
  component: Concept,
  tags: ["autodocs"],
  args: {
    title: "skin - formasjonsskade",
    lang: "nb",
    visualElement: visualElementData,
    copyright: {
      license: {
        license: "CC-BY-SA-4.0",
        description: "Creative Commons Attribution-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
      creators: [{ type: "writer", name: "Sissel Paaske" }],
      processors: [
        { type: "processor", name: "Totaltekst" },
        { type: "correction", name: "Arbeidets art" },
      ],
      rightsholders: [],
      processed: false,
    },
    children: (
      <>
        <p>
          Ordet «skin» er engelsk og brukes om formasjonsskade som oppstår i boreprosessen i området som grenser inn til
          brønnen. Skaden er størst i området nærmest hullet, men den kan bre seg utover et stykke fra brønnen. Skin
          forteller om bergartens permeabilitet i reservoarsonen.
        </p>
        <p>Hullveggen skades både av borekronen, små partikler og væsken som brukes i brønnen.</p>
        <p>
          Skaden i bergarten gir dårligere forhold for oljen som skal strømme til brønnen. Gangene i bergarten plugges,
          og det oppstår et trykkfall som reduserer produksjonstrykket i brønnen.
        </p>
        <p>
          Det er viktig å redusere omfanget av skaden ved å velge væsker som passer godt til bergartsegenskapene, og å
          bore med en borekrone som skader minst mulig.
        </p>
        <p>Skader som er dannet av borevæske, kan repareres ved å syrebehandle hullets overflate.</p>
      </>
    ),
  },
} satisfies Meta<typeof Concept>;

export const Default: StoryObj<typeof Concept> = {};

export const WithoutVisualElement: StoryObj<typeof Concept> = {
  args: {
    visualElement: undefined,
  },
};

export const WithoutLicenseAndVisualElement: StoryObj<typeof Concept> = {
  args: {
    visualElement: undefined,
    copyright: undefined,
  },
};
