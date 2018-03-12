import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';

import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-subject-box');

const SubjectBox = ({
  fixedWidth,
  media,
  heading,
  description,
  url,
  archiveUrl,
  messages,
  smallHeading,
  topHeading,
}) => {
  const content = (
    <Fragment>
      {!topHeading && (
        <h1 {...classes('heading', { smallHeading, top: true })}>{heading}</h1>
      )}
      <div {...classes('media-wrapper')}>{media}</div>
      <div {...classes('content')}>
        <h1 {...classes('heading', { smallHeading, main: !topHeading })}>
          {url ? <SafeLink to={url}>{heading}</SafeLink> : heading}
        </h1>
        <p {...classes('description')}>{description}</p>
        {archiveUrl && (
          <SafeLink className={classes('archive').className} to={archiveUrl}>
            <Forward /> <span>{messages.archive}</span>
          </SafeLink>
        )}
      </div>
    </Fragment>
  );

  if (topHeading) {
    return (
      <section {...classes('wrapper')}>
        <h1 {...classes('top-heading')}>{topHeading}</h1>
        <section {...classes('', { fixedWidth, hasWrapper: true })}>
          {content}
        </section>
      </section>
    );
  }

  return <section {...classes('', { fixedWidth })}>{content}</section>;
};

SubjectBox.propTypes = {
  topHeading: PropTypes.string,
  fixedWidth: PropTypes.bool,
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
  fixedWidth: false,
};

export default SubjectBox;
