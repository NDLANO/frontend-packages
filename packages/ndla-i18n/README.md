# ndla-i18n

NDLA's own i18n package based on react-intl

## Installation

```sh
$ yarn add ndla-i18n
```

## Usage

```js
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

```js
// After initial instantiation
...
import { injectT } from 'ndla-i18n';

class i18nReactComponent extends Component {
  ...
  render() {
    const { t } = this.props;
    return (
      <button>{t('translationItem.buttonText')}</button>
    );
  }
}
...

export default injectT(i18nReactComponent);
```