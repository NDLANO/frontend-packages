import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from '@ndla/util';

export const Center = ({ children, style }) => (
  <div
    style={{
      margin: '0 auto',
      padding: '0 12px',
      maxWidth: '900px',
      ...style,
    }}>
    {children}
  </div>
);

Center.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export const InlineContainer = ({ children }) => <div className="inline-container">{children}</div>;

InlineContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DottedContainer = ({ children }) => <div className="dotted-container">{children}</div>;

DottedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const articleUrl = id => (
  <span>
    Hentet fra <a href={`http://api.test.ndla.no:8082/article/${id}`}>{`http://api.test.ndla.no:8082/article/${id}`}</a>
  </span>
);

export const AnchorNavigation = ({ links }) => (
  <ul
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }}>
    {links.map(link => (
      <li key={uuid()}>{link}</li>
    ))}
  </ul>
);

AnchorNavigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
};
