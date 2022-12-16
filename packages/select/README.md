# select

Select components.

## Installation

```sh
yarn add @ndla/select
```

```sh
npm i --save @ndla/select
```

## Usage

### Select with custom control component

```js
import { SelectComponent, ControlPropsType } from '@ndla/select';

const CustomControl = ({ ...props }: ControlPropsType<false>) => {
  return (
    <div {...props.innerProps} ref={props.innerRef}>
      {props.children}
    </div>
  );
};

<SelectComponent options={[{ value: 'blå', label: 'blå' }]} placeholder="Farger" ControlComponent={CustomControl} />;
```
