/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { AudioEmbedData, AudioMeta } from "@ndla/types-embed";
import type { Meta, StoryObj } from "@storybook/react";
import { PageContent } from "@ndla/primitives";
import { ArticleContent, ArticleWrapper } from "../Article/Article";
import { AudioEmbed } from "./AudioEmbed";

const embedData: AudioEmbedData = {
  resource: "audio",
  resourceId: "3000",
  type: "standard",
  url: "https://api.test.ndla.no/audio-api/v1/audio/3000",
};

const successData: AudioMeta = {
  id: 3000,
  revision: 1,
  title: { title: "\nAin't I a Woman? by Sojourner Truth ", language: "nb" },
  audioFile: {
    url: "https://api.test.ndla.no/audio/files/ZZ1gkRc7.mp3",
    mimeType: "audio/mpeg",
    fileSize: 3025206,
    language: "nb",
  },
  copyright: {
    license: {
      license: "CC-BY-SA-4.0",
      description: "Creative Commons Attribution-ShareAlike 4.0 International",
      url: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    origin: "",
    creators: [{ type: "originator", name: "Radio Metro AS" }],
    processors: [],
    rightsholders: [],
    processed: false,
  },
  tags: {
    tags: ["Ain't I a Woman?", "Sojourner Truth", "speech", "abolitionist"],
    language: "nb",
  },
  supportedLanguages: ["nb"],
  audioType: "standard",
  manuscript: { manuscript: "", language: "nb" },
  created: "2022-02-28T17:09:28Z",
  updated: "2022-02-28T17:09:28Z",
};

const podcastEmbedData: AudioEmbedData = {
  resource: "audio",
  resourceId: "2712",
  type: "podcast",
  url: "https://api.test.ndla.no/audio-api/v1/audio/2712",
};

const podcastSuccessData: AudioMeta = {
  id: 2712,
  revision: 24,
  title: { title: "\nLyddesign i radioreklame", language: "nb" },
  audioFile: {
    url: "https://api.test.ndla.no/audio/files/dThw7S4V.mp3",
    mimeType: "audio/mpeg",
    fileSize: 46598400,
    language: "nb",
  },
  copyright: {
    license: {
      license: "CC-BY-SA-4.0",
      description: "Creative Commons Attribution-ShareAlike 4.0 International",
      url: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    origin: "",
    creators: [],
    processors: [
      { type: "editorial", name: "Albertine Aaberge" },
      { type: "linguistic", name: "Totaltekst" },
      { type: "editorial", name: "Maren Aftret-Sandal" },
    ],
    rightsholders: [{ type: "rightsholder", name: "Både Og" }],
    processed: false,
  },
  tags: { tags: ["reklame", "radio", "lyddesign"], language: "nb" },
  supportedLanguages: ["nb", "nn"],
  audioType: "podcast",
  podcastMeta: {
    introduction:
      "\nHvordan bruker en profesjonell lyddesigner virkemidler og fortellertekniske grep for å skape stemning, få oss til å lytte på reklamen og til å kjøpe produktet som blir presentert?\n\nVert i studio er Andreas Veie-Rosvoll med gjesten Joachim Sandvik. Han er lyddesigner i produksjonsselskapet Både Og, som har lagd over 10.000 radioreklamer.",
    coverPhoto: {
      id: "60913",
      url: "https://api.test.ndla.no/image-api/raw/id/60913",
      altText: 'Foto av smilende jente som kikker oppover mot teksten "Lytt deg gjennom mediefaget". ',
    },
    language: "nb",
  },
  series: {
    id: 4,
    revision: 9,
    title: { title: "Lytt deg gjennom mediefaget", language: "nb" },
    description: {
      description:
        "I denne serien kan du lytte til mediefaglige temaer. Podkastene passer godt til elever i videregående skole, men også for deg som ønsker å lære mer om mediefaglige spørsmål.\n\nProgramledere som Andreas Veie-Rosvoll, Sarah Natasha Melbye og Jonis Josef snakker med ulike fagpersoner. De tar for seg rasisme i norske medier, psykisk helse på internett, mediepolitikk, mediehverdagen i 2030, samer i dagens samfunn, fakta og fiksjon, lyddesign i radioreklame, medier og makt, bærekraft og medieproduksjon, samarbeid i kreative prosesser med mer. ",
      language: "nb",
    },
    coverPhoto: {
      id: "60913",
      url: "https://api.test.ndla.no/image-api/raw/id/60913",
      altText: 'Foto av smilende jente som kikker oppover mot teksten "Lytt deg gjennom mediefaget". ',
    },
    supportedLanguages: ["nb", "nn"],
    hasRSS: true,
  },
  manuscript: {
    manuscript:
      "\nDeltakere:\nAndreas Veie-Rosvoll \u2013 Programleder \nJoachim Sandvik \u2013 JS\n\nHva gjør en lyddesigner?\n\nProgramleder: Hei, jeg heter Andreas Veie-Rosvoll. Godt lyddesign, hva er egentlig det? Hvis du har hørt på radio, har du garantert hørt én eller hundre radioreklamer før. Det produseres ganske mange reklamer hvert år, og min gjest i dag er lyddesigner på ganske mange av dem. Joachim Sandvik er lyddesigner i Både Og og har produsert lyden på et tusentall slike reklamer, er det ikke?\n\nJS: Det er over 10 000 \u2026\n\nProgramleder: Og derfor er det godt å snakke med deg om nøkkelen til å skru sammen en god radioreklame. For eksempel: Hva må man tenke på? Hvordan holder man seg innenfor ganske trange tidsrammer? Hva slags effekter skal man bruke? \n\n(En radioreklame lagd av Både Og for AJ Produkter spilles av.)\n\nProgramleder: Der hørte vi et eksempel på en radioreklame som Både Og har produsert. Men hva er egentlig en radioreklame, Joachim?\n\nJS: En radioreklame er en metode for å si til mennesker som hører den, at du har et produkt eller en tjeneste, noe du vil selge eller informere om. Eller du kan ønske å gi bedriften eller organisasjonen din en profil.\n\nProgramleder: Så hvis jeg har salg på kontormøbler akkurat nå, og jeg vil at folk som hører på radio, skal høre det, så kan det hende at jeg går til Både Og og får noen til å lage en reklame for meg?\n\nJS: Det er riktig.\n\nProgramleder: La oss si at det kommer noen skuespillere i dag \u2013 det skal lages en radioreklame, og du skal være lyddesigner. Hvilket forarbeid gjør dere?\n\nJS: Forarbeidet er som regel at en manusforfatter eller en tekstforfatter, som her på huset er det samme som en regissør, kommer inn med et manus. Der er det skrevet noen ord som skuespillerne skal framføre. Av og til er det også lagt inn en forklaring på hvor vi er \u2013 er vi for eksempel på fjellet, på en restaurant eller ved kjøkkenbordet? Det legger noen føringer for hvordan vi kan lage et lyddesign i etterkant. Det sier også noe om måten skuespillerne skal lese manuset på. \n\nDet kan også være at et reklamebyrå har skrevet et manus. Da har de gjerne en tydelig tanke bak reklamen, som kanskje har tilknytning til et konsept som de skal ha på TV eller på reklameplakater og liknende. Når våre tekstforfattere og regissører skriver manus, står det gjerne «Mann» og «Dame», og det er skuespillerne. Da er det gjerne litt løs prat der to mennesker sitter et sted eller går en tur og prater sammen om et problem som den ene har. Så tipser gjerne den andre om løsningen på problemet.\n\nProgramleder: «Kjøp bla-bla, så \u2026»?\n\nJS: Ja, og så kutter man der og kommer til det som kalles for en voiceover, som er selve reklamebudskapet.\n\nProgramleder: Da kommer det en trygg og god stemme og litt musikk, kanskje?\n\nJS: Ja, gjerne det.\n\nProgramleder: Dette er kanskje hovedjobben din, men hva må du gjøre når skuespillerne kommer?\n\nJS: Først informerer jeg skuespillerne om hva de skal gjøre den dagen.\n\nProgramleder: Ja, for det vet de kanskje ikke?\n\nJS: Nei. De har fått beskjed om at de skal jobbe med for eksempel et sjokolademerke. Så leser jeg gjennom manus, og de kommer kanskje med innspill til hvordan teksten kan leses. Hvis skuespillerne har dialekt, spør de gjerne om manuset skal leses på dialekt eller østnorsk. Når vi har vært gjennom dette, plasserer vi skuespillerne bak mikrofonen. Regissøren, som gjerne sitter på min høyre side, sier noen velvalgte ord om hvordan han eller hun vil ha teksten levert. Så sier vi «vær så god!» og trykker på «REC».\n\nProgramleder: Og når opptaket er ferdig og alle går hjem, det er da din jobb virkelig begynner. Hva gjør du da?\n\nJS: Da sitter vi lyddesignere alene med vårt eget sinn. Allerede i opptakssituasjonen har vi begynt å skape et bilde i hodet av hvordan reklamen kan være: hvor situasjonen skal foregå, om det er skritt som kommer inn, og så videre. Da er det jobben vår å formidle det bildet vi har i hodet, via lyd til dem som lytter.\n\nProgramleder: Det er ikke en enkel oppgave?\n\nJS: Etter hvert som man jobber masse med dette, får man jo noen innarbeidede måter å jobbe på og noen klassiske «go to»-lyder som ikke er så veldig lett gjenkjennelige. Vi har en lyd som heter «Stille formiddag», og den høres nettopp ut som det, så den bruker vi mye for å skape et bilde av at skuespillerne er utendørs. Den gir et godt grunnlag.\n\nProgramleder: Har dere en såkalt lydbank hvor dere kan søke etter for eksempel «Stille formiddag»?\n\nJS: Ja, vi har et bibliotek som heter Soundly, og der henter vi alle lydene våre. Hvis de ikke finnes, må de lages, og det skjer ofte.\n\nProgramleder: La oss si at det ikke finnes en lyd av skrittene fra en som går med høye hæler, og så skal du skape det. Hva gjør du da?\n\nJS: Da må vi ut og finne høye hæler og ta opp lyden av skrittene med mikrofonen. Hvis vi gjør det i studioet, henter vi parkett eller liknende og tar på oss høye hæler, eller finner en som kan gå i dem. Vi lyddesignere har ofte en tanke om akkurat hvordan skrittene skal høres ut. Skrittene skal for eksempel gå til høyre, venstre eller stoppe lite grann, og kanskje det skal høres ut som om personen snur seg på hælen og drar foten. \n\nProgramleder: Det er sånt man kanskje ikke tenker på når man hører radioreklame \u2013 at noen har sittet og tenkt at nå må jeg lage en lyd av noen som snur litt på hælen, men det er en del av jobben din?\n\nJS: Ja. Vår jobb er egentlig å være mest mulig usynlig eller uhørlig, fordi det vi formidler, er en eller annen form for realitet \u2013 det skal i alle fall oppleves sånn. Hvis lytteren ikke opplever det som sant, for eksempel hvis man putter inn lyden av en dinosaur på et helt feil sted, vil det ødelegge illusjonen av bildet vi har prøvd å skape. Dette er den største og en av de morsomste utfordringene med lyddesign. Hvordan kan jeg på kortest mulig tid skape følelsen av å være for eksempel på fjellet, på en rockekonsert, ute på tur i skogen eller inne på fødestua? Og så må jeg klare å få fortalt alt som står i manuset, og i tillegg må jeg ha en voiceover og musikk.\n\nProgramleder: Hvor kreativ får du lov til å være i denne prosessen?\n\nJS: Jeg får være så kreativ som jeg vil. Regissøren eller tekstforfatteren som har skrevet manuset, får det som kalles for et tilbud. Rundt juletider får vi ofte forespørsler om romantiske scener hvor folk skal kose seg i jula: «Det sitter et par og skal kose seg foran peisen, og vi hører lyden av peis \u2013 og det er kjempekoselig.» For å få til lyden av to mennesker som koser seg foran peisen, kreves det flere lyder. Du må ha lyden av peis, den litt rumlende og mørke, deilige lyden. Men når man tar den lyden inn i radioverdenen og bildeverdenen, må man skru den så høyt opp for å få rumlelyden, og da høres det jo bare ut som et brennende inferno. Det er ikke spesielt hyggelig eller romantisk på hytta \u2026 Så lyden av peis må balanseres ut ved at vi putter på litt knitring av peis, litt rumling, litt romantisk musikk og to rødvinsglass som skåler.\n\nProgramleder: Og alt dette lager du selv?\n\nJS: Dette må jeg lage selv, og så må jeg balansere lydene og finne ut hva som er viktig i scenen. Man kan for eksempel starte i peisen og bevege seg litt ut, som om et kamera zoomer ut. Eller man kan starte ved høyttalerne og høre den romantiske musikken, før peisen kommer inn og alt ender i en liten rødvinsskål og kanskje litt humring fra skuespillerne.\n\nProgramleder: Sånn at man får et inntrykk av at noen sitter på et hyggelig sted og koser seg skikkelig!\n\nJS: Ja. Og man trenger ikke være musiker for å være lyddesigner.\n\nProgramleder: Hva mener du med det?\n\nJS: Jeg er ikke musiker, men jeg klarer å telle til fire; man trenger å ha en form for takt i kroppen slik at man kan si «1, 2, 3, her skal vi klippe». Men man trenger altså ikke å være musiker for å være lyddesigner, man trenger bare å ha en indre tanke om hvordan man skal visualisere ting, og den kommer etter hvert, med erfaring. Da blir det helt tydelig hva man trenger for å lage forskjellige scener. Mange tenker at man skal bruke musikk hele tida, fordi musikk er følelser, men musikken skal kun være der hvis det hever det emosjonelle i scenen din. Også i film må man være forsiktig med musikkbruken. Man må også være forsiktig fordi det er noen som eier musikken.\n\nProgramleder: Hvor finner dere musikk?\n\nJS: Vi har et arkiv som heter Upright, som vi bruker per dags dato. Der ligger det en del rettighetsfri musikk, som det heter. Vi har gjort en avtale med dem om bruk og innrapportering \u2013 for alt skal rapporteres inn. Alle som har lagd musikk som de har levert til den databasen, skal få pengene sine.\n\nProgramleder: Men når musikken ligger i databasen, da er det fritt å bruke den?\n\nJS: For oss er det fritt å bruke musikken til radio, TV og podkast.\n\nProgramleder: Så hvis man søker på «scary music» eller «happy, optimistic music», hva kan man få opp da?\n\nJS: Da kan man få opp noe sånt som dette.\n\n(En optimistisk melodi spilles av.)\n\nProgramleder: Det er fint.\n\nJS: Ja, og musikk kan brukes til mye rart. Men igjen: Hvis musikken ikke hever det emosjonelle nivået i scenen din, skal den ikke være der.\n\nProgramleder: Nå har vi skrudd sammen radioreklamen. Den er fin, innenfor tidsrammen, og alle er fornøyde. Hva gjør du nå, før du sender den inn til radiokanalene som skal ha den? Hva er det tekniske som må gjøres?\n\nJS: Først og fremst må man gjøre en miks, altså balansere ut lydene. Det er for eksempel veldig rart hvis noen sier «ha det» og begynner å gå, men så er det bare stemmen som blir lavere, ikke skrittene. Men noen bør ha reagert på det tidligere i produksjonen, så man kan ha rettet opp i det allerede. I miksen bruker vi det som heter kompressorer, og det de gjør, er å flate ut de høye lydene og strekke opp de lave lydene. Desto «hardere» man gjør det, desto flatere blir lydbildet. Da høres alt like høyt ut, og det er heller ikke bra, så balanse er viktig. \n\nProgramleder: La oss si at det går bra under opptaket, men du sitter igjen med 40 sekunder og skal ha dem ned til 25. Hvordan angriper du den problemstillingen?\n\nJS: Da må man gå til manuset. Så store mengder er det vanskelig å klippe ned, så man må finne ut hva som er viktigst å ha med.\n\nProgramleder: Så man må «trimme fettet litt»?\n\nJS: Ja.\n\nProgramleder: Når du går tilbake til manuset og spør om du kan kutte noe, da trenger du hjelp \u2013 det er jo en del av samarbeidet du har med for eksempel manus og regi. Er du kreativt involvert i manuset under idémyldringen også?\n\nJS: Det er veldig individuelt fra lyddesigner til lyddesigner. Måten jeg liker å jobbe på, er å bli like overrasket som skuespillerne når vi leser manuset, for da stiller vi på likt nivå \u2013 såframt det ikke ligger en føring i manuset på hvor situasjonen skal foregå. Og så må man stille inn radioreklamen til nivåene som radiostasjonene skal ha. Når man sender radioreklame, er det et krav at reklamen ikke skal være høyere enn programinnholdet.\n\nProgramleder: I volum?\n\nJoachim: Ja, i volum. Dette har vært et krav til TV-reklame en stund, etter at mange har klaget over at lyden på reklamen er høyere enn TV-programmet. Nå har det også kommet en standard for radioreklame. Vi skal ikke utdype så mye om den, men den heter R128, som er det vi leverer til for eksempel P4, mens Radio Norge skal ha noe som heter «\u20136 dBFS».\n\nProgramleder: Hvis kunden vil tilbake til tegnebrettet \u2013 altså at de vil starte på nytt fordi de er ikke fornøyde etter å ha fått det ferdige produktet \u2013 hva skjer da?\n\nJS: Da må man bare gjøre det på nytt. Vi skisserer ut en radiospot først, og så sier vi til kunden: «Dette er det vi har lagd, sånn kan det høres ut. Det er bare en skisse; du kan komme med innspill til teksten, og du kan gjøre hva du vil av endringer.» Når vi har gjort det et par ganger fram og tilbake, er kunden fornøyd. Da produserer vi ferdig radioreklamen basert på det kunden vil si, og det vi mener at kunden bør si. Men hvis det skjer endringer i etterkant, må man gå inn og redigere ut det som eventuelt er feil, eller endre det budskapet som skal endres. Og så gjør man rett og slett bare den operasjonen en gang til.\n\nProgramleder: Når du har lagd noe og føler at det begynner å bli ferdig \u2013 hva gjør du da, og hvordan kan du kvalitetssikre produktet? Hvem spør du om å høre på reklamen?\n\nJS: Da må jeg ta det via regissøren først. Regissøren godkjenner eller kommer med innspill, og så gjør vi eventuelle endringer.\n\nProgramleder: Hva slags innspill kan det være?\n\nJS: Det kan være at musikken er for høy, at det høres urealistisk ut, eller detaljer som at skritt må fjernes, at det er lyden av feil type dør, eller spørsmål om hva elefanten gjør der \u2026 Alt fra små til større ting. Når dette er i mål, sender regissøren reklamen videre til kunden, som hører på og kommer med sine tilbakemeldinger.\n\nProgramleder: Kunden tenker kanskje mye på målgruppa for reklamen. Hva kan de si om det?\n\nJS: Som regel går innspillene på det tekniske, for eksempel om lyden er litt høy eller lav, og om ordene kommer tydelig nok fram. Da må vi gå inn og se om det er noe med miksen, eller om skuespillernes diksjon rett og slett er for dårlig. \n\nProgramleder: Kundene har kanskje en idé om hvor lang eller kort en radioreklame skal være. De skal gjerne være litt korte \u2013 hvorfor det?\n\nJS: På radio kjøper man sendetid på lufta, og en lang radioreklame koster mer enn en kort en.\n\nProgramleder: Hva koster for eksempel 20 sekunder?\n\nJS: Det går i intervaller: 10, 15, 20 eller 25 sekunder. Hvis du har en radioreklame som er 23 sekunder lang, betaler du for 25 sekunder. Men hvis det er 23 sekunder som skal til for å gjøre reklamen god, så må man ikke bruke opp de siste to sekundene. Man lager den radioreklamen som gjør den jobben den skal. Det er litt vanskelig å forklare det for dem som styrer pengene. Man jobber jo ofte under begrensninger, som budsjett eller tid.\n\nProgramleder: Har du noen eksempler på skikkelig godt lyddesign? Da tenker jeg først og fremst på radioreklamer. Det kan godt være noe du har gjort selv, eller noe du har hørt.\n\nJS: Jeg har en personlig favoritt, som en kollega gjorde for Color Line Superspeed for mange år siden. Vi kan kanskje høre den?\n\n(Den nevnte radioreklamen spilles av.)\n\nJS: For det første forteller den en helt tydelig historie fra a til å \u2013 en historie om et sted som ikke finnes. Jeg må skape alle bildene i hodet basert på det jeg hører, men det blir så tydelig. Man står på en strand, man hører måker og forbinder det med sjø, og man hører hestene som løper. Og musikken hever det emosjonelle nivået og bidrar til at det er en stor scene vi er vitne til. Hestene kommer nærmere og nærmere, og så er det bare en mann. Dette skaper veldig gode bilder.\n\nProgramleder: Et rikt bilde?\n\nJS: Ja, rikt er et godt ord. Hestene begynner å løpe, og når de kommer seg under vann, skaper de en ny historie \u2013 det er altså en utvikling her. Alt dette skjer på omkring 35 sekunder. I radioreklame har man ganske dårlig tid på seg, men to sekunder kan samtidig fortelle veldig mye.\n\nProgramleder: Fantastisk. Har du noen gode tips til morgendagens lyddesignere?\n\nJS: Prøv! Det er mange som synes at lyd virker så vanskelig, man må liksom være musiker og spille et instrument for å holde på med lyd. Det er veldig mange eksperter der ute som mener masse om mikrofoner og forsterkere og gitarer og alt mulig, som man selv kanskje ikke skjønner noe av. Jeg kan heller ingenting om det. Jeg vet hva en gitar er, og om du spiller på den, kommer det gitarlyd ut. Er mikrofonen dyr, er den sikkert god. Er den veldig billig, er den kanskje litt dårlig. Men lyd er ikke farlig. Lyd er utrolig lett å holde på med fordi det er så tilgjengelig. Det ligger masse lyd på internett som er gratis. Man kan prøve seg ut og leke med det. Og nok en gang: Man trenger ikke å være musiker for å være lyddesigner!\n\nProgramleder: Jeg synes det er et fint sted å avslutte på. Joachim Sandvik, takk for at du kom i dag.\n\n\n\n",
    language: "nb",
  },
  created: "2021-06-25T08:55:31Z",
  updated: "2022-03-26T07:49:09Z",
  imageMeta: {
    id: "60913",
    inactive: false,
    metaUrl: "https://api.test.ndla.no/image-api/v3/images/60913",
    title: {
      title: "Podkastserie: Lytt deg gjennom mediefaget (samme på bm og nn)",
      language: "nb",
    },
    alttext: {
      alttext: 'Foto av smilende jente som kikker oppover mot teksten "Lytt deg gjennom mediefaget". ',
      language: "nb",
    },
    copyright: {
      license: {
        license: "CC-BY-SA-4.0",
        description: "Creative Commons Attribution-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
      origin: "",
      creators: [
        {
          type: "photographer",
          name: "Tom Knudsen",
        },
      ],
      processors: [
        {
          type: "processor",
          name: "Thomas Nupen",
        },
      ],
      rightsholders: [],
      processed: false,
    },
    tags: {
      tags: ["lytt gjennom mediefaget", "podcastserie", "podcast", "mediefaget", "medier", "podkastserie", "podkast"],
      language: "nb",
    },
    caption: {
      caption: " ",
      language: "nb",
    },
    supportedLanguages: ["nb", "nn"],
    created: "2021-12-15T13:32:03Z",
    createdBy: "lwkLpeEV_VUmCkly1SJ3WTkg",
    modelRelease: "yes",
    image: {
      variants: [],
      fileName: "NkEZw98N.jpg",
      size: 525903,
      contentType: "image/jpeg",
      imageUrl: "https://api.test.ndla.no/image-api/raw/NkEZw98N.jpg",
      dimensions: {
        width: 1405,
        height: 1405,
      },
      language: "nb",
    },
  },
};

const meta: Meta<typeof AudioEmbed> = {
  title: "Embeds/AudioEmbed",
  component: AudioEmbed,
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

export const AudioEmbedStory: StoryObj<typeof AudioEmbed> = {
  args: {
    embed: {
      resource: "audio",
      status: "success",
      embedData: embedData,
      data: successData,
    },
  },
};

export const AudioEmbedFailed: StoryObj<typeof AudioEmbed> = {
  args: {
    embed: {
      resource: "audio",
      status: "error",
      embedData: embedData,
    },
  },
};

export const Podcast: StoryObj<typeof AudioEmbed> = {
  args: {
    embed: {
      resource: "audio",
      status: "success",
      embedData: podcastEmbedData,
      data: podcastSuccessData,
    },
  },
};

export const PodcastFailed: StoryObj<typeof AudioEmbed> = {
  args: {
    embed: {
      resource: "audio",
      status: "error",
      embedData: podcastEmbedData,
    },
  },
};

AudioEmbedStory.storyName = "AudioEmbed";
