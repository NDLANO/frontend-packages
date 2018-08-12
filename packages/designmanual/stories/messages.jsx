import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { storiesOf } from '@storybook/react';
import { Logo, PageContainer } from 'ndla-ui';
import { uuid } from 'ndla-util';
import { StoryBody } from './wrappers';
import { Center } from './helpers';
import { allMessages } from '../messages/index';

const classes = BEMHelper('c-table');

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  filterSearch(filterArray, lang) {
    const { searchText } = this.state;
    if (searchText === '') {
      return Object.keys(filterArray);
    }

    return Object.keys(filterArray).filter(
      t =>
        (filterArray[t].text[lang] &&
          filterArray[t].text[lang].search(new RegExp(searchText, 'i')) !==
            -1) ||
        filterArray[t].description.search(new RegExp(searchText, 'i')) !== -1 ||
        t.search(searchText, 'i') !== -1,
    );
  }

  render() {
    const { lang, description } = this.props;
    const { searchText } = this.state;
    return (
      <PageContainer>
        <div style={{ marginTop: '30px' }}>
          <Center>
            <center>
              <Logo label="Nasjonal digital læringsarena" />
              <h1>Tekster på {description}</h1>
            </center>
          </Center>
          <StoryBody>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Søk etter tekst eller label"
              value={this.state.searchString}
              onChange={this.onSearchChange}
            />
            {allMessages.map(messageElement => {
              const filteredSearch = this.filterSearch(
                messageElement.messages,
                this.props.lang,
              );
              return filteredSearch.length ? (
                <Fragment key={uuid()}>
                  <h3 className="u-heading">{messageElement.heading}</h3>
                  <table {...classes({ extra: ['o-table'] })}>
                    <thead>
                      <tr>
                        <th>Nøkkelord</th>
                        <th>Forklaring</th>
                        <th>Tekst</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSearch.map(key => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{messageElement.messages[key].description}</td>
                          <td>
                            {messageElement.messages[key].text[lang] ||
                              '[MANGLER]'}
                          </td>
                          <td>
                            {messageElement.messages[key].status[lang] || '?'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Fragment>
              ) : null;
            })}
          </StoryBody>
        </div>
      </PageContainer>
    );
  }
}

Messages.propTypes = {
  lang: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showApp: PropTypes.func,
};

storiesOf('Tekster og labels', module)
  .add('Bokmål', () => <Messages lang="nb" description="bokmål" />)
  .add('Nynorsk', () => <Messages lang="nn" description="nynorsk" />)
  .add('Engelsk', () => <Messages lang="en" description="engelsk" />);
