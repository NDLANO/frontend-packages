import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';

import SectionHeading from '../SectionHeading';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-frontpage-film');

const FrontpageFilm = ({ messages, url }) => (
  <section {...classes('')}>
    <SectionHeading large className="c-frontpage-highlighted__heading">
      {messages.header}
    </SectionHeading>
    <div {...classes('image')} style={{ backgroundImage: 'url(http://keyteq-designmanual.surge.sh/images/banners/samfunnsfag.svg)' }} />
    <div {...classes('link-container')}>
      <SafeLink className={`${classes('link').className} c-button--link c-button`} to={url}>
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
  }).isRequired,
  url: PropTypes.string.isRequired,
};

FrontpageFilm.defaultProps = {
};

export default FrontpageFilm;
