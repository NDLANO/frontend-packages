import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink, { SafeLinkProps } from '@ndla/safelink';

import { SubjectSectionTitle } from './Subject';

const classes = BEMHelper('c-subject-links');

interface Props {
  links: {
    toLinkProps: () => SafeLinkProps;
    text: string;
  }[];
  heading: string;
}

const SubjectLinks = ({ links, heading }: Props) => (
  <section {...classes()}>
    <SubjectSectionTitle className={classes('heading').className}>{heading}</SubjectSectionTitle>
    <nav>
      <ul {...classes('list')}>
        {links.map((link) => (
          <li key={link.toLinkProps().to.toString()} {...classes('item')}>
            <SafeLink {...link.toLinkProps()}>{link.text}</SafeLink>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

SubjectLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      toLinkProps: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  heading: PropTypes.string.isRequired,
};

export default SubjectLinks;
