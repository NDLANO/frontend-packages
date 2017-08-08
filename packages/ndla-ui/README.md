# ndla-ui

UI component library for NDLA.

## Installation

```sh
$ yarn add --save ndla-ui
```

```sh
$ npm i --save ndla-ui
```

### Optional dependencies

The following dependencies are optional, but some components may be dependent on one or more of them.

```
react-collapse
react-height
react-motion
react-router
ndla-article-scripts
ndla-licenses
ndla-tabs
ndla-util
```

See: [package.json](package.json) for version requirements

**N.B!** All optional dependencies are required if you use `import {...} from 'ndla-ui'`


## Usage

### Simplified example
```jsx
import { Hero, OneColumn, TopicArticle, TopicBreadcrumb } from 'ndla-ui';

const MyPage = ({topicPath, topic, article}) => {
  return (
    <div>
      <Hero>
        <OneColumn cssModifier="narrow">
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb topicPath={topicPath} />
              <h1 className="c-hero__title">{topic.name}</h1>
            </section>
          </div>
        </OneColumn>
      </Hero>
      <div className="u-bg-lightblue">
        <OneColumn cssModifier="narrow">
          <TopicArticle article={article} />
        </OneColumn>
      </div>
    </div>
  )
}
```

### Only import specific components
```jsx
import  Hero from 'ndla-ui/es/hero/Hero';

const MyPage = () => {
  return (
    <Hero>
      <MyAwesomeComponent />
    </Hero>
  )
}
```
