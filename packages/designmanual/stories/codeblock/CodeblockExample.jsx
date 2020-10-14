import React from 'react';
import Button from '@ndla/button';
import { Codeblock } from '@ndla/code';
import { ArrowExpand } from '@ndla/icons/editor';
import ComponentInfo from '../ComponentInfo';

const htmlCode = `<div class="demo-content">
  <h2>Lorem ipsum</h2>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
</div>`;

const cssCode = `body {
  padding: 20px;
  margin: 10px;
  background: #ccc;
}`;

const jsCode = `const arr = ["This", "Little", "Piggy"];
const first = arr.shift();
console.log(first);`;

const fullscreenButton = (
  <Button stripped>
    <ArrowExpand />
  </Button>
);

const CodeExample = () => (
  <ComponentInfo
    reactCode={`<Code\n  title="HTML EKSEMPEL"\n  format="markup"\n  code="<p>Hello world!</p>"\n/>\n\nconst cssCode = \`${cssCode}\`;\n<Code\n  code={cssCode}\n  format="css"\n  title="CSS EKSEMPEL"\n/>`}
    usesPropTypes={[
      {
        name: 'title',
        type: 'string',
        default: 'Optional',
        description: 'Optional code block title',
      },
      {
        name: 'format',
        type: 'string',
        default: 'markup',
        description: 'Code type, defaults to markup',
      },
      {
        name: 'code',
        type: 'string',
        default: 'Required',
        description: 'Required code snippet',
      },
    ]}
    status={2}
    messages={[
      'react-syntax-highlighter implemented with Prism',
      'Language options: https://github.com/conorhastings/react-syntax-highlighter/blob/v11.0.2/AVAILABLE_LANGUAGES_PRISM.MD',
    ]}>
    <p>Kodekomponent for visning av kodesnutter</p>
    <Codeblock
      actionButton={fullscreenButton}
      code={htmlCode}
      format="markup"
      title="HTML EKSEMPEL"
      showCopyButton={true}
    />
    <Codeblock code={cssCode} format="css" title="CSS EKSEMPEL" />
    <Codeblock code={jsCode} format="jsx" title="JS EKSEMPEL" />
    <Codeblock
      code="Pure text without highlighting and no title"
      format="text"
    />
  </ComponentInfo>
);

export default CodeExample;
