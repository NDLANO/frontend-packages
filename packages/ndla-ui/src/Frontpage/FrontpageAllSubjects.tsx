import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import Tabs from '@ndla/tabs';
import SafeLink from '@ndla/safelink';
import { colors, fonts, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import { ToggleItem } from '../Filter';

const StyledWrapper = styled.nav`
  margin: 32px 0 0;
  .c-tabs--subjects {
    margin: 0;
  }
  .c-tabs__list--subjects {
    margin: 0;
  }
  .c-tabs__tab--subjects {
    ${mq.range({ until: breakpoints.tablet })} {
      margin: 0;
      font-size: 12px;
      padding-left: 8px;
      padding-right: 8px;
      :first-of-type {
        padding-left: 0;
      }
      :last-of-type {
        padding-right: 0;
      }
    }
  }
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

type subjectProps = {
  name: string;
  url?: string;
  path: string;
  id?: string;
};
type categoryProps = {
  type?: string;
  name?: string;
  visible?: boolean;
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
        <React.Fragment key={letter.letter}>
          {letter.items.map((subject: subjectProps, index: number) => (
            <React.Fragment key={subject.name}>
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
                      to={subject.url || subject.path}>
                      {subject.name}
                    </SafeLink>
                    <StyledSpacingElement />
                  </>
                )}
                {letter.items.length - 1 === index && <StyledLetterSpacing />}
              </StyledListItem>
            </React.Fragment>
          ))}
        </React.Fragment>
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

  categories.forEach((category: categoryProps) => {
    allSubjects.push(...category.subjects);
    category.visible &&
      data.push({
        title: category.name || t(`subjectCategories.${category.type}`),
        content: renderList(category.subjects, onNavigate, onToggleSubject, subjectViewType, selectedSubjects),
      });
  });

  data.unshift({
    title: t('frontpageMenu.allsubjects'),
    content: renderList(allSubjects, onNavigate, onToggleSubject, subjectViewType, selectedSubjects),
  });

  return (
    <StyledWrapper>
      <Tabs modifier="subjects" tabs={data} />
    </StyledWrapper>
  );
};

export default FrontpageAllSubjects;
