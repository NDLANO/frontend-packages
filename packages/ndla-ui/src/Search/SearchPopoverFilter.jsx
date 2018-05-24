/* eslint-disable react/no-multi-comp */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, Back } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';

import ClickToggle from '../common/ClickToggle';
import { FilterList } from '../Filter';
import Button from '../Button';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'search-popover-filter',
  outputIsString: true,
});

const messagesShape = PropTypes.shape({
  backButton: PropTypes.string.isRequired,
  closeButton: PropTypes.string.isRequired,
  confirmButton: PropTypes.string.isRequired,
  filterLabel: PropTypes.string.isRequired,
  hasValuesButtonText: PropTypes.string.isRequired,
  noValuesButtonText: PropTypes.string.isRequired,
});

class Popover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
    };
  }

  render() {
    const { messages, close, options, onChange } = this.props;
    const disabled = this.state.values.length === 0;

    return (
      <Fragment>
        <div className="o-backdrop" />
        <div
          className={classes('popover')}
          role="dialog"
          aria-label={messages.filterLabel}>
          <button className={classes('popover-close-narrow')} onClick={close}>
            <Back /> <span>{messages.backButton}</span>
          </button>
          <button className={classes('popover-close-wide')} onClick={close}>
            <span>{messages.closeButton}</span> <Cross />
          </button>

          <FilterList
            options={options}
            label={messages.filterLabel}
            values={this.state.values}
            modifiers="search-popover"
            onChange={values => {
              this.setState({
                values,
              });
            }}
          />
          <Button
            disabled={disabled}
            className={classes('confirm-button')}
            onClick={() => {
              close();
              onChange(this.state.values);
            }}>
            {messages.confirmButton}
          </Button>
        </div>
      </Fragment>
    );
  }
}

Popover.propTypes = {
  messages: messagesShape.isRequired,
  close: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export class PopoverFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    const { messages, values, ...rest } = this.props;
    const buttonText =
      values.length > 0
        ? messages.hasValuesButtonText
        : messages.noValuesButtonText;

    const buttonContent = (
      <Fragment>
        <span className={classes('button-text')}>{buttonText}</span>
        <ChevronRight />
      </Fragment>
    );

    return (
      <ClickToggle
        isOpen={this.state.isOpen}
        onToggle={isOpen => {
          this.setState({
            isOpen,
          });
        }}
        title={buttonContent}
        className={classes()}
        noScrollDisabled
        buttonClassName={classes('button')}>
        {onClose => (
          <Popover
            close={onClose}
            messages={messages}
            {...rest}
            values={values}
          />
        )}
      </ClickToggle>
    );
  }
}

PopoverFilter.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  messages: messagesShape.isRequired,
};

export default PopoverFilter;
