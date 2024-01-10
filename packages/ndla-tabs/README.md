# ndla-tabs

A simple tabs component.

## Installation

```sh
yarn add --save @ndla/tabs
```

```sh
npm install @ndla/tabs --save
```

## Usage

### Basic example

```js
import Tabs from "@ndla/tabs";
import BananaComponent from "banana";
import PickleComponent from "picke";

const Fruits = () => {
  const fruitTabs = [
    {
      title: "Apple",
      id: "apple",
      content: <p>An apple a day keeps the doctor away</p>,
    },
    {
      title: "Orange",
      id: "orange",
      content: () => <h1>Orange is the new black</h1>,
    },
    { title: "Banana", id: "banana", content: <BananaComponent /> },
    {
      title: "Pickle",
      id: "pickle",
      content: <PickleComponent />,
      disabled: true,
    }, // No vegetables allowed!
  ];
  return <Tabs tabs={fruitTabs} />;
};
```

### Example where selected tab is controlled via `selectedIndex` prop

```js
import Tabs from "@ndla/tabs";
import fruitTabs from "fruit-tabs";

const FruitTabSelector = () => {
  const [value, setValue] = useState(undefined);
  return (
    <div>
      <button onClick={() => setValue("banana")}>Show banana tab</button>
      <Tabs value={value} tabs={fruitTabs} />
    </div>
  );
};
```
