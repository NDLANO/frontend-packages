import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';

import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-info-widget');

const InfoWidget = ({ heading, description, mainLink, iconLinks, center }) => (
  <section {...classes('', { center })}>
    <h1 {...classes('heading')}>{heading}</h1>
    <div {...classes('description')}>
      <p>{description}</p>
    </div>
    <div {...classes('links')}>
      {iconLinks &&
        iconLinks.map(link => {
          if (link.url) {
            return (
              <SafeLink
                key={link.url}
                {...classes('icon-link')}
                to={link.url}
                aria-label={link.name}>
                {link.icon}
              </SafeLink>
            );
          }
          return (
            <span
              key={link.name}
              {...classes('icon-link')}
              aria-label={link.name}>
              {link.icon}
            </span>
          );
        })}
      <SafeLink {...classes('main-link')} to={mainLink.url}>
        <span>{mainLink.name}</span> <Forward />
      </SafeLink>
    </div>
  </section>
);

InfoWidget.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mainLink: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  iconLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      icon: PropTypes.node.isRequired,
    }),
  ),
  center: PropTypes.bool,
};

InfoWidget.defaultProps = {
  center: false,
};

export default InfoWidget;
