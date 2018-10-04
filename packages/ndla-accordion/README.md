# ndla-accordion

Accordion component

## Installation

```sh
$ yarn add ndla-accordion
```

## Usage

### Simple example where Tab is open on render and logic is handled by component.

```js
import Accordion from 'ndla-accordion';

<Accordion
  tabs={[
    {
      title: 'Tab 1',
      children: <div>Tab content 1</div>,
      open: true,
    },
    {
      title: 'Tab 2',
      children: <div>Tab content 2</div>,
    },
  ]}
/>;
```
