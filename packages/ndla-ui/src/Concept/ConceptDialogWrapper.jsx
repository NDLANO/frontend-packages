import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import { ForwardArrow } from 'ndla-icons/action';
import Modal from 'ndla-modal';
import LicenseByline from '../LicenseByline';

const classes = new BEMHelper({
  name: 'concept',
  prefix: 'c-',
});
const sourceClasses = new BEMHelper({
  name: 'source-list',
  prefix: 'c-',
});

const ConceptDialogWrapper = ({
  title,
  authors,
  source,
  content,
  license,
  modifiers,
  closeCallback,
  subtitle,
  linkTo,
  tags,
  licenseBox,
}) => {
  const licenseRights = getLicenseByAbbreviation(license).rights;
  return (
    <Modal controllable isOpen animation="subtle" onClose={closeCallback}>
      {onCloseModal => (
        <div {...classes('popup', modifiers)}>
          <button
            type="button"
            {...classes('close', 'u-close')}
            onClick={onCloseModal}>
            Lukk...
          </button>
          <h3 {...classes('title')}>
            {title}{' '}
            {subtitle ? <span {...classes('subtitle')}>{subtitle}</span> : null}
          </h3>
          <div {...classes('content')}>{content}</div>
          {tags || linkTo ? (
            <div {...classes('popup-extra')}>
              {tags ? (
                <div {...classes('popup-tags')}>
                  Brukes i:
                  {tags.map(tag => (
                    <span {...classes('popup-tag')} key={`key-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              {linkTo ? (
                <div {...classes('popup-link')}>
                  <a {...classes('linkTo')} href={linkTo.href}>
                    {linkTo.label} <ForwardArrow />
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}
          <div {...sourceClasses()}>
            {licenseRights.length > 0 && (
              <LicenseByline
                className="c-source-list__item"
                licenseRights={licenseRights}
              />
            )}
            {authors.map(author => (
              <span {...sourceClasses('item')} key={author}>
                {author}
              </span>
            ))}
            <span {...sourceClasses('item')} key={source}>
              {source}
            </span>
            <span {...classes('popup__licensebox')}>{licenseBox}</span>
          </div>
        </div>
      )}
    </Modal>
  );
};

ConceptDialogWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  license: PropTypes.string,
  children: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  closeCallback: PropTypes.func,
  subtitle: PropTypes.string,
  linkTo: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  licenseBox: PropTypes.node,
};

ConceptDialogWrapper.defaultProps = {
  authors: [],
  license: '',
  children: '',
  modifiers: [],
};

export default ConceptDialogWrapper;
