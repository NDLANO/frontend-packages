/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import FocusTrapReact from 'focus-trap-react';
import debounce from 'lodash/debounce';
import { Spinner } from '@ndla/editor';
import { Search as SearchIcon } from '@ndla/icons/common';
import { Check } from '@ndla/icons/editor';
import { colors, fonts, spacing, shadows, misc, animations } from '@ndla/core';
import Input from './Input';

const StyledDropDownContainer = styled.div`
  font-family: ${fonts.sans};
  background: #fff;
  position: fixed;
  border-radius: ${misc.borderRadius};
  box-shadow: ${shadows.levitate1};
  overflow: hidden;
  z-index: 1;
  transition: height 100ms ease;
  > div {
    display: flex;
    flex-direction: column;
    max-height: ${props => props.maxSleeveHeight}px;
    > div {
      &:first-child {
        flex-grow: 1;
        overflow-y: scroll;
        ${animations.fadeInLeft(animations.durations.fast)};
        border-top: 1px solid ${colors.brand.greyLightest};
      }
      &:last-child {
        padding: ${spacing.small};
        border-top: 1px solid ${colors.brand.greyLightest};
      }
    }
  }
`;

const StyledTitle = styled.span`
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text.primary};
  text-align: left;
`;

const StyledDescription = styled.span`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  padding-top: ${spacing.xsmall};
  color: ${colors.text.light};
  text-align: left;
`;

const StyledImage = styled.img`
  border-radius: ${misc.borderRadius};
  width: ${spacing.large};
  height: ${spacing.large};
  min-width: ${spacing.large};
  object-fit: cover;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: ${spacing.small};
  flex-grow: 1;
`;

const StyledAdded = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: ${spacing.small};
  .c-icon {
    color: ${colors.support.green};
    margin-left: ${spacing.xsmall};
  }
  display: flex;
  flex-direction: row;
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
`;

const StyledItemButton = styled.button`
  border: 0;
  border-bottom: 1px solid ${colors.brand.greyLightest};
  padding: ${spacing.small};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  transition: background 200ms ease;
  &:focus,
  &:hover {
    background: ${colors.brand.lighter};
  }
  ${props =>
    props.added &&
    css`
      background: ${colors.brand.greyLightest};
      ${StyledTitle} {
        color: ${colors.text.light};
      }
    `}
`;

const StyledImageContainer = styled.div`
  margin-right: ${spacing.small};
`;

const StyledResult = styled.div`
  ${fonts.sizes(14, 1.1)};
  color: ${colors.text.light};
