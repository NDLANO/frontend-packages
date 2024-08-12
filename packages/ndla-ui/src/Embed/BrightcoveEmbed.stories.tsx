/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { BrightcoveData, BrightcoveEmbedData } from "@ndla/types-embed";
import BrightcoveEmbed from "./BrightcoveEmbed";
import { ArticleContent, ArticleWrapper } from "../Article";
import { OneColumn } from "../Layout";

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

const meta: Meta<typeof BrightcoveEmbed> = {
  title: "Embeds/BrightcoveEmbed",
  component: BrightcoveEmbed,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <OneColumn>
        <ArticleWrapper>
          <ArticleContent>
            <Story />
          </ArticleContent>
        </ArticleWrapper>
      </OneColumn>
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
