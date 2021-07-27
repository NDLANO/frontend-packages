import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '@ndla/safelink';
import ContentTypeBadge from '../ContentTypeBadge';
import { SubjectSectionTitle } from './Subject';

const classes = BEMHelper('c-subject-new-content');

const SubjectNewContent = ({ heading, content }) => (
  <section {...classes()}>
    <SubjectSectionTitle className={classes('heading').className}>{heading}</SubjectSectionTitle>
    <nav {...classes('content')}>
      <ul {...classes('list')}>
        {content.map(item => (
          <li {...classes('item')} key={item.url}>
            <div {...classes('left-wrapper')}>
              <ContentTypeBadge type={item.contentType} size="x-small" background outline />
              <div {...classes('content-link')}>
                <div {...classes('date')}>{item.formattedDate}</div>
                <SafeLink to={item.url} {...classes('link')}>
                  {item.name}
                </SafeLink>
              </div>
            </div>
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
      formattedDate: PropTypes.string.isRequired,
      contentType: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SubjectNewContent;
