import React from 'react';

export const ContentGeneralEn = () => (
  <div>
    <h2>Cookies og lovtekst</h2>
    <p>
      Den såkalte “cookie-paragrafen” trådte i kraft 1. juli 2013, og forplikter
      NDLA til å informere besøkende om bruken av informasjonskapsler (cookies)
      på sidene til NDLA. Paragrafen sier følgende:
    </p>
    <p>§ 2-7 b. Bruk av informasjonskapsler/cookies</p>
    <p>
      Lagring av opplysninger i brukers kommunikasjonsutstyr, eller å skaffe seg
      adgang til slike, er ikke tillatt uten at brukeren er informert om hvilke
      opplysninger som behandles, formålet med behandlingen, og hvem som
      behandler opplysningene, og brukeren har samtykket til dette. Første
      punktum er ikke til hinder for teknisk lagring av eller adgang til
      opplysninger:
    </p>
    <ol>
      <li>
        utelukkende for det formål å overføre kommunikasjon i et elektronisk
        kommunikasjonsnett
      </li>
      <li>
        som er nødvendig for å levere en informasjonssamfunnstjeneste etter
        brukerens uttrykkelige forespørsel.
      </li>
    </ol>
    <h2>Hva er cookies?</h2>
    <p>
      Cookies er en standard teknologi som stort sett alle nettsider bruker i
      dag. En cookie er en liten fil som en webside oppretter på din maskin (om
      nettleseren din tillater det - noe den gjør som standard). Den kan
      inneholde forskjellig informasjon, men brukes i hovedsak til å lagre
      informasjon knyttet til hvordan du bruker websiden og for å gi deg en
      bedre brukeropplevelse.
    </p>
    <p>
      Hvis du for eksempel logger inn på ndla.no, lages det en cookie som
      indikerer at du er innlogget. Når du senere kommer tilbake, husker
      nettleseren at du er innlogget, og du trenger ikke å logge inn igjen.
      Informasjonskapsler har som regel en gitt levetid, så om du ikke bruker
      siden på en stund, vil cookien bli slettet fra nettleseren.
    </p>
    <h2>Hva godtar jeg ved å bruke denne siden?</h2>
    <p>
      Du godtar at vi lagrer innsamlet statistikk som hvor i verden du besøker
      fra, hvilken nettleser du bruker, hvilke sider du besøker og andre teknisk
      interessante data om ditt besøk hos oss.
    </p>
    <p>
      Informasjonen vi samler brukes til å analysere trender, slik at vi kan
      forbedre nettsiden for deg som besøkende. Dataene vi samler vil ikke kunne
      identifisere deg personlig.
    </p>
    <p>
      Om du ikke ønsker at vi skal samle disse dataene, så er det mulig å slå av
      cookies i nettleseren din. Våre sider (og mange andres) kan da slutte å
      virke optimalt.
    </p>
    <h2>Første- og tredjeparts informasjonskapsler</h2>
    <p>
      <strong>Førsteparts/first party cookies</strong> – dette er
      cookies/informasjonskapsler som settes på nettstedets eget domene, og
      disse kapslene kan ikke leses av andre tredjepartsaktører utenfor ditt
      eget domene.
    </p>
    <p>
      <strong>Tredjeparts/third party cookies</strong>, satt av for eksempel
      Google eller Facebook, har som hovedformål å hjelpe annonsører med å
      fastslå eksempelvis hvor mange ganger lesere som klikker i annonsene ender
      opp med å kjøpe et aktuelt produkt, eller annen konvertering. Dette er
      altså tredjepart cookies som lagres i nettleseren din utenfor nettstedets
      domene, hvor tredjepartsaktøren har spesielle krav til personvern.
    </p>
    <p>Ingen personidentifiserbare opplysninger lagres i disse.</p>
  </div>
);

