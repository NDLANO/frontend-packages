import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';

import { SubjectSectionTitle } from './Subject';

const classes = BEMHelper('c-subject-links');

const SubjectLinks = ({ links, heading, toLinkProps }) => (
  <section {...classes()}>
    <SubjectSectionTitle className={classes('heading').className}>
      {heading}
    </SubjectSectionTitle>
    <nav>
      <ul {...classes('list')}>
        {links.map(link => (
          <li key={link.url} {...classes('item')}>
            <SafeLink {...toLinkProps(link)}>{link.text}</SafeLink>
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
      toLinkProps: PropTypes.func.isRequired,
    }),
  ),
  heading: PropTypes.string.isRequired,
};

export default SubjectLinks;
