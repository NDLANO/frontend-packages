import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';

import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-subject-archive');

const SubjectArchive = ({
  fixedWidth,
  featuringArticle,
  messages,
  sectionHeading,
}) => (
  <section {...classes('', { fixedWidth })}>
    <h1 {...classes('section-heading')}>{sectionHeading}</h1>
    <section {...classes('featuring')}>
      <div {...classes('media-wrapper')}>{featuringArticle.media}</div>
      <div {...classes('content')}>
        <h1 {...classes('heading')}>
          <SafeLink to={featuringArticle.url}>
            {featuringArticle.heading}
          </SafeLink>
        </h1>
        <p {...classes('description')}>{featuringArticle.description}</p>
        <button className={classes('archive-button').className}>
          <Forward /> <span>{messages.archive}</span>
        </button>
      </div>
    </section>
  </section>
);

SubjectArchive.propTypes = {
  featuringArticle: PropTypes.shape({
    media: PropTypes.node.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  sectionHeading: PropTypes.string.isRequired,
  fixedWidth: PropTypes.bool,
  messages: PropTypes.shape({
    archive: PropTypes.string.isRequired,
  }),
};

SubjectArchive.defaultProps = {
  fixedWidth: false,
};

export default SubjectArchive;
