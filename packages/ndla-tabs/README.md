# ndla-tabs

A simple tabs component. Mainly a wrapper for [react-tabs](https://github.com/reactjs/react-tabs).

## Installation

```sh
$ npm install ndla-tabs --save
```

## Usage
```js
import Tabs from 'ndla-tabs';
import BananaComponent from 'banana';

const Fruits = () => {
  const fruitTabs = [
    { key: 0, displayName: 'Apple', content: <p>An apple a day keeps the doctor away</p> },
    { key: 1, displayName: 'Orange', content: () => <h1>Orange is the new black</h1> },
    { key: 2, displayName: 'Banana', content: <BananaComponent/> },
  ]
  return (
    <Tabs tabs={fruitTabs} />
  )
}
```
