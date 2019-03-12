import PropTypes from 'prop-types';

export const movieShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  metaDescription: PropTypes.shape({
    metaDescription: PropTypes.string.isRequired,
  }),
  metaImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const topicShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});
