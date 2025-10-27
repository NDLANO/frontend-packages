/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { PageContent } from "@ndla/primitives";
import type { RelatedContentMetaData } from "@ndla/types-embed";
import { RelatedContentEmbed } from "./RelatedContentEmbed";
import { ArticleWrapper, ArticleContent } from "../Article/Article";
import { RelatedArticleList } from "../RelatedArticleList/RelatedArticleList";

const filmResourceMeta: RelatedContentMetaData = {
  resource: "related-content",
  embedData: {
    resource: "related-content",
    articleId: "27911",
  },
  status: "success",
  data: {
    article: {
      id: 27911,
      revision: 40,
      title: {
        htmlTitle: "Dokumentaren «Influenser»",
        title: "Dokumentaren «Influenser»",
        language: "nb",
      },
      content: {
        content: "<section></section>",
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
            type: "writer",
            name: "Elisabeth Thoresen Olseng",
          },
        ],
        processors: [
          {
            type: "processor",
            name: "Tone Hadler-Olsen",
          },
          {
            type: "correction",
            name: "Totaltekst",
          },
        ],
        rightsholders: [],
        processed: false,
      },
      tags: {
        tags: [
          "influenser",
          "influensermarkedsføring",
          "påvirker",
          "markedskommunikasjon",
          "p for påvirkning",
          "NRK",
          "påvirkning",
          "NRK Innafor",
          "markedsføring",
        ],
        language: "nb",
      },
      requiredLibraries: [],
      metaImage: {
        url: "https://api.test.ndla.no/image-api/raw/id/52938",
        alt: "Influenseren Sophie Elise Isachsen holder en blomsterbukett og et diplom og snakker i mikrofon på prisutdeling. Foto.",
        language: "nb",
      },
      introduction: {
        htmlIntroduction:
          "I dokumentaren «Influenser» undersøker NRK-programleder Vilde Bratland Erikstad hvordan influenserbransjen jobber for å påvirke deg. ",
        introduction:
          "I dokumentaren «Influenser» undersøker NRK-programleder Vilde Bratland Erikstad hvordan influenserbransjen jobber for å påvirke deg. ",
        language: "nb",
      },
      metaDescription: {
        metaDescription:
          "I dokumentaren «Influenser» undersøker NRK-programleder Vilde Bratland Erikstad hvordan influenserbransjen jobber for å påvirke deg. ",
        language: "nb",
      },
      created: "2021-01-12T13:33:00.000Z",
      updated: "2023-03-20T14:12:41.000Z",
      updatedBy: "hd5ZL5Lm4kKkumWgN2gjy9wx",
      published: "2021-01-12T13:33:00.000Z",
      articleType: "standard",
      supportedLanguages: ["nb", "nn"],
      grepCodes: ["KE183", "KM2055", "KM3961", "KM6170", "TT1"],
      conceptIds: [],
      availability: "everyone",
      relatedContent: [],
      revisionDate: "2030-01-01T00:00:00.000Z",
    },
    resource: {
      id: "urn:resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
      baseName: "Dokumentaren «Influenser»",
      name: "Dokumentaren «Influenser»",
      language: "nb",
      contextids: [],
      contentUri: "urn:article:27911",
      path: "/subject:187c1484-84a5-474d-bf63-0c7915809a7d/topic:d792acc0-d332-48cf-9116-0db520e34f19/topic:3510fff0-fe20-4742-8e25-09262df2ac45/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
      paths: [
        "/programme:97a5a3b0-8b9f-4d05-9248-f4ad526f8ff4/programme:1b826174-01d3-4876-81be-8839727da935/programme:53720e3b-b55b-44cd-9e0e-b075ffe0d294/subject:1:ca607ca1-4dd0-4bbd-954f-67461f4b96fc/topic:1:ca8b0ee8-5863-4779-ac49-754f6eb503e0/topic:05843502-0597-4f6e-a03b-c4795cb88285/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/programme:97a5a3b0-8b9f-4d05-9248-f4ad526f8ff4/programme:1b826174-01d3-4876-81be-8839727da935/programme:995c6c41-bc5e-405a-af01-0ad9233ed3a4/subject:d1fe9d0a-a54d-49db-a4c2-fd5463a7c9e7/topic:3cdf9349-4593-498c-a899-9310133a4788/topic:7e6a20d3-ceb5-46e3-ad28-1412c9a5745c/topic:abc3bafb-c27d-401a-8eab-84dc3ff8ac1e/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/programme:ce0c331b-4386-4942-aef2-4f77d3844fa5/programme:8021f0e8-9928-4820-b466-ee5303ce5cd6/programme:8275f90b-f910-4b20-9e79-0f3b37317b98/subject:1:576cc40f-cc74-4418-9721-9b15ffd29cff/topic:2:537598a2-4857-40e0-b0bc-9a937e954374/topic:576b9c22-196d-4c1e-bdb5-e3c0b2354a06/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/programme:e4d0dac7-773a-4317-9c3c-45f336d184db/programme:27c7d90c-0277-4ad8-addf-b2445a74bb63/programme:df1c5883-09c5-4479-b717-6ed75658d32f/subject:d1fe9d0a-a54d-49db-a4c2-fd5463a7c9e7/topic:3cdf9349-4593-498c-a899-9310133a4788/topic:7e6a20d3-ceb5-46e3-ad28-1412c9a5745c/topic:abc3bafb-c27d-401a-8eab-84dc3ff8ac1e/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/subject:187c1484-84a5-474d-bf63-0c7915809a7d/topic:d792acc0-d332-48cf-9116-0db520e34f19/topic:3510fff0-fe20-4742-8e25-09262df2ac45/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/subject:1:47678c7b-bc09-4fc8-b2d9-a2e3d709e105/topic:1:aa643598-5490-42c9-8ce5-62a94b42bfe0/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/subject:1:4aef7156-a5ae-4476-8e81-6d2a4842143a/topic:3c7d1536-e1c9-4cf1-8ef4-bcf9aa251113/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/subject:1:576cc40f-cc74-4418-9721-9b15ffd29cff/topic:2:537598a2-4857-40e0-b0bc-9a937e954374/topic:576b9c22-196d-4c1e-bdb5-e3c0b2354a06/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/subject:1:ca607ca1-4dd0-4bbd-954f-67461f4b96fc/topic:1:ca8b0ee8-5863-4779-ac49-754f6eb503e0/topic:05843502-0597-4f6e-a03b-c4795cb88285/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/subject:1:fa2a7d6a-5e8e-4976-82c0-9a1266684c1c/topic:62462e51-087c-42bf-b04f-8ebc36e5dff0/topic:1d3994d2-20bd-44e2-8f4c-6e716cdbfa6f/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/subject:c0ce0b31-33f6-4f6f-bbe0-caa878f7ab9b/topic:4e9ae220-ab46-489c-b664-0f64abef0a26/topic:da5e6cf2-e720-414d-b7fa-4d66e41d6505/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
        "/subject:d1fe9d0a-a54d-49db-a4c2-fd5463a7c9e7/topic:3cdf9349-4593-498c-a899-9310133a4788/topic:7e6a20d3-ceb5-46e3-ad28-1412c9a5745c/topic:abc3bafb-c27d-401a-8eab-84dc3ff8ac1e/resource:e21cb6a7-0072-4066-894b-d5f6bb4f7ead",
      ],
      metadata: {
        grepCodes: [],
        visible: true,
        customFields: {},
      },
      relevanceId: "urn:relevance:core",
      translations: [
        {
          name: "Dokumentaren «Influenser»",
          language: "nb",
        },
        {
          name: "Dokumentaren «Influenser»",
          language: "nn",
        },
      ],
      supportedLanguages: ["nb", "nn"],
      breadcrumbs: ["Kroppsøving (vg3)", "Helse", "Kropp", "Dokumentaren «Influenser»"],
      resourceTypes: [
        {
          id: "urn:resourcetype:filmClip",
          parentId: "urn:resourcetype:SourceMaterial",
          name: "Filmklipp",
          translations: [
            {
              name: "Film Clip",
              language: "en",
            },
            {
              name: "Filmklipp",
              language: "nb",
            },
            {
              name: "Filmklipp",
              language: "nn",
            },
            {
              name: "Filbmaoasáš",
              language: "se",
            },
          ],
          supportedLanguages: ["en", "nb", "nn", "se"],
          connectionId: "urn:resource-resourcetype:481968dc-7465-4aae-98ed-daae10cea860",
        },
        {
          id: "urn:resourcetype:SourceMaterial",
          name: "Kildemateriell",
          translations: [
            {
              name: "External resources",
              language: "en",
            },
            {
              name: "Kildemateriell",
              language: "nb",
            },
            {
              name: "Kjeldemateriale",
              language: "nn",
            },
            {
              name: "Gáldomateriála",
              language: "se",
            },
          ],
          supportedLanguages: ["en", "nb", "nn", "se"],
          connectionId: "urn:resource-resourcetype:8c174c72-7d52-4bf6-b534-d8863282a166",
        },
      ],
      nodeType: "RESOURCE",
      contextId: "85a67bcdf620",
      url: "/dokumentaren-«influenser»__85a67bcdf620",
      contexts: [],
    },
  },
};

