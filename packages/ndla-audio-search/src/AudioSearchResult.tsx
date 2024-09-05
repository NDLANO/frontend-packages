/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLicenseByAbbreviation, LicenseLocaleType } from "@ndla/licenses";
import { Text, ListItemContent, ListItemRoot, Button } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { IAudioMetaInformation, IAudioSummary } from "@ndla/types-backend/audio-api";
import AudioBar from "./AudioBar";

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
      <SafeLink to={license.url} rel="license">
        {license.abbreviation}
      </SafeLink>
    );
  }
  return <Text>{license.abbreviation}</Text>;
};

interface Props {
  audio: IAudioSummary;
  translations: { useAudio: string };
  fetchAudio: (id: number) => Promise<IAudioMetaInformation>;
  onError: (err: any) => void;
  locale: string;
  onAudioSelect: (audio: IAudioSummary) => void;
}

export default function AudioSearchResult({ audio, fetchAudio, onError, locale, translations, onAudioSelect }: Props) {
  const license = getLicenseByAbbreviation(audio.license, locale);
  return (
    <ListItemRoot key={audio.id} variant="list" nonInteractive asChild consumeCss>
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
}
