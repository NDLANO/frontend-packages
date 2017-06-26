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
import IntlProvider from 'ndla-i18n';
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
import { injectT } from 'ndla-i18n';

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
