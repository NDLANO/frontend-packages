import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import Button from 'ndla-button';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-beta-notification');
const BetaNotification = ({
  messages: { heading, text, readmoreText, readmoreLink, buttonText },
  onAccept,
}) => (
  <section {...classes()}>
    <div className="u-4/6@tablet u-push-1/6@tablet">
      <h1 {...classes('heading')}>{heading}</h1>
      <p {...classes('text')}>
        {text} <SafeLink to={readmoreLink}>{readmoreText}</SafeLink>
      </p>
      <div {...classes('button-wrapper')}>
        <Button onClick={onAccept} outline>
          {buttonText}
        </Button>
      </div>
    </div>
  </section>
);

BetaNotification.propTypes = {
  messages: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    readmoreText: PropTypes.string.isRequired,
    readmoreLink: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }),
  onAccept: PropTypes.func.isRequired,
};

export default BetaNotification;
