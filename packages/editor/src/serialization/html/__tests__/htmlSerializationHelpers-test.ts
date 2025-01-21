/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// import { TYPE_NDLA_EMBED } from "../../components/SlateEditor/plugins/embed/types";
// import { blockContentToEditorValue } from "../articleContentConverter";
import {
  // parseEmbedTag,
  // isUserProvidedEmbedDataValid,
  createDataAttributes,
  createHtmlTag,
  parseElementAttributes,
  stringifyAttributes,
} from "../htmlSerializationHelpers";

// These are not ported yet

// test("parseEmbedTag parses image embed tag to object", () => {
//   const obj = parseEmbedTag(
//     `<ndlaembed
//       data-size="full"
//       data-align=""
//       data-resource="image"
//       data-alt="Guinness sign"
//       data-caption="Guinness is good for you" data-resource_id="42159"
//       data-resource_id="0"
//       data-url="https://api.ndla.no/image-api/v3/images/42159"></ndlaembed>`,
//   );
//   expect(obj).toMatchSnapshot();
// });
//
// test("parseEmbedTag parses brightcove embed tag to object", () => {
//   const obj = parseEmbedTag(
//     `<ndlaembed
//       data-account="4806596774001"
//       data-caption="Intervju med Hallvard"
//       data-player="BkLm8fT"
//       data-resource="brightcove"
//       data-videoid="ref:106952"
//       data-id="0"></ndlaembed>`,
//   );
//   expect(obj).toMatchSnapshot();
// });
//
// test("parseEmbedTag parses h5p embed tag to object", () => {
//   const obj = parseEmbedTag(
//     `<ndlaembed
//       data-resource="h5p"
//       data-url="https://h5p-test.ndla.no/resource/3ab6850d-cd30-4f11-aead-8be65f66f566/oembed"
//       data-id="0"></ndlaembed>`,
//   );
//   expect(obj).toMatchSnapshot();
// });
//
// test("parseEmbedTag parses related-content embed tag to object", () => {
//   const obj = parseEmbedTag(
//     `<ndlaembed
//       data-article-id="363"
//       data-resource="related-content"
//      ></ndlaembed>`,
//   );
//   expect(obj).toMatchSnapshot();
// });

test("createDataAttributes handles resourceId correctly", () => {
  const data = createDataAttributes({
    resourceId: "42159",
  });
  expect(data).toEqual({ "data-resource_id": "42159" });
});

test("createDataAttributes correctly translates camelCased keys to kebab-case", () => {
  const data = createDataAttributes({
    imageSize: "full",
  });
  expect(data).toEqual({ "data-image-size": "full" });
});

test("createHtmlTag creates image embed tag from object", () => {
  const data = createDataAttributes({
    align: "",
    alt: "Guinness sign",
    caption: "Guinness is good for you",
    resource: "image",
    resource_id: "42159",
    size: "full",
    url: "https://api.ndla.no/image-api/v3/images/42159",
  });
  const tag = createHtmlTag({ tag: "ndlaembed", data, bailOnEmpty: true });
  expect(tag).toMatchSnapshot();
});

test("createHtmlTag creates image embed tag from object", () => {
  const data = createDataAttributes({
    align: "",
    alt: "Guinness sign",
    caption: "Guinness is good for you",
    resource: "image",
    resource_id: "42159",
    size: "full",
    url: "https://api.ndla.no/image-api/v3/images/42159",
  });
  expect(createHtmlTag({ tag: "ndlaembed", data, bailOnEmpty: true })).toEqual(
    `<ndlaembed data-align="" data-alt="Guinness sign" data-caption="Guinness is good for you" data-resource="image" data-resource_id="42159" data-size="full" data-url="https://api.ndla.no/image-api/v3/images/42159"></ndlaembed>`,
  );
});

test("createHtmlTag creates h5p embed tag from object", () => {
  const tag = createHtmlTag({
    tag: "ndlaembed",
    data: createDataAttributes({
      resource: "h5p",
      url: "https://h5p-test.ndla.no/resource/3ab6850d/oembed",
    }),
    bailOnEmpty: true,
  });

  expect(tag).toMatchSnapshot();
});

test("createDataAttributes filters out non-supported values", () => {
  const data = createDataAttributes({
    str: "string",
    //@ts-expect-error - we do not support boolean values
    bool: false,
    //@ts-expect-error - we do not support numbers
    value: 1,
    test: undefined,
    //@ts-expect-error - we do not support null
    nothing: null,
    //@ts-expect-error - we do not support objects
    metaData: { key: "value" },
  });

  expect(data).toEqual({ "data-str": "string" });
});

test("createHtmlTag creates h5p embed tag from object", () => {
  const data = createDataAttributes({
    resource: "h5p",
    url: "https://h5p-test.ndla.no/resource/3ab6850d/oembed",
  });

  const tag = createHtmlTag({ tag: "ndlaembed", data, bailOnEmpty: true });
  expect(tag).toMatchSnapshot();
});

test("createHtmlTag filters out null and undefined values, but not false values", () => {
  const data = createDataAttributes({
    resource: "unknown",
    caption: undefined,
    player: undefined,
    autoPlay: "false",
    videoid: "123",
  });

  const tag = createHtmlTag({ tag: "ndlaembed", data, bailOnEmpty: true });

  expect(tag).toMatchSnapshot();
});

