import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-subject-links');

const SubjectLinks = ({ links, heading, twoColumns }) => (
  <section {...classes('', {'twoColumns' : twoColumns})}>
    <h1 {...classes('heading')}>{heading}</h1>
    <nav>
      <ul {...classes('list')}>
        {links.map(link => (
          <li key={link.url} {...classes('item')}>
            <SafeLink to={link.url}>{link.text}</SafeLink>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

SubjectLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  heading: PropTypes.string.isRequired,
  twoColumns: PropTypes.bool,
};

export default SubjectLinks;
