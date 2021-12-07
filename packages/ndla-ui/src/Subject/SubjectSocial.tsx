import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { SubjectSectionTitle } from './Subject';

const classes = BEMHelper('c-subject-social');

export const SubjectSocialContent = ({ children }: { children: ReactNode }) => (
  <div {...classes('content')}>{children}</div>
);

SubjectSocialContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SubjectSocialSection = ({ children, title }: { children: ReactNode; title?: string }) => (
  <section {...classes('section')}>
    <SubjectSectionTitle className={classes('title').className}>{title}</SubjectSectionTitle>
    {children}
  </section>
);

SubjectSocialSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

SubjectSocialSection.defaultProps = {
  title: '',
};
