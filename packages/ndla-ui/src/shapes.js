import PropTypes from 'prop-types';
import * as contentTypes from './model/ContentType';

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
  ref: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  edition: PropTypes.string,
  publisher: PropTypes.string,
  url: PropTypes.string,
});

export const ContributorShape = PropTypes.shape({
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const ArticleShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  copyright: PropTypes.shape({
    authors: PropTypes.array,
    creators: PropTypes.arrayOf(ContributorShape),
  }).isRequired,
  updated: PropTypes.string.isRequired,
});

export const ResourceShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contentUri: PropTypes.string,
  primary: PropTypes.bool,
});

export const ContentTypeShape = PropTypes.oneOf([
  contentTypes.SUBJECT_MATERIAL,
  contentTypes.TASKS_AND_ACTIVITIES,
  contentTypes.ASSESSMENT_RESOURCES,
  contentTypes.SUBJECT,
  contentTypes.EXTERNAL_LEARNING_RESOURCES,
  contentTypes.SOURCE_MATERIAL,
  contentTypes.LEARNING_PATH,
  'beta',
]);

export const ContentTypeResultShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
});
