# ndla-code

Editor and preview for ndla code block

## Installation

```sh
$ yarn add ndla-code
```

## Usage

codeblock:

```js
import { Codeblock } from '@ndla/code';

<Codeblock code={code} format={format} title={title} />;
```

editor:

```js
import { CodeBlockEditor } from '@ndla/code';

model = {{
  code: "string",
  title: "Text",
  format: "text",
}}

<CodeBlockEditor
  content={model}
  onSave={handleSaveFunction}
  onAbort={handleExitFunction}
/>
```
