/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// @ts-ignore
import FigureWithLicense from '../article/FigureWithLicense';

const Notion = {
  id: 1,
  title: 'And',
  text: 'Ender tilhører andefamilien. I Norge har det vært vanlig å dele endene inn i tre grupper etter levevis: Gressender som spiser planter på grunt vann, dykkender som dykker etter virvelløse dyr, og fiskeender som spiser fisk. Ender ble husdyr i middelhavslandene kort tid før Kristi fødsel. Hos hannen, andriken, er de fire midtre halefjærene bøyd oppover. Som ofte ellers i fugleriket har hannen finere farger enn hunnen. Det finnes en rekke raser og krysninger. På bildet ser vi tamme ender, pekinand.',
  labels: ['Naturbruk Vg1', 'Naturbruk Vg2'],
  media: (
    <FigureWithLicense type="full-column" resizeIframe caption="Utholdenhet - animasjon av oksygentransporten">
      <iframe
        title="Video: Utholdenhet - animasjon av oksygentransporten"
        height="270"
        width="480"
        frameBorder="0"
        src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
        // eslint-disable-next-line react/no-unknown-property
        allowFullScreen
      />
    </FigureWithLicense>
  ),
  authors: [{ name: 'Fornavn Etternavn' }],
  license: 'CC-BY-SA-4.0',
  linkedTo: [{ label: 'Fag' }, { label: 'Fag' }],
};

export default Notion;
