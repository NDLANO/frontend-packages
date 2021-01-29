import React from 'react';
import { AudioPlayer, Figure } from '@ndla/ui';
import { uuid } from '@ndla/util';

const AudioAdvancedExample = () => {
  const description =
    'Se gjerne nærmere på hvordan andre kjente fortellere griper saken an. Siri Knudsen i NRK P3 lot seg for eksempel inspirere av Asbjørnsen og Moe da hun jobbet med sin radiodokumentar om artisten Truls Heggero.';

  const TextVersion = (
    <>
      <p>
        So, I had graduated seven years ago from Berkeley with a dual degree in
        molecular and cell biology and linguistics, and I had gone to a career
        fair here on campus, where I'd gotten an interview with a start-up
        called Theranos. And at the time, there wasn't really that much
        information about the company, but the little that was there was really
        impressive. Essentially, what the company was doing was creating a
        medical device where you would be able to run your entire blood panel on
        a finger-stick of blood. So you wouldn't have to get a big needle stuck
        in your arm in order to get your blood test done. So this was
        interesting not only because it was less painful,
      </p>
      <p>
        And this was confirmed in an interview that the founder, Elizabeth
        Holmes, had said in the Wall Street Journal. "The reality within our
        health-care system today is that when someone you care about gets really
        sick, by the time you find out it's [most often] too late to do anything
        about it, It's heartbreaking." This was a moon shot that I really wanted
        to be a part of and I really wanted to help build.{' '}
      </p>
    </>
  );
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
        textVersion={TextVersion}
      />
    </Figure>
  );
};

export default AudioAdvancedExample;
