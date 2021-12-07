import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Download } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';

const classes = BEMHelper('c-file-list');

const renderFormat = (format, title, isPrimary, id, isDeadLink) => {
  const titleWithFormat = `${title} (${format.fileType.toUpperCase()})`;

  const formatId = `${id}_${format.fileType}`;

  if (isDeadLink) {
    return (
      <span key={format.url}>
        <Download />
        <span>{isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}</span>
        <span {...classes('tooltip')} aria-hidden role="tooltip" id={formatId}>
          <span {...classes('tooltip-text')}>{format.tooltip}</span>
        </span>
      </span>
    );
  }

  return (
    <SafeLink
      {...classes('link')}
      key={format.url}
      to={format.url}
      target="_blank"
      aria-label={titleWithFormat}
      aria-describedby={formatId}>
      <Download />
      <span {...classes('link-text')}>
        <span>{isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}</span>
      </span>
      <span {...classes('tooltip')} aria-hidden role="tooltip" id={formatId}>
        <span {...classes('tooltip-text')}>{format.tooltip}</span>
      </span>
    </SafeLink>
  );
};

const File = ({ file, id }) => {
  const formatLinks = file.formats.map((format, index) =>
    renderFormat(format, file.title, index === 0, id, !file.fileExists),
  );

  return (
    <li {...classes('item')} key={file.title}>
      {formatLinks}
    </li>
  );
};

File.propTypes = {
  id: PropTypes.string.isRequired,
  file: PropTypes.shape({
    fileExists: PropTypes.bool,
    title: PropTypes.string.isRequired,
    formats: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        fileType: PropTypes.string.isRequired,
        tooltip: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
};

export default File;
