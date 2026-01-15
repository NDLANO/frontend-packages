/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { PageContent } from "@ndla/primitives";
import type { BrightcoveData, BrightcoveEmbedData, BrightcoveMetaData } from "@ndla/types-embed";
import { BrightcoveEmbed } from "./BrightcoveEmbed";
import { ArticleContent, ArticleWrapper } from "../Article/Article";

const embedData: BrightcoveEmbedData = {
  resource: "brightcove",
  videoid: "6326301948112",
  caption: "",
  account: "4806596774001",
  player: "BkLm8fT",
  title: "Hvordan skaffer jeg penger?",
};

const metaData: BrightcoveData = {
  id: "6326301948112",
  account_id: "4806596774001",
  custom_fields: {
    license: "Navngivelse-Ikkekommersiell-Del på samme vilkår",
    licenseinfo: "Rettighetshaver: Innovasjon Norge",
  },
  description:
    "Har du tenkt å starte bedrift? Har behovet for mer penger allerede meldt seg? Da må du trolig få hjelp av andre for å finansiere utvikling av ideen din.",
  images: {
    poster: {
      src: "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/4806596774001/efab3d48-de30-4333-8568-cfbc85dfbddf/aa9cc6c9-d330-4969-9834-7406d2a4c777/1280x720/match/image.jpg",
    },
  },
  link: undefined,
  long_description: null,
  name: "Hvordan skaffer jeg penger?",
  published_at: "2023-04-27T10:27:03.747Z",
  copyright: {
    license: {
      license: "CC-BY-NC-SA-4.0",
      description:
        "Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som den opprinnelige opphavspersonen og avledete verk må bære en tilsvarende lisens.",
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.no",
    },
    creators: [],
    processors: [],
    rightsholders: [{ type: "rightsholder", name: "Innovasjon Norge" }],
  },
  sources: [
    {
      src: "http://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/4806596774001/efab3d48-de30-4333-8568-cfbc85dfbddf/10s/master.m3u8?fastly_token=NjQ0YWRmNGRfMjcwZWQ0M2RhZTU0NTY3MmYyYzVmMGM4YzZiMDY3Mjk3ZjlhMjk0NGY0ZGNlZTdhM2ZmM2EzYzI4ZmM5OWFhOQ%3D%3D",
    },
    {
      src: "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/4806596774001/efab3d48-de30-4333-8568-cfbc85dfbddf/10s/master.m3u8?fastly_token=NjQ0YWRmNGRfMjcwZWQ0M2RhZTU0NTY3MmYyYzVmMGM4YzZiMDY3Mjk3ZjlhMjk0NGY0ZGNlZTdhM2ZmM2EzYzI4ZmM5OWFhOQ%3D%3D",
    },
    {
      src: "http://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/4806596774001/efab3d48-de30-4333-8568-cfbc85dfbddf/6s/manifest.mpd?fastly_token=NjQ0YWRmNGRfY2RiM2I0MzE4MzhkMTgwZTg2NGFmNGQyMzE4YmQyOTc3MTdhOWM0N2IyNGZhZGRhNTAxNzgyMzA5ZTRlZWUzZA%3D%3D",
    },
    {
      src: "https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/4806596774001/efab3d48-de30-4333-8568-cfbc85dfbddf/6s/manifest.mpd?fastly_token=NjQ0YWRmNGRfY2RiM2I0MzE4MzhkMTgwZTg2NGFmNGQyMzE4YmQyOTc3MTdhOWM0N2IyNGZhZGRhNTAxNzgyMzA5ZTRlZWUzZA%3D%3D",
    },
    {
      src: "http://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/4806596774001/efab3d48-de30-4333-8568-cfbc85dfbddf/b1f82598-d33e-4203-a11d-cc9faf0b266e/main.mp4?fastly_token=NjQ0YWRmNGRfZTNjZmNjMzJhOTJlMzg0NDE0NjFkNmRhMjM3YzQyNGVlMmQxYTljNTQxZjBmZTNkMTQ5NmVlMTY2NmYwNzhhM18vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNDgwNjU5Njc3NDAwMS9lZmFiM2Q0OC1kZTMwLTQzMzMtODU2OC1jZmJjODVkZmJkZGYvYjFmODI1OTgtZDMzZS00MjAzLWExMWQtY2M5ZmFmMGIyNjZlL21haW4ubXA0",
      container: "MP4",
      height: 720,
      width: 1280,
      size: 20495275,
    },
    {
      src: "https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/4806596774001/efab3d48-de30-4333-8568-cfbc85dfbddf/b1f82598-d33e-4203-a11d-cc9faf0b266e/main.mp4?fastly_token=NjQ0YWRmNGRfZTNjZmNjMzJhOTJlMzg0NDE0NjFkNmRhMjM3YzQyNGVlMmQxYTljNTQxZjBmZTNkMTQ5NmVlMTY2NmYwNzhhM18vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNDgwNjU5Njc3NDAwMS9lZmFiM2Q0OC1kZTMwLTQzMzMtODU2OC1jZmJjODVkZmJkZGYvYjFmODI1OTgtZDMzZS00MjAzLWExMWQtY2M5ZmFmMGIyNjZlL21haW4ubXA0",
      container: "MP4",
      height: 720,
      width: 1280,
      size: 20495275,
    },
  ],
};

