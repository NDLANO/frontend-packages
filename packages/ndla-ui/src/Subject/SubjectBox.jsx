import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';

import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-subject-box');

const SubjectBox = ({
  media,
  heading,
  description,
  url,
  archiveUrl,
  messages,
  smallHeading,
}) => (
  <section {...classes()}>
    <div {...classes('media-wrapper')}>{media}</div>
    <div {...classes('content')}>
      <h1 {...classes('heading', { smallHeading })}>
        {url ? <SafeLink to={url}>{heading}</SafeLink> : heading}
      </h1>
      <p {...classes('description')}>{description}</p>
      {archiveUrl && (
        <SafeLink className={classes('archive').className} to={archiveUrl}>
          <Forward /> <span>{messages.archive}</span>
        </SafeLink>
      )}
    </div>
  </section>
);

SubjectBox.propTypes = {
  media: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  archiveUrl: PropTypes.string,
  messages: PropTypes.shape({
    archive: PropTypes.string.isRequired,
  }),
  smallHeading: PropTypes.bool,
};

SubjectBox.defaultProps = {
  smallHeading: false,
};

export default SubjectBox;
