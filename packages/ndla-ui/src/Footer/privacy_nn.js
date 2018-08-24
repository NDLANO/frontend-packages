import React from 'react';

export const ContentGeneralNn = () => (
  <div>
    <h2>Cookies og lovtekst</h2>
    <p>
      Den såkalla “cookie-paragrafen” trådde i kraft 1. juli 2013, og forpliktar
      NDLA til å informere besøkjande om bruken av informasjonskapslar (cookies)
      på sidene til NDLA. Paragrafen seier følgjande:
    </p>
    <p>§ 2-7 b.Bruk av informasjonskapslar/cookies</p>
    <p>
      Lagring av opplysingar i brukar sitt kommunikasjonsutstyr, eller å skaffe
      seg tilgjenge til slike, er ikkje tillate utan at brukaren er informert om
      kva for opplysingar som vert handsama, føremålet med behandlinga, og kven
      som handsamar opplysingane, og brukaren har samtykka til dette. Første
      punktum er ikkje til hinder for teknisk lagring av eller tilgjenge til
      opplysingar:
    </p>
    <ol>
      <li>
        utelukkande for det føremål å overføre kommunikasjon i eit elektronisk
        kommunikasjonsnett.
      </li>
      <li>
        som er nødvendig for å levere ei informasjonssamfunnsteneste etter
        brukaren sin uttrykkjelege førespurnad.
      </li>
    </ol>
    <h2>Kva er cookies?</h2>
    <p>
      Cookies er ein standard teknologi som stort sett alle nettsider bruker i
      dag. Ein cookie er ei lita fil som ei webside oppretter på maskina di (om
      nettlesaren din tillèt det - noko han gjer som standard). Cookies kan
      innehalde forskjellig informasjon, men vert i hovudsak brukt til å lagre
      informasjon knytta til korleis du bruker websida og for å gi deg ei betre
      brukaroppleving.
    </p>
    <p>
      Viss du til dømes logger inn på ndla.no, vert det laga ein cookie som
      indikerer at du er innlogga. Når du seinare kjem tilbake, hugsar
      nettlesaren at du er innlogga, og du treng ikkje å logge inn igjen.
      Informasjonskapslar har i regelen ei gitt levetid, så om du ikkje bruker
      sida på ei stund, vil cookien bli sletta frå nettlesaren.
    </p>
    <h2>Kva godtek eg ved å bruke denne sida?</h2>
    <p>
      Du godtek at vi lagrar innsamla statistikk som kvar i verda du besøkjer
      frå, kva for nettlesar du bruker, kva for sider du besøkjer og andre
      teknisk interessante data om besøket ditt hos oss.
    </p>
    <p>
      Informasjonen vi samlar vert brukt til å analysere trender, slik at vi kan
      forbetre nettsida for deg som besøkende. Dataene vi samlar vil ikkje kunne
      identifisere deg personleg.
    </p>
    <p>
      Om du ikkje ønsker at vi skal samle desse dataa, så er det mogleg å slå av
      cookies i nettlesaren din. Våre sider (og mange andre sine) kan då slutte
      å verke optimalt.
    </p>
    <h2>Første- og tredjeparts informasjonskapslar</h2>
    <p>
      <strong>Førsteparts/first party cookies</strong> – dette er
      cookies/informasjonskapslar som vert sette på nettstaden sitt eige domene,
      og desse kapslane kan ikkje lesast av andre tredjepartsaktørar utanfor
      ditt eige domene.
    </p>
    <p>
      <strong>Tredjeparts/third party cookies</strong>, sett av til dømes Google
      eller Facebook, har som hovudføremål å hjelpe annonsørar med å fastslå
      eksempelvis kor mange gongar lesarar som klikker i annonsene ender opp med
      å kjøpe eit aktuelt produkt, eller anna konvertering. Dette er altså
      tredjepart cookies som vert lagra i nettlesaren din utanfor nettstedet
      sitt domene, kor tredjepartsaktøren har spesielle krav til personvern.
    </p>
    <p>Ingen personidentifiserbare opplysingar vert lagra i desse.</p>
  </div>
);

