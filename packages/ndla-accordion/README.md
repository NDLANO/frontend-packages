# ndla-accordion

Accordion component

## Installation

```sh
$ yarn ndla-accordion
```

## Usage

### Simple example where panel is open on render.

```js
import Accordion, { AccordionWrapper, AccordionPanel, AccordionBar } from '@ndla/accordion';

<Accordion openIndexes={[0]} single>
  {({ openIndexes, handleItemClick }) => (
    <AccordionWrapper>
      {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
        <Fragment key={item}>
          <AccordionBar
            panelId={`panel-${index}`}
            ariaTitle={`Panel ${index + 1}`}
            onClick={() => handleItemClick(index)}
            isOpen={openIndexes.includes(index)}
          >
            Panel {index + 1}
          </AccordionBar>
          <AccordionPanel id={`panel-${index}`} isOpen={openIndexes.includes(index)}>
            <p>{item}</p>
          </AccordionPanel>
        </Fragment>
      ))}
    </AccordionWrapper>
  )}
</Accordion>;
```

### Simple example where panel is open on render. (with Accordions)

```js
<Accordions single>
  <AccordionSection id="panel-1" title="Panel 1" barChildren="Panel 1" startOpen>
    <p>Innhold 1</p>
  </AccordionSection>
  <AccordionSection id="panel-2" title="Panel 2" barChildren="Panel 2">
    <p>Innhold 2</p>
  </AccordionSection>
  <AccordionSection id="panel-3" title="Panel 3" barChildren="Panel 3">
    <p>Innhold 3</p>
  </AccordionSection>
</Accordions>
```
