import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { spacing, fonts, colors, misc, mq, breakpoints } from '@ndla/core';
import { DocumentDetails } from '@ndla/icons/common';

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
    .no-image-wrapper {
      width: 100%;
      height: 100%;
      padding-bottom: 10px;
    }
    .no-image {
      background: ${colors.brand.lightest};
      width: 100%;
      height: 100%;
      color: ${colors.brand.primary};
      display: flex;
      justify-content: center;
      align-items: center;
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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
  }
  &.grid {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    flex-basis: 100%;
    ${mq.range({ from: breakpoints.mobileWide })} {
      flex-basis: 50%;
    }
    ${mq.range({ from: breakpoints.tabletWide })} {
      flex-basis: 33.33%;
    }
    ${mq.range({ from: breakpoints.desktop })} {
      flex-basis: 25%;
    }
  }
`;

const categoryShape = PropTypes.shape({
  title: PropTypes.string,
  value: PropTypes.string,
});

const listItemShape = PropTypes.shape({
  name: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.oneOfType([PropTypes.arrayOf(categoryShape), categoryShape]),
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
    const { item, renderMarkdown } = this.props;
    return (
      <Fragment>
        <h3 className={'item-name'}>{item.name}</h3>
        <p className={'item-description'}>{renderMarkdown(item.description)}</p>
      </Fragment>
    );
  }

  renderNoImage() {
    return (
      <div className={'no-image-wrapper'}>
        <div className={'no-image'}>
          <DocumentDetails className={`c-icon--large`} />
        </div>
      </div>
    );
  }

  renderCategory(category) {
    const values = !Array.isArray(category) ? [category] : category;
    return <span className={'item-category'}>{values[0].title}</span>;
  }

  render() {
    const { item, viewStyle } = this.props;
    const { category } = item;
    return (
      <ListItemWrapper
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        className={viewStyle}
        tabIndex={0}>
        <div className={'item-image'}>
          {item.image ? <img src={item.image} alt={item.description} /> : this.renderNoImage()}
          {category && this.renderCategory(category)}
        </div>
        {viewStyle === 'grid' ? this.renderItem() : <div>{this.renderItem()}</div>}
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
  renderMarkdown: PropTypes.func.isRequired,
};

export default ListItem;