export const ContentCookiesNn = () => (
  <div>
    <h2>Oversikt over informasjonskapslar sett på ndla.no</h2>
    <h3>NDLA spesifikt</h3>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>First party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>_gali</td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>Pr økt</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>
            Vert brukt for å holde kontroll på vala dine i filtreringsfelt i søk
            og meny
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Google Analytics</h3>
    <p>
      Nedanståande cookies vert sette av Google Analytics for å vere i stand til
      å forstå dei besøkjande si åtferd, slik at ein til dømes kan gjere
      forbetringar på nettstaden. Eigenskapar som vert sende til Google
      Analytics er til dømes:
    </p>
    <ul>
      <li>URL på sida du ser på</li>
      <li>Tid/dato</li>
      <li>
        Informasjon om kva for nettleser og type eining, t.d. {`"iPhone"`}
      </li>
      <li>Geografisk plassering (by)</li>
    </ul>
    <p>
      Ingen personleg identifiserbar informasjon vert sendt til Google
      Analytics, fordi dette vil bryte med Google sine retningslinjer for
      personvern.
    </p>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>First party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>_ga</td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>24 mnd</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>
            <p>
              Ein unik identifikator som vert sett for å registrere nettlesaren
              din som ei unik eining. Han kan brukast til å fortelje Google
              Analytics om det er same nettlesar som besøkjer nettstaden ein
              eller fleire gongar.
            </p>
            <p>Han er bygd opp slik:</p>
            <h4>GA1.2.xxxxxxxxxx.yyyyyyyyyy</h4>
            <p>
              GA<strong>1</strong>.2.xxxxxxxxxx.yyyyyyyyyy - 1 fortel kva for
              versjon av informasjonskapselen som er brukt
            </p>
            <p>
              GA1.<strong>2</strong>.xxxxxxxxxx.yyyyyyyyyy - 2 fortel om domenet
              inneheld fleire ledd
            </p>
            <p>
              GA1.2.<strong>xxxxxxxxxx</strong>.yyyyyyyyyy - er ein ID som
              identifiserer nettlesaren din
            </p>
            <p>
              GA1.2.xxxxxxxxxx.<strong>yyyyyyyyyy</strong> - er tidspunktet for
              besøket ditt
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>First party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>_gid</td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>24 timar</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>Samme som for _ga, men levetid på kun 24 timar.</td>
        </tr>
      </tbody>
    </table>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>First party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>_gat_UA-xxxxxxx-xx</td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>Pr økt</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>Vert brukt for å optimalisere yting</td>
        </tr>
      </tbody>
    </table>
    <h3>Google Marketing Platform</h3>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>IDE</td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>24 mnd</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>
            Gir nettlesaren din ein unik ID. Vert brukt for å marknadsføre
            nettlesaren din med så relevant reklame som mogleg.
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Facebook</h3>
    <p>
      Avhengig om du er innlogga på Facebook eller ikkje i nettlesaren din, vil
      dette vere dei typiske informasjonskapslar som vert sette i nettlesaren
      din:
    </p>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>fr</td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>90 dagar</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>
            Facebook sin primære annonseringsinformasjonskapsel, vert brukt til
            å levere, måle og forbetre relevansen til annonsar.
          </td>
        </tr>
      </tbody>
    </table>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>
            _js_reg_fb_ref<br />
            _js_reg_fb_gate
          </td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>Pr økt</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>
            Vert brukt av Facebook som ein del av deira funksjonalitet som
            nettsider bruker, til dømes Liker, Deling m.m.
          </td>
        </tr>
      </tbody>
    </table>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>datr</td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>24 mnd</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>
            Vert brukt av Facebook som ein del av deira funksjonalitet som
            nettsider bruker, til dømes Liker, Deling m.m.
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Twitter</h3>
    <table className="c-table">
      <thead>
        <tr>
          <th>Kva</th>
          <th>Forklaring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informasjonskapsel</td>
          <td>Third party</td>
        </tr>
        <tr>
          <td>Namn</td>
          <td>personalization_id, guest_id</td>
        </tr>
        <tr>
          <td>Vert fjerna etter</td>
          <td>24 mnd</td>
        </tr>
        <tr>
          <td>Føremål</td>
          <td>
            Vert brukt for å identifisere nettlesaren din, slik at blant anna
            funksjonar for målretta innhald på Twitter, delingsfunksjonar m.m.
            fungerer. For meir informasjon:<br />
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
