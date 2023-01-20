# ndla-article-scripts

A collection of functions for making article content responsive (and interactive)

## Installation

```sh
npm install @ndla/article-scripts
```

or

```sh
yarn add @ndla/article-scripts
```

## Usage

### Plain javascript (embed scripts).

```javascript
import { addEventListenerForResize, updateIFrameDimensions, addFactBoxClickListener } from '@ndla/article-scripts';

window.onload = () => {
  // Invoke after article content has loaded
  updateIFrameDimensions();
  addEventListenerForResize();
  addFactBoxClickListener();
};
```

### React

```javascript
import {
  addEventListenerForResize,
  updateIFrameDimensions,
  addFactBoxClickListener,
  removeEventListenerForResize,
  removeFactBoxClickListener,
} from '@ndla/article-scripts';

class Article extends Component {
  componentDidMount() {
    addEventListenerForResize();
    updateIFrameDimensions();
    addFactBoxClickListener();
  }

  componentWillUnmount() {
    removeEventListenerForResize();
    removeFactBoxClickListener();
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

### `articleScripts.initArticleScripts()`

Initialize all default article scripts.

### `articleScripts.updateIFrameDimensions()`

Update iframe height and width to fit screen/window size.

### `articleScripts.addEventListenerForResize()`

Adds an resize event listener on window. The listener calls `updateIFrameDimensions` on browser window resize.

### `articleScripts.removeEventListenerForResize()`

Removes the event listener added by `addEventListenerForResize`.

### `articleScripts.addFactBoxClickListener()`

Adds an click listener on fact box buttons for expanding the content on small screens.

### `articleScripts.removeFactBoxClickListener()`

Removes click listeners added by `addFactBoxClickListener`.

### `articleScripts.addShowDialogClickListeners()`

Adds click listeners for displaying license info popup.

### `articleScripts.addCloseDialogClickListeners()`

Adds click listeners for closing license info popups.

### `articleScripts.addCopyToClipboardListeners()`

Add a click listener to buttons with a `data-copy-string`. The value of the attribute will be copied to the clipboard on click.

### `articleScripts.makeFigureLicenseIconsClickable()`

Adds click listeneres for displaying license text popup on license icon click

### `articleScripts.addEventListenersForZoom()`

Adds click listners for zooming image/figure

### 'articleScripts.removeEventListenersForZoom()'

Removes click listeners added by `addEventListenersForZoom`.
