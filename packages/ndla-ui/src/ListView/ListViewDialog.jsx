import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Tabs from 'ndla-tabs';
import { getLicenseByAbbreviation } from 'ndla-licenses';

import { createUniversalPortal } from '../utils/createUniversalPortal';

const classes = BEMHelper('c-listview-dialog');

const ConceptContent = ({ item }) =>
<div>
  <div {...classes('image')}>
    <img src={item.image} alt={item.description} />
  </div>
  <p {...classes('description')}>{item.description}</p>
  <div {...classes('meta')}>
    <span {...classes('category-label')}>Brukes i:</span>
    <span {...classes('category')}>{item.category.title}</span>
  </div>
</div>

ConceptContent.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    category: PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
    })
  })
}
class ListViewDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.goToNextItem = this.goToNextItem.bind(this);
    this.goToPreviousItem = this.goToPreviousItem.bind(this);
  }

  handleClick() {
    if (this.props.closeCallback) this.props.closeCallback();
  }

  goToNextItem() {
    this.props.setItemCallback(this.props.nextItem, this.props.index + 1);
  }

  goToPreviousItem() {
    this.props.setItemCallback(this.props.previousItem, this.props.index - 1);
  }

  render() {
    const { item } = this.props;
    const license = getLicenseByAbbreviation('by-nc-nd', 'nb');
    return (
      <div>
        {createUniversalPortal(
          <div {...classes('')}>
            <div {...classes('topbar')}>
              <h1 {...classes('name')}>{item.name} <span {...classes('subject')}>{item.subject.title}</span></h1>
              <button {...classes('close')} onClickCapture={this.handleClick}>
                <span {...classes('close-label')}>Lukk</span>
              </button>
            </div>
            <Tabs
              selectedIndex={0}
              tabs={[
                {
                  title: 'Begrep',
                  content: <ConceptContent item={item} />,
                },
                {
                  title: 'Ordliste',
                  content: <p>Ordliste</p>,
                }
              ]} />

            <div {...classes('footer')}>
              <license />
            </div>
          </div>,
          'body',
        )}
      </div>
    );
  }
}

ListViewDialog.propTypes = {
  item: PropTypes.shape({}),
  closeCallback: PropTypes.func,
  nextItem: PropTypes.shape(),
  previousItem: PropTypes.shape(),
  nextNavigation: PropTypes.func,
  setItemCallback: PropTypes.func,
  index: PropTypes.number,
};

export default ListViewDialog;
