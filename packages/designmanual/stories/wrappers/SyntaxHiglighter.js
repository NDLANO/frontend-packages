import React from 'react';
import PropTypes from 'prop-types';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import ReactSyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import prism from 'react-syntax-highlighter/dist/styles/prism/prism';

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
