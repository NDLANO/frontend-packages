/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLicenseByAbbreviation, type LicenseLocaleType } from "@ndla/licenses";
import { Text, ListItemContent, ListItemRoot, Button } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { IAudioMetaInformationDTO, IAudioSummaryDTO } from "@ndla/types-backend/audio-api";
import { AudioBar } from "./AudioBar";

const StyledAudioMeta = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "small",
  },
});

const StyledListItemContent = styled(ListItemContent, {
  base: {
    alignItems: "flex-end",
    flexWrap: "wrap",
  },
});

interface LicenseLinkProps {
  license: LicenseLocaleType;
}
const LicenseLink = ({ license }: LicenseLinkProps) => {
  if (license.url?.length) {
    return (
      <a href={license.url} rel="license">
        {license.abbreviation}
      </a>
    );
  }
  return <Text>{license.abbreviation}</Text>;
};

interface Props {
  audio: IAudioSummaryDTO;
  translations: { useAudio: string };
  fetchAudio: (id: number) => Promise<IAudioMetaInformationDTO>;
  onError: (err: any) => void;
  locale: string;
  onAudioSelect: (audio: IAudioSummaryDTO) => void;
}

export const AudioSearchResult = ({ audio, fetchAudio, onError, locale, translations, onAudioSelect }: Props) => {
  const license = getLicenseByAbbreviation(audio.license, locale);
  return (
    <ListItemRoot key={audio.id} nonInteractive asChild consumeCss>
      <li>
        <StyledListItemContent>
          <StyledAudioMeta>
            <Text textStyle="title.medium">{audio.title?.title}</Text>
            <AudioBar audio={audio} fetchAudio={fetchAudio} onError={onError} />
            <div>{license.rights ? <LicenseLink license={license} /> : license.title}</div>
          </StyledAudioMeta>
          <Button onClick={() => onAudioSelect(audio)}>{translations.useAudio}</Button>
        </StyledListItemContent>
      </li>
    </ListItemRoot>
  );
};