`;

const UseWrapper = ({ withFocusTrap, onDeactivate, children }) => {
  if (!withFocusTrap) {
    return children;
  }
  return (
    <FocusTrapReact
      focusTrapOptions={{
        onDeactivate,
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
      }}>
      {children}
    </FocusTrapReact>
  );
};

class Typeahead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initalValue,
    };
    this.onChange = debounce(
      () => props.onSearch(this.state.value),
      props.debounceTime,
    );
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.containerRef = React.createRef();
    this.dropDownRef = React.createRef();
    this.hasActiveKeyListener = false;
  }

  onChangeInput(e) {
    this.setState(
      {
        value: e.target.value,
      },
      this.onChange,
    );
  }

  onTabbing(direction) {
    const currentElement = document.activeElement;
    if (direction === 1) {
      if (currentElement.tagName === 'INPUT') {
        const btn = this.dropDownRef.current.querySelector('button');
        if (btn) {
          btn.focus();
        }
      } else if (currentElement.nextSibling) {
        currentElement.nextSibling.focus();
      }
    } else if (currentElement.tagName === 'BUTTON') {
      if (currentElement.previousSibling) {
        currentElement.previousSibling.focus();
      } else {
        this.containerRef.current.querySelector('input').focus();
      }
    }
  }

  onKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.onTabbing(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.onTabbing(-1);
    }
  }

  componentWillUnmount() {
    if (this.hasActiveKeyListener) {
      window.removeEventListener('keydown', this.onKeyDown);
    }
  }

  componentDidUpdate() {
    const { maxSleeveHeight } = this.props;
    if (this.dropDownRef.current) {
      this.dropDownRef.current.style.width = `${
        this.containerRef.current.offsetWidth
      }px`;
      const setHeight = this.dropDownRef.current.firstElementChild.offsetHeight;
      this.dropDownRef.current.style.height = `${
        setHeight > maxSleeveHeight ? maxSleeveHeight : setHeight
      }px`;
      // Has key listener?
      if (!this.hasActiveKeyListener) {
        this.hasActiveKeyListener = true;
        window.addEventListener('keydown', this.onKeyDown);
      }
    } else if (this.hasActiveKeyListener) {
      window.removeEventListener('keydown', this.onKeyDown);
      this.hasActiveKeyListener = false;
    }
  }

  renderImage(image, alt) {
    if (!image) return null;
    return (
      <StyledImageContainer>
        {typeof image === 'string' ? (
          <StyledImage src={image} alt={alt} />
        ) : (
          image
        )}
      </StyledImageContainer>
    );
  }

  render() {
    const { value } = this.state;

    const {
      data,
      value: addedData,
      maxRender,
      onChange,
      placeholder,
      focusOnMount,
      maxSleeveHeight,
      closeOnSelect,
      onSearch,
      loading,
      messages,
      renderImage,
      renderDescription,
      tags,
    } = this.props;
    const withFocusTrap = data.length > 0 && value !== '';
    return (
      <UseWrapper
        withFocusTrap={withFocusTrap}
        onDeactivate={() => {
          onSearch('');
        }}>
        <div>
          <div ref={this.containerRef}>
            <Input
              focusOnMount={focusOnMount}
              iconRight={
                loading ? <Spinner size="normal" margin="0" /> : <SearchIcon />
              }
              tags={tags}
              container="div"
              placeholder={placeholder}
              onChange={this.onChangeInput}
              value={value}
              onBlur={() => {
                if (!withFocusTrap) {
                  this.setState({
                    value: '',
                  });
                }
              }}
            />
          </div>
          {value !== '' && (
            <StyledDropDownContainer
              innerRef={this.dropDownRef}
              maxSleeveHeight={maxSleeveHeight}>
              <div>
                <div>
                  {data.slice(0, maxRender).map(el => {
                    const added = addedData.includes(el.id);
                    return (
                      <StyledItemButton
                        key={el.id}
                        type="button"
                        added={added}
                        ariaLabel={
                          added
                            ? messages.addItemLabel
                            : messages.removeItemLabel
                        }
                        onClick={() => {
                          if (added) {
                            onChange(
                              addedData.filter(
                                addedItemId => addedItemId !== el.id,
                              ),
                            );
                          } else {
                            addedData.push(el.id);
                            onChange(addedData);
                          }
                          if (closeOnSelect) {
                            this.setState({
                              value: '',
                            });
                          }
                        }}>
                        {renderImage && this.renderImage(el.image, el.alt)}
                        <StyledText>
                          <StyledTitle>{el.title}</StyledTitle>
                          {renderDescription && el.description && (
                            <StyledDescription>
                              {el.description}
                            </StyledDescription>
                          )}
                        </StyledText>
                        <StyledAdded>
                          {added && (
                            <>
                              {messages.addedItem}
                              <Check />
                            </>
                          )}
                        </StyledAdded>
                      </StyledItemButton>
                    );
                  })}
                </div>
                <StyledResult>
                  {loading ? messages.searching : messages.matches(data.length)}
                </StyledResult>
              </div>
            </StyledDropDownContainer>
          )}
        </div>
      </UseWrapper>
    );
  }
}

Typeahead.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      groupTitle: PropTypes.string,
      items: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  ),
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  initalValue: PropTypes.string,
  maxRender: PropTypes.number,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  closeOnSelect: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  maxSleeveHeight: PropTypes.number,
  loading: PropTypes.bool,
  renderImage: PropTypes.bool,
  renderDescription: PropTypes.bool,
  tags: PropTypes.node,
  messages: PropTypes.shape({
    matches: PropTypes.func,
    searching: PropTypes.string,
    addItemLabel: PropTypes.string,
    removeItemLabel: PropTypes.string,
    addedItem: PropTypes.string,
  }).isRequired,
};

Typeahead.defaultProps = {
  debounceTime: 200,
  maxRender: 20,
  maxSleeveHeight: 350,
  initalValue: '',
  renderImage: true,
  renderDescription: true,
};

export default Typeahead;
