# ndla-tabs

A simple tabs component. Mainly a wrapper for [react-tabs](https://github.com/reactjs/react-tabs)

## Installation

```sh
yarn add --save @ndla/tabs
```

```sh
npm install @ndla/tabs --save
```

## Usage

### Styling

```scss
/* Your project's main .scss import file */
@import '~ndla-tabs/scss/tabs'; // with webpack and sass-loader
@import '../path/to/node_modules/ndla-tabs/scss/tabs'; // direct reference
```

### Basic example

```js
import Tabs from '@ndla/tabs';
import BananaComponent from 'banana';
import PickleComponent from 'picke';

const Fruits = () => {
  const fruitTabs = [
    { title: 'Apple', content: <p>An apple a day keeps the doctor away</p> },
    { title: 'Orange', content: () => <h1>Orange is the new black</h1> },
    { title: 'Banana', content: <BananaComponent /> },
    { title: 'Pickle', content: <PickleComponent />, disabled: true }, // No vegetables allowed!
  ];
  return <Tabs tabs={fruitTabs} />;
};
```

### Example where selected tab is controlled via `selectedIndex` prop

```js
import Tabs from '@ndla/tabs';
import fruitTabs from 'fruit-tabs';

class FruitTabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    const { index } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ index: 1 })}>Show banana tab</button>
        <Tabs selectedIndex={index} tabs={fruitTabs} />
      </div>
    );
  }
}
```

## PropTypes

| Props               |  Type  | Required | Description                                                                                                                                    |
| ------------------- | :----: | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| tabs                | array  |    \*    | An array of tabs represented as objects. An tab object requires the following properties: `title`, `content`. Property `disabled` is optional. |
| onSelect            |  func  |          | Is called when a tab is selected. Current index and last index will be passed as parameters.                                                   |
| selectedIndex       | object |          | Is the tab to select when rendered. Used when you want to control which tab is rendered from the a parent component.                           |
| forceRenderTabPanel |  bool  |          | Is `false` by default. Set to `true` to render all tab's content instead of only selected tab content.                                         |
| modifier            | string |          | An BEM modifier which is added to all html classes.                                                                                            |

### Server side rendering

resetIdCounter should be called on server before render to prevent server and client markup diff. Example:

```js
  import { resetIdCounter } from '@ndla/tabs';
  resetIdCounter();
  ReactDOMServer.renderToString(...);
```
