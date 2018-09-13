import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';

import SectionHeading from '../SectionHeading';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-frontpage-film');

const FrontpageFilm = ({ messages, url, imageUrl }) => (
  <section {...classes('')}>
    <SectionHeading large className="c-frontpage-highlighted__heading">
      {messages.header}
    </SectionHeading>
    <div {...classes('image')} style={{ backgroundImage: `url(${imageUrl})` }}>
      {messages.text && <span>{messages.text}</span>}
    </div>
    <div className="o-text-link__wrapper o-text-link__wrapper--right">
      <SafeLink className="o-text-link" to={url}>
        {messages.linkLabel}
        <Forward />
      </SafeLink>
    </div>
  </section>
);

FrontpageFilm.propTypes = {
  messages: PropTypes.shape({
    header: PropTypes.string.isRequired,
    linkLabel: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

FrontpageFilm.defaultProps = {};

export default FrontpageFilm;