test("createHtmlTag creates brightcove embed tag from object", () => {
  const data = createDataAttributes({
    account: "4806596774001",
    caption: "Intervju med Hallvard",
    player: "BkLm8fT",
    resource: "brightcove",
    videoid: "ref:106952",
  });

  expect(createHtmlTag({ tag: "ndlaembed", data, bailOnEmpty: true })).toMatchSnapshot();
});

test("createHtmlTag converts camel-case to kebab-case", () => {
  const data = createDataAttributes({
    resource: "audio",
    resourceId: "123",
    type: "standard",
    url: "https://api.test.ndla.no/audio-api/v1/audio/3000",
  });

  const tag = createHtmlTag({ tag: "ndlaembed", data, bailOnEmpty: true });
  expect(tag).toMatchSnapshot();
});

test("createHtmlTag creates brightcove embed tag from object", () => {
  const data = createDataAttributes({
    account: "4806596774001",
    caption: "Intervju med Hallvard",
    player: "BkLm8fT",
    resource: "brightcove",
    videoid: "ref:106952",
  });
  const tag = createHtmlTag({ tag: "ndlaembed", data, bailOnEmpty: true });

  expect(tag).toEqual(
    '<ndlaembed data-account="4806596774001" data-caption="Intervju med Hallvard" data-player="BkLm8fT" data-resource="brightcove" data-videoid="ref:106952"></ndlaembed>',
  );
});

test("createHtmlTag returns an empty string if the object contains no keys", () => {
  expect(createHtmlTag({ tag: "ndlaembed", data: {}, bailOnEmpty: true })).toBe("");
});

// not ported over yet
// test("isUserProvidedEmbedDataValid for image", () => {
//   expect(
//     isUserProvidedEmbedDataValid({
//       resource: "image",
//       resourceId: "123",
//       alt: "Alternative",
//       caption: "Intervju med Hallvard",
//     }),
//   ).toBe(true);
//
//   expect(
//     isUserProvidedEmbedDataValid({
//       resource: "image",
//       resourceId: "123",
//       alt: "",
//       caption: "Intervju med Hallvard",
//     }),
//   ).toBe(false);
//
//   expect(
//     isUserProvidedEmbedDataValid({
//       resource: "image",
//       resourceId: "123",
//       alt: "Alt",
//     }),
//   ).toBe(true);
// });

// not ported over yet

// test("deserializing related-content works", () => {
//   const deserialized = blockContentToEditorValue(
//     '<div data-type="related-content"><ndlaembed data-url="http://www.vg.no" data-resource="related-content" data-title="Forsiden vg"></ndlaembed><ndlaembed data-resource="related-content" data-article-id="54"></ndlaembed></div>',
//   );
//
//   expect(deserialized).toMatchSnapshot();
// });

test("parseElementAttributes removes styled attribute", () => {
  const attributes = [{ name: "style", value: "{display: flex;}" }];
  const res = parseElementAttributes(attributes);
  expect(Object.keys(res).length).toBe(0);
});

test("parseElementAttributes correctly parses data attributes", () => {
  const attributes = [
    { name: "style", value: "{display: flex;}" },
    { name: "data-align", value: "center" },
    { name: "data-image-id", value: "123" },
  ];
  const expected = { imageId: "123", align: "center" };
  const res = parseElementAttributes(attributes);
  expect(res).toEqual(expected);
});

test("parseElementAttributes leaves weird parameters alone", () => {
  const attributes = [
    { name: "style", value: "{display: flex;}" },
    { name: "aria-label", value: "Test" },
    { name: "data-imageid", value: "1234" },
    { name: "data-resource_id", value: "123" },
  ];
  const expected = { imageid: "1234", resourceId: "123", "aria-label": "Test" };
  const res = parseElementAttributes(attributes);
  expect(res).toEqual(expected);
});

test("parseElementAttributes only returns filter values", () => {
  const attributes = [
    { name: "style", value: "{display: flex;}" },
    { name: "src", value: "https://ndla.no" },
    { name: "data-image-id", value: "123" },
  ];
  const expected = { src: "https://ndla.no", imageId: "123" };
  const res = parseElementAttributes(attributes, ["src", "data-image-id"]);
  expect(res).toEqual(expected);
});

test("stringifyAttributes returns an empty string if no attributes are provided", () => {
  expect(stringifyAttributes({})).toBe("");
  expect(stringifyAttributes()).toBe("");
  expect(stringifyAttributes({ src: null })).toBe("");
  expect(stringifyAttributes({ src: undefined })).toBe("");
});

test("stringifyAttributes returns a single attribute correctly", () => {
  const data = stringifyAttributes({ "data-test": "test" });
  expect(data).toEqual(' data-test="test"');
});

test("stringifyAttributes translates between react-style and html-style attributes", () => {
  const data = stringifyAttributes({
    className: "test",
    rowSpan: "2",
    maxLength: "10",
    htmlFor: "test",
  });

  expect(data).toEqual(' class="test" rowspan="2" maxlength="10" for="test"');
});
