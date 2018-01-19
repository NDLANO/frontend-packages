import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';

const classes = BEMHelper('c-tabs');

const leftKeys = ['ArrowLeft', 'Left', 'ArrowUp', 'Up'];
const rightKeys = ['ArrowRight', 'Right', 'ArrowDown', 'Down'];

class FilterTabs extends Component {
  constructor(props) {
    super(props);
    this.liRefs = {};
    this.handleOnChange = this.handleOnChange.bind(this);
    this.setFocus = false;
  }

  componentDidUpdate() {
    if (this.setFocus) {
      this.liRefs[this.props.value].focus();
      this.setFocus = false;
    }
  }

  handleOnChange(value) {
    this.props.onChange(value);
  }

  render() {
    const { options, contentId, value, children } = this.props;

    return (
      <div {...classes()}>
        <ul {...classes('list')} role="tablist">
          {options.map(option => {
            const modifiers = [];
            const selected = option.value === value;
            let tabIndex = null;
            if (selected) {
              modifiers.push('selected');
              tabIndex = 0;
            }

            return (
              <li
                key={option.value}
                {...classes('tab', modifiers)}
                data-value={option.value}
                id={option.value}
                tabIndex={tabIndex}
                role="tab"
                aria-selected={selected}
                aria-controls={contentId}
                onClick={() => {
                  this.setFocus = true;
                  this.handleOnChange(option.value);
                }}
                ref={ref => {
                  this.liRefs[option.value] = ref;
                }}
                onKeyDown={event => {
                  this.setFocus = true;
                  const index = options.findIndex(
                    o => o.value === option.value,
                  );
                  let newIndex = null;

                  if (leftKeys.some(key => key === event.key)) {
                    event.preventDefault();
                    newIndex = index - 1;
                    if (newIndex < 0) {
                      newIndex = options.length - 1;
                    }
                  } else if (rightKeys.some(key => key === event.key)) {
                    event.preventDefault();
                    newIndex = index + 1;
                    if (newIndex > options.length - 1) {
                      newIndex = 0;
                    }
                  }

                  this.handleOnChange(options[newIndex].value);
                }}>
                {option.display}
              </li>
            );
          })}
        </ul>
        <div
          {...classes('panel')}
          role="tabpanel"
          id={contentId}
          aria-labelledby={value}>
          {children}
        </div>
      </div>
    );
  }
}

FilterTabs.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      display: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  contentId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterTabs;
