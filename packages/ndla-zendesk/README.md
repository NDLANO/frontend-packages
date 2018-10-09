# ndla-accordion

Zendesk button (and loading) for NDLA

## Installation

```sh
$ yarn ndla-accordion
```

## Usage

### Simple example where Tab is open on render and logic is handled by component.

```js
import Accordion from 'ndla-accordion';

<Accordion
  panels={[
    {
      title: 'Panel 1',
      children: <div>Panel content 1</div>,
      open: true,
    },
    {
      title: 'Panel 2',
      children: <div>Panel content 2</div>,
    },
  ]}
/>;
```
