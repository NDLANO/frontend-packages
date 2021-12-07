/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Can be removed when updating to jsx-a11y 6.x
/* eslint jsx-a11y/no-noninteractive-element-to-interactive-role: 1 */

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import debounce from 'lodash/debounce';

import { Home, Back, Additional, ChevronRight } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { ModalHeader } from '@ndla/modal';
import Button from '@ndla/button';
import SafeLink from '@ndla/safelink';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import SubtopicLinkList from './SubtopicLinkList';
import { TopicShape } from '../shapes';

import Logo from '../Logo';
import FrontpageAllSubjects from '../Frontpage/FrontpageAllSubjects';
import NavigationBox from '../Navigation/NavigationBox';
import { ProgrammeSubjects } from '../Programme';

const classes = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});

export const renderAdditionalIcon = (isAdditional, label) => {
  if (isAdditional && label) {
    return (
      <Tooltip tooltip={label} stooltipContainerClass="c-topic-menu__tooltipContainer">
        <Additional className="c-icon--20" />
      </Tooltip>
    );
  }
  if (isAdditional) {
    return <Additional className="c-icon--20 c-topic-menu__tooltipContainer" />;
  }
  return null;
};

const MENU_CURRENT_SUBJECT = 'subject';
const MENU_CURRENT_PROGRAMME = 'programme';
const MENU_PROGRAMMES = 'programmes';
const MENU_ALL_SUBJECTS = 'allSubjects';

