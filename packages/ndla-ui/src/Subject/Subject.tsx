import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SectionHeading from '../SectionHeading';

const classes = BEMHelper('c-subject-content');

export const SubjectContent = ({
  children,
  breadcrumb,
  twoColumns = false,
}: {
  children: ReactNode;
  breadcrumb: ReactNode;
  twoColumns?: boolean;
}) => (
  <div {...classes()}>
    <div {...classes('breadcrumb')}>{breadcrumb}</div>
    <div {...classes('content', { twoColumns })}>{children}</div>
  </div>
);

SubjectContent.propTypes = {
  children: PropTypes.node.isRequired,
  breadcrumb: PropTypes.node.isRequired,
  twoColumns: PropTypes.bool,
};

const secondaryContentClass = BEMHelper('c-subject-secondary-content');

export const SubjectSecondaryContent = ({ children }: { children: ReactNode }) => (
  <div {...secondaryContentClass()}>{children}</div>
);

SubjectSecondaryContent.propTypes = {
  children: PropTypes.node.isRequired,
};

const childContentClasses = BEMHelper('c-subject-child-content');

export const SubjectChildContent = ({ children }: { children: ReactNode }) => (
  <div {...childContentClasses()}>{children}</div>
);

SubjectChildContent.propTypes = {
  children: PropTypes.node.isRequired,
};

const topicClasses = BEMHelper('c-subject-topics');

export const SubjectTopics = ({ messages, children }: { messages: { heading: string }; children: ReactNode }) => (
  <section {...topicClasses()}>
    <header {...topicClasses('header')}>
      <h1 {...topicClasses('heading')}>{messages.heading}</h1>
    </header>
    <div {...topicClasses('content')}>{children}</div>
  </section>
);

SubjectTopics.propTypes = {
  messages: PropTypes.shape({
    heading: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

const sidebarClasses = BEMHelper('c-subject-sidebar-wrapper');

export const SubjectSidebarWrapper = ({ children }: { children: ReactNode }) => (
  <div {...sidebarClasses()}>{children}</div>
);

SubjectSidebarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const subjectFlexWrapperClasses = BEMHelper('c-subject-flex');

export const SubjectFlexWrapper = ({ children, noMargin = false }: { children: ReactNode; noMargin?: boolean }) => (
  <div {...subjectFlexWrapperClasses('', { noMargin })}>{children}</div>
);

SubjectFlexWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  noMargin: PropTypes.bool,
};

export const SubjectFlexChild = ({ children }: { children: ReactNode }) => (
  <div className="c-subject-flex__child">{children}</div>
);

SubjectFlexChild.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SubjectSectionTitle = ({
  children,
  className = null,
}: {
  children: ReactNode;
  className?: string | null;
}) => (
  <SectionHeading large className={`c-subject-section-title ${className}`}>
    {children}
  </SectionHeading>
);

SubjectSectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SubjectSectionTitle.defaultProps = {
  className: null,
};
