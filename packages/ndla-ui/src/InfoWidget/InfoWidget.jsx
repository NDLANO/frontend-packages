import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';

import SafeLink from '../common/SafeLink';

import SectionHeading from '../SectionHeading';

const classes = BEMHelper('c-info-widget');

const InfoWidget = ({ heading, description, mainLink, iconLinks, center }) => (
  <section {...classes('', { center })}>
    <SectionHeading large className={classes('heading').className}>
      {heading}
    </SectionHeading>
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
          if (link.href) {
            return (
              <a
                key={link.href}
                href={link.href}
                {...classes('icon-link')}
                aria-label={link.name}>
                {link.icon}
              </a>
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
      {mainLink.url ? (
        <div className="o-text-link__wrapper o-text-link__wrapper--right">
          <SafeLink className="o-text-link" to={mainLink.url}>
            <span>{mainLink.name}</span> <Forward />
          </SafeLink>
        </div>
      ) : (
        <a {...classes('main-link')} href={mainLink.href}>
          {mainLink.name}
        </a>
      )}
    </div>
  </section>
);

InfoWidget.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mainLink: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  iconLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.node.isRequired,
    }),
  ),
  center: PropTypes.bool,
};

InfoWidget.defaultProps = {
  center: false,
};

export default InfoWidget;
