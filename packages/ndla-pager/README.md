# ndla-tabs

A simple tabs component. Mainly a wrapper for [react-tabs](https://github.com/reactjs/react-tabs).

## Installation

```sh
$ yarn add --save ndla-pager
```

```sh
$ npm install ndla-pager --save
```

## Usage

### Styling

```scss
/* Your project's main .scss import file */
@import '~ndla-pager/scss/pager'; // with webpack and sass-loader
@import '../path/to/node_modules/ndla-pager/scss/pager'; // direct reference
```

### Basic example

```js
<Pager page={2} lastPage={4} query={{ term: 'Medier' }} pathname="#" />
```

### Example with custom component

```js
<Pager
  page={1}
  lastPage={3}
  query={{ term: 'Medier' }}
  pageItemComponentClass="button"
  pathname="#"
/>
```
