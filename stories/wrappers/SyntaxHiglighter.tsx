import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import ReactSyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

ReactSyntaxHighlighter.registerLanguage('jsx', jsx);

interface Props {
  code: string;
}

const SyntaxHighlighter = ({ code }: Props) => {
  return (
    <ReactSyntaxHighlighter language="jsx" style={prism}>
      {code}
    </ReactSyntaxHighlighter>
  );
};

export default SyntaxHighlighter;