import { KeyboardEvent } from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, colors, misc, mq, breakpoints } from '@ndla/core';
import { DocumentDetails } from '@ndla/icons/common';
import { Category, ListItemType } from './ListView';

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

interface Props {
  item: ListItemType;
  clickCallback?: Function;
  nextItem?: {};
  previousItem?: {};
  viewStyle: 'grid' | 'list';
  renderMarkdown: Function;
}
const ListItem = ({ item, clickCallback, nextItem, previousItem, viewStyle, renderMarkdown }: Props) => {
  const handleClick = () => clickCallback?.(item);

  const handleKeyUp = (evt: KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === 'Enter') {
      clickCallback?.(item);
    }
  };

  const renderItem = () => (
    <>
      <h3 className={'item-name'}>{item.name}</h3>
      <div className={'item-description'}>{renderMarkdown(item.description)}</div>
    </>
  );

  const renderNoImage = () => (
    <div className={'no-image-wrapper'} aria-hidden="true">
      <div className={'no-image'}>
        <DocumentDetails className={`c-icon--large`} />
      </div>
    </div>
  );

  const renderCategory = (category: Category | Category[]) => {
    const values = !Array.isArray(category) ? [category] : category;
    return <span className={'item-category'}>{values[0].title}</span>;
  };

  const { category } = item;
  return (
    <ListItemWrapper onClick={handleClick} onKeyUp={handleKeyUp} role="button" className={viewStyle} tabIndex={0}>
      <div className={'item-image'}>
        {item.image ? <img src={item.image} alt={item.description} /> : renderNoImage()}
        {category && renderCategory(category)}
      </div>
      {viewStyle === 'grid' ? renderItem() : <div>{renderItem()}</div>}
    </ListItemWrapper>
  );
};

export default ListItem;
