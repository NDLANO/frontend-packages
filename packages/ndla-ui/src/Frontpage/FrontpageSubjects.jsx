import React, { Component, Fragment } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { injectT } from '@ndla/i18n';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import Modal, { ModalBody, ModalHeader, ModalCloseButton } from '@ndla/modal';
import Button from '@ndla/button';
import { spacing } from '@ndla/core';
import { css } from 'emotion';

import { OneColumn } from '../Layout';
import SafeLink from '../common/SafeLink';

const wrapperClasses = BEMHelper('c-frontpage-subjects-wrapper');
const sectionClasses = BEMHelper('c-frontpage-subjects-section');

export const FrontpageSubjectsSection = injectT(
  ({ name, subjects, linkToAbout, expanded, onExpand, id, t }) => {
    const getItems = (disable = false) =>
      subjects.map(subject => (
        <li key={subject.url} {...sectionClasses('item')}>
          <SafeLink
            tabIndex={disable ? '-1' : null}
            to={subject.url}
            {...sectionClasses('link')}
            aria-label={`${subject.text} ${subject.yearInfo}`}>
            <span {...sectionClasses('text')}>{subject.text}</span>
            {subject.yearInfo && (
              <span {...sectionClasses('year-info')}>{subject.yearInfo}</span>
            )}
          </SafeLink>
          {subject.beta && (
            <Modal
              narrow
              containerClass={sectionClasses('beta-label-container').className}
              activateButton={
                <Button
                  lighter
                  css={css`
                    padding: ${spacing.xsmall};
                    line-height: 1em;
                  `}
                  aria-label={t('subjectPage.subjectIsBeta.dialogHeader', {
                    title: subject.text,
                  })}>
                  {t('subjectPage.subjectIsBeta.iconLabel')}
                </Button>
              }>
              {onClose => (
                <Fragment>
                  <ModalHeader>
                    <ModalCloseButton
                      onClick={onClose}
                      title={t('modal.closeModal')}
                    />
                  </ModalHeader>
                  <ModalBody>
                    <h1>
                      {t('subjectPage.subjectIsBeta.dialogHeader', {
                        title: subject.text,
                      })}
                    </h1>
                    <hr />
                    <p>
                      {t('subjectPage.subjectIsBeta.dialogText')} {linkToAbout}
                    </p>
                  </ModalBody>
                </Fragment>
              )}
            </Modal>
          )}
        </li>
      ));

    return (
      <nav {...sectionClasses('', { expanded })}>
        <h1 {...sectionClasses('heading')}>
          <button
            type="button"
            onClick={() => {
              onExpand(!expanded);
            }}
            {...sectionClasses('expand-button')}
            aria-expanded={expanded}
            aria-controls={id}>
            <span {...sectionClasses('expand-button-text')}>{name}</span>
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </button>
          <span {...sectionClasses('heading-text')}>{name}</span>
        </h1>
        <ul {...sectionClasses('subjects', 'wide')}>{getItems()}</ul>
        <ul
          {...sectionClasses('subjects', 'narrow')}
          id={id}
          aria-hidden={!expanded}>
          {getItems(!expanded)}
        </ul>
      </nav>
    );
  },
);

FrontpageSubjectsSection.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  linkToAbout: PropTypes.node.isRequired,
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      yearInfo: PropTypes.string,
    }),
  ),
};

export class FrontpageSubjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
    };
  }

  render() {
    const { categories, linkToAbout, t } = this.props;

    return (
      <OneColumn wide noPadding>
        <div {...wrapperClasses()}>
          {categories.map(category => (
            <FrontpageSubjectsSection
              key={category.name}
              expanded={this.state.expanded === category.name}
              onExpand={expanded => {
                this.setState({
                  expanded: expanded ? category.name : undefined,
                });
              }}
              id={category.name}
              name={t(`welcomePage.category.${category.name}`)}
              subjects={category.subjects}
              linkToAbout={linkToAbout}
            />
          ))}
        </div>
      </OneColumn>
    );
  }
}

FrontpageSubjects.propTypes = {
  t: PropTypes.func.isRequired,
  expanded: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.isRequired,
      subjects: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          yearInfo: PropTypes.string,
          beta: PropTypes.bool,
        }),
      ),
    }),
  ),
  linkToAbout: PropTypes.node.isRequired,
};

FrontpageSubjects.defaultProps = {
  expanded: undefined,
};

export default injectT(FrontpageSubjects);
