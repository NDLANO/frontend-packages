import React from 'react';
import { ButtonV2 } from '@ndla/button';
import { Codeblock } from '@ndla/code';
import { Cross } from '@ndla/icons/action';
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
  background: #fff;
}`;

const jsCode = `const arr = ["This", "Little", "Piggy"];
const first = arr.shift();
console.log(first);`;

const edCloseButton = (
  <ButtonV2 variant="stripped">
    <Cross />
  </ButtonV2>
);

const CodeExample = () => (
  <ComponentInfo
    reactCode={`<Codeblock\n title="HTML EKSEMPEL"\n format="markup"\n code="<p>Hello world!</p>"\n showCopy="true"\n/>\n\nconst cssCode = \`${cssCode}\`;\n<Codeblock\n  code={cssCode}\n  format="css"\n  title="CSS EKSEMPEL"\n/>`}
    usesPropTypes={[
      {
        name: 'actionButton',
        type: 'Component',
        default: 'Optional',
        description: 'Button to show instead of fullscreen. Used in ed.',
      },
      {
        name: 'title',
        type: 'string',
        default: 'Optional',
        description: 'Optional code block title',
      },
      {
        name: 'format',
        type: 'string',
        default: 'Required',
        description: 'Code type',
      },
      {
        name: 'code',
        type: 'string',
        default: 'Required',
        description: 'Required code snippet',
      },
      {
        name: 'showCopy',
        type: 'boolean',
        default: 'false',
        description: 'Show copy code button',
      },
    ]}
    status={3}
    messages={[
      'react-syntax-highlighter implemented with Prism',
      'Language options: https://github.com/conorhastings/react-syntax-highlighter/blob/v11.0.2/AVAILABLE_LANGUAGES_PRISM.MD',
    ]}
  >
    <p>Kodekomponent for visning av kodesnutter</p>
    <Codeblock actionButton={edCloseButton} code={htmlCode} format="markup" title="HTML EKSEMPEL" showCopy={true} />
    <Codeblock code={cssCode} format="css" title="CSS EKSEMPEL" />
    <Codeblock code={jsCode} format="jsx" title="JS EKSEMPEL" />
    <Codeblock code="Pure text without highlighting and no title" format="text" />
  </ComponentInfo>
);

export default CodeExample;
