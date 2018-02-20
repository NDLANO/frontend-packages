import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';

import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-subject-featuring');

const SubjectFeaturing = ({
  media,
  heading,
  description,
  url,
  archiveUrl,
  messages,
}) => (
  <section {...classes()}>
    <div {...classes('media-wrapper')}>{media}</div>
    <div {...classes('content')}>
      <h1 {...classes('heading')}>
        <SafeLink to={url}>{heading}</SafeLink>
      </h1>
      <p {...classes('description')}>{description}</p>
      <SafeLink className={classes('archive').className} to={archiveUrl}>
        <Forward /> <span>{messages.archive}</span>
      </SafeLink>
    </div>
  </section>
);

SubjectFeaturing.propTypes = {
  media: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  archiveUrl: PropTypes.string,
  messages: PropTypes.shape({
    archive: PropTypes.string.isRequired,
  }),
};

export default SubjectFeaturing;
