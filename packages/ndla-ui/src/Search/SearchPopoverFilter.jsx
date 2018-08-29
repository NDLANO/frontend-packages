/* eslint-disable react/no-multi-comp */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, Back } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';
import { Button, FilterList, Modal, ModalCloseButton, ModalHeader, ModalBody } from 'ndla-ui';

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
          extendedPadding
          onChange={values => {
            this.setState({
              values,
            });
          }}
        />
        <Button
          onClick={() => {
            close();
            onChange(this.state.values);
          }}>
          {messages.confirmButton}
        </Button>
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

const PopoverFilter = ({
  messages, values, onChange, ...rest,
}) => {
  const buttonText =
    values.length > 0
      ? messages.hasValuesButtonText
      : messages.noValuesButtonText;

  const buttonContent = (
    <Button>
      <span>{buttonText}</span>
      <ChevronRight />
    </Button>
  );
  return (
    <Modal
      animation="slide-up"
      size="medium"
      backgroundColor="grey"
      activateButton={buttonContent}>
      {(onClose) => (
        <Fragment>
          <ModalHeader modifiers="white">
            <ModalCloseButton title="Lukk" onClick={onClose} />
          </ModalHeader>
          <ModalBody>
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
  )
};

PopoverFilter.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  messages: messagesShape.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PopoverFilter;
