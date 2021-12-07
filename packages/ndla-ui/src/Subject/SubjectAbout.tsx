import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SectionHeading from '../SectionHeading';

const classes = BEMHelper('c-subject-about');

interface Props {
  fixedWidth?: boolean;
  wide?: boolean;
  media: ReactNode;
  heading: string;
  description: string;
}

const SubjectAbout = ({ fixedWidth = false, media, heading, description, wide = false }: Props) => (
  <section {...classes('', { fixedWidth, wide })}>
    <SectionHeading large className={classes('top-heading').className}>
      {heading}
    </SectionHeading>
    <div {...classes('media-wrapper', { wide })}>{media}</div>
    <div {...classes('content')}>
      <h1 {...classes('main-heading')}>{heading}</h1>
      <p {...classes('description')}>{description}</p>
    </div>
  </section>
);

SubjectAbout.propTypes = {
  fixedWidth: PropTypes.bool,
  wide: PropTypes.bool,
  media: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

SubjectAbout.defaultProps = {
  fixedWidth: false,
  wide: false,
};

export default SubjectAbout;
