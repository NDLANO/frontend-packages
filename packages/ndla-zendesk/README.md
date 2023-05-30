# Zendesk

Exports a Zendesk button which should ideally be placed in the [`packages/ndla-ui/src/Footer/Footer.jsx`](Footer) component. The component also ensures that required zendesk script(s) are loaded asynchronously

## Installation

```sh
$ yarn @ndla/zendesk
```

## Usage

### Simple example with required props

```js
import Zendesk from '@ndla/zendesk';

<Footer>
  <ZendeskButton locale="nb" widgetKey="a393e616-39d91">
    Spør NDLA
  </ZendeskButton>
</Footer>;
```
