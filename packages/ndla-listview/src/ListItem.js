import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';

import { spacing, fonts, colors, misc, mq, breakpoints } from 'ndla-core';

const ListItemWrapper = styled.div`
  padding: ${spacing.small};
  animation: fadeIn 150ms ease;

  &:hover,
  &:focus {
    cursor: pointer;
  }
  .item-image {
    background: #fff;
    position: relative;
    height: 125px;
    text-align: center;
    border-bottom: 1px solid ${colors.brand.light};
    margin-bottom: ${spacing.xsmall};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: auto;
      height: auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
  .item-category {
    position: absolute;
    bottom: ${spacing.xsmall};
    left: 0;
    display: inline-block;
    background: ${colors.brand.greyLightest};
    border-radius: ${misc.borderRadius};
    padding: 0 ${spacing.xsmall} 0 ${spacing.xsmall};
    text-transform: capitalize;
    font-weight: 600;
    line-height: 0.5rem;
    ${fonts.sizes('12px', 1.7)};
  }
  .item-subject {
    color: ${colors.text.light};
    ${fonts.sizes('16px', 1.3)};
  }
  .item-name {
    display: inline-block;
    ${fonts.sizes('18px', 1.3)};
    color: ${colors.brand.primary};
    font-weight: ${fonts.weight.bold};
    margin: 0 0 ${spacing.xsmall} 0;
  }
  .item-description {
    ${fonts.sizes('14px', 1.3)};
    margin: 0;
    color: ${colors.brand.text};
  }

  &.list {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid ${colors.brand.greyLighter};

    .item-image {
      border: 1px solid ${colors.brand.greyLighter};
      width: 125px;
      padding: ${spacing.small};
      margin-right: ${spacing.normal};
    }

    .item-description {
      ${fonts.sizes('16px', 1.3)};
      max-width: 500px;
    }

    .item-name {
      max-width: 500px;
    }

    .item-subject {
      display: none;
    }
  }
  &.grid {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    flex-basis: 50%;
    ${mq.range({ from: breakpoints.tablet })} {
      flex-basis: 33.33%;
    }
    ${mq.range({ from: breakpoints.desktop })} {
      flex-basis: 25%;
    }
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

  renderItem() {
    const { item } = this.props;
    return (
      <Fragment>
        <span className={cx('item-subject')}>{item.subject[0].title}</span>
        <h3 className={cx('item-name')}>{item.name}</h3>
        <p className={cx('item-description')}>{item.description}</p>
      </Fragment>
    );
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
        {viewStyle === 'grid' ? (
          this.renderItem()
        ) : (
          <div>{this.renderItem()}</div>
        )}
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
