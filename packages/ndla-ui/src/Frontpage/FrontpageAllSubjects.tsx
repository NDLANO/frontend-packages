import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Tabs from '@ndla/tabs';
import SafeLink from '@ndla/safelink';
import { colors, fonts, mq, breakpoints } from '@ndla/core';
import ContentLoader from '../ContentLoader';
import { MessageBox } from '../Messages';
import { ToggleItem } from '../Filter';

const StyledWrapper = styled.nav`
  margin: 32px 0 0;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 40px 0 0;
  padding: 0;
  ${mq.range({ from: breakpoints.tablet })} {
    column-count: 2;
    column-gap: 20px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    column-count: 3;
    column-gap: 20px;
  }
`;
const StyledListItem = styled.li`
  margin-bottom: 0;
  break-inside: avoid;
`;

const StyledLetterItem = styled.span<{ subjectViewType?: string }>`
  display: block;
  ${fonts.sizes(30, 1)};
  font-weight: ${fonts.weight.bold};
  color: ${colors.brand.primary};
  margin-bottom: 8px;
  ${(props) => props.subjectViewType === 'checkbox' && `margin-left:37px;`}
`;

const StyledSpacingElement = styled.span`
  display: block;
  width: 100%;
  height: 10px;
`;

const StyledLetterSpacing = styled.span`
  display: block;
  height: 16px;
`;

const MessageBoxWrapper = styled.div`
  padding-top: 20px;
`;

type subjectProps = {
  name: string;
  path?: string;
  id?: string;
};
type categoryProps = {
  type?: string;
  visible?: boolean;
  message?: string;
  subjects: subjectProps[];
};

export type subjectsProps = {
  categories: categoryProps[];
  subjectViewType?: 'link' | 'checkbox';
  onToggleSubject?: (id: string) => void;
  onNavigate?: () => void;
  selectedSubjects?: string[];
};

type letterCategories = {
  letter: string;
  items: subjectProps[];
};

const sortAlphabetically = (subjects: subjectProps[], locale: string = 'nb') => {
  const subjectsSorted = subjects.sort((a, b) => a.name.localeCompare(b.name, locale));
  const subjectsLetterCategories: letterCategories[] = [];
  let previousLetter = '';
  let letterItems: subjectProps[] = [];
  subjectsSorted.forEach((subject: subjectProps) => {
    const currentLetter = subject.name.substr(0, 1);
    const isNewLetter = currentLetter.localeCompare(previousLetter, locale) === 1;
    if (isNewLetter && letterItems.length) {
      subjectsLetterCategories.push({
        letter: previousLetter,
        items: letterItems,
      });
      letterItems = [];
    }
    previousLetter = currentLetter;
    letterItems.push(subject);
  });
  // Add last letter
  if (previousLetter && letterItems.length) {
    subjectsLetterCategories.push({
      letter: previousLetter,
      items: letterItems,
    });
  }
  return subjectsLetterCategories;
};

const renderList = (
  subjects: subjectProps[],
  onNavigate?: () => void,
  onToggleSubject?: subjectsProps['onToggleSubject'],
  subjectViewType?: subjectsProps['subjectViewType'],
  selectedSubjects: subjectsProps['selectedSubjects'] = [],
) => (
  <StyledList>
    {sortAlphabetically(subjects).map((letter: any) => {
      return (
        <Fragment key={letter.letter}>
          {letter.items.map((subject: subjectProps, index: number) => (
            <Fragment key={subject.name}>
              <StyledListItem>
                {index === 0 && <StyledLetterItem subjectViewType={subjectViewType}>{letter.letter}</StyledLetterItem>}
                {subjectViewType === 'checkbox' && subject.id ? (
                  <ToggleItem
                    id={subject.id}
                    value={subject.id}
                    checked={selectedSubjects.includes(subject.id)}
                    label={subject.name}
                    component="div"
                    onChange={() => {
                      if (onToggleSubject && subject.id) {
                        onToggleSubject(subject.id);
                      }
                    }}
                  />
                ) : (
                  <>
                    <SafeLink
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate();
                        }
                      }}
                      to={subject.path || ''}
                    >
                      {subject.name}
                    </SafeLink>
                    <StyledSpacingElement />
                  </>
                )}
                {letter.items.length - 1 === index && <StyledLetterSpacing />}
              </StyledListItem>
            </Fragment>
          ))}
        </Fragment>
      );
    })}
  </StyledList>
);

const FrontpageAllSubjects = ({
  categories,
  onNavigate,
  onToggleSubject,
  subjectViewType,
  selectedSubjects,
}: subjectsProps) => {
  const allSubjects: subjectProps[] = [];
  const data: any = [];
  const { t } = useTranslation();

  if (categories.flatMap((c) => c.subjects).length === 0) {
    return (
      <StyledWrapper>
        <ContentLoader width={880} height={270}>
          <rect x="0" y="10" rx="3" ry="3" width="90" height="35" key="rect-1-1" />
          <rect x="110" y="10" rx="3" ry="3" width="90" height="35" key="rect-1-2" />
          <rect x="220" y="10" rx="3" ry="3" width="90" height="35" key="rect-1-3" />
          <rect x="330" y="10" rx="3" ry="3" width="90" height="35" key="rect-1-4" />

          <rect x="0" y="70" rx="3" ry="3" width="280" height="200" key="rect-2-1" />
          <rect x="300" y="70" rx="3" ry="3" width="280" height="200" key="rect-2-2" />
          <rect x="600" y="70" rx="3" ry="3" width="280" height="200" key="rect-2-3" />
        </ContentLoader>
      </StyledWrapper>
    );
  }

  categories.forEach((category: categoryProps) => {
    allSubjects.push(...category.subjects);
    category.visible &&
      data.push({
        title: t(`subjectCategories.${category.type}`),
        id: category.type,
        content: (
          <>
            {category.message && (
              <MessageBoxWrapper>
                <MessageBox>{category.message}</MessageBox>
              </MessageBoxWrapper>
            )}
            {renderList(category.subjects, onNavigate, onToggleSubject, subjectViewType, selectedSubjects)}
          </>
        ),
      });
  });

  data.push({
    title: t('frontpageMenu.allsubjects'),
    id: 'allsubjects',
    content: renderList(allSubjects, onNavigate, onToggleSubject, subjectViewType, selectedSubjects),
  });

  return (
    <StyledWrapper>
      <Tabs tabs={data} />
    </StyledWrapper>
  );
};

export default FrontpageAllSubjects;
