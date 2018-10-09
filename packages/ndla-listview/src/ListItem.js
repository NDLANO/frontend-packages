import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';

import { spacing, fonts, colors, misc } from 'ndla-core';

const ListItemWrapper = styled.div`
  padding: ${spacing.small};
  animation: fadeIn 150ms ease;

  &:hover {
    cursor: pointer;
  }
  .item-image {
    background: #fff;
    position: relative;
    border-bottom: 1px solid $brand-color--light;
    height: 125px;
    overflow: hidden;
    text-align: center;

    img {
      height: 90%;
      width: auto;
    }
  }
  .item-category {
    position: absolute;
    bottom: ${spacing.xsmall};
    left: ${spacing.xsmall};
    display: inline-block;
    background: ${colors.brand.greyLightest};
    border-radius: ${misc.borderRadius};
    padding: 0 ${spacing.xsmall} 0 ${spacing.xsmall};
    text-transform: capitalize;
    font-weight: 600;
    line-height: 0.5rem;
    ${fonts.sizes(12, 1.1)};
  }
  .item-subject {
    color: ${colors.text.light};
    ${fonts.sizes(16, 1.1)};
  }
  .item-name {
    ${fonts.sizes(18, 1.1)} color: ${colors.brand.primary};
    font-weight: ${fonts.weight.bold};
    margin: 0;
  }
  .item-description {
    ${fonts.sizes(14, 1.1)} margin: 0;
  }

  &.list {
    display: flex;
    justify-content: space-around;

    .item-image {
      flex: 1 1 25%;
      order: 3;
      border-bottom: none;

      img {
        height: 90%;
        width: auto;
      }
    }

    .item-description {
      flex: 1 2 50%;
      ${fonts.sizes(16, 1.1)} order: 2;
    }

    .item-name {
      flex: 1 1 25%;
      order: 1;
    }

    .item-subject {
      display: none;
    }
  }
  &.grid {
    flex-basis: 25%;
  }
`;

const listItemShape = PropTypes.shape({
  name: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  subject: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  category: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  }),
  source: PropTypes.string,
  license: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
});

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick() {
    if (this.props.clickCallback) {
      this.props.clickCallback(this.props.item, this.props.itemIndex);
    }
  }

  handleKeyUp(evt) {
    if (evt.key === 'Enter') {
      this.props.clickCallback(this.props.item, this.props.itemIndex);
    }
  }

  render() {
    const { item, viewStyle } = this.props;
    return (
      <ListItemWrapper
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        className={viewStyle}
        tabIndex={0}>
        <div className={cx('item-image')}>
          {item.image ? <img src={item.image} alt={item.description} /> : null}
          <span className={cx('item-category')}>{item.category.title}</span>
        </div>
        <span className={cx('item-subject')}>{item.subject[0].title}</span>
        <h3 className={cx('item-name')}>{item.name}</h3>
        <p className={cx('item-description')}>{item.description}</p>
      </ListItemWrapper>
    );
  }
}

ListItem.propTypes = {
  item: listItemShape,
  clickCallback: PropTypes.func,
  nextItem: PropTypes.shape(),
  previousItem: PropTypes.shape(),
  itemIndex: PropTypes.number,
  viewStyle: PropTypes.oneOf(['grid', 'list']).isRequired,
};

export default ListItem;
