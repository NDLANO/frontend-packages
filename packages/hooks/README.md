# Hooks

Collection of React hooks used by NDLA

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [useComponentSize](#useComponentSize)
  - [useWindowSize](#useWindowSize)

## Installation

```sh
$ yarn @ndla/hooks
```

## Usage

### useComponentSize

```js
import { useRef } from "react";
import useComponentSize from "@ndla/component-size";

function MyComponent() {
  let ref = useRef(null);
  let size = useComponentSize(ref);
  // size == { width: 100, height: 200 }
  let { width, height } = size;
  let imgUrl = `https://via.placeholder.com/${width}x${height}`;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img ref={ref} src={imgUrl} />
    </div>
  );
}
```

### useWindowSize

```js
import useWindowSize from "@ndla/window-size";

function MyComponent() {
  let windowSize = useWindowSize(100); // Optional throttle wait time (in ms)
  // {
  //   innerWidth: window.innerWidth,
  //   innerHeight: window.innerHeight,
  //   outerWidth: window.outerWidth,
  //   outerHeight: window.outerHeight,
  // }
  return (
    <div>
      {windowSize.innerWidth < 768 ? (
        <p>This document is less than 768px wide.</p>
      ) : (
        <p>The document is at least 768px wide.</p>
      )}
    </div>
  );
}
```
