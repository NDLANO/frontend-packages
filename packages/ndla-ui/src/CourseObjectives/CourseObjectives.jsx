import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, ChevronDown } from 'ndla-icons/common';

import SafeLink from '../common/SafeLink';

const classes = new BEMHelper({
  name: 'course-objectives',
  prefix: 'c-',
});

const renderItem = (item, expanded = true) => {
  const content = item.url ? (
    <SafeLink to={item.url} tabIndex={!expanded ? -1 : null}>
      {item.text}
    </SafeLink>
  ) : (
    item.text
  );

  return (
    <li {...classes('topic-item')} key={item.text}>
      {content}
    </li>
  );
};

class CourseObjectives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };
  }

  render() {
    const { messages, headingId, topics, id } = this.props;

    return (
      <div {...classes()}>
        <h1 id={headingId} {...classes('heading')}>
          {messages.heading}
        </h1>
        <p {...classes('description')}>{messages.description}</p>
        {topics.length === 1 ? (
          <div {...classes('topic')}>
            <h2 {...classes('topic-heading')}>{topics[0].heading}</h2>
            <ul {...classes('topic-list')}>
              {topics[0].items.map(renderItem)}
            </ul>
          </div>
        ) : (
          <Fragment>
            {topics.map(topic => (
              <div
                {...classes('topic', {
                  expandable: true,
                  expanded: this.state.expanded === topic.heading,
                })}
                key={topic.heading}>
                <h2 {...classes('topic-heading')}>
                  <button
                    {...classes('topic-heading-button')}
                    aria-expanded={this.state.expanded === topic.heading}
                    aria-controls={id}
                    onClick={() => {
                      this.setState(prevState => {
                        let expanded = null;
                        if (prevState.expanded !== topic.heading) {
                          expanded = topic.heading;
                        }

                        return {
                          expanded,
                        };
                      });
                    }}>
                    {this.state.expanded === topic.heading ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                    {topic.heading}
                  </button>
                </h2>
                <ul
                  id={id}
                  aria-hidden={this.state.expanded !== topic.heading}
                  {...classes('topic-list')}>
                  {topic.items.map(item =>
                    renderItem(item, this.state.expanded === topic.heading),
                  )}
                </ul>
              </div>
            ))}
          </Fragment>
        )}
      </div>
    );
  }
}

CourseObjectives.propTypes = {
  id: PropTypes.string,
  headingId: PropTypes.string,
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

CourseObjectives.defaultProps = {
  headingId: null,
};

export default CourseObjectives;
