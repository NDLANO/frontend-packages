# ndla-code

Editor and preview for ndla code block

## Installation

```sh
$ yarn add ndla-code
```

## Usage

codeblock:

```js
import { Codeblock } from "@ndla/code";

<Codeblock code={code} format={format} title={title} />;
```

editor:
The user is responsible for loading prism syntaxes, the code editor does not do it for you.
The `highlight` function is expecting a properly tokenized Prism string as its return value.

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
