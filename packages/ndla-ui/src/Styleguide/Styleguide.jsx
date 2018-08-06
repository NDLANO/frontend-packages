import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

import Tabs from 'ndla-tabs';
import { uuid } from 'ndla-util';
import { Button } from 'ndla-ui';

const statusMessages = {
  0: ['Eksperimentel, ikke trygg å bruke', 'alert'],
  1: ['Under utvikling, forvent endringer på komponent', 'alert'],
  2: ['Til testing', 'warn'],
  3: ['Klar for bruk', 'safe'],
};

const classes = BEMHelper('c-styleguide');

const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const Styleguide = ({ reactCode, messages, propTypes, status, children }) => {
  const tabContent = [
    {
      title: 'Kode eksempel',
      content: (
        <div>
          <Button
            outline
            onClick={() => {
              copyToClipboard(reactCode);
            }}
          >Copy code to clipboard</Button>
          <SyntaxHighlighter language='jsx' style={docco}>{reactCode}</SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: 'PropTypes',
      content: <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        {propTypes.map(prop => (
          <tr key={uuid()}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td className={prop.default === 'Required' ? 'required' : ''}>{prop.default}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </table>,
    }
  ];
  if (messages) {
    tabContent.push({
      title: 'Messages',
      content: <p>{messages}</p>,
    });
  }
  if (children) {
    tabContent.unshift({
      title: 'Eksempel',
      content: children,
    });
  }
  return (
    <div {...classes('')}>
      <p {...classes('status-label', statusMessages[status][1])}>{statusMessages[status][0]}</p>
      <Tabs tabs={tabContent} />
    </div>
  )
};

Styleguide.propTypes = {
  guidance: PropTypes.string,
  reactCode: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape()),
  status: PropTypes.oneOf([0, 1, 2, 3]),
  propTypes: PropTypes.arrayOf(PropTypes.shape()),
  children: PropTypes.node,
};

Styleguide.defaultProps = {
  guidance: 'Ikke lagt til enda',
  reactCode: `console.log('Nothing added yet..')`,
  messages: 'Nothing to see here..',
  status: 0,
  propTypes: [],
  children: null,
};

export default Styleguide;
