/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import { Image, makeSrcQueryString } from "../Image";

test("Image renderers correctly", () => {
  const { container } = render(<Image alt="example" src="https://example.com/image.png" />, { container: undefined });

  expect(container.firstChild).toMatchInlineSnapshot(`
    <picture>
      <source
        sizes="(min-width: 1024px) 1024px, 100vw"
        srcset="https://example.com/image.png?width=2720 2720w, https://example.com/image.png?width=2080 2080w, https://example.com/image.png?width=1760 1760w, https://example.com/image.png?width=1440 1440w, https://example.com/image.png?width=1120 1120w, https://example.com/image.png?width=1000 1000w, https://example.com/image.png?width=960 960w, https://example.com/image.png?width=800 800w, https://example.com/image.png?width=640 640w, https://example.com/image.png?width=480 480w, https://example.com/image.png?width=320 320w, https://example.com/image.png?width=240 240w, https://example.com/image.png?width=180 180w"
      />
      <img
        alt="example"
        class=""
        src="https://example.com/image.png?width=1024"
      />
    </picture>
  `);
});

test("Lazyloaded image renderers correctly", () => {
  const { container } = render(<Image loading="lazy" alt="example" src="https://example.com/image.png" />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <picture>
      <source
        sizes="(min-width: 1024px) 1024px, 100vw"
        srcset="https://example.com/image.png?width=2720 2720w, https://example.com/image.png?width=2080 2080w, https://example.com/image.png?width=1760 1760w, https://example.com/image.png?width=1440 1440w, https://example.com/image.png?width=1120 1120w, https://example.com/image.png?width=1000 1000w, https://example.com/image.png?width=960 960w, https://example.com/image.png?width=800 800w, https://example.com/image.png?width=640 640w, https://example.com/image.png?width=480 480w, https://example.com/image.png?width=320 320w, https://example.com/image.png?width=240 240w, https://example.com/image.png?width=180 180w"
      />
      <img
        alt="example"
        class=""
        loading="lazy"
        src="https://example.com/image.png?width=1024"
      />
    </picture>
  `);
});

test("Image with crop and focalpoint props renderers correctly", () => {
  const { container } = render(
    <Image
      crop={{
        startX: 14.59,
        endX: 79.63,
        startY: 20,
        endY: 100,
      }}
      focalPoint={{
        x: 65.08,
        y: 45.28,
      }}
      alt="example"
      src="https://example.com/image.png"
    />,
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <picture>
      <source
        sizes="(min-width: 1024px) 1024px, 100vw"
        srcset="https://example.com/image.png?width=2720&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 2720w, https://example.com/image.png?width=2080&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 2080w, https://example.com/image.png?width=1760&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 1760w, https://example.com/image.png?width=1440&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 1440w, https://example.com/image.png?width=1120&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 1120w, https://example.com/image.png?width=1000&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 1000w, https://example.com/image.png?width=960&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 960w, https://example.com/image.png?width=800&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 800w, https://example.com/image.png?width=640&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 640w, https://example.com/image.png?width=480&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 480w, https://example.com/image.png?width=320&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 320w, https://example.com/image.png?width=240&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 240w, https://example.com/image.png?width=180&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28 180w"
      />
      <img
        alt="example"
        class=""
        src="https://example.com/image.png?width=1024&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28"
      />
    </picture>
  `);
});

test("makeSrcQueryString renders correctly", () => {
  const crop = {
    startX: 14.59,
    endX: 79.63,
    startY: 20,
    endY: 100,
  };
  const focalPoint = {
    x: 65.08,
    y: 45.28,
  };
  expect(makeSrcQueryString({ width: undefined })).toMatch("");
  expect(makeSrcQueryString({ width: 1024 })).toMatch("width=1024");
  expect(makeSrcQueryString({ width: undefined, crop })).toMatch(
    "cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100",
  );
  expect(makeSrcQueryString({ width: undefined, focalPoint })).toMatch("focalX=65.08&focalY=45.28");
  expect(makeSrcQueryString({ width: 1024, crop, focalPoint })).toMatch(
    "width=1024&cropStartX=14.59&cropEndX=79.63&cropStartY=20&cropEndY=100&focalX=65.08&focalY=45.28",
  );
});
