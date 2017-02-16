# ndla-article-scripts

A collection of functions for making article content responsive (and interactive)

## Installation

```sh
$ npm install ndla-article-scripts
```

## Usage

### Plain javascript (embed scripts)

```javascript
import {
  addEventListenerForResize,
  updateIFrameDimensions,
  addAsideClickListener,
} from 'ndla-article-scripts';

window.onload = () => { // Invoke after content has loaded
  updateIFrameDimensions();
  addEventListenerForResize();
  addAsideClickListener();
};

```

### React

```javascript
import {
  addEventListenerForResize,
  updateIFrameDimensions,
  addAsideClickListener,
  removeEventListenerForResize,
  removeAsideClickListener,
} from 'ndla-article-scripts';

class Article extends Component {

  componentDidMount() {
    addEventListenerForResize();
    updateIFrameDimensions();
    addAsideClickListener();
  }

  componentWillUnmount() {
    removeEventListenerForResize();
    removeAsideClickListener();
  }

  render() {
    const { article } = this.props;
    return (
      <article>
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    );
  }
}
export default Article;
```


## API(functions)

### `articleScripts.updateIFrameDimensions()`

Update iframe height and width to fit screen/window size.

### `articleScripts.addEventListenerForResize()`

Adds an resize event listener on window. The listener calls `updateIFrameDimensions` on browser window resize.

### `articleScripts.removeEventListenerForResize()`

Removes the event listener added by `addEventListenerForResize`.

### `articleScripts.addAsideClickListener()`

Adds an click listener on aside buttons for expanding the content on small screens.

### `articleScripts.removeAsideClickListener()`

Removes click listeners added by `removeAsideClickListener`.
