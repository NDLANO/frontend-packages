import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

import Tabs from 'ndla-tabs';
import { uuid, copyTextToClipboard } from 'ndla-util';
import { Button } from 'ndla-ui';
import { Copy } from 'ndla-icons/action';

const statusMessages = {
  0: ['Eksperimentel, ikke trygg å bruke', 'alert'],
  1: ['Under utvikling, forvent endringer på komponent', 'alert'],
  2: ['Til testing', 'warn'],
  3: ['Klar for bruk', 'safe'],
};

const classes = BEMHelper('c-componentinfo');

class ComponentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coping: false,
    };
    this.timeKeeper = null;
    this.resetTimeout = this.resetTimeout.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timeKeeper);
  }

  resetTimeout() {
    this.setState({
      coping: false,
    });
  }

  render() {
    const { reactCode, messages, status, usesPropTypes, children } = this.props;
    const tabContent = [
      {
        title: 'Kode eksempel',
        content: (
          <Fragment>
            <Button
              onClick={() => {
                copyTextToClipboard(reactCode);
                this.setState(
                  {
                    coping: true,
                  },
                  () => {
                    this.timeKeeper = window.setTimeout(
                      this.resetTimeout,
                      5000,
                    );
                  },
                );
              }}
              outline
              title="Kopier til clipboard">
              <Fragment>
                <Copy />{' '}
                {this.state.coping ? 'Kode kopiert!' : 'Kopier til clipboard'}
              </Fragment>
            </Button>
            <SyntaxHighlighter language="jsx" style={docco}>
              {reactCode}
            </SyntaxHighlighter>
          </Fragment>
        ),
      },
      {
        title: 'PropTypes',
        content: (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {usesPropTypes.map(prop => (
                <tr key={uuid()}>
                  <td>{prop.name}</td>
                  <td>{prop.type}</td>
                  <td className={prop.default === 'Required' ? 'required' : ''}>
                    {prop.default}
                  </td>
                  <td>{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ),
      },
    ];
    if (messages) {
      tabContent.push({
        title: 'Annet',
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
        <p {...classes('status-label', statusMessages[status][1])}>
          Status: {statusMessages[status][0]}
        </p>
        <Tabs tabs={tabContent} />
      </div>
    );
  }
}

ComponentInfo.propTypes = {
  reactCode: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape()),
  status: PropTypes.oneOf([0, 1, 2, 3]),
  usesPropTypes: PropTypes.arrayOf(PropTypes.shape()),
  children: PropTypes.node,
};

ComponentInfo.defaultProps = {
  reactCode: `console.log('Nothing added yet..')`,
  messages: null,
  status: 0,
  usesPropTypes: [],
  children: null,
};

export default ComponentInfo;
