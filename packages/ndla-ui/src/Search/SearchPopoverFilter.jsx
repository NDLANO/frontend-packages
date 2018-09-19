/* eslint-disable react/no-multi-comp */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight } from 'ndla-icons/common';
// import { Cross } from 'ndla-icons/action';
import {
  Button,
  FilterList,
  Modal,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from 'ndla-ui';

const filterClasses = new BEMHelper({
  name: 'filter',
  prefix: 'c-',
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

    return (
      <Fragment>
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
        <div {...filterClasses('usefilter-wrapper')}>
          <Button
            outline
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

const PopoverFilter = ({ messages, values, onChange, ...rest }) => {
  const buttonText =
    values.length > 0
      ? messages.hasValuesButtonText
      : messages.noValuesButtonText;

  const buttonContent = (
    <button type="button" {...filterClasses('expand')}>
      <span>{buttonText}</span>
      <ChevronRight />
    </button>
  );
  return (
    <Modal animation="slide-up" size="medium" activateButton={buttonContent}>
      {onClose => (
        <Fragment>
          <ModalHeader modifiers="white">
            <ModalCloseButton title="Lukk" onClick={onClose} />
          </ModalHeader>
          <ModalBody modifier="no-side-padding-mobile">
            <Popover
              close={onClose}
              onChange={onChange}
              messages={messages}
              {...rest}
              values={values}
            />
          </ModalBody>
        </Fragment>
      )}
    </Modal>
  );
};

PopoverFilter.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  messages: messagesShape.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PopoverFilter;
