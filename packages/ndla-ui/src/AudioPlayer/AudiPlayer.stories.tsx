/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { AudioPlayer } from "./AudioPlayer";
const TextVersion = (
  <>
    <p>
      So, I had graduated seven years ago from Berkeley with a dual degree in molecular and cell biology and
      linguistics, and I had gone to a career fair here on campus, where I'd gotten an interview with a start-up called
      Theranos. And at the time, there wasn't really that much information about the company, but the little that was
      there was really impressive. Essentially, what the company was doing was creating a medical device where you would
      be able to run your entire blood panel on a finger-stick of blood. So you wouldn't have to get a big needle stuck
      in your arm in order to get your blood test done. So this was interesting not only because it was less painful,
    </p>
    <p>
      And this was confirmed in an interview that the founder, Elizabeth Holmes, had said in the Wall Street Journal.
      "The reality within our health-care system today is that when someone you care about gets really sick, by the time
      you find out it's [most often] too late to do anything about it, It's heartbreaking." This was a moon shot that I
      really wanted to be a part of and I really wanted to help build.{" "}
    </p>
  </>
);

const description =
  "Se gjerne nærmere på hvordan andre kjente fortellere griper saken an. Siri Knudsen i NRK P3 lot seg for eksempel inspirere av Asbjørnsen og Moe da hun jobbet med sin radiodokumentar om artisten Truls Heggero. Se gjerne nærmere på hvordan andre kjente fortellere griper saken an. Siri Knudsen i NRK P3 lot seg for eksempel inspirere av Asbjørnsen og Moe da hun jobbet med sin radiodokumentar om artisten Truls Heggero.";

/**
 * Although the AudioPlayer is most commonly used as an embed, it can also be used as a standalone component.
 * To see it used as an embed, check out the AudioEmbed component
 */
const meta: Meta<typeof AudioPlayer> = {
  title: "Components/AudioPlayer",
  component: AudioPlayer,
  tags: ["autodocs"],
};

export default meta;

export const AudioPlayerStory: StoryObj<typeof AudioPlayer> = {
  args: {
    src: "https://api.staging.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3",
    title: "Den gode lydhistoria",
    textVersion: TextVersion,
  },
};

AudioPlayerStory.storyName = "AudioPlayer";

export const SimpleVariant: StoryObj<typeof AudioPlayer> = {
  args: {
    src: "https://api.staging.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3",
    title: "Den gode lydhistoria",
    textVersion: TextVersion,
    speech: true,
  },
};

export const PodcastWithoutImage: StoryObj<typeof AudioPlayer> = {
  args: {
    src: "https://api.staging.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3",
    title: "Den gode lydhistoria",
    textVersion: TextVersion,
    subtitle: { title: "Serienavn", url: "#" },
    description,
  },
};

export const PodcastWithImage: StoryObj<typeof AudioPlayer> = {
  args: {
    src: "https://api.staging.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3",
    title: "Den gode lydhistoria",
    textVersion: TextVersion,
    subtitle: { title: "Serienavn", url: "#" },
    description,
    img: {
      url: "https://api.ndla.no/image-api/raw/BagNsXHq.jpg?height=400",
      alt: "Mann blir målt og observert. Omgitt av ulike diagrammer. Illustrasjon.",
    },
  },
};