export const ContentCookiesEn = () => (
  <div>
    <h2>Oversikt over informasjonskapsler satt på ndla.no</h2>
    <h3>NDLA spesifikt</h3>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>First party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>_gali</td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>Pr økt</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>
            Brukes for å holde kontroll på dine valg i filtreringsfelt i søk og
            meny
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Google Analytics</h3>
    <p>
      Nedenstående cookies settes av Google Analytics for å være i stand til å
      forstå de besøkendes adferd, slik at man for eksempel kan gjøre
      forbedringer på nettstedet. Egenskaper som sendes til Google Analytics er
      for eksempel:
    </p>
    <ul>
      <li>URL på siden du ser på</li>
      <li>Tid/dato</li>
      <li>
        Informasjon om hvilken nettleser og type enhet, f.eks {`"iPhone"`}
      </li>
      <li>Geografisk plassering (by)</li>
    </ul>
    <p>
      Ingen personlig identifiserbar informasjon sendes til Google Analytics, da
      dette vil bryte med Googles retningslinjer for personvern.
    </p>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>First party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>_ga</td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>24 mnd</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>
            <p>
              En unik identifikator som settes for å registrere din nettleser
              som en unik enhet. Den kan brukes til å fortelle Google Analytics
              om det er samme nettleser som besøker nettstedet en eller flere
              ganger.
            </p>
            <p>Den er bygget opp som følger:</p>
            <h4>GA1.2.xxxxxxxxxx.yyyyyyyyyy</h4>
            <p>
              GA<strong>1</strong>.2.xxxxxxxxxx.yyyyyyyyyy - 1 forteller hvilken
              versjon av informasjonskapselen som er brukt
            </p>
            <p>
              GA1.<strong>2</strong>.xxxxxxxxxx.yyyyyyyyyy - 2 forteller om
              domenet inneholder flere ledd (punktum)
            </p>
            <p>
              GA1.2.<strong>xxxxxxxxxx</strong>.yyyyyyyyyy - er en ID som
              identifiserer din nettleser
            </p>
            <p>
              GA1.2.xxxxxxxxxx.<strong>yyyyyyyyyy</strong> - er tidspunktet for
              ditt besøk
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>First party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>_gid</td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>24 timer</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>Samme som for _ga, men levetid på kun 24 timer.</td>
        </tr>
      </tbody>
    </table>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>First party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>_gat_UA-xxxxxxx-xx</td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>Pr økt</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>Brukes for å optimalisere ytelse</td>
        </tr>
      </tbody>
    </table>
    <h3>Google Marketing Platform</h3>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>IDE</td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>24 mnd</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>
            Gir din nettleser en unik ID. Brukes for å markedsføre din nettleser
            med så relevant reklame som mulig.
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Facebook</h3>
    <p>
      Avhengig om du er innlogget på Facebook eller ikke i din nettleser, vil
      dette være de typiske informasjonskapsler som settes i din nettleser:
    </p>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>fr</td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>90 dager</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>
            Facebooks primære annonseringsinformasjonskapsel, brukes til å
            levere, måle og forbedre relevansen til annonser.
          </td>
        </tr>
      </tbody>
    </table>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>
            _js_reg_fb_ref<br />
            _js_reg_fb_gate
          </td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>Pr økt</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>
            Brukes av Facebook som en del av deres funksjonalitet som nettsider
            bruker, for eksempel Liker, Deling m.m.
          </td>
        </tr>
      </tbody>
    </table>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>datr</td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>24 mnd</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>
            Brukes av Facebook som en del av deres funksjonalitet som nettsider
            bruker, for eksempel Liker, Deling m.m.
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Twitter</h3>
    <table className="c-table">
      <thead>
        <tr>
          <th>Hva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Navn</td>
          <td>personalization_id, guest_id</td>
        </tr>
        <tr>
          <td>Fjernes etter</td>
          <td>24 mnd</td>
        </tr>
        <tr>
          <td>Formål</td>
          <td>
            Brukes for å identifisere din nettleser, slik at blant annet.
            funksjoner for målrettet innhold på Twitter, delingsfunksjoner m.m.
            fungerer. For mer informasjon: <br />
            <a
              href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
              target="_blank"
              rel="noopener noreferrer">
              https://help.twitter.com/en/rules-and-policies/twitter-cookies
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
