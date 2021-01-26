import React from 'react';
import { AudioPlayer, Figure } from '@ndla/ui';
import { uuid } from '@ndla/util';

const AudioAdvancedExample = () => {
  const description =
    'Se gjerne nærmere på hvordan andre kjente fortellere griper saken an. Siri Knudsen i NRK P3 lot seg for eksempel inspirere av Asbjørnsen og Moe da hun jobbet med sin radiodokumentar om artisten Truls Heggero.';

  return (
    <Figure id={uuid()} type="full-column">
      <AudioPlayer
        src="https://staging.api.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3"
        title="Den gode lydhistoria"
        description={description}
        img={{
          url: 'https://api.ndla.no/image-api/raw/BagNsXHq.jpg?width=400',
          alt:
            'Mann blir målt og observert. Omgitt av ulike diagrammer. Illustrasjon.',
        }}
      />
    </Figure>
  );
};

export default AudioAdvancedExample;
