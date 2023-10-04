# ndla-ui

Main UI component library for NDLA

## Installation

```sh
yarn add --save @ndla/ui
```

```sh
npm i --save @ndla/ui
```

### Optional dependencies

The following dependencies are optional, but some components may depend on one or more of them.

```js
react-router
@ndla/article-converter
@ndla/button
@ndla/licenses
@ndla/icons
@ndla/tabs
@ndla/util
```

See: [package.json](package.json) for version requirements.

**N.B!** Optional dependencies are required if you use `import {...} from '@ndla/ui'`.

## Usage

### Styling

```scss
/* Your project's main .scss import file */
@import '~@ndla/ui/scss/main'; // with webpack and sass-loader
@import '../path/to/node_modules/ndla-ui/scss/main'; // direct reference
```

### Component Usage

```jsx
import { Breadcrumb, Hero, OneColumn, Article } from '@ndla/ui';

const MyPage = ({ topicPath, topic, article }) => {
  return (
    <div>
      <Hero>
        <OneColumn cssModifier="narrow">
          <div className="c-hero__content">
            <section>
              <Breadcrumb topicPath={topicPath} />
              <h1 className="c-hero__title">{topic.name}</h1>
            </section>
          </div>
        </OneColumn>
      </Hero>
      <div className="u-bg-lightblue">
        <OneColumn cssModifier="narrow">
          <Article article={article} />
        </OneColumn>
      </div>
    </div>
  );
};
```
