import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import ClickToggle from '../common/ClickToggle';
import Dialog from '../Dialog';

const classes = new BEMHelper({
  name: 'course-objectives',
  prefix: 'c-',
  outputIsString: true,
});

const CourseObjectivesWrapper = ({ children, ...rest }) => (
  <div {...rest} {...classes('wrapper')}>
    {children}
  </div>
);

CourseObjectivesWrapper.propTypes = {
  children: PropTypes.node,
};

export class CourseObjectivesDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    const { label, closeLabel, children } = this.props;

    return (
      <CourseObjectivesWrapper>
        <ClickToggle
          isOpen={this.state.isOpen}
          onToggle={isOpen => {
            this.setState({
              isOpen,
            });
          }}
          title={label}
          noScrollDisabled
          stripped
          buttonClassName="c-course-objectives__button c-course-objectives__button--article">
          <Dialog
            messages={{ close: closeLabel }}
            modifier={['active', 'large']}>
            <CourseObjectives>{children}</CourseObjectives>
          </Dialog>
        </ClickToggle>
      </CourseObjectivesWrapper>
    );
  }
}

CourseObjectivesDialog.propTypes = {
  label: PropTypes.string,
  closeLabel: PropTypes.string,
  children: PropTypes.node,
};

export const CourseObjectives = ({ children }) => (
  <div className={classes()}>{children}</div>
);

CourseObjectives.propTypes = {
  children: PropTypes.node,
};

export default CourseObjectives;