const learningResourceMeta: RelatedContentMetaData = {
  resource: "related-content",
  embedData: {
    resource: "related-content",
    articleId: "22972",
  },
  status: "success",
  data: {
    article: {
      id: 22972,
      revision: 16,
      title: {
        htmlTitle: "Teknikker for idéutvikling",
        title: "Teknikker for idéutvikling",
        language: "nb",
      },
      content: {
        content:
          '<section><ndlaembed data-size="medium" data-align="right" data-caption="" data-alt="Gutt som skriver ned ideer. Illustrasjon." data-resource_id="42645" data-resource="image" data-url="https://api.test.ndla.no/image-api/v2/images/42645"></ndlaembed><h2> Lær deg en teknikk</h2><p>Det fins utallige teknikker for idéutvikling. Her skal du bli kjent med to av dem. Noen kan brukes individuelt. Andre egner seg best i samarbeid mellom flere.  Ofte vil det være nyttig og nødvendig å kombinere ulike teknikker.</p><p>Det er ikke uvanlig at en person blir bedt om å være leder, eller los, for idéutviklingsprosessen. Han eller hun passer på tiden, sørger for at stemningen er god, og at idéutviklingen blir dokumentert.  Trygge, avslappede og lekne rammer for prosessen gjør at flere tør å komme med sine ideer.</p><h3>Idémyldring etter ABC-metoden</h3><ndlaembed data-size="medium" data-align="right" data-caption="ABC-metoden" data-alt="Ark med linjer for hver bokstav i alfabetet. Illustrasjon" data-resource_id="505" data-resource="image" data-url="https://api.test.ndla.no/image-api/v2/images/505"></ndlaembed><ol><li>Skriv tema eller et spørsmålstegn øverst på en side. </li><li>Skriv alfabetet på linjer nedover siden. </li><li>Sett på en klokke som ringer etter et visst antall minutter. </li><li>Skriv ord som du kommer på, eller et spørsmål ved siden av hver bokstav i alfabetet. </li><li>Prosesslosen kan komme med forslag om for eksempel å fokusere på verb de første fem minuttene, substantiv de neste fem minuttene, og til slutt adjektiv. </li><li>Plukk ut eller få noen til å plukke ut et utvalg ord som du jobber videre med.</li></ol><h2>Idémyldring ved hjelp av tankekart</h2><ndlaembed data-size="medium" data-align="right" data-caption="Eksempel på tankekart. Det finnes mange dataprogrammer som hjelper deg å lage tankekart." data-alt="Tegning som viser flere bobler med ord om et tema. Illustrasjon." data-resource_id="504" data-resource="image" data-url="https://api.test.ndla.no/image-api/v2/images/504"></ndlaembed><p>Tankekart er en visuell utbretting av ord som har en sammenheng.   Når tankekart blir brukt til idémyldring, er poenget å bruke en assosiasjonsteknikk. Det vil si at du prøver å tenke deg hvilke assosiasjoner du eller andre får til drikkevann, som er det temaet som er brukt i dette eksempelet. Assosiasjoner betyr noe du personlig forbinder med et ord, eller noe du har lyst til skal ha sammenheng med ordet.</p><p>I idémyldring er alt lov, slipp hjernen fri, og skriv det du kommer på. Det er lurt å huske på at når du forflytter deg ut et nivå, må du prøve å glemme alt det andre du har gjort. Drikkevann er ikke lenger med i assosiasjonene til iskaldt, for eksempel.   Det kan være lurt å ha noen grener som strekker seg helt til fjerde nivå. Det er ofte langt ute i rekkene av bobler du finner ord som gir en interessant tvist, altså blir en god idé.</p><ol><li>Skriv hovedtema i en boble i midten. </li><li>Skriv assosiasjoner ut fra den. </li><li>Rykk videre til neste nivå. Start med ny assosiasjonsrunde og glem det du allerede har skrevet. Altså skriver du bare assosiasjoner til det ordet du jobber med. </li><li>Prøv å komme deg ut i minst fjerde nivå på enkelte boblegrener. </li><li>Når du er ferdig eller tiden er ute, se over tankekartet og plukk ut ord du liker, som du ser en ny sammenheng mellom. Du kan lukke øynene og prøve å fange de tre ordene du husker best, eller du kan også myse mens du ser på kartet og se om noen ord trer fram. </li><li>Søk eventuelt videre på nett og i bilder på nett for å utdype ordvalgene dine. </li><li>Ta alltid vare på tankekartene dine. Hvis du senere strander med en idé, kan du gå tilbake til tankekartet, jobbe videre med det eller finne en ny idé.</li></ol><div data-type="related-content"><ndlaembed data-resource="related-content" data-article-id="20378"></ndlaembed></div></section>',
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
            type: "writer",
            name: "Albertine Aaberge",
          },
        ],
        processors: [],
        rightsholders: [],
        processed: false,
      },
      tags: {
        tags: ["idé", "idédugnad", "idéutvikling"],
        language: "nb",
      },
      requiredLibraries: [],
      metaImage: {
        url: "https://api.test.ndla.no/image-api/raw/id/23909",
        alt: "Jente som tenker. Illustrasjon.",
        language: "nb",
      },
      introduction: {
        htmlIntroduction: "Idéutvikling handler om å skape ideer, utvikle dem og løse problemer.",
        introduction: "Idéutvikling handler om å skape ideer, utvikle dem og løse problemer.",
        language: "nb",
      },
      metaDescription: {
        metaDescription:
          "Det fins mange teknikker for idéutvikling. Her er to av dem. Teknikkene kan brukes individuelt eller i samarbeid.",
        language: "nb",
      },
      created: "2020-03-25T10:21:31.000Z",
      updated: "2023-02-13T12:57:57.000Z",
      updatedBy: "LGsHWSsXKh520VNcOueMraSB",
      published: "2020-03-25T10:21:31.000Z",
      articleType: "standard",
      supportedLanguages: ["nb", "nn"],
      grepCodes: ["KM6126"],
      conceptIds: [],
      availability: "everyone",
      relatedContent: [],
      revisionDate: "2030-01-01T00:00:00.000Z",
    },
    resource: {
      id: "urn:resource:5d81f622-1fc5-49c8-943d-690e23450e09",
      contextids: [],
      baseName: "Teknikker for idéutvikling",
      language: "nb",
      name: "Teknikker for idéutvikling",
      contentUri: "urn:article:22972",
      path: "/subject:1:54b1727c-2d91-4512-901c-8434e13339b4/topic:1:126f94e7-7b54-44b2-be7d-3edc1ca3d21e/resource:5d81f622-1fc5-49c8-943d-690e23450e09",
      paths: [
        "/programme:97a5a3b0-8b9f-4d05-9248-f4ad526f8ff4/programme:1b826174-01d3-4876-81be-8839727da935/programme:995c6c41-bc5e-405a-af01-0ad9233ed3a4/subject:1:54b1727c-2d91-4512-901c-8434e13339b4/topic:1:126f94e7-7b54-44b2-be7d-3edc1ca3d21e/resource:5d81f622-1fc5-49c8-943d-690e23450e09",
        "/programme:e4d0dac7-773a-4317-9c3c-45f336d184db/programme:27c7d90c-0277-4ad8-addf-b2445a74bb63/programme:df1c5883-09c5-4479-b717-6ed75658d32f/subject:1:54b1727c-2d91-4512-901c-8434e13339b4/topic:1:126f94e7-7b54-44b2-be7d-3edc1ca3d21e/resource:5d81f622-1fc5-49c8-943d-690e23450e09",
        "/subject:1:54b1727c-2d91-4512-901c-8434e13339b4/topic:1:126f94e7-7b54-44b2-be7d-3edc1ca3d21e/resource:5d81f622-1fc5-49c8-943d-690e23450e09",
        "/subject:c0ce0b31-33f6-4f6f-bbe0-caa878f7ab9b/topic:fb2399da-1285-4228-9cd5-8d1ef968f6a2/topic:eac425e9-79e4-49c8-84a3-653fcbc0eb62/resource:5d81f622-1fc5-49c8-943d-690e23450e09",
      ],
      metadata: {
        grepCodes: [],
        visible: true,
        customFields: {},
      },
      relevanceId: "urn:relevance:core",
      translations: [
        {
          name: "Teknikker for idéutvikling",
          language: "nb",
        },
        {
          name: "Teknikkar for idéutvikling",
          language: "nn",
        },
      ],
      supportedLanguages: ["nb", "nn"],
      breadcrumbs: ["Verktøykassa – for elever", "Idéutvikling og kreative metoder", "Teknikker for idéutvikling"],
      resourceTypes: [
        {
          id: "urn:resourcetype:subjectMaterial",
          name: "Fagstoff",
          translations: [
            {
              name: "Subject Material",
              language: "en",
            },
            {
              name: "Fagstoff",
              language: "nb",
            },
            {
              name: "Fagstoff",
              language: "nn",
            },
            {
              name: "Fágaávnnas",
              language: "se",
            },
          ],
          supportedLanguages: ["en", "nb", "nn", "se"],
          connectionId: "urn:resource-resourcetype:0eb9cea7-0561-4a4d-b649-a5c9754ce5ce",
        },
        {
          id: "urn:resourcetype:academicArticle",
          parentId: "urn:resourcetype:subjectMaterial",
          name: "Fagartikkel",
          translations: [
            {
              name: "Article",
              language: "en",
            },
            {
              name: "Fagartikkel",
              language: "nb",
            },
            {
              name: "Fagartikkel",
              language: "nn",
            },
            {
              name: "Fágaartihkal",
              language: "se",
            },
          ],
          supportedLanguages: ["en", "nb", "nn", "se"],
          connectionId: "urn:resource-resourcetype:25af8fa2-7f7f-450f-8f67-b4324bdb4c57",
        },
      ],
      nodeType: "RESOURCE",
      contextId: "68ad235d673f",
      url: "/teknikker-for-idéutvikling__68ad235d673f",
      contexts: [],
    },
  },
};

