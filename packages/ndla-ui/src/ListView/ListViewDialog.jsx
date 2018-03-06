import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Cross } from 'ndla-icons/action';
import { createUniversalPortal } from '../utils/createUniversalPortal';

const classes = BEMHelper('c-listview-dialog');

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
    const { item, nextItem, previousItem } = this.props;
    return (
      <div>
        {createUniversalPortal(
          <div {...classes('')}>
            <div {...classes('topbar')}>
              <button {...classes('close')} onClickCapture={this.handleClick}>
                <span {...classes('close-label')}>Lukk</span> <Cross />
              </button>
            </div>
            <div {...classes('image')}>
              <img src={item.image} alt={item.description} />
            </div>
            <h1 {...classes('name')}>{item.name}</h1>
            <div {...classes('meta')}>
              <span {...classes('subject')}>{item.subject.title}</span>
              <span {...classes('category')}>{item.category.title}</span>
            </div>
            <p {...classes('description')}>{item.description}</p>
            <div {...classes('footer')}>
              <div {...classes('navitem')}>
                {previousItem ? (
                  <button
                    {...classes('navbutton', 'previous')}
                    onClick={this.goToPreviousItem}>
                    {previousItem.name}
                  </button>
                ) : null}
              </div>
              <div {...classes('navitem')}>
                {nextItem ? (
                  <button
                    {...classes('navbutton', 'next')}
                    onClick={this.goToNextItem}>
                    {nextItem.name}
                  </button>
                ) : null}
              </div>
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
