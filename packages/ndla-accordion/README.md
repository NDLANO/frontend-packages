# ndla-accordion

Accordion component

## Installation

```sh
$ yarn ndla-accordion
```

## Usage

### Simple example where panel is open on render.

```js
import Accordion, {
  AccordionWrapper,
  AccordionPanel,
  AccordionBar,
} from 'ndla-accordion';

<Accordion openIndexes={[0]} single>
  {({ openIndexes, handleItemClick }) => (
    <AccordionWrapper>
      {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
        <React.Fragment key={item}>
          <AccordionBar
            panelId={`panel-${index}`}
            ariaTitle={`Panel ${index + 1}`}
            onClick={() => handleItemClick(index)}
            isOpen={openIndexes.includes(index)}>
            Panel {index + 1}
          </AccordionBar>
          <AccordionPanel
            id={`panel-${index}`}
            isOpen={openIndexes.includes(index)}>
            <p>{item}</p>
          </AccordionPanel>
        </React.Fragment>
      ))}
    </AccordionWrapper>
  )}
</Accordion>;
```