const visuallyInterpretedEmbedMetaData: BrightcoveMetaData = {
  resource: "brightcove",
  status: "success",
  embedData: {
    resource: "brightcove",
    videoid: "6243811329001",
    caption: "",
    account: "4806596774001",
    player: "BkLm8fT",
    title: "Frivillighet i helse og omsorgstjenesten (synstolket)",
  },
  data: {
    id: "6243811329001",
    account_id: "4806596774001",
    custom_fields: {
      licenseinfo: "Leverandør: film_konsulentene",
      yt_privacy_status: "unlisted",
      license: "Navngivelse-Ikkekommersiell-Del på samme vilkår",
    },
    description: null,
    images: {
      poster: {
        src: "https://cf-images.eu-west-1.prod.boltdns.net/v1/static/4806596774001/a09bcb7b-ffe1-4c3a-98ea-bf997340a8cd/23f01e33-413e-418c-a4de-2c87c8b05c26/1280x720/match/image.jpg",
      },
    },
    link: { text: "6242635463001", url: "" },
    long_description: null,
    name: "Frivillighet i helse og omsorgstjenesten (synstolket)",
    published_at: "2021-03-25T11:40:38.476Z",
    copyright: {
      license: {
        license: "CC-BY-NC-SA-4.0",
        description:
          "This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.",
        url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en",
      },
      creators: [],
      processors: [],
      rightsholders: [{ type: "supplier", name: "film_konsulentene" }],
    },
    sources: [
      {
        src: "http://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/4806596774001/a09bcb7b-ffe1-4c3a-98ea-bf997340a8cd/10s/master.m3u8?fastly_token=NjQ0YmMyY2JfMTBmN2ZlOGUxNTAwYzQ0YmUwNDIzMDY3YWE1MGVkNjNmY2U2MDJhMDRkYjRhNzljNjZiZDJkNTA1MDM1Njg5Yg%3D%3D",
      },
      {
        src: "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/4806596774001/a09bcb7b-ffe1-4c3a-98ea-bf997340a8cd/10s/master.m3u8?fastly_token=NjQ0YmMyY2JfMTBmN2ZlOGUxNTAwYzQ0YmUwNDIzMDY3YWE1MGVkNjNmY2U2MDJhMDRkYjRhNzljNjZiZDJkNTA1MDM1Njg5Yg%3D%3D",
      },
      {
        src: "http://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/4806596774001/a09bcb7b-ffe1-4c3a-98ea-bf997340a8cd/6s/manifest.mpd?fastly_token=NjQ0YmMyY2JfZjhmNTUzZDc4MWI2YjdmNGEzOWUzOGMxYzkyYWU2NWVhZGVjZDY3ZWJiMmYxYjgzOThiNzQ1ZjMzOWRiZmRiYQ%3D%3D",
      },
      {
        src: "https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/4806596774001/a09bcb7b-ffe1-4c3a-98ea-bf997340a8cd/6s/manifest.mpd?fastly_token=NjQ0YmMyY2JfZjhmNTUzZDc4MWI2YjdmNGEzOWUzOGMxYzkyYWU2NWVhZGVjZDY3ZWJiMmYxYjgzOThiNzQ1ZjMzOWRiZmRiYQ%3D%3D",
      },
      {
        src: "http://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/4806596774001/a09bcb7b-ffe1-4c3a-98ea-bf997340a8cd/494f17bd-2cee-4c49-8f27-99c76f3720d5/main.mp4?fastly_token=NjQ0YmMyY2JfYjQzM2YwNzQxMTg5YzAwNjUyNzI2MGE0NWVhZmNhZTQ5Y2QwMzIyMGExOGMyMzFhMmNiNmU3NWY1YTY0ZWNmM18vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNDgwNjU5Njc3NDAwMS9hMDliY2I3Yi1mZmUxLTRjM2EtOThlYS1iZjk5NzM0MGE4Y2QvNDk0ZjE3YmQtMmNlZS00YzQ5LThmMjctOTljNzZmMzcyMGQ1L21haW4ubXA0",
        container: "MP4",
        height: 720,
        width: 1280,
        size: 138996555,
      },
      {
        src: "https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/4806596774001/a09bcb7b-ffe1-4c3a-98ea-bf997340a8cd/494f17bd-2cee-4c49-8f27-99c76f3720d5/main.mp4?fastly_token=NjQ0YmMyY2JfYjQzM2YwNzQxMTg5YzAwNjUyNzI2MGE0NWVhZmNhZTQ5Y2QwMzIyMGExOGMyMzFhMmNiNmU3NWY1YTY0ZWNmM18vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNDgwNjU5Njc3NDAwMS9hMDliY2I3Yi1mZmUxLTRjM2EtOThlYS1iZjk5NzM0MGE4Y2QvNDk0ZjE3YmQtMmNlZS00YzQ5LThmMjctOTljNzZmMzcyMGQ1L21haW4ubXA0",
        container: "MP4",
        height: 720,
        width: 1280,
        size: 138996555,
      },
    ],
  },
};

const meta: Meta<typeof BrightcoveEmbed> = {
  title: "Embeds/BrightcoveEmbed",
  component: BrightcoveEmbed,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <PageContent variant="content" asChild>
        <ArticleWrapper>
          <ArticleContent>
            <Story />
          </ArticleContent>
        </ArticleWrapper>
      </PageContent>
    ),
  ],
};

export default meta;

export const BrightcoveEmbedStory: StoryObj<typeof BrightcoveEmbed> = {
  args: {
    embed: {
      resource: "brightcove",
      status: "success",
      embedData: embedData,
      data: metaData,
    },
  },
};

export const VisuallyInterpreted: StoryObj<typeof BrightcoveEmbed> = {
  args: {
    embed: visuallyInterpretedEmbedMetaData,
  },
};

export const BrightcoveFailed: StoryObj<typeof BrightcoveEmbed> = {
  args: {
    embed: {
      resource: "brightcove",
      status: "error",
      embedData: embedData,
    },
  },
};

BrightcoveEmbedStory.storyName = "BrightcoveEmbed";
