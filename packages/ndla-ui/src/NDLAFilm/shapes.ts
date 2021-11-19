import PropTypes from 'prop-types';

export interface IMovie {
  id: string;
  metaDescription: string;
  title: string;
  metaImage: {
    url: string;
    alt: string;
  };
  path: string;
}

export const topicShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});
