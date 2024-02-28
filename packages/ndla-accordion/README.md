# ndla-accordion

Accordion component

## Installation

```sh
$ yarn ndla-accordion
```

## Usage

### Simple example where panel is open on render

```js
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionContent } from "@ndla/accordion";

return (
  <AccordionRoot defaultValue="1" type="single" collapsible={true}>
    <AccordionItem value="1">
      <AccordionHeader>Accordion 1</AccordionHeader>
      <AccordionContent>
        <div>Accordion content 1</div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionHeader>Accordion 2</AccordionHeader>
      <AccordionContent>
        <div>Accordion content 2</div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
);
```
