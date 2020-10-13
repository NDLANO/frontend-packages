import React from 'react';
import PropTypes from 'prop-types';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import ReactSyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
// import prism from 'react-syntax-highlighter/dist/styles/prism/prism';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

ReactSyntaxHighlighter.registerLanguage('jsx', jsx);

const SyntaxHighlighter = ({ code }) => {
  return (
    <ReactSyntaxHighlighter language="jsx" style={prism}>
      {code}
    </ReactSyntaxHighlighter>
  );
};

SyntaxHighlighter.propTypes = {
  code: PropTypes.string.isRequired,
};

export default SyntaxHighlighter;
