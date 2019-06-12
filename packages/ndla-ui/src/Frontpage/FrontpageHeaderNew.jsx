import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import PropTypes from 'prop-types';
import { SearchField } from '../Search';
import Logo from '../Logo';

const StyledHeader = styled('div')`
  max-width: 1150px;
  margin: 0 auto;
  padding: ${spacing.normal};
  position: relative;
  min-height: 200px;
`;

const StyledHeaderWrapper = styled('header')`
  background: ${colors.brand.lighter};
  &::after {
    content: '';
    display: block;
    padding-bottom: ${spacing.large};
    background: ${colors.brand.greyLightest};
  }
`;

const StyledSearchFieldWrapper = styled('section')`
  background: #fde74c;
  padding: ${spacing.normal};
  position: absolute;
  left: ${spacing.normal};
  right: ${spacing.normal};
  bottom: 0;
  transform: translateY(50%);
`;

const FrontpageHeader = ({
  searchFieldValue,
  onSearchInputFocus,
  onSearchFieldChange,
  searchFieldPlaceholder,
  onSearch,
  infoText,
}) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <Logo label="Logo" />
        <StyledSearchFieldWrapper>
          <SearchField
            placeholder="Søk i fagstoff, oppgaver og aktiviteter eller læringsstier"
            value={searchFieldValue}
            onChange={onSearchFieldChange}
            messages={{
              searchFieldTitle: 'Søk',
            }}
            onSearch={onSearch}
            resourceToLinkProps={() => {}}
          />
          {/* && (
            <SearchField
              ignoreContentTypeBadge
              infoText={infoText}
              value={searchFieldValue}
              onChange={onSearchFieldChange}
              placeholder={searchFieldPlaceholder}
              messages={messages}
              onSearch={onSearch}
              searchResult={searchResult}
              allResultUrl={allResultUrl}
              resourceToLinkProps={() => {}}
              singleColumn
              hideSleeveHeader
            />
          ) */}
        </StyledSearchFieldWrapper>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

FrontpageHeader.propTypes = {
  searchFieldValue: PropTypes.string.isRequired,
  onSearchInputFocus: PropTypes.func.isRequired,
  infoText: PropTypes.node,
  onSearchFieldChange: PropTypes.func.isRequired,
  searchFieldPlaceholder: PropTypes.func.isRequired,
};

export default FrontpageHeader;
