import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import ClickToggle from '../common/ClickToggle';
import SafeLink from '../common/SafeLink';
import Dialog from '../Dialog';

const classes = new BEMHelper({
  name: 'course-objectives',
  prefix: 'c-',
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
    const { messages, children, id } = this.props;
    const headingId = `${id}_heading`;

    return (
      <CourseObjectivesWrapper>
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
              {children(headingId)}
            </Dialog>
          )}
        </ClickToggle>
      </CourseObjectivesWrapper>
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

const renderItem = item => {
  const content = item.url ? (
    <SafeLink to={item.url}>{item.text}</SafeLink>
  ) : (
    item.text
  );

  return (
    <li {...classes('topic-item')} key={item.text}>
      {content}
    </li>
  );
};

export const CourseObjectives = ({ messages, headingId, topics }) => (
  <div {...classes()}>
    <h1 id={headingId} {...classes('heading')}>
      {messages.heading}
    </h1>
    <p {...classes('description')}>{messages.description}</p>
    {topics.length === 1 ? (
      <div {...classes('topic')}>
        <h2 {...classes('topic-heading')}>{topics[0].heading}</h2>
        <ul {...classes('topic-list')}>{topics[0].items.map(renderItem)}</ul>
      </div>
    ) : (
      <Fragment>
        {topics.map(topic => (
          <div {...classes('topic')} key={topic.heading}>
            <h2 {...classes('topic-heading')}>{topic.heading}</h2>
            <ul {...classes('topic-list')}>{topic.items.map(renderItem)}</ul>
          </div>
        ))}
      </Fragment>
    )}
  </div>
);

CourseObjectives.propTypes = {
  headingId: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          url: PropTypes.string,
        }),
      ),
    }),
  ),
};

export default CourseObjectives;
