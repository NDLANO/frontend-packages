import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import ClickToggle from '../common/ClickToggle';
import Dialog from '../Dialog';

const classes = BEMHelper('c-course-objectives-dialog');

class CourseObjectivesDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    const { messages, children, id } = this.props;
    const headingId = `${id}_heading`;

    return (
      <ClickToggle
        isOpen={this.state.isOpen}
        onToggle={isOpen => {
          this.setState({
            isOpen,
          });
        }}
        title={messages.buttonText}
        buttonClassName="c-course-objectives__button c-course-objectives__button--article">
        {onClose => (
          <Dialog
            id={id}
            labelledby={headingId}
            hidden={!this.state.isOpen}
            onClose={onClose}
            disablePortal
            messages={{ close: messages.closeButtonText }}
            modifier={['active', 'large']}>
            <div {...classes('content')}>{children(headingId)}</div>
          </Dialog>
        )}
      </ClickToggle>
    );
  }
}

CourseObjectivesDialog.propTypes = {
  id: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    closeButtonText: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.func.isRequired,
};

export default CourseObjectivesDialog;