export const TopicMenu = ({
  topics,
  toTopic,
  subjectTitle,
  toSubject,
  close: closeMenu,
  expandedTopicId,
  expandedSubtopicsId,
  resourceToLinkProps,
  hideSearch,
  defaultCount,
  searchFieldComponent,
  toFrontpage,
  locale,
  onNavigate,
  subjectCategories,
  programmes,
  currentProgramme,
  initialSelectedMenu,
}) => {
  const { t } = useTranslation();
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(() => initialSelectedMenu || MENU_CURRENT_SUBJECT);

  useEffect(() => {
    const setScreenSize = (initial = false) => {
      const isNarrow = (window.innerWidth || document.documentElement.clientWidth) < 768;

      if ((initial && isNarrow) || !initial) {
        setIsNarrowScreen(isNarrow);
      }
    };
    const setScreenSizeDebounced = debounce(() => setScreenSize(false), 50);
    setScreenSize(true);
    window.addEventListener('resize', setScreenSizeDebounced);
    return () => {
      setScreenSizeDebounced.cancel();
      window.removeEventListener('resize', setScreenSizeDebounced);
    };
  }, []);

  const handleClick = (event, topicId) => {
    onNavigate(topicId, null);
  };

  const handleSubtopicExpand = (subtopicId, index) => {
    onNavigate(expandedTopicId, subtopicId, index);
  };

  const handleOnGoBack = () => {
    onNavigate(expandedSubtopicsId.length ? expandedTopicId : null, null);
  };

  const handleBtnKeyPress = (event, topicId) => {
    if (event.charCode === 32 || event.charCode === 13) {
      // space or enter
      event.preventDefault();
      onNavigate(topicId, null);
    }
  };

  const expandedTopic = topics.find((topic) => topic.id === expandedTopicId);

  const currentlyExpandedSubTopics = [];
  if (expandedTopic) {
    let currentSubtopic;
    let foundMatch;
    expandedSubtopicsId.forEach((id, index) => {
      if (index === 0) {
        currentSubtopic = expandedTopic.subtopics.find((topic) => topic.id === id);
        foundMatch = currentSubtopic ? 0 : undefined;
      } else {
        currentSubtopic = currentSubtopic.subtopics.find((topic) => topic.id === id);
        foundMatch += currentSubtopic ? 1 : 0;
      }
      if (foundMatch === index) {
        currentlyExpandedSubTopics[index] = currentSubtopic;
      }
    });
  }

  const hasExpandedSubtopics = currentlyExpandedSubTopics.length > 0;
  const subTopicModifiers = ['sub-topic'];

  if (!hasExpandedSubtopics) {
    subTopicModifiers.push('no-border');
  }

  const disableMain = isNarrowScreen && expandedTopic;
  const disableSubTopic = disableMain && hasExpandedSubtopics;

  const sliderCounter = !expandedTopicId ? 0 : expandedSubtopicsId.length + 1;

  return (
    <nav>
      <ModalHeader modifier={['white', 'menu']}>
        <div {...classes('masthead-left')}>
          <button type="button" {...classes('close-button')} onClick={closeMenu}>
            <Cross />
            <span>{t('masthead.menu.close')}</span>
          </button>
        </div>
        <div {...classes('masthead-right')}>
          {!hideSearch && searchFieldComponent}
          <Logo to="/" label={t('logo.altText')} locale={locale} />
        </div>
      </ModalHeader>
      <div {...classes('content')}>
        <div {...classes('back', 'wide')}>
          <SafeLink {...classes('back-link')} to={toFrontpage()}>
            <Home {...classes('home-icon', '', 'c-icon--20')} />
            {t('masthead.menu.toFrontpage')}
          </SafeLink>
        </div>
        <div
          {...classes('back', {
            narrow: true,
          })}>
          <SafeLink {...classes('back-link')} to={toFrontpage()}>
            <Home {...classes('home-icon', '', 'c-icon--20')} />
            {t('masthead.menu.toFrontpage')}
          </SafeLink>
        </div>
        <div {...classes('subject')}>
          <div {...classes('subject__header')}>
            <div {...classes('subject__header__menu-filter')}>
              {subjectTitle && (
                <Button
                  onClick={() => setSelectedMenu(MENU_CURRENT_SUBJECT)}
                  lighter={selectedMenu !== MENU_CURRENT_SUBJECT}
                  size="small"
                  borderShape="rounded">
                  {subjectTitle}
                </Button>
              )}
              {currentProgramme && (
                <Button
                  onClick={() => setSelectedMenu(MENU_CURRENT_PROGRAMME)}
                  lighter={selectedMenu !== MENU_CURRENT_PROGRAMME}
                  size="small"
                  borderShape="rounded">
                  {currentProgramme.name}
                </Button>
              )}
              {programmes && (
                <Button
                  onClick={() => setSelectedMenu(MENU_PROGRAMMES)}
                  lighter={selectedMenu !== MENU_PROGRAMMES}
                  size="small"
                  borderShape="rounded">
                  {t('frontpageMenu.program')}
                </Button>
              )}
              {subjectCategories && (
                <Button
                  onClick={() => setSelectedMenu(MENU_ALL_SUBJECTS)}
                  lighter={selectedMenu !== MENU_ALL_SUBJECTS}
                  size="small"
                  borderShape="rounded">
                  {t('frontpageMenu.allsubjects')}
                </Button>
              )}
            </div>
          </div>
          {selectedMenu === MENU_CURRENT_SUBJECT && (
            <div {...classes('back-button-slide-wrapper')}>
              <button
                type="button"
                {...classes('back-button-slides', `slide-${sliderCounter}`)}
                onClick={handleOnGoBack}>
                <Back /> <span>{t('masthead.menu.back')}</span>
              </button>
            </div>
          )}
        </div>
        {selectedMenu === MENU_ALL_SUBJECTS && subjectCategories && (
          <div {...classes('all-subjects')}>
            <FrontpageAllSubjects categories={subjectCategories} onNavigate={closeMenu} />
          </div>
        )}
        {selectedMenu === MENU_CURRENT_PROGRAMME && currentProgramme && (
          <div {...classes('all-subjects')}>
            <ProgrammeSubjects
              grades={currentProgramme.grades}
              preSelectedGradeIndex={currentProgramme.selectedGradeIndex ? currentProgramme.selectedGradeIndex : 0}
              onNavigate={closeMenu}
            />
          </div>
        )}
        {selectedMenu === MENU_PROGRAMMES && programmes && (
          <div {...classes('all-subjects')}>
            <NavigationBox colorMode="light" items={programmes} listDirection="vertical" onClick={closeMenu} />
          </div>
        )}
        {selectedMenu === MENU_CURRENT_SUBJECT && (
          <div {...classes('subject-navigation', `slide-${sliderCounter}`)}>
            {!disableMain && (
              <>
                <div {...classes('section', 'main')}>
                  <SafeLink onClick={closeMenu} to={toSubject()} className={classes('link', 'big').className}>
                    <span {...classes('link-wrapper')}>
                      <span {...classes('link-label')}>{t('masthead.menu.goTo')}:</span>
                      <span {...classes('link-target')}>
                        <span {...classes('link-target-name')}>{t('masthead.menu.subjectPage')}</span>
                        <ChevronRight className="c-icon--22" />
                      </span>
                    </span>
                  </SafeLink>
                  <ul {...classes('list')}>
                    {topics.map((topic) => {
                      const active = topic.id === expandedTopicId ? 'active' : null;

                      return (
                        <li {...classes('topic-item', active)} key={topic.id}>
                          <button
                            type="button"
                            {...classes('link')}
                            onClick={(event) => handleClick(event, topic.id)}
                            onKeyPress={(event) => handleBtnKeyPress(event, topic.id)}>
                            <span>
                              {topic.name}
                              {renderAdditionalIcon(topic.additional, t('resource.additionalTooltip'))}
                            </span>
                            <ChevronRight />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
            {expandedTopic && !disableSubTopic && (
              <SubtopicLinkList
                classes={classes}
                className={classes('section', subTopicModifiers).className}
                closeMenu={closeMenu}
                topic={expandedTopic}
                backLabel={
                  !hasExpandedSubtopics
                    ? subjectTitle
                    : currentlyExpandedSubTopics[currentlyExpandedSubTopics.length - 1].name
                }
                goToTitle={t('masthead.menu.goTo')}
                toTopic={toTopic}
                expandedSubtopicId={currentlyExpandedSubTopics[0] && currentlyExpandedSubTopics[0].id}
                onSubtopicExpand={(id) => {
                  handleSubtopicExpand(id, 0);
                }}
                onGoBack={handleOnGoBack}
                resourceToLinkProps={resourceToLinkProps}
                lastOpen={!hasExpandedSubtopics}
              />
            )}

            {currentlyExpandedSubTopics.map((subTopic, index) => {
              const { metadata } = subTopic;
              const isUngrouped = metadata?.customFields['topic-resources'] === 'ungrouped' || false;

              return (
                <SubtopicLinkList
                  isUngrouped={isUngrouped}
                  key={subTopic.id}
                  classes={classes}
                  className={classes('section', ['sub-topic', 'no-border']).className}
                  closeMenu={closeMenu}
                  topic={subTopic}
                  backLabel={
                    index === 0
                      ? topics.find((topic) => topic.id === expandedTopicId).name
                      : currentlyExpandedSubTopics[index - 1].name
                  }
                  toTopic={toTopic}
                  expandedSubtopicId={
                    currentlyExpandedSubTopics[index + 1] ? currentlyExpandedSubTopics[index + 1].id : 'no way'
                  }
                  onSubtopicExpand={(id) => {
                    handleSubtopicExpand(id, index + 1);
                  }}
                  onGoBack={handleOnGoBack}
                  resourceToLinkProps={resourceToLinkProps}
                  lastOpen={sliderCounter === index + 2}
                  defaultCount={defaultCount}
                />
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

TopicMenu.propTypes = {
  topics: PropTypes.arrayOf(TopicShape).isRequired,
  toFrontpage: PropTypes.func.isRequired,
  toTopic: PropTypes.func,
  toSubject: PropTypes.func,
  close: PropTypes.func,
  defaultCount: PropTypes.number,
  subjectTitle: PropTypes.string,
  resourceToLinkProps: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  expandedTopicId: PropTypes.string,
  expandedSubtopicsId: PropTypes.arrayOf(PropTypes.string).isRequired,
  hideSearch: PropTypes.bool,
  searchFieldComponent: PropTypes.node,
  locale: PropTypes.string,
  subjectCategories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subjects: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
  programmes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
  currentProgramme: PropTypes.shape({
    name: PropTypes.string.isRequired,
    grades: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            subjects: PropTypes.arrayOf(
              PropTypes.shape({
                label: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
              }),
            ),
          }),
        ),
      }),
    ).isRequired,
    selectedGradeIndex: PropTypes.number,
  }),
  initialSelectedMenu: PropTypes.oneOf([
    MENU_CURRENT_SUBJECT,
    MENU_CURRENT_PROGRAMME,
    MENU_PROGRAMMES,
    MENU_ALL_SUBJECTS,
  ]),
};

TopicMenu.defaultProps = {
  defaultCount: 12,
};

export default TopicMenu;
