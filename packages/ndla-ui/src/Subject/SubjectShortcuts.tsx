/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Forward } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import { SubjectSectionTitle } from './Subject';
import Fade from '../Animation/Fade';
import { HeadingLevel } from '../types';

const SubjectShortcutsSection = styled.section`
  margin-bottom: ${spacing.large};
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: block;
  margin-right: 9px;
  margin-bottom: 9px;
  a {
    display: block;
    background: ${colors.brand.light};
    box-shadow: none;
    border-radius: 5px;
    ${fonts.sizes('18px', '23px')};
    font-weight: ${fonts.weight.semibold};
    color: ${colors.brand.dark};
    padding: 9px 20px;
    &:hover,
    &:active,
    &:focus {
      background-color: ${colors.brand.primary};
      color: ${colors.white};
    }
  }
`;

const StyledButton = styled.button`
  display: flex;
  background: none;
  border: 0;
  align-items: center;
  padding: 0;
  color: ${colors.brand};
  margin-top: ${spacing.normal};
  cursor: pointer;
  .c-icon {
    width: 18px;
    height: 18px;
    margin-right: ${spacing.xsmall};
  }
  span {
    ${fonts.sizes('14px', '18px')};
  }
`;

interface Props {
  links: {
    url: string;
    text: string;
  }[];
  headingLevel: HeadingLevel;
  messages: {
    heading: string;
    showMore: string;
    showLess: string;
  };
  defaultVisableCount: number;
}

interface State {
  visibleCount: number;
}

const defaultVisableCount = 6;

class SubjectShortcuts extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visibleCount: props.defaultVisableCount,
    };

    this.handleOnExpand = this.handleOnExpand.bind(this);
  }

  handleOnExpand(expanded: boolean) {
    const newVisibleCount = expanded ? this.props.links.length : this.props.defaultVisableCount;

    this.setState({
      visibleCount: newVisibleCount,
    });
  }

  render() {
    const { links, messages, defaultVisableCount, headingLevel } = this.props;
    const id = 'subject-shortcut';

    const showExpand = defaultVisableCount < links.length;
    let button = null;
    let filteredLinks = this.props.links;

    if (showExpand) {
      const isExpanded = this.state.visibleCount > defaultVisableCount;
      const buttonText = isExpanded ? messages.showLess : messages.showMore;

      button = (
        <StyledButton
          type="button"
          aria-expanded={isExpanded}
          aria-controls={id}
          onClick={() => this.handleOnExpand(!isExpanded)}>
          <Forward />
          <span>{buttonText}</span>
        </StyledButton>
      );

      filteredLinks = this.props.links.filter((link, index) => index < this.state.visibleCount);
    }
    return (
      <SubjectShortcutsSection>
        <SubjectSectionTitle headingLevel={headingLevel}>{messages.heading}</SubjectSectionTitle>
        <nav id={id}>
          <StyledList>
            {filteredLinks.map((link) => (
              <Fade key={link.url} show={true}>
                <StyledListItem>
                  <SafeLink to={link.url}>{link.text}</SafeLink>
                </StyledListItem>
              </Fade>
            ))}
          </StyledList>
        </nav>
        {button}
      </SubjectShortcutsSection>
    );
  }

  static defaultProps = {
    defaultVisableCount,
  };
}

export default SubjectShortcuts;
