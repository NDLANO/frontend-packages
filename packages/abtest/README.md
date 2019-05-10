# ndla-abtest

WIP

## Installation

```sh
$ yarn add --save ndla-abtest
```

```sh
$ npm i --save ndla-abtest
```

## Usage

```js
import { ExperimentsContext, Experiment, Variant } from '@ndla/abtest';

// clean experiments returned from Experiments service
const cleanExperiments = [
  {
    id: '6bklbienTOuNQs9JwMrvog', // Experiment 1 ID
    variant: {
      // Use variant with index: 0
      index: 0,
      name: '',
    },
  },
  {
    id: 'gKKvagBlQ5SyhxWP4TqK0g', // Experiment 2 ID
    variant: {
      // Use variant with index: 2
      index: 2,
      name: '',
    },
  },
];

const experimentId = 'gKKvagBlQ5SyhxWP4TqK0g';

<ExperimentsContext.Provider
  value={{
    experiments: cleanExperiments,
  }}>
  <App>
    <h1>Testing button title in app</h1>
    <ExperimentsContext.Consumer>
      {({ experiments }) => (
        <Experiment
          id={experimentId}
          experiments={experiments}
          onVariantMount={variantData => {
            console.log('render details', variantData);
          }}>
          <Variant variantIndex={0} original>
            Test 1
          </Variant>
          <Variant variantIndex={1}>Test 2</Variant>
          <Variant variantIndex={2}>Test 3</Variant>
        </Experiment>
      )}
    </ExperimentsContext.Consumer>
  </App>
</ExperimentsContext.Provider>;
```
