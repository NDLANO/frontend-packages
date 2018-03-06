import React, { Component } from 'react';

import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { FilterList } from 'ndla-ui';
import ListViewDialog from './ListViewDialog';
import ListItem from './ListItem';

const classes = BEMHelper('c-listview');

const items = [
  {
    name: 'Bajonettsag',
    description: 'Bajonettsag brukes med ulike typer blad.',
    image: 'https://www.clasohlson.com/medias/sys_master/9058803056670.jpg',
    id: '1',
    subject: {
      title: 'El-Håndverkøy',
      value: 'elhandverktoy',
    },
    category: {
      title: 'Murerfaget',
      value: 'murerfaget',
    },
  },
  {
    name: 'Armeringskutter',
    description: 'Dette er utstyr som brukes til å kutte armeringsjern.',
    image:
      'https://ndla.no/sites/default/files/images/side44-armeringskutter-bc-16.jpg',
    id: '2',
    subject: {
      title: 'El-Håndverkøy',
      value: 'elhandverktoy',
    },
    category: {
      title: 'Betongfaget',
      value: 'betongfaget',
    },
  },
  {
    name: 'Bajonettsag',
    description: 'Bajonettsag brukes med ulike typer blad',
    image: 'https://www.clasohlson.com/medias/sys_master/9058803056670.jpg',
    id: '3',
    subject: {
      title: 'El-Håndverkøy',
      value: 'elhandverktoy',
    },
    category: {
      title: 'Murerfaget',
      value: 'murerfaget',
    },
  },
  {
    name: 'Batteridrill',
    description: 'Denne brukes både til boring og skruing',
    image:
      'http://byggebolig.no/imageoriginals/3f4e8adf19e44126a8b05c7bc5435724.jpg?maxwidth=900',
    id: '4',
    subject: {
      title: 'El-Håndverkøy',
      value: 'elhandverktoy',
    },
    category: {
      title: 'Betongfaget',
      value: 'betongfaget',
    },
  },
];

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = { detailedItem: null, nextItem: null, index: null };
    this.setDetailedItem = this.setDetailedItem.bind(this);
  }

  setDetailedItem(item, index) {
    const nextItem = items[index + 1] ? items[index + 1] : null;
    const previousItem = items[index - 1] ? items[index - 1] : null;
    const stateObj = { detailedItem: item, nextItem, previousItem, index };
    this.setState(stateObj);
  }

  render() {
    const listItems = items.map((item, index) => (
      <ListItem
        item={item}
        key={item.id}
        clickCallback={this.setDetailedItem}
        itemIndex={index}
      />
    ));
    return (
      <div {...classes()}>
        <h1>Listevisning</h1>
        <FilterList
          modifiers="listview"
          options={[
            { title: 'El-håndverkøy', value: 'elhandverktoy' },
            { title: 'Håndverkøy', value: 'handverktoy' },
            { title: 'Maskiner', value: 'maskiner' },
            { title: 'Måleverkøy', value: 'maleverktoy' },
          ]}
          values={[]}
          label="Fag"
        />
        <FilterList
          modifiers="listview"
          options={[
            { title: 'Betongfaget', value: 'betongfaget' },
            { title: 'Innredningsfaget', value: 'innredningsfaget' },
            { title: 'Murerfaget', value: 'murerfaget' },
            { title: 'Trelastfaget', value: 'trelastfaget' },
            { title: 'Tømrerfaget', value: 'tomrerfaget' },
          ]}
          values={[]}
          label="Kategori"
        />
        <div {...classes('content')}>{listItems}</div>
        {this.state.detailedItem ? (
          <ListViewDialog
            item={this.state.detailedItem}
            index={this.state.index}
            nextItem={this.state.nextItem}
            previousItem={this.state.previousItem}
            closeCallback={() => this.setState({ detailedItem: null })}
            setItemCallback={this.setDetailedItem}
          />
        ) : null}
      </div>
    );
  }
}

ListView.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subjects: PropTypes.array,
    categories: PropTypes.array,
  }).isRequired,
};

export default ListView;
