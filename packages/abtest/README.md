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
import { Context as StaticContext, Experiment, Variant } from '@ndla/abtest';


const cleanExperiments = [
  {
    id: '6bklbienTOuNQs9JwMrvog', // Experiment 1 ID
    variant: { // Use variant with index: 0
      index: 0,
      name: '',
    },
  },
  {
    id: 'gKKvagBlQ5SyhxWP4TqK0g', // Experiment 2 ID
    variant: { // Use variant with index: 2
      index: 2,
      name: '',
    },
  }
];

const experimentTrackerName = 'AB-demo';
const experimentId = 'gKKvagBlQ5SyhxWP4TqK0g';
const googleAccountIdInit = 'XXXX';

<StaticContext.Provider value={{
  googleAccountId: googleAccountIdInit,
  experiments: cleanExperiments,
}}>
  <App>
    <h1>Testing button title in app</h1>
    <StaticContext.Consumer>
      {({ googleAccountId, experiments }) => (
      <Experiment
        id={experimentId}
        googleAccountId={googleAccountId}
        experiments={experiments}
        trackerName={experimentTrackerName}
        onRenderVariant={(variantData) => {
          console.log('render details', variantData);
        }}
      >
        <Variant variantIndex={0} original>
          Test 1
        </Variant>
        <Variant variantIndex={1}>
          Test 2
        </Variant>
        <Variant variantIndex={2}>
          Test 3
        </Variant>
      </Experiment>
      )}
    </StaticContext.Consumer>
  </App>
</StaticContext.Provider>
```