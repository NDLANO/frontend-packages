import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-listview');

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick() {
    if (this.props.clickCallback)
      this.props.clickCallback(this.props.item, this.props.itemIndex);
  }

  handleKeyUp() {
    this.props.clickCallback(this.props.item, this.props.itemIndex);
  }

  render() {
    const { item } = this.props;
    return (
      <div
        {...classes('item')}
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex={0}>
        <div {...classes('item-image')}>
          {item.image ? <img src={item.image} alt={item.description} /> : null}
          <span {...classes('item-category')}>{item.category.title}</span>
        </div>
        <span {...classes('item-subject')}>{item.subject.title}</span>
        <h3 {...classes('item-name')}>{item.name}</h3>
        <p {...classes('item-description')}>{item.description}</p>
      </div>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.shape(),
  clickCallback: PropTypes.func,
  nextItem: PropTypes.shape(),
  previousItem: PropTypes.shape(),
  itemIndex: PropTypes.number,
};

export default ListItem;