const meta: Meta<typeof RelatedContentEmbed> = {
  title: "Embeds/RelatedContentEmbed",
  component: RelatedContentEmbed,
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

const linkEmbed1: RelatedContentMetaData = {
  resource: "related-content",
  embedData: {
    resource: "related-content",
    title: "Test",
    url: "https://example.com",
    urlDomain: "example.com",
  },
  data: undefined,
  status: "success",
};

const linkEmbed2: RelatedContentMetaData = {
  resource: "related-content",
  embedData: {
    resource: "related-content",
    title: "NDLA",
    url: "https://ndla.no",
    urlDomain: "ndla.no",
  },
  data: undefined,
  status: "success",
};

const linkEmbed3: RelatedContentMetaData = {
  resource: "related-content",
  embedData: {
    resource: "related-content",
    title: "Valg av tillitselev fra klassen",
    url: "https://xn--elevrd-mua.no",
    urlDomain: "elevråd.no",
  },
  data: undefined,
  status: "success",
};

export const RelatedContentStory: StoryObj<typeof RelatedContentEmbed> = {
  render: () => (
    <RelatedArticleList>
      <RelatedContentEmbed embed={learningResourceMeta} />
      <RelatedContentEmbed embed={learningResourceMeta} />
    </RelatedArticleList>
  ),
};

export const HideAllAboveTwo: StoryObj<typeof RelatedContentEmbed> = {
  render: () => (
    <RelatedArticleList>
      <RelatedContentEmbed embed={learningResourceMeta} />
      <RelatedContentEmbed embed={filmResourceMeta} />
      <RelatedContentEmbed embed={learningResourceMeta} />
      <RelatedContentEmbed embed={filmResourceMeta} />
    </RelatedArticleList>
  ),
};

export const WithLinks: StoryObj<typeof RelatedContentEmbed> = {
  render: () => (
    <RelatedArticleList>
      <RelatedContentEmbed embed={linkEmbed1} />
      <RelatedContentEmbed embed={linkEmbed2} />
      <RelatedContentEmbed embed={linkEmbed3} />
    </RelatedArticleList>
  ),
};

export const Mixed: StoryObj<typeof RelatedContentEmbed> = {
  render: () => (
    <RelatedArticleList>
      <RelatedContentEmbed embed={linkEmbed1} />
      <RelatedContentEmbed embed={learningResourceMeta} />
      <RelatedContentEmbed embed={filmResourceMeta} />
      <RelatedContentEmbed embed={linkEmbed2} />
    </RelatedArticleList>
  ),
};

RelatedContentStory.storyName = "RelatedContentEmbed";
