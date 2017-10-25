import PropTypes from 'prop-types';

export const LicenseRightShape = PropTypes.shape({
  short: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userFriendlyTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export const LicenseShape = PropTypes.shape({
  short: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userFriendlyTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rights: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const SubjectShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const TopicShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtopics: PropTypes.array,
});

export const FootNoteShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  edition: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
});

export const ArticleShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  copyright: PropTypes.shape({
    authors: PropTypes.array.isRequired,
  }).isRequired,
  updated: PropTypes.string.isRequired,
});

export const ResourceShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contentUri: PropTypes.string,
  primary: PropTypes.bool,
});
