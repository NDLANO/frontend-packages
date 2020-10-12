# ndla-i18n

NDLA's own i18n package based on react-intl

## Installation

```sh
# Using npm:
$ npm install ndla-i18n --save

# Using yarn:
$ yarn add ndla-i18n
```

## Usage

```jsx
// In app/server entry index file:
import IntlProvider from '@ndla/i18n';
...
ReactDOM.render(
  ...
    <IntlProvider locale="NB" messages={messages}>
      ...
    </IntlProvider>
  ...
  document.getElementById('root'),
);
```

```jsx
// After initial instantiation, using it with a React component
...
import { injectT } from '@ndla/i18n';

class i18nReactComponent extends Component {
  ...
  render() {
    const { t } = this.props;
    return <button>{t('translationItem.buttonText')}</button>;
  }
}
...

export default injectT(i18nReactComponent);
```

```tsx
// After initial instantiation, using it with a React Functional Component and typescript
// It is important not to define t in the Props interface as then typescript will require to pass
// the t in the props, but rather import the type from @ndla/i18n package as shown in the example below.
...
import { injectT, tType } from '@ndla/i18n';

interface Props {
  prop1: number;
  prop2: string;
}

const i18nReactComponent: FC<Props & tType> = ({ t, prop1, prop2 }) => {
  ...
  render() {
    return <button>{t('translationItem.buttonText')}</button>;
  }
}
...

export default injectT(i18nReactComponent);
```

```jsx
// Using it with a render props component
...
import { Trans } from '@ndla/i18n';

class i18nReactComponent extends Component {
  ...
  render() {
    return(
      <Trans>
      {({ t }) => (<button>{t('translationItem.buttonText')}</button>)}
      </Trans>
    )
  }
}
...

export default i18nReactComponent;
```
