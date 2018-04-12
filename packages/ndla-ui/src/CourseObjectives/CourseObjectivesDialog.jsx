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
    const { messages, children, id, narrow, wide } = this.props;
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
        buttonClassName={classes('toggle-button', { narrow, wide }).className}>
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
  narrow: PropTypes.bool,
  wide: PropTypes.bool,
  messages: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    closeButtonText: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.func.isRequired,
};

CourseObjectivesDialog.defaultProps = {
  narrow: false,
  wide: false,
};

export default CourseObjectivesDialog;
