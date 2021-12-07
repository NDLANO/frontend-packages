import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { breakpoints } from '@ndla/util';

import OneColumn from '../Layout/OneColumn';

const classes = BEMHelper('c-subject-header');

type Types = 'mobile' | 'tablet' | 'desktop' | 'wide';

interface Props {
  images: {
    url: string;
    types: Types[];
  }[];
  heading: string;
}

const SubjectHeader = ({ images, heading }: Props) => (
  <header {...classes()}>
    {images &&
      images.map((image) =>
        image.types.map((type) => (
          <div
            key={`${image.url}${type}`}
            {...classes('background', type)}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        )),
      )}
    <OneColumn noPadding>
      <h1 {...classes('heading')}>{heading}</h1>
    </OneColumn>
  </header>
);

SubjectHeader.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(breakpoints))).isRequired,
    }),
  ),
  heading: PropTypes.string.isRequired,
};

SubjectHeader.defaultProps = {
  images: null,
};

export default SubjectHeader;
