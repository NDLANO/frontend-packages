import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronLeft } from 'ndla-icons/common';

import { SubjectSectionTitle } from './Subject';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-subject-new-content');

const SubjectNewContent = ({ heading, content }) => (
  <section {...classes()}>
    <SubjectSectionTitle className={classes('heading').className}>
      {heading}
    </SubjectSectionTitle>
    <nav {...classes('content')}>
      <ul {...classes('list')}>
        {content.map(item => (
          <li {...classes('item')} key={item.url}>
            <div {...classes('left-wrapper')}>
              <SafeLink toLinkProps={item.toLinkProps} {...classes('link')}>
                {item.name}
              </SafeLink>
              <ChevronLeft />
              <span {...classes('topic-name')}>{item.topicName}</span>
            </div>
            <div {...classes('date')}>{item.formattedDate}</div>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

SubjectNewContent.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      toLinkProps: PropTypes.func.isRequired,
      topicName: PropTypes.string.isRequired,
      formattedDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SubjectNewContent;
