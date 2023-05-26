# ndla-pager

A pager component

## Installation

```sh
yarn add @ndla/pager
```

```sh
npm install @ndla/pager
```

## Usage

### Styling

Uses [Emotion](https://emotion.sh/). [See](https://emotion.sh/docs/ssr) for ssr.

### Basic example

```js
<Pager page={2} lastPage={4} query={{ term: 'Medier' }} pathname="#" />
```

### Example with custom component

```js
<Pager page={1} lastPage={3} query={{ term: 'Medier' }} pageItemComponentClass="button" pathname="#" />
```
